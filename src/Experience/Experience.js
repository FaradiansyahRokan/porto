import * as THREE from 'three';
import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './World/World.js';
import Raycaster from './Utils/Raycaster.js';
import Overlay from './Interface/Overlay.js';
import gsap from 'gsap';

// --- IMPORT BARU ---
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

        // 1. Setup Dasar
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        
        // 2. Setup Resources (Download Aset)
        this.resources = new Resources(assets);
        
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();
        this.overlay = new Overlay();
        this.cursor = new Cursor();
        this.raycaster = new Raycaster();
        
        // 3. Audio Manager (Belum di-setup sampai user klik start)
        this.audio = new AudioManager();

        // 4. Event: Saat Resources Selesai Download
        this.resources.triggerReady = () => {
            // Aktifkan tombol Start
            const startBtn = document.getElementById('start-btn');
            startBtn.textContent = "ENTER EXPERIENCE";
            startBtn.classList.add('active');
            startBtn.disabled = false;

            startBtn.addEventListener('click', () => {
                this.startExperience();
            });
        };

        this.sizes.triggerResize = () => this.resize();
        this.time.triggerTick = () => this.update();

        this.isModalOpen = false;

        
    }

    startExperience() {
        // 1. Hilangkan Preloader
        document.getElementById('preloader').classList.add('fade-out');

        // 2. Setup Audio
        this.audio.setupSounds();
        this.audio.play('intro');
        
        setTimeout(() => {
            this.audio.playBg();
        }, 2000);

        // --- 3. FITUR BARU: CINEMATIC FLY-IN ---
        // Awalnya kamera kita set jauh dulu (override posisi awal Camera.js)
        // Kita akses camera instance di dalam rig
        const cam = this.camera.instance;
        
        // Set posisi awal (Jauh banget)
        gsap.set(cam.position, { z: 500 });
        
        // Animasi masuk (Terbang mendekat)
        gsap.to(cam.position, {
            z: 150, // Posisi normal
            duration: 3.5, // Durasi terbang (semakin lama semakin dramatis)
            ease: "power3.inOut", // Gerakan lambat-cepat-lambat
            onComplete: () => {
                // Opsional: Kasih efek kamera goyang dikit pas mendarat
            }
        });
        
        // Efek putaran awal (Spinning entry)
        // Rig berputar cepat lalu melambat saat masuk
        const rig = this.camera.rig;
        gsap.from(rig.rotation, {
            y: -Math.PI * 2, // Muter 360 derajat
            duration: 4,
            ease: "power2.out"
        });
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.world.update();
        if(this.cursor) this.cursor.update();
        if(this.raycaster) this.raycaster.update();
        this.renderer.update();
    }
}