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
import ParadigmEffects from './World/ParadigmEffects.js';

let instance = null;

export default class Experience {
    constructor(canvas) {
        if (instance) return instance;
        instance = this;
        window.experience = this;
        this.canvas = canvas;
        this.isMobile = window.matchMedia('(hover:none)').matches || window.innerWidth < 768;
        this.glitchMode = false;
        this.visitCount = parseInt(localStorage.getItem('rsf_visits') || '0') + 1;
        localStorage.setItem('rsf_visits', this.visitCount);
        this.secretClicks = 0;

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
        this._setupScrollNarrative();
        this._setupTimeAwareness();
        this._setupGlitchMode();
        this._setupEasterEggs();
        this._setupTouchDrag();

        this.resources.triggerReady = () => {
            const btn = document.getElementById('start-btn');
            const bar = document.querySelector('.bar-fill');
            const status = document.getElementById('loader-status');
            if (bar) bar.style.width = '100%';
            if (status) status.textContent = this.visitCount > 1
                ? `Welcome back. Visit #${this.visitCount}.`
                : 'Universe ready.';
            setTimeout(() => {
                btn.textContent = '// ENTER THE VOID //';
                btn.classList.add('active');
                btn.disabled = false;
                btn.addEventListener('click', () => this.startExperience());
                if (this.isMobile) {
                    document.getElementById('preloader')
                        .addEventListener('click', () => { if (btn.classList.contains('active')) this.startExperience(); });
                }
            }, 400);
        };

        this.sizes.triggerResize = () => this.resize();
        this.time.triggerTick    = () => this.update();
    }

    /* ── LOAD SIMULATION ───────────────────────────── */
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

    /* ── TIME AWARENESS ────────────────────────────── */
    _setupTimeAwareness() {
        const h = new Date().getHours();
        // Night (21-5): darker, sharper stars, slower
        // Dawn/Dusk (5-8, 18-21): medium brightness
        // Day (8-18): brighter nebula, faster drift

        if (h >= 21 || h < 5) {
            // NIGHT MODE — deepest dark, stars ultra sharp
            this.timeMode = 'night';
            this.renderer.instance?.setClearColor(0x000000, 1);
        } else if ((h >= 5 && h < 8) || (h >= 18 && h < 21)) {
            // TWILIGHT — slight warmth
            this.timeMode = 'twilight';
        } else {
            // DAY MODE — brighter nebula
            this.timeMode = 'day';
        }

        // Expose to world for shader adjustment
        window._timeMode = this.timeMode;

        // Update HUD with time
        const hudWrap = document.getElementById('hud-coords');
        if (hudWrap) {
            const timeEl = document.createElement('div');
            timeEl.id = 'hud-time';
            timeEl.style.cssText = 'margin-top:6px;opacity:.35;letter-spacing:.08em;';
            timeEl.textContent = `LOCAL: ${String(h).padStart(2,'0')}:${String(new Date().getMinutes()).padStart(2,'0')} · ${this.timeMode.toUpperCase()}`;
            hudWrap.appendChild(timeEl);
        }
    }

    /* ── HUD ───────────────────────────────────────── */
    _setupHUD() {
        this.hudEl = {
            x: document.getElementById('hud-x'),
            y: document.getElementById('hud-y'),
            z: document.getElementById('hud-z'),
            wrap: document.getElementById('hud-coords'),
        };
        // Ambient stats — simulated "live" visitor count
        this._simVisitors = 142 + Math.floor(Math.random() * 80);
        this._simSims = 8840 + Math.floor(Math.random() * 500);
        setInterval(() => {
            this._simVisitors += Math.random() < 0.3 ? 1 : 0;
            this._simSims += Math.floor(Math.random() * 3);
            const vsEl = document.getElementById('hud-visitors');
            const smEl = document.getElementById('hud-sims');
            if (vsEl) vsEl.textContent = `ACTIVE: ${this._simVisitors}`;
            if (smEl) smEl.textContent = `SIMS: ${this._simSims.toLocaleString()}`;
        }, 3000);
    }

