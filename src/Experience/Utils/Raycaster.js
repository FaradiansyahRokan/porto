import * as THREE from 'three';
import gsap from 'gsap'; 
import Experience from '../Experience.js';

export default class Raycaster {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.camera = this.experience.camera;
        this.world = this.experience.world;

        this.instance = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        this.currentIntersect = null;

        this.rawMouse = { x: 0, y: 0 }; 

        window.addEventListener('mousemove', (event) => this.onMouseMove(event));
        window.addEventListener('click', () => this.onClick());
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        this.rawMouse.x = event.clientX;
        this.rawMouse.y = event.clientY;
    }

    onClick() {
        if(this.currentIntersect && this.currentIntersect.data) {
            if(this.experience.audio) this.experience.audio.play('click');
            this.experience.overlay.show(this.currentIntersect.data);
        }
    }

    update() {
        // 1. Cek Modal Open
        if(this.experience.isModalOpen) {
            if(this.currentIntersect) {
                this.currentIntersect.onMouseLeave(); 
                if(this.experience.cursor) this.experience.cursor.leave(); 
                this.currentIntersect = null; 
            }
            return; 
        }

        this.instance.setFromCamera(this.mouse, this.camera.instance);

        // --- PERBAIKAN UTAMA DISINI ---
        // Kita ambil referensi world langsung dari experience (lebih aman)
        const world = this.experience.world;

        // SAFETY CHECK:
        // Pastikan 'world' ada, 'nodes' ada, dan 'nodeGroup' ada.
        // Kalau salah satu belum siap, JANGAN jalankan kode bawahnya (biar gak error)
        if(world && world.nodes && world.nodeGroup) {
            
            const objectsToTest = [];
            // Sekarang aman untuk diloop
            world.nodes.forEach(node => objectsToTest.push(node.group)); 

            const intersects = this.instance.intersectObjects(objectsToTest, true);

            if(intersects.length > 0) {
                const selectedObject = intersects[0].object;
                let selectedNode = null;
                
                if(selectedObject.parent && selectedObject.parent.userData.nodeInstance) {
                     selectedNode = selectedObject.parent.userData.nodeInstance;
                }

                if(this.currentIntersect === null) {
                    if(selectedNode) selectedNode.onMouseEnter();
                    if(this.experience.cursor) this.experience.cursor.enter();
                }
                this.currentIntersect = selectedNode;
            } else {
                if(this.currentIntersect) {
                    this.currentIntersect.onMouseLeave();
                    if(this.experience.cursor) this.experience.cursor.leave();
                }
                this.currentIntersect = null;
            }
        }
    }
}