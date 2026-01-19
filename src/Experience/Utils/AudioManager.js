import * as THREE from 'three';
import Experience from '../Experience.js';

export default class AudioManager {
    constructor() {
        this.experience = new Experience();
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.listener = new THREE.AudioListener();
        this.camera.instance.add(this.listener);

        this.sounds = {};
        this.isMuted = false;
        
        // Setup Button Logic
        this.setupButton();
    }

    setupButton() {
        this.btn = document.getElementById('audio-btn');
        this.btnText = document.getElementById('audio-text');

        if(this.btn) {
            this.btn.addEventListener('click', () => this.toggleMute());
        }
    }

    setupSounds() {
        // ... (Kode setup sound sama seperti sebelumnya) ...
        // Setup Background Music
        this.bgMusic = new THREE.Audio(this.listener);
        this.bgMusic.setBuffer(this.resources.items.bgMusic);
        this.bgMusic.setLoop(true);
        this.bgMusic.setVolume(0.3); 
        this.sounds['bg'] = this.bgMusic;

        this.createSfx('hover', 0.5);
        this.createSfx('click', 1.0);
        this.createSfx('intro', 0.8);
    }
    
    // ... createSfx & play sama ...
    createSfx(name, volume) {
        const sound = new THREE.Audio(this.listener);
        sound.setBuffer(this.resources.items[name]);
        sound.setVolume(volume);
        this.sounds[name] = sound;
    }

    play(name) {
        if(this.sounds[name]) {
            if(this.sounds[name].isPlaying) this.sounds[name].stop();
            this.sounds[name].play();
        }
    }

    playBg() {
        if(this.sounds['bg'] && !this.sounds['bg'].isPlaying) {
            this.sounds['bg'].play();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        
        if(this.isMuted) {
            this.listener.setMasterVolume(0); // Matikan semua suara
            this.btn.classList.add('muted');
            this.btnText.textContent = "OFF";
        } else {
            this.listener.setMasterVolume(1); // Hidupkan
            this.btn.classList.remove('muted');
            this.btnText.textContent = "ON";
        }
    }
}