    /* ── SCROLL-BASED CAMERA NARRATIVE ────────────── */
    _setupScrollNarrative() {
        // We simulate scroll via wheel + touch on the canvas itself
        // Maps scroll progress (0-1) to camera waypoints through the galaxy
        this._scrollProgress = 0;
        this._scrollTarget   = 0;

        this._waypoints = [
            { pos: new THREE.Vector3(0, 0, 150),  lookAt: new THREE.Vector3(0, 0, 0),   label: null },
            { pos: new THREE.Vector3(60, 20, 100), lookAt: new THREE.Vector3(0, 0, 0),   label: 'EXPLORING THE CLUSTER' },
            { pos: new THREE.Vector3(-40, -15, 80),lookAt: new THREE.Vector3(-5, 0, 5),  label: 'DEEP FIELD' },
            { pos: new THREE.Vector3(30, 40, 90),  lookAt: new THREE.Vector3(0, 0, 0),   label: 'OVERVIEW' },
            { pos: new THREE.Vector3(0, 0, 150),   lookAt: new THREE.Vector3(0, 0, 0),   label: null },
        ];
        this._waypointLabel = document.getElementById('waypoint-label');

        // Wheel scroll (desktop)
        window.addEventListener('wheel', e => {
            if (this.isModalOpen || !this._started) return;
            this._scrollTarget = Math.max(0, Math.min(1, this._scrollTarget + e.deltaY * 0.00015));
        }, { passive: true });
    }

    /* ── GLITCH / MATRIX MODE ──────────────────────── */
    _setupGlitchMode() {
        // Triple-click logo triggers Matrix/Cyber-Grid mode
        const logo = document.querySelector('.logo');
        if (!logo) return;
        let clicks = 0, timer;
        logo.style.cursor = 'none';
        logo.addEventListener('click', () => {
            clicks++;
            clearTimeout(timer);
            timer = setTimeout(() => { clicks = 0; }, 500);
            if (clicks >= 3) {
                clicks = 0;
                this._triggerGlitch();
            }
        });
    }

    _triggerGlitch() {
        if (!this._started) return;
        this.glitchMode = !this.glitchMode;
        const canvas = document.querySelector('.webgl');

        if (this.glitchMode) {
            // Enter MATRIX MODE
            canvas.classList.add('glitch-mode');
            document.body.classList.add('matrix-active');
            // Flash
            gsap.to('.webgl', { filter: 'brightness(3) contrast(2) invert(1)', duration: 0.08,
                onComplete: () => gsap.to('.webgl', { filter: 'brightness(1) contrast(1.4) hue-rotate(120deg) saturate(0)', duration: 0.3 }) });
            // Show glitch overlay
            document.getElementById('glitch-overlay')?.classList.add('active');
            // Speed up world rotation
            if (this.world) { this.world.nodeGroup.userData._glitchSpeedUp = true; }
            // Gravity flip GSAP
            if (this.world) {
                gsap.to(this.world.nodeGroup.rotation, { x: Math.PI, duration: 2.5, ease: 'power2.inOut' });
            }
            this.audio?.play('click');
        } else {
            // Exit — restore
            canvas.classList.remove('glitch-mode');
            document.body.classList.remove('matrix-active');
            gsap.to('.webgl', { filter: 'brightness(1) contrast(1) hue-rotate(0deg) saturate(1)', duration: 0.5 });
            document.getElementById('glitch-overlay')?.classList.remove('active');
            if (this.world) {
                this.world.nodeGroup.userData._glitchSpeedUp = false;
                gsap.to(this.world.nodeGroup.rotation, { x: 0, duration: 2.5, ease: 'power2.inOut' });
            }
        }
    }

    /* ── EASTER EGGS ───────────────────────────────── */
    _setupEasterEggs() {
        // 1. Konami code → supernova burst
        const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
        let ki = 0;
        window.addEventListener('keydown', e => {
            if (e.key === konami[ki]) {
                ki++;
                if (ki === konami.length) {
                    ki = 0;
                    this._konamiActivate();
                }
            } else { ki = 0; }
        });

        // 2. Click black hole 5x → warp to it
        window._bhClicks = 0;
        window._bhClickCallback = () => {
            window._bhClicks++;
            if (window._bhClicks >= 5) {
                window._bhClicks = 0;
                this._warpToBlackHole();
            }
        };

        // 3. Type "APEX" anywhere → reveal hidden message
        let typed = '';
        window.addEventListener('keydown', e => {
            if (!e.key.match(/^[a-zA-Z]$/)) return;
            typed += e.key.toUpperCase();
            typed = typed.slice(-6);
            if (typed.includes('APEX')) {
                typed = '';
                this._revealApex();
            }
            if (typed.includes('RSF')) {
                typed = '';
                this._secretPulse();
            }
            if (typed.includes('PALE')) {
                typed = '';
                if (this._pbdEl && !this._pbdTriggered) {
                    this._pbdTriggered = true;
                    this._activatePaleBlueDot();
                }
            }
        });
    }

