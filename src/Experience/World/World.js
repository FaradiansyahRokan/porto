import * as THREE from 'three';
import Experience from '../Experience.js';
import Node from './Node.js';
import Background from './Background.js';
import contentData from '../../data/contentData.js';
import certificationData from '../../data/certifications.js'; 
// import Debris from './Debris.js'; <-- SUDAH DIHAPUS
// import NeuralNetwork from './NeuralNetwork.js';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.camera = this.experience.camera; 
        
        this.nodes = [];
        this.traffic = []; 
        
        this.tempVector = new THREE.Vector3(); 
        
        this.nodeGroup = new THREE.Group();
        this.scene.add(this.nodeGroup);

        this.setupLights();
        this.setupBackground();
        // this.setupDebris(); <-- SUDAH DIHAPUS
        this.setupNodes();
        // this.setupNeuralNetwork();
        this.setupConnections();

        this.isPaused = false;
        
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth) - 0.5;
            this.targetMouse.y = (e.clientY / window.innerHeight) - 0.5;
        });
    }

    // setupNeuralNetwork() {
    //     this.neuralNetwork = new NeuralNetwork();
    // }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 10, 7);
        this.scene.add(directionalLight);
        
        const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
        pointLight.position.set(0, 0, 10);
        this.scene.add(pointLight);
    }

    pauseRotation() { this.isPaused = true; }
    resumeRotation() { this.isPaused = false; }

    setupBackground() { this.background = new Background(); }
    
    // METHOD setupDebris SUDAH DIHAPUS

    setupNodes() {
        const certNodeData = {
            type: 'certification',
            title: 'Sertifikasi',
            kicker: 'Professional',
            desc: 'Kumpulan lisensi dan sertifikasi profesional yang telah saya raih.',
            image: 'https://placehold.co/800x400/orange/white?text=Certifications',
            certList: certificationData 
        };
        const aboutData = contentData.find(d => d.type === 'about');
        const projects = contentData.filter(d => d.type !== 'about');
        const allNodesData = [aboutData, certNodeData, ...projects];

        allNodesData.forEach((data, i) => {
            const phi = Math.acos(-1 + (2 * i) / allNodesData.length);
            const theta = Math.sqrt(allNodesData.length * Math.PI) * phi;
            const radius = 40;
            const position = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
            
            const node = new Node(data, position);
            node.originalPos = position.clone(); 
            
            this.nodes.push(node);
            this.nodeGroup.add(node.group);
        });
    }

    setupConnections() {
        // STYLE KONEKSI: NEURAL NETWORK (HIGH TECH)
        // Garis tipis banget (Axon)
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0xffffff, 
            transparent: true, 
            opacity: 0.08 // Sangat samar
        });
 
        // Partikel Data (Impuls) - Glowing White
        const atomGeometry = new THREE.SphereGeometry(0.1, 8, 8); 
        const atomMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        this.nodes.forEach((node, index) => {
            // Sambungkan ke 3 node terdekat (Cluster)
            const distances = this.nodes
                .map((otherNode, otherIndex) => ({
                    distance: node.group.position.distanceTo(otherNode.group.position),
                    node: otherNode, index: otherIndex
                }))
                .filter(item => item.index !== index)
                .sort((a, b) => a.distance - b.distance)
                .slice(0, 3); 

            distances.forEach(({ node: targetNode }) => {
                const startPos = node.group.position;
                const endPos = targetNode.group.position;
                
                // Kurva Organik (Neural)
                const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
                midPoint.add(new THREE.Vector3((Math.random()-0.5)*5, (Math.random()-0.5)*5, (Math.random()-0.5)*5));
                const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
                
                // Buat Garis
                const points = curve.getPoints(40);
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                this.nodeGroup.add(new THREE.Line(geometry, lineMaterial));

                // Buat Partikel Data (Traffic)
                // Random 1-3 partikel per jalur biar sibuk kayak otak
                const particleCount = Math.floor(Math.random() * 2) + 1; 
                for(let k = 0; k < particleCount; k++) {
                    const atom = new THREE.Mesh(atomGeometry, atomMaterial);
                    this.nodeGroup.add(atom);
                    this.traffic.push({
                        mesh: atom, 
                        curve: curve, 
                        speed: 0.005 + Math.random() * 0.01, // Kecepatan acak
                        progress: Math.random() 
                    });
                }
            });
        });
    }

    update() {
        if(this.background) this.background.update();
        // if(this.debris) this.debris.update(); <-- SUDAH DIHAPUS
        this.nodes.forEach(node => node.update());

        // if(this.neuralNetwork) this.neuralNetwork.update();
        const isHovering = this.experience.raycaster && this.experience.raycaster.currentIntersect;

        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        if (!this.isPaused) {
            if (!isHovering) {
                // Rotasi Neural Network pelan
                this.nodeGroup.rotation.y += 0.0003; 
            }
        }

        // Animasi Traffic (Impuls Syaraf)
        this.traffic.forEach(item => {
            item.progress += item.speed;
            if(item.progress > 1) item.progress = 0;
            
            const positionOnLine = item.curve.getPoint(item.progress);
            item.mesh.position.copy(positionOnLine);
            
            // Denyut (Pulse)
            const scale = 1 + Math.sin(this.experience.time.elapsed * 10 + item.progress * 10) * 0.5;
            item.mesh.scale.set(scale, scale, scale);
        });
    }
}