// import * as THREE from 'three';
// import Experience from '../Experience.js';

// export default class NeuralNetwork {
//     constructor() {
//         this.experience = new Experience();
//         this.scene = this.experience.scene;

//         this.group = new THREE.Group();
//         this.scene.add(this.group);

//         // --- SETUP MATERIAL (HITAM PUTIH ONLY) ---
//         this.setupMaterials();

//         // --- BANGUN STRUKTUR ---
//         this.createInputLayer();    // Grid Depan
//         this.createConvLayers();    // Grid Tengah
//         this.createDenseLayers();   // Kolom Belakang
        
//         // --- BANGUN KONEKSI ---
//         this.createConnections();
        
//         // --- ANIMASI ---
//         this.scannerPos = new THREE.Vector3();
//         this.pulses = []; 

//         // POSISI: Background, Miring, Jauh
//         this.group.position.set(0, -2, -25);
//         this.group.rotation.y = -Math.PI * 0.1;
//         this.group.rotation.z = Math.PI * 0.02;
//     }

//     setupMaterials() {
//         // 1. NEURON MATI (Abu Gelap)
//         this.neuronInactiveMat = new THREE.PointsMaterial({ 
//             color: 0x444444, 
//             size: 0.15,
//             sizeAttenuation: true
//         });

//         // 2. NEURON HIDUP (Putih Terang)
//         this.neuronActiveMat = new THREE.PointsMaterial({ 
//             color: 0xffffff, 
//             size: 0.25,
//             sizeAttenuation: true
//         });
        
//         // 3. KABEL/SYARAF (Putih Transparan Tipis)
//         this.nerveMat = new THREE.LineBasicMaterial({ 
//             color: 0xffffff, 
//             transparent: true, 
//             opacity: 0.04, // Sangat tipis biar elegan
//             blending: THREE.AdditiveBlending 
//         });

//         // 4. SCANNER (Kotak Putih Solid)
//         this.scannerMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
//     }

//     createInputLayer() {
//         // LAYER INPUT (32x32 Grid)
//         this.inputGrid = this.createGrid(32, 32, 0.5, new THREE.Vector3(-15, 0, 0));
//         this.group.add(this.inputGrid.mesh);

//         // SCANNER BOX (Kernel 3x3)
//         const geometry = new THREE.BoxGeometry(1.6, 1.6, 0.5);
//         const edges = new THREE.EdgesGeometry(geometry);
//         this.scanner = new THREE.LineSegments(edges, this.scannerMat);
//         this.group.add(this.scanner);
//     }

//     createConvLayers() {
//         // CONV 1 (16x16)
//         this.conv1Grid = this.createGrid(16, 16, 0.6, new THREE.Vector3(-5, 0, 0));
//         this.group.add(this.conv1Grid.mesh);

//         // CONV 2 (8x8)
//         this.conv2Grid = this.createGrid(8, 8, 0.8, new THREE.Vector3(2, 0, 0));
//         this.group.add(this.conv2Grid.mesh);
//     }

//     createDenseLayers() {
//         // DENSE LAYERS (Kolom Vertikal)
//         this.dense1 = this.createColumn(64, 10, new THREE.Vector3(10, 0, 0));
//         this.group.add(this.dense1.mesh);

//         this.dense2 = this.createColumn(32, 8, new THREE.Vector3(15, 0, 0));
//         this.group.add(this.dense2.mesh);

//         this.output = this.createColumn(10, 5, new THREE.Vector3(20, 0, 0));
//         this.group.add(this.output.mesh);
//     }

//     createGrid(cols, rows, spacing, posOffset) {
//         const count = cols * rows;
//         const geometry = new THREE.BufferGeometry();
//         const positions = [];
//         const nodes = []; 

//         for(let i=0; i<cols; i++) {
//             for(let j=0; j<rows; j++) {
//                 const x = posOffset.x;
//                 const y = (j - rows/2) * spacing + posOffset.y;
//                 const z = (i - cols/2) * spacing + posOffset.z;

//                 positions.push(x, y, z);
//                 nodes.push(new THREE.Vector3(x, y, z));
//             }
//         }
        
//         geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//         // Default pake material agak gelap
//         const mesh = new THREE.Points(geometry, this.neuronInactiveMat);
//         return { mesh, nodes, offset: posOffset };
//     }

//     createColumn(count, height, posOffset) {
//         const geometry = new THREE.BufferGeometry();
//         const positions = [];
//         const nodes = [];

//         for(let i=0; i<count; i++) {
//             const x = posOffset.x;
//             const y = (i - count/2) * (height/count) + posOffset.y;
//             const z = (Math.random() - 0.5) * 4; 

//             positions.push(x, y, z);
//             nodes.push(new THREE.Vector3(x, y, z));
//         }

