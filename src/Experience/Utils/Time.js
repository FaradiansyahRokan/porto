import * as THREE from 'three';

export default class Time {
    constructor() {
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        
        this.clock = new THREE.Clock();

        window.requestAnimationFrame(() => this.tick());
    }

    tick() {
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.clock.getElapsedTime();

        if(this.triggerTick) this.triggerTick();

        window.requestAnimationFrame(() => this.tick());
    }
}