import * as THREE from 'three';
import Experience from '../Experience.js';

export default class AudioManager {
    constructor() {
        this.experience = new Experience();
        this.camera     = this.experience.camera;
        this.resources  = this.experience.resources;

        this.listener = new THREE.AudioListener();
        this.camera.instance.add(this.listener);

        this.sounds  = {};
        this.isMuted = false;

        this.setupButton();
    }

    setupButton() {
        this.btn     = document.getElementById('audio-btn');
        this.btnText = document.getElementById('audio-text');

        if (this.btn) {
            this.btn.addEventListener('click', () => this.toggleMute());
        }
    }

    setupSounds() {
        if (this.resources.items.bgMusic) {
            this.bgMusic = new THREE.Audio(this.listener);
            this.bgMusic.setBuffer(this.resources.items.bgMusic);
            this.bgMusic.setLoop(true);
            this.bgMusic.setVolume(0.28);
            this.sounds['bg'] = this.bgMusic;
        }

        this.createSfx('hover', 0.45);
        this.createSfx('click', 0.85);
        this.createSfx('intro', 0.75);
        this.createSfx('outro', 0.55);
    }

    createSfx(name, volume) {
        const buf = this.resources.items[name];
        if (!buf) return;
        const sound = new THREE.Audio(this.listener);
        sound.setBuffer(buf);
        sound.setVolume(volume);
        this.sounds[name] = sound;
    }

    play(name) {
        if (this.isMuted) return;
        const snd = this.sounds[name];
        if (snd) {
            try {
                if (snd.isPlaying) snd.stop();
                snd.play();
            } catch (_) {
                // Ignore browser autoplay restrictions until user interaction
            }
        }
    }

    playBg() {
        if (this.sounds['bg'] && !this.sounds['bg'].isPlaying) {
            try {
                this.sounds['bg'].play();
            } catch (_) {}
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;

        if (this.isMuted) {
            this.listener.setMasterVolume(0);
            this.btn?.classList.add('muted');
            if (this.btnText) this.btnText.textContent = "MUTED";
        } else {
            this.listener.setMasterVolume(1);
            this.btn?.classList.remove('muted');
            if (this.btnText) this.btnText.textContent = "AUDIO ON";
        }
    }
}
