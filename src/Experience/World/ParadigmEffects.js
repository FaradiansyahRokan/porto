import * as THREE from 'three';
import gsap from 'gsap';
import Experience from '../Experience.js';

/**
 * ParadigmEffects.js — Paradigm shift interactive experiences.
 * All canvas overlays are separate from .webgl — never affect its size.
 */
export default class ParadigmEffects {
    constructor() {
        this.experience  = new Experience();
        this.scene       = this.experience.scene;
        this.isMobile    = this.experience.isMobile;

        this._lastActivity  = Date.now();
        this._patienceActive = false;
        this._heartRate     = 60;
        this._chromStr      = 0;
        this._lastScrollP   = 0;
        this._tearProgress  = 0;
        this._tearHolding   = false;
        this._tearX         = 0;
        this._tearY         = 0;
        this._tearTimer     = 0;
        this._mouseIdle     = 0;
        this._warpProgress  = { v: 0 }; // shared with Experience BH warp

        this._buildObserverEffect();
        this._buildHeartbeat();
        this._buildPatienceMode();
        this._buildTearEffect();
        this._buildChromaticAberration();
        this._buildParticleField();
        this._setupActivityTracking();
    }

    /* ── 1. OBSERVER EFFECT ──────────────────────────────────────────
     * Particles flee cursor, form patterns when mouse is still.
     * PERFORMANCE: flee is done in shader via mouse uniform, NOT per-particle JS math
     ──────────────────────────────────────────────────────────────── */
    _buildObserverEffect() {
        const count = this.isMobile ? 200 : 600;
        const geo   = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const rand  = new Float32Array(count);
        const phase = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const r = 28 + Math.random() * 38;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            pos[i*3]   = r * Math.sin(p) * Math.cos(t);
            pos[i*3+1] = r * Math.sin(p) * Math.sin(t);
            pos[i*3+2] = r * Math.cos(p);
            rand[i]    = Math.random();
            phase[i]   = Math.random() * Math.PI * 2;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 1));
        geo.setAttribute('aPhase',   new THREE.BufferAttribute(phase, 1));

        // Shader handles flee via uMouseWorld — no per-particle JS math
        this.obsMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:       { value: 0 },
                uMouseWorld: { value: new THREE.Vector3(9999, 9999, 9999) },
                uFlee:       { value: 0 },  // 0=calm, 1=fleeing
                uPR:         { value: Math.min(this.experience.sizes.pixelRatio, 2) },
            },
            vertexShader: `
                attribute float aRand, aPhase;
                uniform float uTime, uFlee, uPR;
                uniform vec3 uMouseWorld;
                varying float vBright;

                void main(){
                    // Flee: push pos away from mouse world position
                    vec3 p   = position;
                    vec3 dir = p - uMouseWorld;
                    float d  = length(dir);
                    float flee = uFlee * smoothstep(20., 2., d);
                    p += normalize(dir) * flee * 8.0;

                    // Breathing when calm
                    float breathe = 1.0 + sin(uTime * (0.3 + aRand * 0.5) + aPhase) * 0.04 * (1.0 - uFlee);
                    p *= breathe;

                    vBright = mix(
                        0.4 + 0.6 * abs(sin(uTime * 0.6 + aPhase)),  // calm: bright
                        0.05 + aRand * 0.1,                            // fleeing: dim
                        uFlee
                    );

                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    float sz = (0.6 + aRand * 1.2) * uPR * (200.0 / -mv.z);
                    gl_PointSize = clamp(sz, 0.0, 9.0);
                }
            `,
            fragmentShader: `
                varying float vBright;
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vec3(1.0), (1.0 - d * 2.0) * vBright * 0.65);
                }
            `,
            transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        });

        this.obsPoints = new THREE.Points(geo, this.obsMat);
        this.scene.add(this.obsPoints);

        // Observer message element
        

        // Track mouse — update shader uniform (cheap, single uniform update per frame)
        this._mouseNDC = new THREE.Vector2(9999, 9999);
        window.addEventListener('mousemove', e => {
            this._lastActivity = Date.now();
            this._mouseIdle    = 0;
            this._mouseNDC.x   = (e.clientX / window.innerWidth)  * 2 - 1;
            this._mouseNDC.y   = -(e.clientY / window.innerHeight) * 2 + 1;
        });
        window.addEventListener('touchmove', e => {
            this._lastActivity = Date.now();
            this._mouseIdle    = 0;
        }, { passive: true });
    }

    _updateObserver(dt) {
        if (!this.obsMat) return;
        const t = this.experience.time.elapsed;
        this.obsMat.uniforms.uTime.value = t;

        // Update mouse world position for flee shader
        const cam = this.experience.camera?.instance;
        if (cam) {
            const vec = new THREE.Vector3(this._mouseNDC.x, this._mouseNDC.y, 0.5).unproject(cam);
            const dir = vec.sub(cam.position).normalize();
            // Place flee target on a sphere at radius ~35
            const fleePos = cam.position.clone().addScaledVector(dir, cam.position.length() * 0.8);
            this.obsMat.uniforms.uMouseWorld.value.copy(fleePos);
        }

        // Mouse idle tracking
        this._mouseIdle += dt;
        const isIdle = this._mouseIdle > 1.5;
        const targetFlee = isIdle ? 0 : 1;
        const cur = this.obsMat.uniforms.uFlee.value;
        this.obsMat.uniforms.uFlee.value += (targetFlee - cur) * 0.06;

        // Show observer message when calm
        if (this._obsMsg) {
            const opacity = isIdle ? '1' : '0';
            if (this._obsMsg.style.opacity !== opacity) {
                this._obsMsg.style.opacity = opacity;
            }
        }

        // Slow rotation
        this.obsPoints.rotation.y = t * 0.025;
    }

    /* ── 2. HEARTBEAT CANVAS ─────────────────────────────────────────
     * ECG line at bottom. Hidden until Patience Mode.
     ──────────────────────────────────────────────────────────────── */
    _buildHeartbeat() {
        const el = document.createElement('canvas');
        el.id = 'heartbeat-line';
        el.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;height:44px;z-index:8;pointer-events:none;opacity:0;';
        document.body.appendChild(el);
        this._hbEl  = el;
        this._hbEl.width  = window.innerWidth;
        this._hbEl.height = 44;
        this._hbCtx    = el.getContext('2d');
        this._hbPhase  = 0;
        this._hbVisible = false;

        window.addEventListener('resize', () => {
            el.width = window.innerWidth;
        });

        // Click speeds up heart
        window.addEventListener('click', () => {
            if (this.experience.isModalOpen) return;
            this._heartRate = Math.min(170, this._heartRate + 22);
            gsap.to(this, { _heartRate: 60, duration: 3.5, ease: 'power2.out' });
        });
    }

    _drawHeartbeat(dt) {
        if (!this._hbCtx || !this._hbVisible) return;
        const ctx = this._hbCtx;
        const W   = this._hbEl.width, H = 44;
        const bpm = this._heartRate;

        ctx.clearRect(0, 0, W, H);
        ctx.beginPath();
        this._hbPhase += dt * (bpm / 60) * 1.1;

        for (let x = 0; x < W; x++) {
            const t = (x / W) * 6 * Math.PI + this._hbPhase;
            const cy = t % (Math.PI * 2);
            let y = 0;
            // ECG waveform: P → QRS → T
            if      (cy > 0.7  && cy < 0.9)  y = -Math.sin((cy - 0.7) / 0.2 * Math.PI) * 5;
            else if (cy > 1.45 && cy < 1.52) y = 14;
            else if (cy > 1.52 && cy < 1.62) y = -20;
            else if (cy > 1.62 && cy < 1.68) y = 7;
            else if (cy > 1.85 && cy < 2.05) y = -Math.sin((cy - 1.85) / 0.2 * Math.PI) * 7;
            ctx.lineTo(x, H * 0.52 + y);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth   = 1.2;
        ctx.stroke();
    }

    /* ── 3. PATIENCE MODE ────────────────────────────────────────────
     * 30s idle → everything transforms
     ──────────────────────────────────────────────────────────────── */
    _buildPatienceMode() {
        this._patienceEl = document.getElementById('patience-overlay');
        this._patienceMessages = [
            "The world outside is too loud.",
            "But here, in this void, there is only signal.",
            "You found it. Most never stop long enough.",
            "APEX HUMANITY is not a company. It's a reminder.",
            "A reminder to stay human. Even when the algorithm says otherwise.",
            "You are not a user. You are an observer.",
            "And now the universe is watching back.",
        ];
        this._patienceMsgIdx = 0;
    }

    _checkPatience(dt) {
        if (!this.experience._started || this.experience.isModalOpen) return;
        const idle = (Date.now() - this._lastActivity) / 1000;
        if (idle > 30 && !this._patienceActive) {
            this._patienceActive = true;
            this._activatePatienceMode();
        }
    }

    _activatePatienceMode() {
        const el = this._patienceEl;
        if (el) el.classList.add('active');

        // Fade bg music
        const audio = this.experience.audio;
        if (audio?.sounds?.bg) gsap.to(audio.sounds.bg, { volume: 0, duration: 5 });

        // Heartbeat visible
        if (this._hbEl) {
            this._hbVisible = true;
            gsap.to(this._hbEl, { opacity: 1, duration: 2.5 });
        }

        // Slow stars
        const bg = this.experience.world?.background;
        if (bg?.starGroups) bg.starGroups.forEach(s => {
            gsap.to(s.mat.uniforms.uSp, { value: 0.15, duration: 5 });
        });

        // Cycle messages
        const textEl = el?.querySelector('.patience-text');
        const showNext = () => {
            if (!this._patienceActive || !textEl) return;
            if (this._patienceMsgIdx >= this._patienceMessages.length) return;
            gsap.to(textEl, { opacity: 0, duration: 0.8,
                onComplete: () => {
                    textEl.textContent = this._patienceMessages[this._patienceMsgIdx++];
                    gsap.to(textEl, { opacity: 1, duration: 1.5 });
                    if (this._patienceMsgIdx < this._patienceMessages.length)
                        setTimeout(showNext, 4500);
                }
            });
        };
        setTimeout(showNext, 1500);
    }

    _deactivatePatienceMode() {
        this._patienceActive   = false;
        this._patienceMsgIdx   = 0;
        if (this._patienceEl) this._patienceEl.classList.remove('active');
        const audio = this.experience.audio;
        if (audio?.sounds?.bg) gsap.to(audio.sounds.bg, { volume: 0.3, duration: 3 });
        if (this._hbEl) {
            this._hbVisible = false;
            gsap.to(this._hbEl, { opacity: 0, duration: 1 });
        }
        // Restore star speed
        const bg = this.experience.world?.background;
        if (bg?.starGroups) bg.starGroups.forEach(s => {
            gsap.to(s.mat.uniforms.uSp, { value: s.mat.uniforms.uSp._orig || 1.0, duration: 4 });
        });
    }

    /* ── 4. CHROMATIC ABERRATION ─────────────────────────────────────
     * Driven by scroll speed — no canvas draw, pure CSS filter on webgl
     ──────────────────────────────────────────────────────────────── */
    _buildChromaticAberration() {
        // We use a simpler approach: CSS filter on the webgl canvas + a thin overlay
        // This avoids canvas-draw overhead
        this._chromCanvas = document.createElement('div');
        this._chromCanvas.id = 'chrom-overlay';
        this._chromCanvas.style.cssText = 'position:fixed;inset:0;z-index:6;pointer-events:none;opacity:0;background:transparent;';
        // Two pseudo-colored borders that shift
        document.body.appendChild(this._chromCanvas);
    }

    _drawChromatic() {
        const s = this._chromStr;
        if (s < 0.005) {
            if (this._chromCanvas) this._chromCanvas.style.opacity = '0';
            return;
        }
        const px = Math.round(s * 5);
        const canvas = document.querySelector('.webgl');
        if (canvas) {
            canvas.style.filter = s > 0.02
                ? `brightness(1) contrast(1.02)`
                : 'none';
        }
        // Box shadow aberration on overlay div
        if (this._chromCanvas) {
            this._chromCanvas.style.opacity   = String(Math.min(s * 2, 0.6));
            this._chromCanvas.style.boxShadow = `inset ${px}px 0 0 rgba(255,0,0,0.08), inset -${px}px 0 0 rgba(0,0,255,0.08)`;
        }
    }

    /* ── 5. TEAR IN REALITY ──────────────────────────────────────────
     * Click+hold 2s → screen tears revealing warm humanity
     ──────────────────────────────────────────────────────────────── */
    _buildTearEffect() {
        const el = document.createElement('canvas');
        el.id = 'tear-canvas';
        el.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:9;pointer-events:none;opacity:0;';
        document.body.appendChild(el);
        el.width  = window.innerWidth;
        el.height = window.innerHeight;
        window.addEventListener('resize', () => { el.width = window.innerWidth; el.height = window.innerHeight; });
        this._tearCanvas = el;
        this._tearCtx    = el.getContext('2d');

        const onDown = (x, y) => {
            if (this.experience.isModalOpen || this.experience._bhWarping) return;
            this._tearX      = x;
            this._tearY      = y;
            this._tearHolding = true;
            this._tearTimer   = 0;
        };
        const onUp = () => {
            if (!this._tearHolding) return;
            this._tearHolding = false;
            const cur = this._tearProgress;
            if (cur > 0) {
                gsap.to(this, { _tearProgress: 0, duration: 1.5, ease: 'power2.in',
                    onUpdate: () => this._drawTear(),
                    onComplete: () => {
                        this._tearCtx?.clearRect(0, 0, el.width, el.height);
                        gsap.set(el, { opacity: 0 });
                    }
                });
            }
        };
        window.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
        window.addEventListener('mouseup',   onUp);
        window.addEventListener('touchstart', e => onDown(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
        window.addEventListener('touchend',   onUp, { passive: true });
    }

    _drawTear() {
        const ctx = this._tearCtx;
        if (!ctx) return;
        const W = this._tearCanvas.width, H = this._tearCanvas.height;
        const p = this._tearProgress;

        if (p < 0.01) { ctx.clearRect(0, 0, W, H); gsap.set(this._tearCanvas, { opacity: 0 }); return; }
        this._tearCanvas.style.opacity = String(Math.min(1, p * 1.8));
        ctx.clearRect(0, 0, W, H);

        const tx = this._tearX, ty = this._tearY;
        const tearLen = p * Math.max(W, H) * 0.65;
        const segs    = Math.floor(8 + p * 18);

        // Build jagged path
        ctx.save();
        const path = new Path2D();
        path.moveTo(tx, ty - tearLen * 0.5);
        for (let i = 0; i <= segs; i++) {
            const tt = i / segs;
            const jag = (Math.sin(i * 7.3 + p * 3) * 0.5 + (Math.random() - 0.5) * 0.5) * 14 * p;
            path.lineTo(tx + jag, ty - tearLen * 0.5 + tt * tearLen);
        }

        // Warm glow inside tear
        const grd = ctx.createLinearGradient(tx - 35, ty, tx + 35, ty);
        grd.addColorStop(0,   'rgba(255,200,80,0)');
        grd.addColorStop(0.3, `rgba(255,175,55,${p * 0.4})`);
        grd.addColorStop(0.5, `rgba(255,235,180,${p * 0.6})`);
        grd.addColorStop(0.7, `rgba(255,175,55,${p * 0.4})`);
        grd.addColorStop(1,   'rgba(255,200,80,0)');
        ctx.lineWidth   = 2 + p * 18;
        ctx.strokeStyle = grd;
        ctx.shadowColor = `rgba(255,190,60,${p * 0.9})`;
        ctx.shadowBlur  = p * 28;
        ctx.stroke(path);

        // Edge glitch strips
        for (let i = 0; i < 3; i++) {
            const ey = ty - tearLen * 0.4 + Math.random() * tearLen * 0.8;
            ctx.fillStyle = `rgba(255,255,255,${p * 0.12})`;
            ctx.fillRect(tx + (Math.random() - 0.5) * p * 30, ey, Math.random() * p * 28, 1);
        }

        // Text inside tear
        if (p > 0.55) {
            ctx.font    = `${Math.round(9 + p * 4)}px 'Space Mono', monospace`;
            ctx.fillStyle   = `rgba(255,240,200,${(p - 0.55) * 2.2})`;
            ctx.textAlign   = 'center';
            ctx.shadowBlur  = 10;
            ctx.shadowColor = 'rgba(255,200,80,0.9)';
            ctx.fillText('APEX HUMANITY', tx, ty - 9);
            ctx.fillText('still human.', tx, ty + 14);
        }
        ctx.restore();
    }

    /* ── 6. AMBIENT PARTICLE FIELD ───────────────────────────────────
     * Fills 360° space so scene feels alive when camera rotates
     ──────────────────────────────────────────────────────────────── */
    _buildParticleField() {
        const count = this.isMobile ? 350 : 900;
        const geo   = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const rand  = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const r = 65 + Math.random() * 180;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            pos[i*3]   = r * Math.sin(p) * Math.cos(t);
            pos[i*3+1] = r * Math.sin(p) * Math.sin(t);
            pos[i*3+2] = r * Math.cos(p);
            rand[i]    = Math.random();
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 1));

        this.ambientMat = new THREE.ShaderMaterial({
            uniforms: { uTime:{value:0}, uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)} },
            vertexShader: `
                attribute float aRand; uniform float uTime, uPR;
                void main(){
                    vec3 p = position;
                    p.y += sin(uTime * aRand * 0.22 + aRand * 6.28) * 0.7;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.5 + aRand * 0.9) * uPR * (175.0 / -mv.z), 0.0, 5.5);
                }
            `,
            fragmentShader: `
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vec3(1.0), (1.0 - d * 2.0) * 0.1);
                }
            `,
            transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        });
        this.ambientPts = new THREE.Points(geo, this.ambientMat);
        this.scene.add(this.ambientPts);
    }

    /* ── ACTIVITY TRACKING ───────────────────────────────────────── */
    _setupActivityTracking() {
        const reset = () => {
            this._lastActivity = Date.now();
            if (this._patienceActive) this._deactivatePatienceMode();
        };
        ['mousemove','touchstart','keydown','click','wheel'].forEach(ev =>
            window.addEventListener(ev, reset, { passive: true })
        );
    }

    /* ── MAIN UPDATE ─────────────────────────────────────────────── */
    update(dt, scrollProgress) {
        const t = this.experience.time.elapsed;

        // 1. Observer Effect
        this._updateObserver(dt);

        // 2. Heartbeat
        this._drawHeartbeat(dt);

        // 3. Patience check
        this._checkPatience(dt);

        // 4. Tear update (when holding)
        if (this._tearHolding) {
            this._tearTimer   += dt;
            this._tearProgress = Math.min(1, this._tearTimer / 2.2);
            this._drawTear();
        }

        // 5. Chromatic aberration — scroll speed driven
        const scrollDelta = Math.abs((scrollProgress || 0) - this._lastScrollP);
        this._lastScrollP  = scrollProgress || 0;
        const targetChrom  = Math.min(scrollDelta * 90, 1.0);
        this._chromStr    += (targetChrom - this._chromStr) * 0.1;
        this._drawChromatic();

        // 6. Ambient particles
        if (this.ambientMat) {
            this.ambientMat.uniforms.uTime.value = t;
            this.ambientPts.rotation.y = t * 0.007;
        }
    }
}