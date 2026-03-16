import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import Experience from './Experience.js';

export default class Renderer {
    constructor() {
        this.experience = new Experience();
        this.canvas     = this.experience.canvas;
        this.sizes      = this.experience.sizes;
        this.scene      = this.experience.scene;
        this.camera     = this.experience.camera;

        this.setWebGLRenderer();
        this.setCSSRenderer();
    }

    setWebGLRenderer() {
        this.instance = new THREE.WebGLRenderer({
            canvas:           this.canvas,
            antialias:        true,
            powerPreference:  'high-performance',
            alpha:            false,
        });
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));

        // Force background to absolute black — never white
        this.instance.setClearColor(0x000000, 1);
        // Also set scene background so nothing bleeds through
        this.scene.background = new THREE.Color(0x000000);
    }

    setCSSRenderer() {
        this.cssInstance = new CSS2DRenderer();
        this.cssInstance.setSize(this.sizes.width, this.sizes.height);
        this.cssInstance.domElement.style.position = 'absolute';
        this.cssInstance.domElement.style.top      = '0px';
        this.cssInstance.domElement.style.pointerEvents = 'none';
        document.body.appendChild(this.cssInstance.domElement);
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
        this.cssInstance.setSize(this.sizes.width, this.sizes.height);
    }

    update() {
        this.instance.render(this.scene, this.camera.instance);
        this.cssInstance.render(this.scene, this.camera.instance);
    }
}