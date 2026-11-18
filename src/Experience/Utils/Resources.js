import * as THREE from 'three';

export default class Resources {
    constructor(assets) {
        this.assets = assets;
        this.items  = {};
        this.toLoad = this.assets.length;
        this.loaded = 0;
        this._readyFired = false;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.audioLoader   = new THREE.AudioLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
    }

    _fireReady() {
        if (this._readyFired) return;
        this._readyFired = true;
        if (this.triggerReady) this.triggerReady();
    }

    startLoading() {
        if (this.toLoad === 0) {
            this._fireReady();
            return;
        }

        // Safety fallback so preloader never hangs if an audio file fails or stalls
        setTimeout(() => this._fireReady(), 5500);

        for (const asset of this.assets) {
            if (asset.type === 'audio') {
                this.loaders.audioLoader.load(
                    asset.path,
                    (buffer) => this.sourceLoaded(asset, buffer),
                    undefined,
                    (err) => {
                        console.warn(`Audio asset skipped: ${asset.path}`, err);
                        this.sourceLoaded(asset, null);
                    }
                );
            } else if (asset.type === 'texture') {
                this.loaders.textureLoader.load(
                    asset.path,
                    (texture) => this.sourceLoaded(asset, texture),
                    undefined,
                    (err) => {
                        console.warn(`Texture asset skipped: ${asset.path}`, err);
                        this.sourceLoaded(asset, null);
                    }
                );
            }
        }
    }

    sourceLoaded(source, file) {
        if (file) this.items[source.name] = file;
        this.loaded++;

        if (this.loaded >= this.toLoad) {
            this._fireReady();
        }
    }
}
