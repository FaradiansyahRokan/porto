import * as THREE from 'three';
import gsap from 'gsap';
import Experience from '../Experience.js';

/**
 * NeuralNetwork.js — Background Ambient System
 *
 * Lives BEHIND the main scene as a deep background organism.
 * Nodes are placed far back (z = -80 to -180) so they don't
 * interfere with planets. Purely atmospheric. Self-sustaining.
 *
 * What it does:
 * - Organic node drift using layered sines
 * - Flowing energy pulses along curved connections
 * - Ambient signal propagation (fires itself)
 * - Glitch / node disappear-reappear
 * - Double-click anywhere → plants a user memory node
 * - HUD messages when signals fire
 */
export default class NeuralNetwork {
    constructor() {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.isMobile   = this.experience.isMobile;
        this.M          = this.experience.isMobile;

        this.group = new THREE.Group();
        this.scene.add(this.group);

        this._nodes  = [];  // node data
        this._links  = [];  // { ai, bi, mat, pts (static), curve }
        this._pulses = [];  // travelling pulses
        this._pulseMeshPool = []; // recycled pulse meshes

        this._mouse2D   = new THREE.Vector2(9999, 9999);
        this._ray       = new THREE.Raycaster();
        this._lastHover = -1;
        this._hudTimer  = null;
        this._firing    = new Set(); // currently active node indices

        this._buildNodes();
        this._buildConnections();
        this._buildPulsePool();
        this._setupMouse();

        // Start ambient loop after experience starts
        setTimeout(() => this._ambientLoop(), 6000);
        // Hint for user
        setTimeout(() => {
            if (this.experience._started)
                this._showHUD('double-click · plant a memory node');
        }, 12000);
    }

