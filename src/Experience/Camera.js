import * as THREE from 'three';
import gsap from 'gsap';
import Experience from './Experience.js';

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes  = this.experience.sizes;
        this.scene  = this.experience.scene;
        this.canvas = this.experience.canvas;
        this._targetX = 0;
        this._targetY = 0;
        this._curX    = 0;
        this._curY    = 0;
        this.setInstance();
        this._setupMobileGyro();
    }

    setInstance() {
        this.rig = new THREE.Group();
        this.scene.add(this.rig);
        this.instance = new THREE.PerspectiveCamera(50, this.sizes.width / this.sizes.height, 0.1, 5000);
        this.instance.position.set(0, 0, 150);
        this.rig.add(this.instance);
    }

    _setupMobileGyro() {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', e => {
                if (e.gamma !== null && e.beta !== null) {
                    this._targetX = (e.beta  - 40) / 60 * 0.3;
                    this._targetY = e.gamma / 90 * 0.3;
                }
            }, { passive: true });
        }
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        const raycaster = this.experience.raycaster;
        const isMobile  = this.experience.isMobile;

        if (isMobile) {
            this._curX += (this._targetX - this._curX) * 0.04;
            this._curY += (this._targetY - this._curY) * 0.04;
            this.rig.rotation.x = this._curX;
            this.rig.rotation.y = this._curY;
        } else if (raycaster && !this.experience._bhCinematicActive) {
            // Smooth damping without spawning GSAP tweens every frame
            const mouse = raycaster.mouse;
            const tX = mouse.y * 0.32;
            const tY = -mouse.x * 0.32;
            this._curX += (tX - this._curX) * 0.055;
            this._curY += (tY - this._curY) * 0.055;
            this.rig.rotation.x = this._curX;
            this.rig.rotation.y = this._curY;
        }
    }
}