    _konamiActivate() {
        // ALL planets explode outward then come back
        if (!this.world) return;
        this.audio?.play('click');
        this._showSecretMsg('⚡ KONAMI UNLOCKED — SUPERNOVA EVENT INITIATED');
        this.world.nodes.forEach((node, i) => {
            const orig = node.originalPos.clone();
            const explode = orig.clone().multiplyScalar(2.2 + Math.random() * 0.8);
            gsap.to(node.group.position, { x: explode.x, y: explode.y, z: explode.z, duration: 1.2, ease: 'expo.out',
                onComplete: () => gsap.to(node.group.position, { x: orig.x, y: orig.y, z: orig.z, duration: 2.5, ease: 'elastic.out(1,0.5)', delay: i*0.05 })
            });
        });
        // Spike core light
        gsap.to(this.world.coreLight, { intensity: 80, duration: 0.3,
            onComplete: () => gsap.to(this.world.coreLight, { intensity: 4.2, duration: 2.0 }) });
    }

    _warpToBlackHole() {
        if (!this._started || this._bhWarping) return;
        this._bhWarping = true;

        const cam    = this.camera.instance;
        const rig    = this.camera.rig;
        const canvas = document.querySelector('.webgl');
        const white  = this._getOrCreateFlashOverlay();
        const warp   = this._getOrCreateWarpOverlay();

        // Shared progress object — drive warp tunnel intensity
        this._warpProgress = { v: 0 };
        warp.style.opacity = '0';
        warp.style.display = 'block';

        // Kill any existing scroll lerp during cinematic
        const scrollLock = () => { this._bhCinematicActive = true; };
        const scrollUnlock = () => { this._bhCinematicActive = false; };
        scrollLock();

        const P  = () => cam.updateProjectionMatrix();
        const SV = (t) => this._showSecretMsg(t);

        // Save state for clean emergence
        const saveRot = { x: rig.rotation.x, y: rig.rotation.y, z: rig.rotation.z };

        const tl = gsap.timeline({
            onComplete: () => {
                this._bhWarping = false;
                this._bhCinematicActive = false;
                window._bhClicks = 0;
                warp.style.display = 'none';
                SV('◉ EMERGED — WELCOME TO THE OTHER SIDE');
            }
        });

        /* ─────────────────────────────────────────────────────────────
           PHASE 1  (t = 0 → 3.5s)  GRAVITY WELL
           Scene barely moves. Colour drains. Something is wrong.
        ───────────────────────────────────────────────────────────── */
        tl
        .add(() => SV('⬤ GRAVITATIONAL ANOMALY DETECTED'), 0)
        .to(cam.position, { z: 94, duration: 3.5,
            ease: 'sine.inOut', onUpdate: P }, '<')
        .to(cam, { fov: 55, duration: 3.5,
            ease: 'sine.inOut', onUpdate: P }, '<')
        .to(canvas, { filter: 'saturate(0.3) brightness(0.95)',
            duration: 3.5, ease: 'sine.in' }, '<')

        /* ─────────────────────────────────────────────────────────────
           PHASE 2  (t = 3.5 → 7.5s)  ACCELERATION
           Camera surges toward BH position.
           Warp overlay fades in — soft at first, building.
        ───────────────────────────────────────────────────────────── */
        .add(() => SV('⬤ EVENT HORIZON — POINT OF NO RETURN'), 3.5)
        .to(cam.position, { x: 38, y: 4, z: 22,
            duration: 4.0, ease: 'power2.in', onUpdate: P }, 3.5)
        .to(cam, { fov: 82,
            duration: 4.0, ease: 'power2.in', onUpdate: P }, 3.5)
        .to(canvas, { filter: 'saturate(0) brightness(1.1) contrast(1.05)',
            duration: 4.0, ease: 'power1.in' }, 3.5)
        // Warp fades in with its own easing — fully independent
        .to(this._warpProgress, { v: 0.5,
            duration: 3.5, ease: 'power1.inOut',
            onUpdate: () => {
                warp.style.opacity = (this._warpProgress.v * 0.8).toFixed(3);
            }
        }, 4.2)

        /* ─────────────────────────────────────────────────────────────
           PHASE 3  (t = 7.5 → 9.5s)  SPAGHETTIFICATION
           Exponential rush. FOV balloons. Screen implodes.
           Tunnel hits 100%.
        ───────────────────────────────────────────────────────────── */
        .add(() => SV('⬤ CROSSING THE MEMBRANE — NO RETURN'), 7.2)
        .to(cam.position, { x: 10, y: 1.2, z: 0.8,
            duration: 2.0, ease: 'expo.in', onUpdate: P }, 7.5)
        .to(cam, { fov: 162,
            duration: 2.0, ease: 'expo.in', onUpdate: P }, 7.5)
        .to(canvas, { filter: 'saturate(0) brightness(0.04) contrast(6)',
            duration: 2.0, ease: 'power4.in' }, 7.5)
        .to(this._warpProgress, { v: 1.0,
            duration: 1.8, ease: 'power4.in',
            onUpdate: () => {
                warp.style.opacity = this._warpProgress.v.toFixed(3);
            }
        }, 7.8)

        /* ─────────────────────────────────────────────────────────────
           PHASE 4  (t = 9.5 → 10.2s)  SINGULARITY
           White flash engulfs everything.
           During white: silent camera teleport to z = 3800.
        ───────────────────────────────────────────────────────────── */
        .to(canvas, { filter: 'brightness(40) saturate(0)',
            duration: 0.7, ease: 'power4.in' }, 9.5)
        .to(white, { opacity: 1,
            duration: 0.7, ease: 'power4.in',
            onComplete: () => {
                // ── INVISIBLE RESET — user sees nothing ──
                gsap.set(canvas,       { clearProps: 'filter' });
                gsap.set(cam.position, { x: 0, y: 0, z: 3800 });
                gsap.set(cam,          { fov: 18 });
                P();
                // New orientation — feels like a different universe
                gsap.set(rig.rotation, { x: 0.3, y: Math.PI * 1.6, z: 0.08 });
                if (this.world) this.world.nodeGroup.rotation.set(0.3, Math.PI * 1.6, 0.04);
                // Hide tunnel
                warp.style.opacity = '0';
                warp.style.display = 'none';
                this._warpProgress.v = 0;
            }
        }, 9.5)

        /* ─────────────────────────────────────────────────────────────
           PHASE 5  (t = 10.2 → 12s)  THE VOID
           Pure white. Nothing exists. Time is meaningless.
        ───────────────────────────────────────────────────────────── */
        .to(white, { opacity: 0.97, duration: 1.8, ease: 'none' }, 10.3)
        .add(() => SV('◈ TRAVERSING THE MEMBRANE BETWEEN REALITIES...'), 10.8)

        /* ─────────────────────────────────────────────────────────────
           PHASE 6  (t = 12 → 18s)  EMERGENCE
           White dissolves impossibly slowly.
           Universe materialises from infinite distance.
           Camera decelerates into origin. You have been reborn.
        ───────────────────────────────────────────────────────────── */
        .to(white, { opacity: 0,
            duration: 4.5, ease: 'power1.inOut' }, 12.2)
        .to(cam.position, { x: 0, y: 0, z: 150,
            duration: 6.0, ease: 'expo.out', onUpdate: P }, 12.5)
        .to(cam, { fov: 50,
            duration: 4.5, ease: 'power3.out', onUpdate: P }, 13.0)
        .to(rig.rotation, { x: 0, y: 0, z: 0,
            duration: 5.5, ease: 'power2.out' }, 12.5)
        .to(this.world?.nodeGroup?.rotation ?? {}, { x: 0, y: 0, z: 0,
            duration: 5.5, ease: 'power2.out' }, 12.5);
    }

