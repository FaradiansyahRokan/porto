// import EventEmitter from './EventEmitter.js'; // Opsional, kita pakai native dulu biar simpel

export default class Sizes {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            
            // Trigger event resize (nanti ditangkap Experience)
            if(this.triggerResize) this.triggerResize();
        });
    }
}