    /* ─────────────────────────────────────────────────────────────────
       NODE PLACEMENT — deep background, z very negative
    ───────────────────────────────────────────────────────────────── */
    _buildNodes() {
        // 5 clusters placed deep behind the scene
        const clusters = [
            { c: new THREE.Vector3(-60,  22, -130), n: 7, r: 20 },
            { c: new THREE.Vector3( 55, -15, -150), n: 6, r: 18 },
            { c: new THREE.Vector3( 10,  40, -110), n: 5, r: 16 },
            { c: new THREE.Vector3(-40, -30, -120), n: 8, r: 22 },
            { c: new THREE.Vector3( 65,  28,  -95), n: 4, r: 15 },
        ];

        clusters.forEach((cl, ci) => {
            for (let k = 0; k < cl.n; k++) {
                const isHub = k === 0;
                const r2    = isHub ? 0 : cl.r;
                const base  = cl.c.clone().add(new THREE.Vector3(
                    (Math.random() - 0.5) * r2 * 2,
                    (Math.random() - 0.5) * r2,
                    (Math.random() - 0.5) * r2 * 0.5  // thin in Z — stays "behind"
                ));

                const nodeIdx = this._nodes.length;
                const sz = isHub ? 1.1 : 0.4 + Math.random() * 0.35;

                // Node material — very subtle, background-friendly
                const mat = new THREE.ShaderMaterial({
                    uniforms: {
                        uTime:   { value: 0 },
                        uEnergy: { value: 0.08 + Math.random() * 0.1 },
                        uActive: { value: 0.0 },
                    },
                    vertexShader: `
                        varying vec3 vN, vVP;
                        void main(){
                            vN = normalize(normalMatrix * normal);
                            vec4 mv = modelViewMatrix * vec4(position, 1.0);
                            vVP = -mv.xyz;
                            gl_Position = projectionMatrix * mv;
                        }`,
                    fragmentShader: `
                        uniform float uTime, uEnergy, uActive;
                        varying vec3 vN, vVP;
                        void main(){
                            vec3 v  = normalize(vVP);
                            float d = max(dot(v, vN), 0.0);
                            float r = pow(1.0 - d, 3.0);
                            float l = (d * 0.5 + r) * (0.06 + uEnergy * 0.7 + uActive * 0.5);
                            gl_FragColor = vec4(vec3(clamp(l, 0.0, 1.0)), 1.0);
                        }`,
                });

                // Glow halo
                const glowMat = new THREE.ShaderMaterial({
                    uniforms: {
                        uEnergy: { value: 0.08 },
                        uActive: { value: 0.0 },
                    },
                    vertexShader:   `varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
                    fragmentShader: `uniform float uEnergy,uActive;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),3.5);gl_FragColor=vec4(vec3(1.),f*(0.06+uEnergy*0.12+uActive*0.28));}`,
                    transparent: true, blending: THREE.AdditiveBlending,
                    depthWrite: false, side: THREE.FrontSide,
                });

                const mesh     = new THREE.Mesh(new THREE.SphereGeometry(sz,      10, 10), mat);
                const glowMesh = new THREE.Mesh(new THREE.SphereGeometry(sz * 2.8, 10, 10), glowMat);
                mesh.position.copy(base);
                glowMesh.position.copy(base);
                mesh.userData.nnIdx = nodeIdx;

                this.group.add(mesh);
                this.group.add(glowMesh);

                this._nodes.push({
                    base, pos: base.clone(), cluster: ci, isHub,
                    energy: 0.08 + Math.random() * 0.1,
                    mesh, glowMesh, mat, glowMat,
                    np: Math.random() * Math.PI * 2,       // noise phase
                    ns: 0.10 + Math.random() * 0.15,       // noise speed
                    gc: 6 + Math.random() * 14,             // glitch cooldown
                    gt: Math.random() * 10,                 // glitch timer
                    isUser: false,
                });
            }
        });
    }

    /* ─────────────────────────────────────────────────────────────────
       CONNECTIONS — curved splines, very dim
    ───────────────────────────────────────────────────────────────── */
    _buildConnections() {
        const ns = this._nodes;
        ns.forEach((a, i) => {
            ns.forEach((b, j) => {
                if (i >= j) return;
                const dist = a.base.distanceTo(b.base);
                const same = a.cluster === b.cluster;
                const hubs = a.isHub && b.isHub;
                if (dist > 80) return;
                if (!same && !hubs && dist > 60) return;
                this._addLink(i, j);
            });
        });
    }

    _addLink(ai, bi) {
        const a   = this._nodes[ai];
        const b   = this._nodes[bi];
        const mid = a.base.clone().lerp(b.base, 0.5).add(new THREE.Vector3(
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 8
        ));

        // We store the curve for pulse travel
        const curve = new THREE.QuadraticBezierCurve3(
            a.base.clone(), mid.clone(), b.base.clone()
        );
        const pts  = curve.getPoints(60);
        const geo  = new THREE.BufferGeometry().setFromPoints(pts);

        // Progress attribute for pulse shader
        const prog = new Float32Array(pts.length);
        pts.forEach((_, k) => prog[k] = k / (pts.length - 1));
        geo.setAttribute('aP', new THREE.BufferAttribute(prog, 1));

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:  { value: 0 },
                uFlow:  { value: Math.random() * 6.28 },
                uEnergy:{ value: 0.06 },
            },
            vertexShader: `
                attribute float aP;
                varying float vP;
                void main(){
                    vP = aP;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }`,
            fragmentShader: `
                uniform float uTime, uFlow, uEnergy;
                varying float vP;
                void main(){
                    float spd = 0.35 + uEnergy * 0.5;
                    float p1  = fract(vP * 2.5 - uTime * spd + uFlow);
                    float p2  = fract(vP * 2.5 - uTime * spd + uFlow - 0.4);
                    float b1  = smoothstep(0.0, 0.08, p1) * smoothstep(0.22, 0.09, p1);
                    float b2  = smoothstep(0.0, 0.08, p2) * smoothstep(0.22, 0.09, p2) * 0.5;
                    float base  = 0.015 + uEnergy * 0.04;
                    float pulse = b1 + b2;
                    gl_FragColor = vec4(vec3(0.75 + pulse * 0.25), base + pulse * 0.32);
                }`,
            transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        });

        const line = new THREE.Line(geo, mat);
        this.group.add(line);
        this._links.push({ ai, bi, mat, curve, line });
    }

    /* ─────────────────────────────────────────────────────────────────
       PULSE POOL — reusable small spheres for travelling signals
    ───────────────────────────────────────────────────────────────── */
    _buildPulsePool() {
        const geo = new THREE.SphereGeometry(0.22, 6, 6);
        // Pre-create 20 pulse meshes, reuse them
        for (let i = 0; i < 20; i++) {
            const mat = new THREE.ShaderMaterial({
                uniforms: { uA: { value: 0.0 } },
                vertexShader:   `varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
                fragmentShader: `uniform float uA;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),2.2);float d=max(dot(normalize(vVP),vN),0.)*.6;gl_FragColor=vec4(vec3(1.),(f+d)*uA);}`,
                transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.visible = false;
            this.group.add(mesh);
            this._pulseMeshPool.push({ mesh, mat, inUse: false });
        }
    }

    _getPooledPulse() {
        return this._pulseMeshPool.find(p => !p.inUse) || null;
    }

    /* ─────────────────────────────────────────────────────────────────
       SIGNAL FIRE — propagate through network
    ───────────────────────────────────────────────────────────────── */
    _fire(idx, depth = 0) {
        if (depth > 3) return;
        if (this._firing.has(idx + '_' + depth)) return;
        this._firing.add(idx + '_' + depth);
        setTimeout(() => this._firing.delete(idx + '_' + depth), 3000);

        const n = this._nodes[idx];
        if (!n) return;

        // Flash node
        gsap.killTweensOf(n.mat.uniforms.uActive);
        gsap.killTweensOf(n.glowMat.uniforms.uActive);
        gsap.to(n.mat.uniforms.uActive,     { value: 1.0, duration: 0.2, ease: 'power2.out' });
        gsap.to(n.glowMat.uniforms.uActive, { value: 1.0, duration: 0.2, ease: 'power2.out' });
        gsap.to(n.mat.uniforms.uActive,     { value: 0.0, duration: 1.4, delay: 0.25, ease: 'power2.in' });
        gsap.to(n.glowMat.uniforms.uActive, { value: 0.0, duration: 1.4, delay: 0.25, ease: 'power2.in' });

        // Find connected links and propagate
        const connected = this._links.filter(l => l.ai === idx || l.bi === idx);
        connected.forEach((link, k) => {
            const delay = depth * 160 + k * 55;
            setTimeout(() => {
                // Energize line briefly
                gsap.to(link.mat.uniforms.uEnergy, {
                    value: 0.75, duration: 0.3,
                    onComplete: () => gsap.to(link.mat.uniforms.uEnergy, { value: 0.06, duration: 2.0 })
                });

                // Spawn travelling pulse
                const pooled = this._getPooledPulse();
                if (pooled) {
                    pooled.inUse = true;
                    pooled.mesh.visible = true;
                    this._pulses.push({
                        pooled,
                        curve:  link.curve,
                        t:      0,
                        spd:    0.009 + Math.random() * 0.012,
                        rev:    link.bi === idx,
                    });
                }

                // Propagate deeper
                const nextIdx = link.ai === idx ? link.bi : link.ai;
                this._fire(nextIdx, depth + 1);

                // HUD occasionally
                if (depth === 0 && Math.random() < 0.2) {
                    const msgs = [
                        'Synaptic fire detected.', 'Signal propagating.',
                        'Memory fragment accessed.', 'Pattern recognized.',
                        'Neural cascade.', 'Recalibrating.', 'Processing...',
                    ];
                    this._showHUD(msgs[Math.floor(Math.random() * msgs.length)]);
                }
            }, delay);
        });
    }

    /* ─────────────────────────────────────────────────────────────────
       AMBIENT LOOP — network breathes on its own
    ───────────────────────────────────────────────────────────────── */
    _ambientLoop() {
        const tick = () => {
            if (this.experience._started) {
                const idx = Math.floor(Math.random() * this._nodes.length);
                this._fire(idx);
            }
            setTimeout(tick, 2000 + Math.random() * 3500);
        };
        tick();
    }

    /* ─────────────────────────────────────────────────────────────────
       MOUSE — hover fires nearest node
    ───────────────────────────────────────────────────────────────── */
    _setupMouse() {
        window.addEventListener('mousemove', e => {
            this._mouse2D.x =  (e.clientX / window.innerWidth)  * 2 - 1;
            this._mouse2D.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Double-click → plant user node
        window.addEventListener('dblclick', e => {
            if (this.experience.isModalOpen) return;
            this._plantNode(e.clientX, e.clientY);
        });

        // Mobile double-tap
        let lastTap = 0;
        window.addEventListener('touchend', e => {
            const now = Date.now();
            if (now - lastTap < 350 && e.changedTouches.length === 1) {
                this._plantNode(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            }
            lastTap = now;
        }, { passive: true });
    }

    /* ─────────────────────────────────────────────────────────────────
       PLANT NODE — Feed the Brain
    ───────────────────────────────────────────────────────────────── */
    _plantNode(sx, sy) {
        const cam = this.experience.camera?.instance;
        if (!cam) return;

        // Place in background — z range matching other nodes
        const ndc = new THREE.Vector3(
            (sx / window.innerWidth)  * 2 - 1,
            -(sy / window.innerHeight) * 2 + 1,
            0.9   // deep into scene
        ).unproject(cam);
        const dir = ndc.sub(cam.position).normalize();
        // Place at a fixed distance that puts it in the background cluster range
        const pos = cam.position.clone().addScaledVector(dir, 130);
        // Clamp z so it stays in background
        pos.z = Math.min(pos.z, -80);

        const idx = this._nodes.length;
        const sz  = 0.55;

        const mat = new THREE.ShaderMaterial({
            uniforms: { uTime:{value:0}, uEnergy:{value:1.0}, uActive:{value:1.0} },
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uTime,uEnergy,uActive;varying vec3 vN,vVP;void main(){vec3 v=normalize(vVP);float d=max(dot(v,vN),0.);float r=pow(1.-d,3.);float l=(d*.5+r)*(0.06+uEnergy*.7+uActive*.5);gl_FragColor=vec4(vec3(clamp(l,0.,1.)),1.);}`,
        });
        const glowMat = new THREE.ShaderMaterial({
            uniforms: { uEnergy:{value:1.0}, uActive:{value:1.0} },
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uEnergy,uActive;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),3.5);gl_FragColor=vec4(vec3(1.),f*(0.06+uEnergy*.12+uActive*.28));}`,
            transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.FrontSide,
        });

        const mesh     = new THREE.Mesh(new THREE.SphereGeometry(sz,      10, 10), mat);
        const glowMesh = new THREE.Mesh(new THREE.SphereGeometry(sz * 2.8, 10, 10), glowMat);
        mesh.position.copy(pos);
        glowMesh.position.copy(pos);
        mesh.scale.setScalar(0);
        glowMesh.scale.setScalar(0);
        mesh.userData.nnIdx = idx;

        this.group.add(mesh);
        this.group.add(glowMesh);

        this._nodes.push({
            base: pos.clone(), pos: pos.clone(),
            cluster: -1, isHub: false,
            energy: 1.0, mat, glowMat, mesh, glowMesh,
            np: Math.random() * Math.PI * 2,
            ns: 0.12 + Math.random() * 0.15,
            gc: 99, gt: 0, isUser: true,
        });

        // Pop in
        gsap.to(mesh.scale,     { x:1, y:1, z:1, duration:0.6, ease:'back.out(2)' });
        gsap.to(glowMesh.scale, { x:1, y:1, z:1, duration:0.6, ease:'back.out(2)' });

        // Connect to nearest 3
        this._nodes.slice(0, -1)
            .map((n, i) => ({ d: n.base.distanceTo(pos), i }))
            .sort((a, b) => a.d - b.d)
            .slice(0, 3)
            .forEach(({ i }) => this._addLink(idx, i));

        // Fire from this node
        this._fire(idx);

        // HUD
        const msgs = [
            'Memory synthesized...', 'A new soul connected...',
            'Reality updated.', 'Node recognized. Welcome.',
            'Signal integrated.', 'The network grows.',
        ];
        this._showHUD(msgs[Math.floor(Math.random() * msgs.length)]);

        // Fade active
        setTimeout(() => {
            gsap.to(mat.uniforms.uActive,     { value:0, duration:3 });
            gsap.to(glowMat.uniforms.uActive, { value:0, duration:3 });
        }, 2500);
    }

    /* ─────────────────────────────────────────────────────────────────
       HUD
    ───────────────────────────────────────────────────────────────── */
    _showHUD(text) {
        let el = document.getElementById('nn-hud-msg');
        if (!el) {
            el = document.createElement('div');
            el.id = 'nn-hud-msg';
            el.style.cssText = [
                'position:fixed', 'bottom:52px', 'left:50%',
                'transform:translateX(-50%)',
                'font-family:"Space Mono",monospace',
                'font-size:.54rem', 'letter-spacing:.2em',
                'text-transform:uppercase', 'color:rgba(255,255,255,.38)',
                'z-index:12', 'pointer-events:none',
                'opacity:0', 'transition:opacity .4s ease',
                'white-space:nowrap',
            ].join(';');
            document.body.appendChild(el);
        }
        el.textContent = text;
        el.style.opacity = '1';
        clearTimeout(this._hudTimer);
        this._hudTimer = setTimeout(() => { el.style.opacity = '0'; }, 3200);
    }

    /* ─────────────────────────────────────────────────────────────────
       UPDATE — called every frame from World.js
    ───────────────────────────────────────────────────────────────── */
    update() {
        const t   = this.experience.time.elapsed;
        const dt  = Math.min(this.experience.time.delta / 1000, 0.05);
        const cam = this.experience.camera?.instance;

        // ── Mouse proximity → fire closest node ──
        if (cam && !this.experience.isModalOpen) {
            this._ray.setFromCamera(this._mouse2D, cam);
            const ray = this._ray.ray;

            let closestDist = 12;
            let closestIdx  = -1;
            this._nodes.forEach((n, i) => {
                const d = ray.distanceToPoint(n.pos);
                if (d < closestDist) { closestDist = d; closestIdx = i; }
            });

            if (closestIdx !== -1 && closestIdx !== this._lastHover) {
                this._lastHover = closestIdx;
                this._fire(closestIdx);
            } else if (closestIdx === -1) {
                this._lastHover = -1;
            }
        }

        // ── Node drift — organic Perlin-like motion ──
        this._nodes.forEach(n => {
            if (!n.mesh) return;

            const dx = Math.sin(t * n.ns        + n.np)       * 1.2;
            const dy = Math.sin(t * n.ns * 1.28 + n.np + 1.1) * 0.8;
            const dz = Math.sin(t * n.ns * 0.71 + n.np + 2.2) * 0.5;
            n.pos.set(n.base.x + dx, n.base.y + dy, n.base.z + dz);
            n.mesh.position.copy(n.pos);
            if (n.glowMesh) n.glowMesh.position.copy(n.pos);

            // Energy drift
            const base = 0.06 + Math.sin(t * n.ns * 0.4 + n.np) * 0.05;
            n.energy += (base - n.energy) * 0.012;
            if (n.mat) {
                n.mat.uniforms.uEnergy.value = n.energy;
                n.mat.uniforms.uTime.value   = t;
            }
            if (n.glowMat) n.glowMat.uniforms.uEnergy.value = n.energy;

            // Glitch
            n.gt += dt;
            if (n.gt > n.gc) {
                n.gt = 0;
                n.gc = 6 + Math.random() * 14;
                if (Math.random() < 0.09) {
                    const snap = n.pos.clone().add(new THREE.Vector3(
                        (Math.random() - 0.5) * 4,
                        (Math.random() - 0.5) * 4,
                        (Math.random() - 0.5) * 2
                    ));
                    n.mesh.position.copy(snap);
                    if (n.glowMesh) n.glowMesh.position.copy(snap);
                    setTimeout(() => {
                        if (n.mesh) n.mesh.position.copy(n.pos);
                        if (n.glowMesh) n.glowMesh.position.copy(n.pos);
                    }, 55 + Math.random() * 90);
                }
            }
        });

        // ── Line time ──
        this._links.forEach(l => { if (l.mat) l.mat.uniforms.uTime.value = t; });

        // ── Pulse travel ──
        for (let i = this._pulses.length - 1; i >= 0; i--) {
            const p = this._pulses[i];
            p.t += p.spd;

            if (p.t >= 1) {
                // Return to pool
                p.pooled.mesh.visible = false;
                p.pooled.inUse = false;
                this._pulses.splice(i, 1);
                continue;
            }

            const frac = p.rev ? 1 - p.t : p.t;
            p.pooled.mesh.position.copy(p.curve.getPoint(frac));

            // Alpha: full → fade at tail
            const alpha = 1 - Math.pow(Math.max(0, p.t - 0.65) / 0.35, 2);
            p.pooled.mat.uniforms.uA.value = alpha;
        }

        // ── Subtle group rotation — makes it feel alive from all angles ──
        this.group.rotation.y = t * 0.006;
        this.group.rotation.x = Math.sin(t * 0.038) * 0.03;
    }
}