import * as THREE from 'three';
import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './World/World.js';
import Raycaster from './Utils/Raycaster.js';
import Overlay from './Interface/Overlay.js';
import gsap from 'gsap';
import Resources from './Utils/Resources.js';
import assets from './Utils/assets.js';
import AudioManager from './Utils/AudioManager.js';
import Cursor from './Utils/Cursor.js';

let instance = null;

export default class Experience {
    constructor(canvas) {
        if (instance) return instance;
        instance = this;
        window.experience = this;
        this.canvas = canvas;
        this.isMobile = window.matchMedia('(hover:none)').matches || window.innerWidth < 768;

        this.sizes     = new Sizes();
        this.time      = new Time();
        this.scene     = new THREE.Scene();
        this.resources = new Resources(assets);

        this.camera    = new Camera();
        this.renderer  = new Renderer();
        this.world     = new World();
        this.overlay   = new Overlay();
        this.cursor    = new Cursor();
        this.raycaster = new Raycaster();
        this.audio     = new AudioManager();

        this.isModalOpen = false;
        this._loadSim();
        this._setupHUD();
        this._setupTouchPinch();

        this.resources.triggerReady = () => {
            const btn = document.getElementById('start-btn');
            const bar = document.querySelector('.bar-fill');
            const status = document.getElementById('loader-status');
            if (bar) bar.style.width = '100%';
            if (status) status.textContent = 'Universe ready.';
            setTimeout(() => {
                btn.textContent = this.isMobile ? '// ENTER THE UNIVERSE //' : '// ENTER THE VOID //';
                btn.classList.add('active');
                btn.disabled = false;
                btn.addEventListener('click', () => this.startExperience());
                // Also allow tap anywhere on mobile after ready
                if (this.isMobile) {
                    document.getElementById('preloader').addEventListener('click', (e) => {
                        if (btn.classList.contains('active')) this.startExperience();
                    });
                }
            }, 400);
        };

        this.sizes.triggerResize = () => this.resize();
        this.time.triggerTick    = () => this.update();
    }

    _loadSim() {
        const bar = document.querySelector('.bar-fill');
        if (!bar) return;
        let p = 0;
        const iv = setInterval(() => {
            p += Math.random() * 6 + 1;
            if (p > 90) { clearInterval(iv); p = 90; }
            bar.style.width = p + '%';
        }, 200);
    }

    _setupHUD() {
        // Live coordinate HUD — shows camera position
        this.hudEl = {
            x: document.getElementById('hud-x'),
            y: document.getElementById('hud-y'),
            z: document.getElementById('hud-z'),
            wrap: document.getElementById('hud-coords'),
        };
    }

    _setupTouchPinch() {
        // Mobile pinch-to-zoom
        if (!this.isMobile) return;
        let lastDist = 0;
        window.addEventListener('touchstart', e => {
            if (e.touches.length === 2) {
                lastDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        }, { passive: true });
        window.addEventListener('touchmove', e => {
            if (e.touches.length === 2) {
                const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const delta = (dist - lastDist) * 0.5;
                const cam = this.camera.instance;
                cam.position.z = Math.max(60, Math.min(300, cam.position.z - delta));
                lastDist = dist;
            }
        }, { passive: true });
    }

    startExperience() {
        const preloader = document.getElementById('preloader');
        // Prevent double fire
        if (this._started) return;
        this._started = true;

        gsap.to(preloader, {
            opacity: 0, duration: 1.4, ease: 'power3.inOut',
            onComplete: () => { preloader.style.display = 'none'; }
        });

        // Audio
        this.audio.setupSounds();
        this.audio.play('intro');
        setTimeout(() => this.audio.playBg(), 2800);

        // Show HUD
        setTimeout(() => {
            if (this.hudEl.wrap) this.hudEl.wrap.classList.add('visible');
        }, 5000);

        // Show hint
        setTimeout(() => {
            const hint = document.getElementById('hint-text');
            if (hint) { hint.style.display = 'block'; gsap.to(hint, { opacity: .5, duration: 2 }); }
        }, 5500);

        const cam = this.camera.instance;
        const rig = this.camera.rig;

        // WARP ENTRY — FOV stretches, universe spins in
        gsap.set(cam.position, { z: this.isMobile ? 1800 : 2500 });
        gsap.set(cam, { fov: 110 });
        cam.updateProjectionMatrix();

        gsap.timeline({ delay: 0.15 })
            .to(cam.position, { z: this.isMobile ? 120 : 150, duration: 4.5, ease: 'expo.out' })
            .to(cam, { fov: 50, duration: 2.8, ease: 'power4.out',
                onUpdate: () => cam.updateProjectionMatrix() }, '<0.2')
            .from(rig.rotation, { y: -Math.PI * 2, duration: 5.0, ease: 'power2.out' }, '<')
            .from(rig.rotation, { z: 0.5, duration: 3.2, ease: 'power3.out' }, '<0.4');
    }

    resize() {
        this.isMobile = window.innerWidth < 768;
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.world.update();
        if (this.cursor)    this.cursor.update();
        if (this.raycaster) this.raycaster.update();
        this.renderer.update();

        // Update HUD coords
        if (this.hudEl?.wrap?.classList.contains('visible') && this.camera) {
            const p = this.camera.instance.position;
            if (this.hudEl.x) this.hudEl.x.textContent = `X: ${p.x.toFixed(2)}`;
            if (this.hudEl.y) this.hudEl.y.textContent = `Y: ${p.y.toFixed(2)}`;
            if (this.hudEl.z) this.hudEl.z.textContent = `Z: ${p.z.toFixed(2)}`;
        }
    }
}