//         geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//         const mesh = new THREE.Points(geometry, this.neuronInactiveMat); // Abu gelap
//         return { mesh, nodes };
//     }

//     createConnections() {
//         // 1. Garis Statis (Conv1 -> Conv2)
//         const geometry = new THREE.BufferGeometry();
//         const positions = [];

//         for(let i=0; i<this.conv1Grid.nodes.length; i+=5) { 
//             const start = this.conv1Grid.nodes[i];
//             const end = this.conv2Grid.nodes[Math.floor(i/4)] || this.conv2Grid.nodes[0];
//             positions.push(start.x, start.y, start.z);
//             positions.push(end.x, end.y, end.z);
//         }
//         geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//         this.group.add(new THREE.LineSegments(geometry, this.nerveMat));

//         // 2. Garis Kurva (MLP)
//         this.createCurveBundle(this.conv2Grid.nodes, this.dense1.nodes, 0.03); 
//         this.createCurveBundle(this.dense1.nodes, this.dense2.nodes, 0.04);    
//         this.createCurveBundle(this.dense2.nodes, this.output.nodes, 0.06);    
//     }

//     createCurveBundle(sourceNodes, targetNodes, probability) {
//         const geometry = new THREE.BufferGeometry();
//         const positions = [];
        
//         sourceNodes.forEach(start => {
//             if(Math.random() > probability) return; 

//             targetNodes.forEach(end => {
//                 if(Math.random() > 0.05) return; 

//                 const midX = (start.x + end.x) / 2;
//                 const midY = (start.y + end.y) / 2 - (Math.random() * 2); 
//                 const midZ = (start.z + end.z) / 2;

//                 const curve = new THREE.QuadraticBezierCurve3(
//                     start,
//                     new THREE.Vector3(midX, midY, midZ),
//                     end
//                 );

//                 const points = curve.getPoints(8); 
//                 for(let i=0; i<points.length-1; i++) {
//                     positions.push(points[i].x, points[i].y, points[i].z);
//                     positions.push(points[i+1].x, points[i+1].y, points[i+1].z);
//                 }
//             });
//         });

//         geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//         this.group.add(new THREE.LineSegments(geometry, this.nerveMat));
//     }

//     update() {
//         const time = this.experience.time.elapsed;

//         // 1. ANIMASI SCANNER
//         const rangeY = 8;
//         const rangeZ = 8;
//         const y = Math.cos(time * 0.5) * rangeY;
//         const z = Math.sin(time * 0.3) * rangeZ;
        
//         this.scanner.position.set(this.inputGrid.offset.x, y, z);
//         this.scannerPos.set(this.inputGrid.offset.x, y, z);

//         // 2. ANIMASI SINYAL (DATA PULSE) - PUTIH MURNI
//         if(Math.random() > 0.85) {
//             this.spawnPulse(this.scannerPos.clone());
//         }

//         this.updatePulses();
//     }

//     spawnPulse(startPos) {
//         const geometry = new THREE.BufferGeometry();
//         geometry.setAttribute('position', new THREE.Float32BufferAttribute([0,0,0], 3));
        
//         // PARTIKEL DATA: PUTIH TERANG
//         const material = new THREE.PointsMaterial({
//             color: 0xffffff,
//             size: 0.6,
//             transparent: true,
//             blending: THREE.AdditiveBlending
//         });

//         const mesh = new THREE.Points(geometry, material);
//         mesh.position.copy(startPos);
        
//         this.group.add(mesh);
        
//         this.pulses.push({
//             mesh: mesh,
//             life: 0,
//             speed: 0.15 + Math.random() * 0.1,
//             pathOffset: (Math.random() - 0.5) * 3 
//         });
//     }

//     updatePulses() {
//         for(let i = this.pulses.length - 1; i >= 0; i--) {
//             const p = this.pulses[i];
//             p.life += p.speed;

//             // Gerak Linear X
//             const currentX = -15 + (p.life * 35); 
            
//             // Konvergensi Y & Z
//             let targetY = p.pathOffset;
//             let targetZ = p.pathOffset;

//             if (currentX > 10) { 
//                 targetY *= 0.1; 
//                 targetZ *= 0.1;
//             } else if (currentX > -5) { 
//                 targetY *= 0.6;
//             }

//             p.mesh.position.x = currentX;
//             p.mesh.position.y += (targetY - p.mesh.position.y) * 0.1;
//             p.mesh.position.z += (targetZ - p.mesh.position.z) * 0.1;

//             if(p.life > 1.2) {
//                 this.group.remove(p.mesh);
//                 p.mesh.geometry.dispose();
//                 p.mesh.material.dispose();
//                 this.pulses.splice(i, 1);
//             }
//         }
//     }
// // }