        _getOrCreateFlashOverlay() {
        let el = document.getElementById('bh-flash-overlay');
        if (!el) {
            el = document.createElement('div');
            el.id = 'bh-flash-overlay';
            // Pure white, no canvas interaction
            el.style.cssText = 'position:fixed;inset:0;background:#fff;opacity:0;z-index:99998;pointer-events:none;';
            document.body.appendChild(el);
        }
        return el;
    }

    _getOrCreateWarpOverlay() {
        let el = document.getElementById('bh-warp-overlay');
        if (el) return el;

        // Separate canvas overlay — completely independent of .webgl
        el = document.createElement('canvas');
        el.id = 'bh-warp-overlay';
        // Fixed, inset:0, pointer-events:none — NEVER affects .webgl layout
        el.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99997;pointer-events:none;display:none;opacity:0;mix-blend-mode:screen;';
        document.body.appendChild(el);

        const resize = () => { el.width = window.innerWidth; el.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);

        const ctx = el.getContext('2d');
        const progress = () => this._warpProgress?.v ?? 0;

        // Pre-allocate streak angles (never reallocated)
        const NMAX = 280;
        const BASE = new Float32Array(NMAX);
        for (let i = 0; i < NMAX; i++) BASE[i] = (i / NMAX) * Math.PI * 2;

        // Accumulated rotation — true smooth spin regardless of framerate
        let spin     = 0;
        let lastTime = 0;

        const draw = (now) => {
            requestAnimationFrame(draw);

            // Hide when not in use
            if (el.style.display === 'none') { spin = 0; lastTime = 0; return; }

            const p  = progress();
            const dt = lastTime ? Math.min((now - lastTime) * 0.001, 0.05) : 0;
            lastTime = now;
            if (p < 0.004) return;

            const W  = el.width, H = el.height;
            const cx = W * 0.5, cy = H * 0.5;
            const sc = W / 1920;      // scale to resolution

            // ── Smooth spin: accelerates with p ──────────────────────
            // At p=0: 0.5 rad/s.  At p=1: 6 rad/s
            spin += (0.5 + p * 5.5) * dt;

            // ── Trail: partial clear creates motion blur streaks ──────
            // Higher p → less clear → longer streak tails
            ctx.fillStyle = `rgba(0,0,0,${(0.22 + p * 0.52).toFixed(3)})`;
            ctx.fillRect(0, 0, W, H);

            // ── Tunnel geometry ───────────────────────────────────────
            // innerR shrinks to near-zero as p→1 (collapsing into void)
            // outerR grows — streaks get longer as gravity increases
            const innerR = Math.max(1.0, (1 - p) * 140 * sc + p * 1.5);
            const outerR = innerR + (12 + p * 100) * sc;

            // ── STREAKS ──────────────────────────────────────────────
            const N = Math.floor(90 + p * 190);
            for (let i = 0; i < N; i++) {
                const base = BASE[Math.floor(i * NMAX / N)];

                // Per-streak variation: slight wobble that breathes with time
                const wobble = Math.sin(now * 0.00055 + i * 0.18) * 0.018 * p;
                const angle  = base + spin + wobble;

                // Depth-varied brightness: creates the illusion of converging tunnel
                const depthBr = 0.025 + (i / N) * 0.28;
                const timeBr  = 0.8   + 0.2 * Math.sin(now * 0.0006 + i * 0.4);
                const bright  = depthBr * p * timeBr;

                const lw = (0.5 + (i % 4) * 0.35) * Math.min(p * 2.2, 1.0);

                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
                ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR);
                ctx.strokeStyle = `rgba(255,255,255,${bright.toFixed(3)})`;
                ctx.lineWidth   = lw;
                ctx.stroke();
            }

            // ── PULSE RINGS — rush outward like shockwaves ────────────
            const ringV  = (50 + p * 180) * sc;   // px/sec
            for (let k = 0; k < 7; k++) {
                const r2    = ((now * 0.001 * ringV * 0.55 + k * (W / 7) * sc) % (W * 0.55 * sc));
                const alpha = (1 - r2 / (W * 0.55 * sc)) * p * 0.1;
                if (alpha < 0.003) continue;
                ctx.beginPath();
                ctx.arc(cx, cy, r2, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
                ctx.lineWidth   = 0.7;
                ctx.stroke();
            }

            // ── CENTRE BLOOM — the singularity light ─────────────────
            if (p > 0.06) {
                const bR = Math.max(3, (1 - p) * 100 * sc + p * 5);
                const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, bR + 24 * sc);
                g.addColorStop(0,   `rgba(255,255,255,${(p * 0.98).toFixed(2)})`);
                g.addColorStop(0.3, `rgba(255,255,255,${(p * 0.40).toFixed(2)})`);
                g.addColorStop(1,   'rgba(255,255,255,0)');
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(cx, cy, bR + 24 * sc, 0, Math.PI * 2);
                ctx.fill();
            }

            // ── VOID — event horizon grows and devours ────────────────
            if (p > 0.1) {
                const vR = Math.max(0, (p - 0.1) / 0.9 * 95 * sc);
                const gv = ctx.createRadialGradient(cx, cy, 0, cx, cy, vR + 10 * sc);
                gv.addColorStop(0,    `rgba(0,0,0,${Math.min(p * 1.15, 1.0).toFixed(2)})`);
                gv.addColorStop(0.72, `rgba(0,0,0,${(p * 0.5).toFixed(2)})`);
                gv.addColorStop(1,    'rgba(0,0,0,0)');
                ctx.fillStyle = gv;
                ctx.beginPath();
                ctx.arc(cx, cy, vR + 10 * sc, 0, Math.PI * 2);
                ctx.fill();
            }

            // ── CHROMATIC FRINGE — reality tears at high p ────────────
            if (p > 0.4) {
                const fr  = (p - 0.4) / 0.6;
                const cr  = outerR * 0.28 + innerR;
                const alp = (fr * 0.16).toFixed(3);
                ctx.beginPath();
                ctx.arc(cx, cy, cr * 1.015, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255,90,90,${alp})`;
                ctx.lineWidth = 1.8; ctx.stroke();

                ctx.beginPath();
                ctx.arc(cx, cy, cr * 0.985, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(90,90,255,${alp})`;
                ctx.lineWidth = 1.8; ctx.stroke();
            }
        };
        requestAnimationFrame(draw);

