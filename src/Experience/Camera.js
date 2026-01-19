import * as THREE from 'three';
import gsap from 'gsap';
import Experience from './Experience.js';

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.setInstance();
    }

    setInstance() {
        this.rig = new THREE.Group();
        this.scene.add(this.rig);

        this.instance = new THREE.PerspectiveCamera(
            50, 
            this.sizes.width / this.sizes.height, 
            0.1, 
            5000 // <--- GANTI JADI 5000 (Sebelumnya 1000)
        );
        this.instance.position.set(0, 0, 150); 
        this.rig.add(this.instance);
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        if(this.experience.raycaster) {
            const mouse = this.experience.raycaster.mouse;
            
            const sensitivity = 0.5; 
            const targetRotX = mouse.y * sensitivity; 
            const targetRotY = -mouse.x * sensitivity;

            gsap.to(this.rig.rotation, {
                x: targetRotX,
                y: targetRotY,
                duration: 1.5,
                ease: "power2.out"
            });
        }
    }
}