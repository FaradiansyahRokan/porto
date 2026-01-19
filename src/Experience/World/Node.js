import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import Experience from '../Experience.js';
import ScrambleText from '../Utils/ScrambleText.js';

export default class Node {
    constructor(data, position) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.data = data;
        
        this.isHovered = false;
        
        // Random float offset biar gak gerak barengan
        this.floatOffset = Math.random() * Math.PI * 2; 
        this.floatSpeed = 0.5 + Math.random() * 0.5;

        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.userData = data; 
        this.group.userData.isNode = true;
        this.group.userData.nodeInstance = this; 

        this.setMeshes(); // Kita bagi jadi Core, Shell, dan Ring
        this.setLabel();

        this.scene.add(this.group);
    }

    setMeshes() {
        // --- 1. SETUP PALET WARNA ---
        let themeColor = new THREE.Color(0xffffff); // Default: PROJECT (Putih Bersinar)
        
        // Custom Warna Kategori
        if(this.data.type === 'about') {
            themeColor.set(0x00ffcc); // About = Neon Mint/Cyan Segar
        }
        if(this.data.type === 'certification') {
            themeColor.set(0xffaa00); // Certification = Emas Mewah
        }

        // --- A. THE CORE (INTI) ---
        this.coreGeometry = new THREE.SphereGeometry(1.0, 32, 32);
        this.coreMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x111111,       // Dasar gelap
            
            // Emissive ikut warna tema, tapi redup. 
            // Jadi kalau emas, intinya agak 'bara' emas dari dalam.
            emissive: themeColor,    
            emissiveIntensity: 0.2, 
            
            roughness: 0.3,
            metalness: 0.8,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });
        this.coreMesh = new THREE.Mesh(this.coreGeometry, this.coreMaterial);
        this.group.add(this.coreMesh);

        // --- B. THE SHELL (ATMOSFER GLOW) ---
        this.shellMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: themeColor }, // Warna Glow ikut Tema
                uHover: { value: 0 },
                uViewVector: { value: new THREE.Vector3() }
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vViewPosition;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vViewPosition = -mvPosition.xyz;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                uniform float uHover;
                varying vec3 vNormal;
                varying vec3 vViewPosition;

                void main() {
                    vec3 viewDir = normalize(vViewPosition);
                    float fresnel = dot(viewDir, vNormal);
                    fresnel = 1.0 - fresnel; 
                    fresnel = pow(fresnel, 2.0); 

                    vec3 finalColor = uColor; 
                    
                    // Transparansi Glow
                    float alpha = (fresnel * 1.2) + 0.1;
                    alpha += uHover * 0.8;

                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.FrontSide
        });
        
        this.shellMesh = new THREE.Mesh(new THREE.SphereGeometry(1.4, 32, 32), this.shellMaterial);
        this.group.add(this.shellMesh);

        // --- C. THE RING (CINCIN) ---
        this.ringGeometry = new THREE.TorusGeometry(1.8, 0.015, 16, 100);
        this.ringMaterial = new THREE.MeshBasicMaterial({ 
            color: themeColor, // Warna cincin ikut Tema
            transparent: true,
            opacity: 0.5 
        });
        this.ringMesh = new THREE.Mesh(this.ringGeometry, this.ringMaterial);
        
        this.ringMesh.rotation.x = Math.random() * Math.PI;
        this.ringMesh.rotation.y = Math.random() * Math.PI;
        
        this.group.add(this.ringMesh);
    }

    setLabel() {
        const div = document.createElement('div');
        div.className = 'project-label';
        div.textContent = this.data.title;
        div.style.opacity = '0'; 
        
        this.scramble = new ScrambleText(div);
        
        this.label = new CSS2DObject(div);
        this.label.position.set(0, 3.5, 0); 
        this.group.add(this.label);
    }

    update() {
        const time = this.experience.time.elapsed;
        
        // Update Shader Time
        if(this.shellMaterial) {
            this.shellMaterial.uniforms.uTime.value = time;
        }

        // LOGIC FLOATING (Naik Turun)
        // Default: Gerak naik turun
        let floatY = Math.sin(time * this.floatSpeed + this.floatOffset) * 0.2;
        
        // JIKA HOVER: Paksa floatY jadi 0 (Diam di tengah)
        // Kita pakai lerp manual dikit biar gak "tek" patah banget berhentinya, tapi cepet
        if (this.isHovered) {
             floatY = 0; 
        }
        
        // Terapkan posisi
        // Kita lerp posisi Y biar transisi dari gerak -> diam itu mulus
        this.coreMesh.position.y += (floatY - this.coreMesh.position.y) * 0.1;
        this.shellMesh.position.y = this.coreMesh.position.y;
        this.ringMesh.position.y = this.coreMesh.position.y;
        
        // Ring tetap muter pelan gak masalah, karena gak ngaruh posisi klik
        this.ringMesh.rotation.z += 0.01;
        this.ringMesh.rotation.x += 0.005;

        this.label.position.y = 3.5 + this.coreMesh.position.y; 
    }

    onMouseEnter() {
        if(this.isHovered) return;
        this.isHovered = true;
        if(this.experience.audio) this.experience.audio.play('hover');

        // --- TENTUKAN WARNA AMBIANCE BACKGROUND ---
        let moodColor = '#ffffff'; // Default Project: Putih Silver
        
        if(this.data.type === 'about') moodColor = '#00ffcc'; // Background jadi kehijauan
        if(this.data.type === 'certification') moodColor = '#ffaa00'; // Background jadi keemasan
        
        // Kirim warna ke Background & Debris
        if(this.experience.world.background) this.experience.world.background.animateColor(moodColor);
        if(this.experience.world.debris) this.experience.world.debris.animateColor(moodColor);

        // UI Updates
        this.label.element.style.opacity = '1';
        this.scramble.hover();

        // Animasi Fisik Node
        gsap.to(this.coreMesh.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.5, ease: "back.out(1.7)" });
        gsap.to(this.shellMaterial.uniforms.uHover, { value: 1, duration: 0.3 });
        gsap.to(this.shellMesh.scale, { x: 1.4, y: 1.4, z: 1.4, duration: 0.5, ease: "back.out(1.2)" });
        gsap.to(this.ringMesh.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.5 });
    }

    onMouseLeave() {
        if(!this.isHovered) return;
        this.isHovered = false;

        if(this.experience.world.background) this.experience.world.background.resetColor();
        if(this.experience.world.debris) this.experience.world.debris.resetColor();

        // Reset All
        gsap.to(this.coreMesh.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
        
        gsap.to(this.shellMaterial.uniforms.uHover, { value: 0, duration: 0.3 });
        gsap.to(this.shellMesh.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
        
        gsap.to(this.ringMesh.scale, { x: 1, y: 1, z: 1, duration: 0.5 });

        this.label.element.style.opacity = '0';
    }
}