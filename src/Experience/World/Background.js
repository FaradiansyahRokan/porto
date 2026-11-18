import * as THREE from 'three';
import gsap from 'gsap';
import Experience from '../Experience.js';

/**
 * Background — The Living Spacetime Sanctuary.
 * Features:
 * 1. Interactive 3D Spacetime Gravity Well Grid (deforms under singularity + cursor)
 * 2. Colossal Citadel Megastructure Rings (counter-rotating architectural rings)
 * 3. Paradigm-Reactive Starfield, Spiral Arms & Quantum Dust
 */
export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.M          = this.experience.isMobile;
        this.PR         = Math.min(this.experience.sizes.pixelRatio, 2);

        this.pulsarMats  = [];
        this.citadelRings = [];

        this.primaryColor   = new THREE.Color('#e2c799');
        this.secondaryColor = new THREE.Color('#94a3b8');

        this._buildSpacetimeGrid();
        this._buildCitadelMegastructure();
        this._stars();
        this._galaxyDisk();
        this._cosmicDust();
        this._pulsars();
    }

    _pts(geo, mat) {
        const p = new THREE.Points(geo, mat);
        this.scene.add(p);
        return p;
    }

    /* ── 1. INTERACTIVE 3D SPACETIME GRAVITY GRID ──────────────────── */
    _buildSpacetimeGrid() {
        const segs = this.M ? 64 : 110;
        const size = 340;
        const geo  = new THREE.PlaneGeometry(size, size, segs, segs);
        geo.rotateX(-Math.PI / 2);

        this.gridMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:        { value: 0 },
                uCursorWorld: { value: new THREE.Vector3(0, 999, 0) },
                uPulse:       { value: 0 },
                uColorA:      { value: new THREE.Color('#e2c799') },
                uColorB:      { value: new THREE.Color('#94a3b8') }
            },
            vertexShader: `
                uniform float uTime, uPulse;
                uniform vec3 uCursorWorld;
                varying vec3 vWorldPos;
                varying float vWell, vCursorLift, vRadius;

                void main() {
                    vec3 p = position;
                    float r = length(p.xz);
                    vRadius = r;

                    // Central Singularity gravity funnel
                    float well = -26.0 * exp(-r * r / 1100.0);
                    // Travelling gravitational ripples from the core
                    float wave = sin(r * 0.16 - uTime * 1.8) * 1.15 * exp(-r * 0.008);
                    // Shockwave pulse when user triggers core pulse or switches paradigm
                    float shock = sin(r * 0.25 - uPulse * 12.0) * uPulse * 5.5 * exp(-r * 0.012);

                    // Cursor gravitational distortion
                    float cd = length(p.xz - uCursorWorld.xz);
                    float cursorWarp = 5.5 * exp(-cd * cd / 260.0) * sin(uTime * 3.0 + cd * 0.3);

                    p.y += well + wave + shock + cursorWarp - 22.0;

                    vWell = clamp((-well) / 26.0, 0.0, 1.0);
                    vCursorLift = exp(-cd * cd / 320.0);
                    vWorldPos = p;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform vec3 uColorA, uColorB;
                varying vec3 vWorldPos;
                varying float vWell, vCursorLift, vRadius;

                void main() {
                    // Procedural architectural coordinate grid + concentric range rings
                    vec2 coord = vWorldPos.xz * 0.18;
                    vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
                    float line = min(grid.x, grid.y);
                    float gridMask = 1.0 - min(line, 1.0);

                    // Concentric radar rings every 22 units
                    float rCoord = vRadius * 0.055;
                    float rLine = abs(fract(rCoord - 0.5) - 0.5) / fwidth(rCoord);
                    float ringMask = 1.0 - min(rLine, 1.0);

                    float combined = max(gridMask * 0.65, ringMask * 0.85);

                    // Radial fade at horizon
                    float edgeFade = smoothstep(165.0, 35.0, vRadius);

                    vec3 col = mix(uColorB, uColorA, clamp(vWell * 1.4 + vCursorLift * 0.8, 0.0, 1.0));
                    col = mix(col, vec3(1.0), vCursorLift * 0.55);

                    float alpha = combined * edgeFade * (0.14 + vWell * 0.42 + vCursorLift * 0.55);
                    if (alpha < 0.008) discard;

                    gl_FragColor = vec4(col, alpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.spacetimeMesh = new THREE.Mesh(geo, this.gridMat);
        this.scene.add(this.spacetimeMesh);
    }

    /* ── 2. COLOSSAL CITADEL MEGASTRUCTURE RINGS ───────────────────── */
    _buildCitadelMegastructure() {
        this.citadelGroup = new THREE.Group();
        this.scene.add(this.citadelGroup);

        const configs = [
            { r: 58,  tube: 0.12, segs: 180, rx: Math.PI * 0.42, rz: 0.18,  spd: 0.0018,  col: this.primaryColor,   op: 0.24 },
            { r: 78,  tube: 0.09, segs: 200, rx: -Math.PI * 0.3, rz: -0.35, spd: -0.0012, col: this.secondaryColor, op: 0.18 },
            { r: 105, tube: 0.14, segs: 220, rx: Math.PI * 0.15, rz: 0.52,  spd: 0.0008,  col: this.primaryColor,   op: 0.14 },
            { r: 145, tube: 0.18, segs: 240, rx: Math.PI * 0.5,  rz: 0.05,  spd: -0.0005, col: this.secondaryColor, op: 0.12 }
        ];

        configs.forEach((c, idx) => {
            const ringGroup = new THREE.Group();
            ringGroup.rotation.x = c.rx;
            ringGroup.rotation.z = c.rz;

            // Main architectural torus
            const torusGeo = new THREE.TorusGeometry(c.r, c.tube, 8, c.segs);
            const torusMat = new THREE.MeshBasicMaterial({
                color: c.col.clone(),
                transparent: true,
                opacity: c.op,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            const torus = new THREE.Mesh(torusGeo, torusMat);
            ringGroup.add(torus);

            // Tick marks around the megastructure ring
            const tickPts = [];
            const tickCount = 72 + idx * 24;
            for (let i = 0; i < tickCount; i++) {
                const a = (i / tickCount) * Math.PI * 2;
                const len = (i % 6 === 0) ? 2.8 : 1.1;
                tickPts.push(
                    new THREE.Vector3(Math.cos(a) * (c.r - len), Math.sin(a) * (c.r - len), 0),
                    new THREE.Vector3(Math.cos(a) * (c.r + len), Math.sin(a) * (c.r + len), 0)
                );
            }
            const tickGeo = new THREE.BufferGeometry().setFromPoints(tickPts);
            const tickMat = new THREE.LineBasicMaterial({
                color: c.col.clone(),
                transparent: true,
                opacity: c.op * 0.85,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            ringGroup.add(new THREE.LineSegments(tickGeo, tickMat));

            this.citadelGroup.add(ringGroup);
            this.citadelRings.push({ group: ringGroup, torusMat, tickMat, spd: c.spd, isPrimary: idx % 2 === 0 });
        });

        // Vertical Singularity Axis Beam
        const beamPts = [new THREE.Vector3(0, -180, 0), new THREE.Vector3(0, 180, 0)];
        this.axisBeamMat = new THREE.LineBasicMaterial({
            color: this.primaryColor.clone(),
            transparent: true,
            opacity: 0.18,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.citadelGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(beamPts), this.axisBeamMat));
    }

    /* ── 3. STARS & SPIRAL GALAXY ──────────────────────────────────── */
    _stars() {
        this.starGroups = [];
        const M = this.M;
        [
            { n: M ? 3500 : 9000, r0: 320, r1: 780, s0: 0.4, s1: 1.3, sp: 1.0, a: 0.8 },
            { n: M ? 1100 : 2600, r0: 160, r1: 360, s0: 0.7, s1: 2.2, sp: 1.6, a: 0.9 },
            { n: M ? 200  : 520,  r0: 65,  r1: 240, s0: 1.4, s1: 4.2, sp: 2.2, a: 1.0 }
        ].forEach(c => {
            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(c.n * 3);
            const sz  = new Float32Array(c.n);
            const ph  = new Float32Array(c.n);
            for (let i = 0; i < c.n; i++) {
                const r = c.r0 + Math.random() * (c.r1 - c.r0);
                const t = Math.random() * Math.PI * 2;
                const p = Math.acos(2 * Math.random() - 1);
                pos[i * 3]     = r * Math.sin(p) * Math.cos(t);
                pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
                pos[i * 3 + 2] = r * Math.cos(p);
                sz[i] = c.s0 + Math.random() * (c.s1 - c.s0);
                ph[i] = Math.random() * Math.PI * 2;
            }
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            geo.setAttribute('aSize',    new THREE.BufferAttribute(sz, 1));
            geo.setAttribute('aPhase',   new THREE.BufferAttribute(ph, 1));

            const mat = new THREE.ShaderMaterial({
                uniforms: {
                    uTime:   { value: 0 },
                    uPR:     { value: this.PR },
                    uA:      { value: c.a },
                    uSp:     { value: c.sp },
                    uColorA: { value: new THREE.Color('#e2c799') },
                    uColorB: { value: new THREE.Color('#94a3b8') }
                },
                vertexShader: `
                    attribute float aSize, aPhase;
                    uniform float uTime, uPR, uSp;
                    varying float vT, vPhase;
                    void main() {
                        vPhase = fract(aPhase * 0.318);
                        vT = 0.35 + 0.65 * abs(sin(uTime * uSp + aPhase));
                        vec4 mv = modelViewMatrix * vec4(position, 1.0);
                        gl_Position = projectionMatrix * mv;
                        gl_PointSize = clamp(aSize * uPR * vT * (340.0 / -mv.z), 0.0, 11.0);
                    }
                `,
                fragmentShader: `
                    uniform float uA;
                    uniform vec3 uColorA, uColorB;
                    varying float vT, vPhase;
                    void main() {
                        float d = length(gl_PointCoord - 0.5);
                        if (d > 0.5) discard;
                        float a = (1.0 - d * 2.0) * vT * uA;
                        vec3 tint = mix(uColorB, uColorA, step(0.62, vPhase));
                        vec3 col  = mix(vec3(0.92, 0.96, 1.0), tint, 0.45);
                        gl_FragColor = vec4(col, a);
                    }
                `,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });
            const p = this._pts(geo, mat);
            this.starGroups.push({ pts: p, mat });
        });
    }

    _galaxyDisk() {
        const n = this.M ? 3000 : 7500;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(n * 3);
        const rand = new Float32Array(n);
        for (let i = 0; i < n; i++) {
            const arm = i % 3;
            const t = Math.random();
            const r = 65 + t * 520;
            const a = (t * Math.PI * 4 + arm * Math.PI * 2 / 3) + (Math.random() - 0.5) * ((1 - t) * 0.38 + 0.04) * 2;
            pos[i * 3]     = r * Math.cos(a);
            pos[i * 3 + 1] = (Math.random() - 0.5) * r * 0.05 - 18;
            pos[i * 3 + 2] = r * Math.sin(a);
            rand[i] = Math.random();
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 1));
        this.galMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:   { value: 0 },
                uPR:     { value: this.PR },
                uColorA: { value: new THREE.Color('#e2c799') },
                uColorB: { value: new THREE.Color('#94a3b8') }
            },
            vertexShader: `
                attribute float aRand;
                uniform float uTime, uPR;
                varying float vR, vRd;
                void main() {
                    vRd = aRand;
                    float r = length(position.xz);
                    float angle = atan(position.z, position.x) + uTime * 0.015 / max(r * 0.006, 1.0);
                    vec3 p = vec3(cos(angle) * r, position.y, sin(angle) * r);
                    vR = r;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.4 + aRand * 1.2) * (1.0 - r / 580.0) * uPR * 240.0 / -mv.z, 0.0, 5.5);
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA, uColorB;
                varying float vR, vRd;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    float a = (1.0 - d * 2.0) * (1.0 - vR / 580.0) * (0.22 + vRd * 0.4);
                    vec3 col = mix(uColorA, uColorB, clamp(vR / 360.0, 0.0, 1.0));
                    gl_FragColor = vec4(mix(col, vec3(1.0), 0.35), a);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        this.galDisk = this._pts(geo, this.galMat);
    }

    _cosmicDust() {
        const n = this.M ? 1400 : 3500;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(n * 3);
        const rand = new Float32Array(n);
        for (let i = 0; i < n; i++) {
            const r = 18 + Math.random() * 240;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            pos[i * 3]     = r * Math.sin(p) * Math.cos(t);
            pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
            pos[i * 3 + 2] = r * Math.cos(p);
            rand[i] = Math.random();
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 1));
        this.dustMat = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uPR: { value: this.PR } },
            vertexShader: `
                attribute float aRand;
                uniform float uTime, uPR;
                void main() {
                    vec3 p = position;
                    p.y += sin(uTime * aRand * 0.45 + aRand * 6.28) * 0.9;
                    p.x += cos(uTime * aRand * 0.35 + aRand * 3.14) * 0.6;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.6 + aRand * 1.4) * uPR * (165.0 / -mv.z), 0.0, 6.5);
                }
            `,
            fragmentShader: `
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vec3(0.82, 0.9, 1.0), (1.0 - d * 2.0) * 0.16);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        this.dustPts = this._pts(geo, this.dustMat);
    }

    _pulsars() {
        this.pGroup = new THREE.Group();
        this.scene.add(this.pGroup);
        [
            { p: new THREE.Vector3(280, 75, -360), ph: 0 },
            { p: new THREE.Vector3(-390, -55, 180), ph: 2.1 }
        ].forEach(({ p, ph }) => {
            const mat = new THREE.ShaderMaterial({
                uniforms: { uTime: { value: 0 }, uPh: { value: ph } },
                vertexShader: `attribute float aT; varying float vT; void main(){ vT=aT; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
                fragmentShader: `uniform float uTime,uPh; varying float vT; void main(){ float pulse=pow(abs(sin(uTime*3.+uPh)),10.)*1.5; gl_FragColor=vec4(vec3(0.7,0.9,1.),(1.-vT)*.075*pulse); }`,
                transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
            });
            [-1, 1].forEach(d => {
                const pts = [], dir = new THREE.Vector3(d, 0.04 * d, 0.07).normalize();
                for (let i = 0; i <= 50; i++) pts.push(p.clone().addScaledVector(dir, (i / 50) * 520));
                const geo = new THREE.BufferGeometry().setFromPoints(pts);
                const tA = new Float32Array(51);
                for (let i = 0; i <= 50; i++) tA[i] = i / 50;
                geo.setAttribute('aT', new THREE.BufferAttribute(tA, 1));
                this.pGroup.add(new THREE.Line(geo, mat));
            });
            this.pulsarMats.push({ mat });
        });
    }

    /* ── PARADIGM SHIFT TRANSITION ─────────────────────────────────── */
    setParadigmPalette(hexA, hexB) {
        const colA = new THREE.Color(hexA);
        const colB = new THREE.Color(hexB);

        // Trigger shockwave ripple on the spacetime grid
        if (this.gridMat) {
            this.gridMat.uniforms.uPulse.value = 1.0;
            gsap.to(this.gridMat.uniforms.uPulse, { value: 0, duration: 2.2, ease: 'power2.out', overwrite: 'auto' });
            gsap.to(this.gridMat.uniforms.uColorA.value, { r: colA.r, g: colA.g, b: colA.b, duration: 1.2 });
            gsap.to(this.gridMat.uniforms.uColorB.value, { r: colB.r, g: colB.g, b: colB.b, duration: 1.2 });
        }

        if (this.galMat) {
            gsap.to(this.galMat.uniforms.uColorA.value, { r: colA.r, g: colA.g, b: colA.b, duration: 1.2 });
            gsap.to(this.galMat.uniforms.uColorB.value, { r: colB.r, g: colB.g, b: colB.b, duration: 1.2 });
        }

        this.starGroups.forEach(s => {
            gsap.to(s.mat.uniforms.uColorA.value, { r: colA.r, g: colA.g, b: colA.b, duration: 1.2 });
            gsap.to(s.mat.uniforms.uColorB.value, { r: colB.r, g: colB.g, b: colB.b, duration: 1.2 });
        });

        this.citadelRings.forEach(r => {
            const target = r.isPrimary ? colA : colB;
            gsap.to(r.torusMat.color, { r: target.r, g: target.g, b: target.b, duration: 1.2 });
            gsap.to(r.tickMat.color,  { r: target.r, g: target.g, b: target.b, duration: 1.2 });
        });

        if (this.axisBeamMat) {
            gsap.to(this.axisBeamMat.color, { r: colA.r, g: colA.g, b: colA.b, duration: 1.2 });
        }
    }

    triggerGridPulse(strength = 1.0) {
        if (!this.gridMat) return;
        this.gridMat.uniforms.uPulse.value = strength;
        gsap.to(this.gridMat.uniforms.uPulse, { value: 0, duration: 1.8, ease: 'power2.out', overwrite: 'auto' });
    }

    update(cursorWorldPos) {
        const t = this.experience.time.elapsed;

        if (this.gridMat) {
            this.gridMat.uniforms.uTime.value = t;
            if (cursorWorldPos) {
                this.gridMat.uniforms.uCursorWorld.value.lerp(cursorWorldPos, 0.12);
            }
        }

        this.citadelRings.forEach(r => {
            r.group.rotation.z += r.spd;
            r.group.rotation.y += r.spd * 0.35;
        });

        this.starGroups.forEach((s, i) => {
            s.mat.uniforms.uTime.value = t;
            s.pts.rotation.y = t * (0.0011 - i * 0.0003);
            s.pts.rotation.x = t * 0.00018;
        });

        if (this.galMat) this.galMat.uniforms.uTime.value = t;
        if (this.dustMat) {
            this.dustMat.uniforms.uTime.value = t;
            this.dustPts.rotation.y = -t * 0.002;
        }
        this.pulsarMats.forEach(p => { p.mat.uniforms.uTime.value = t; });
        if (this.pGroup) this.pGroup.rotation.y = t * 0.025;
    }
}
