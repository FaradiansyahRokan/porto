import * as THREE from 'three';
// import EventEmitter from './EventEmitter.js'; // Opsional, kita pakai callback sederhana saja di Experience

export default class Resources {
    constructor(assets) {
        this.assets = assets;
        this.items = {}; // Tempat menyimpan hasil load (AudioBuffer, Texture, dll)
        this.toLoad = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.audioLoader = new THREE.AudioLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
    }

    startLoading() {
        if(this.toLoad === 0) {
            if(this.triggerReady) this.triggerReady();
            return;
        }

        for(const asset of this.assets) {
            if(asset.type === 'audio') {
                this.loaders.audioLoader.load(asset.path, (buffer) => {
                    this.sourceLoaded(asset, buffer);
                });
            } else if (asset.type === 'texture') {
                this.loaders.textureLoader.load(asset.path, (texture) => {
                    this.sourceLoaded(asset, texture);
                });
            }
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file;
        this.loaded++;

        if(this.loaded === this.toLoad) {
            console.log("Semua aset siap!");
            if(this.triggerReady) this.triggerReady();
        }
    }
}