                return el;
    }

            _setupPaleBlueDot() {
        this._pbdActive = false;
        this._pbdEl = document.getElementById('pbd-overlay');
        this._pbdQuotes = [
            "In this vast void, every line of code is a heartbeat.",
            "Look again at that dot. That's here. That's home. That's us.",
            "Our planet is a lonely speck in the great enveloping cosmic dark.",
            "From this distant vantage point, the Earth might not seem of particular interest.",
            "Every engineer, every dreamer, every architect of the future — on a mote of dust.",
        ];
        this._pbdQuoteIdx = 0;

        // Triggered by deep scroll (scrollProgress > 0.85)
        this._pbdTriggered = false;
    }

    _checkPaleBlueDot(scrollProgress) {
        if (!this._pbdEl || this._pbdTriggered) return;
        if (scrollProgress > 0.82) {
            this._pbdTriggered = true;
            this._activatePaleBlueDot();
        }
    }

    _activatePaleBlueDot() {
        const cam = this.camera.instance;
        const el  = this._pbdEl;
        if (!el) return;

        // Zoom out massively
        gsap.to(cam.position, { z: 1800, duration: 6, ease: 'power2.inOut' });
        gsap.to(cam, { fov: 22, duration: 6, ease: 'power2.inOut',
            onUpdate: () => cam.updateProjectionMatrix() });

        // Fade in overlay with quote
        setTimeout(() => {
            const q = this._pbdQuotes[this._pbdQuoteIdx % this._pbdQuotes.length];
            this._pbdQuoteIdx++;
            const qEl = el.querySelector('.pbd-quote');
            if (qEl) qEl.textContent = q;
            el.classList.add('active');
        }, 3500);

        // After 8s, zoom back in
        setTimeout(() => {
            el.classList.remove('active');
            gsap.to(cam.position, { z: 150, duration: 4.5, ease: 'expo.out' });
            gsap.to(cam, { fov: 50, duration: 3.5, ease: 'power3.out',
                onUpdate: () => cam.updateProjectionMatrix() });
            // Allow re-trigger after full cycle
            setTimeout(() => { this._pbdTriggered = false; }, 10000);
        }, 9000);
    }

    /* ── REALITY COLLAPSE ───────────────────────────
     * When cursor idle > 12s → starfield "glitches" briefly
     * Rasi bintang collapse into binary rain then recover
     ─────────────────────────────────────────────── */
    _setupRealityCollapse() {
        this._idleTimer = 0;
        this._lastMouseMove = Date.now();
        this._rcActive = false;
        window.addEventListener('mousemove', () => { this._lastMouseMove = Date.now(); });
        window.addEventListener('touchstart', () => { this._lastMouseMove = Date.now(); }, { passive: true });
    }

    _checkRealityCollapse(delta) {
        if (!this._started || this.isModalOpen) return;
        const idle = (Date.now() - this._lastMouseMove) / 1000;
        if (idle > 14 && !this._rcActive) {
            this._rcActive = true;
            this._triggerRealityCollapse();
        }
    }

    _triggerRealityCollapse() {
        const rcEl = document.getElementById('rc-overlay');
        if (!rcEl) { this._rcActive = false; return; }

        rcEl.classList.add('active');
        setTimeout(() => {
            rcEl.classList.remove('active');
            setTimeout(() => { this._rcActive = false; }, 3000);
        }, 3500);
    }

    /* ── DREAM ARCHIVE (Memory Core) ────────────────
     * Hidden orb in the scene. Hover triggers intimate text fragments.
     ─────────────────────────────────────────────── */
    _setupDreamArchive() {
        if (!this.world) return;
        const dreams = [
            "I dreamt of building systems that outlive me.",
            "In parallel reality #7, I chose silence. Here, I chose code.",
            "APEX HUMANITY: not domination — elevation.",
            "Every startup I build is a letter to my future self.",
            "The void is not empty. It is full of unrealized potential.",
            "I am afraid of irrelevance. I am more afraid of playing it safe.",
            "Archipelago: scattered islands, one ocean. That is Indonesia. That is us.",
        ];
        this._dreamTexts = dreams;
        this._dreamEl = document.getElementById('dream-overlay');
        this._dreamIdx = 0;
    }

    showDream(idx) {
        const el = this._dreamEl;
        if (!el) return;
        const text = this._dreamTexts[idx % this._dreamTexts.length];
        const tEl = el.querySelector('.dream-text');
        if (tEl) tEl.textContent = text;
        el.classList.add('active');
        clearTimeout(this._dreamTimer);
        this._dreamTimer = setTimeout(() => el.classList.remove('active'), 5000);
        this._dreamIdx++;
    }

    _setupTouchDrag() {
        if (!this.isMobile) return;
        // Touch drag is handled in ParadigmEffects + World._touchSetup
        // Mobile pinch-to-zoom
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

    _revealApex() {
        this._showSecretMsg('◈ APEX HUMANITY — THE SINGULARITY APPROACHES. THIS UNIVERSE IS ALIVE.');
        gsap.to('.webgl', {
            filter: 'invert(1) brightness(1.5)', duration: 0.15,
            onComplete: () => gsap.to('.webgl', { filter: 'invert(0) brightness(1)', duration: 0.6 })
        });
    }

    _secretPulse() {
        this._showSecretMsg('◉ SIGNAL DETECTED — ROKAN S.F. ONLINE');
        if (this.world?.coreLight) {
            gsap.to(this.world.coreLight, { intensity: 40, duration: 0.2,
                onComplete: () => gsap.to(this.world.coreLight, { intensity: 4.2, duration: 1.5 })
            });
        }
    }

    _showDream(idx) {
        if (this.paradigm) this.paradigm.showDream?.(idx);
        else this._showSecretMsg(this._dreamTexts?.[idx % 7] || '');
    }

    showDream(idx) { this._showDream(idx); }

    _checkArchipelago() {} // removed — stub to prevent errors

        _showSecretMsg(text) {
        const el = document.getElementById('secret-msg');
        if (!el) return;
        el.textContent = text;
        el.classList.add('show');
        clearTimeout(this._secretTimer);
        this._secretTimer = setTimeout(() => el.classList.remove('show'), 4000);
    }

    _showDream(idx) {
        const dreams = [
            "I dreamt of building systems that outlive me.",
            "In parallel reality #7, I chose silence. Here, I chose code.",
            "APEX HUMANITY: not domination — elevation.",
            "Every startup I build is a letter to my future self.",
            "The void is not empty. It is full of unrealized potential.",
            "I am afraid of irrelevance. I am more afraid of playing it safe.",
            "Archipelago: scattered islands, one ocean. That is us.",
        ];
        const el = document.getElementById('dream-overlay');
        if (!el) return;
        const tEl = el.querySelector('.dream-text');
        if (tEl) tEl.textContent = dreams[idx % dreams.length];
        el.classList.add('active');
        clearTimeout(this._dreamTimer);
        this._dreamTimer = setTimeout(() => el.classList.remove('active'), 5000);
    }

    showDream(idx) { this._showDream(idx); }

        startExperience() {
        if (this._started) return;
        this._started = true;

        gsap.to('#preloader', { opacity: 0, duration: 1.4, ease: 'power3.inOut',
            onComplete: () => {
                const p = document.getElementById('preloader');
                if (p) p.style.display = 'none';
            }
        });

        this.audio.setupSounds();
        this.audio.play('intro');
        setTimeout(() => this.audio.playBg(), 2800);

        this.paradigm = new ParadigmEffects();
        this._setupPaleBlueDot();
        this._setupRealityCollapse();
        this._setupDreamArchive();

        setTimeout(() => {
            if (this.hudEl?.wrap) this.hudEl.wrap.classList.add('visible');
        }, 5500);

        setTimeout(() => {
            const hint = document.getElementById('hint-text');
            if (hint) { hint.style.display = 'block'; gsap.to(hint, { opacity: .5, duration: 2 }); }
        }, 5800);

        setTimeout(() => {
            const sh = document.getElementById('scroll-hint');
            if (sh) { sh.style.display = 'flex'; requestAnimationFrame(() => sh.classList.add('visible')); }
        }, 7000);

        const cam = this.camera.instance;
        const rig = this.camera.rig;
        const zStart = this.timeMode === 'night' ? 3500 : this.timeMode === 'twilight' ? 2800 : 2200;

        gsap.set(cam.position, { z: zStart });
        gsap.set(cam, { fov: 115 });
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

        if (this._started && this.paradigm) {
            const dt2 = this.time?.delta / 1000 || 0.016;
            this.paradigm.update(dt2, this._scrollProgress || 0);
        }

        if (this._started) {
            const delta2 = this.time?.delta / 1000 || 0.016;
            this._checkPaleBlueDot?.(this._scrollProgress || 0);
            this._checkRealityCollapse?.(delta2);
        }

        if (this.hudEl?.wrap?.classList.contains('visible') && this.camera) {
            const p = this.camera.instance.position;
            if (this.hudEl.x) this.hudEl.x.textContent = `X: ${p.x.toFixed(2)}`;
            if (this.hudEl.y) this.hudEl.y.textContent = `Y: ${p.y.toFixed(2)}`;
            if (this.hudEl.z) this.hudEl.z.textContent = `Z: ${p.z.toFixed(2)}`;
        }

        if (this._started && this._waypoints) {
            this._scrollProgress += (this._scrollTarget - this._scrollProgress) * 0.025;
            const total = this._waypoints.length - 1;
            const raw = this._scrollProgress * total;
            const idx = Math.min(Math.floor(raw), total - 1);
            const t2  = raw - idx;
            const wp0 = this._waypoints[idx];
            const wp1 = this._waypoints[idx + 1] || wp0;

            if (!this.isModalOpen && !this._bhCinematicActive && this._scrollProgress > 0.01) {
                const cam = this.camera.instance;
                const tp = new THREE.Vector3().lerpVectors(wp0.pos, wp1.pos, t2);
                cam.position.lerp(tp, 0.012);
                cam.updateProjectionMatrix();
            }

            const curWp = this._waypoints[Math.round(this._scrollProgress * total)];
            if (curWp?.label && this._waypointLabel) {
                this._waypointLabel.textContent = curWp.label;
                this._waypointLabel.classList.add('show');
            } else if (this._waypointLabel) {
                this._waypointLabel.classList.remove('show');
            }
        }
    }
}