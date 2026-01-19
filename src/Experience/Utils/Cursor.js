import gsap from 'gsap';
import Experience from '../Experience.js';

export default class Cursor {
    constructor() {
        this.experience = new Experience();
        
        // 1. Buat Element
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        
        this.cursorRing = document.createElement('div');
        this.cursorRing.className = 'cursor-ring';

        document.body.appendChild(this.cursorDot);
        document.body.appendChild(this.cursorRing);

        // 2. Setup GSAP quickTo (Ini KUNCINYA)
        // quickTo adalah fungsi optimasi GSAP khusus untuk mouse follower
        // Dia mem-bypass antrian animasi normal biar super ngebut & smooth
        
        // Setup DOT: Gesit, Presisi
        this.xToDot = gsap.quickTo(this.cursorDot, "x", { duration: 0.7, ease: "power3" });
        this.yToDot = gsap.quickTo(this.cursorDot, "y", { duration: 0.7, ease: "power3" });

        // Setup RING: Berat, Mengambang, Elastic (Efek Air)
        // duration: 0.6 -> Bikin dia lambat/berat
        // ease: "power3.out" -> Bikin pengereman halus seperti di air
        this.xToRing = gsap.quickTo(this.cursorRing, "x", { duration: 1.5, ease: "power3.out" });
        this.yToRing = gsap.quickTo(this.cursorRing, "y", { duration: 1.5, ease: "power3.out" });

        // Set posisi awal biar gak loncat dari pojok
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;
        
        gsap.set(this.cursorDot, { x: startX, y: startY, xPercent: -50, yPercent: -50 });
        gsap.set(this.cursorRing, { x: startX, y: startY, xPercent: -50, yPercent: -50 });

        // 3. Event Listener (Sangat Ringan)
        // Kita cuma lempar koordinat ke GSAP, biar GSAP yang mikir matematikanya
        window.addEventListener('mousemove', (e) => {
            this.xToDot(e.clientX);
            this.yToDot(e.clientY);
            
            this.xToRing(e.clientX);
            this.yToRing(e.clientY);
        });
    }

    // method update() DIHAPUS SAJA atau dikosongkan
    // Karena GSAP sudah handle loop internal sendiri (lebih efisien)
    update() {
        // Kosong
    }

   enter() {
        // RING: Membesar, jadi Putih Transparan (Glassy), dan Glowing
        gsap.to(this.cursorRing, { 
            scale: 2, 
            backgroundColor: "rgba(255, 255, 255, 0.15)", // Putih kaca tipis
            borderColor: '#ffffff', // Border Putih Solid
            borderWidth: '2px', // Tebalin dikit biar tegas
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)", // GLOW EFFECT! 🔥
            duration: 0.4,
            ease: "back.out(1.7)" 
        });

        // DOT: Putih Solid + Sedikit membesar
        gsap.to(this.cursorDot, { 
            backgroundColor: '#ffffff', // Tetap putih
            scale: 1.5,
            duration: 0.3 
        });
    }

    leave() {
        // Balik ke normal (Ring tipis, tanpa background)
        gsap.to(this.cursorRing, { 
            scale: 1, 
            backgroundColor: "rgba(255, 255, 255, 0)", // Transparan total
            borderColor: '#ffffff', // Border Putih
            borderWidth: '1px',
            boxShadow: "0 0 0px rgba(255, 255, 255, 0)", // Hapus Glow
            duration: 0.4,
            ease: "power3.out"
        });

        gsap.to(this.cursorDot, { 
            backgroundColor: '#ffffff',
            scale: 1,
            duration: 0.3 
        });
    }
}