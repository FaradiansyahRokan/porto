import * as THREE from 'three';
import gsap from 'gsap';
import Experience from '../Experience.js';

/**
 * Background — Interstellar Physical Environment.
 * Features:
 * 1. Keplerian Accretion & Gravitational Lensing Halo (inner orbits faster: w ~ r^-1.5)
 * 2. Volumetric Deep-Space Nebula Veils (soft FBM atmospheric depth)
 * 3. Silky Spacetime Curvature Contours (calm, liquid-like gravitational ripples)
 * 4. Blackbody Starfield & 3-Arm Spiral Galaxy
 */
export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.M          = this.experience.isMobile;
        this.PR         = Math.min(this.experience.sizes.pixelRatio, 2);

        this.pulsarMats   = [];
        this.citadelRings = [];

        this.primaryColor   = new THREE.Color('#e2c799');
        this.secondaryColor = new THREE.Color('#94a3b8');

        this._buildNebulaVeils();
        this._buildSpacetimeContainment();
        this._buildKeplerianHalo();
        this._buildCitadelRings();
        this._stars();
        this._galaxyDisk();
        this._cosmicDust();
    }

    _pts(geo, mat) {
        const p = new THREE.Points(geo, mat);
        this.scene.add(p);
        return p;
    }

    /* ── 1. VOLUMETRIC DEEP-SPACE NEBULA VEILS ─────────────────────── */
    _buildNebulaVeils() {
        const count = this.M ? 28 : 56;
        const geo   = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const sz    = new Float32Array(count);
        const seed  = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const r = 130 + Math.random() * 240;
            const theta = Math.random() * Math.PI * 2;
            const phi   = Math.acos(2 * Math.random() - 1);
            pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = (r * Math.cos(phi)) * 0.42; // Flattened cosmic plane
            pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
            sz[i]   = 180 + Math.random() * 220;
            seed[i] = Math.random();
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aSize',    new THREE.BufferAttribute(sz, 1));
        geo.setAttribute('aSeed',    new THREE.BufferAttribute(seed, 1));

        this.nebulaMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:   { value: 0 },
                uPR:     { value: this.PR },
                uColorA: { value: new THREE.Color('#e2c799') },
                uColorB: { value: new THREE.Color('#64748b') }
            },
            vertexShader: `
                attribute float aSize, aSeed;
                uniform float uTime, uPR;
                varying float vSeed;
                void main() {
                    vSeed = aSeed;
                    vec3 p = position;
                    p.y += sin(uTime * 0.08 + aSeed * 6.28) * 4.0;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp(aSize * uPR * (420.0 / -mv.z), 0.0, 320.0);
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA, uColorB;
                varying float vSeed;
                void main() {
                    vec2 uv = gl_PointCoord - 0.5;
                    float d = length(uv);
                    if (d > 0.5) discard;
                    // Ultra-soft Gaussian-like atmospheric falloff
                    float falloff = pow(smoothstep(0.5, 0.0, d), 2.4);
                    vec3 col = mix(uColorB * 0.55, uColorA * 0.45, vSeed);
                    gl_FragColor = vec4(col, falloff * 0.032);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.nebulaPts = this._pts(geo, this.nebulaMat);
    }

    /* ── 2. SILKY SPACETIME CURVATURE MEMBRANE ─────────────────────── */
    _buildSpacetimeContainment() {
        const segs = this.M ? 72 : 128;
        const size = 360;
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

                    // Smooth gravitational funnel
                    float well = -24.0 * exp(-r * r / 1250.0);
                    // Calm gravitational wave propagation
                    float wave = sin(r * 0.12 - uTime * 1.1) * 0.85 * exp(-r * 0.0085);
                    // Paradigm shift shockwave
                    float shock = sin(r * 0.22 - uPulse * 10.0) * uPulse * 4.8 * exp(-r * 0.012);

                    // Soft liquid ripple under cursor
                    float cd = length(p.xz - uCursorWorld.xz);
                    float cursorWarp = 4.2 * exp(-cd * cd / 340.0) * cos(cd * 0.22 - uTime * 2.2);

                    p.y += well + wave + shock + cursorWarp - 24.0;

                    vWell = clamp((-well) / 24.0, 0.0, 1.0);
                    vCursorLift = exp(-cd * cd / 380.0);
                    vWorldPos = p;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA, uColorB;
                varying vec3 vWorldPos;
                varying float vWell, vCursorLift, vRadius;

                void main() {
                    // Subtle polar-harmonic geodesic rings + ultra-faint grid
                    vec2 coord = vWorldPos.xz * 0.14;
                    vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
                    float gridMask = (1.0 - min(min(grid.x, grid.y), 1.0)) * 0.35;

                    float rCoord = vRadius * 0.048;
                    float rLine = abs(fract(rCoord - 0.5) - 0.5) / fwidth(rCoord);
                    float ringMask = (1.0 - min(rLine, 1.0)) * 0.9;

                    float combined = max(gridMask, ringMask);
                    float edgeFade = smoothstep(170.0, 28.0, vRadius);

                    vec3 col = mix(uColorB, uColorA, clamp(vWell * 1.2 + vCursorLift * 0.8, 0.0, 1.0));
                    col = mix(col, vec3(1.0), vCursorLift * 0.45);

                    float alpha = combined * edgeFade * (0.045 + vWell * 0.22 + vCursorLift * 0.36);
                    if (alpha < 0.004) discard;

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

    /* ── 3. KEPLERIAN ACCRETION HALO (Interstellar Physics) ────────── */
    _buildKeplerianHalo() {
        const n = this.M ? 2200 : 5200;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(n * 3);
        const aRad = new Float32Array(n);
        const aAng = new Float32Array(n);
        const aRnd = new Float32Array(n);

        for (let i = 0; i < n; i++) {
            const t = Math.pow(Math.random(), 1.4);
            const r = 12.0 + t * 52.0;
            const a = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * (1.2 + t * 2.5);
            pos[i * 3]     = Math.cos(a) * r;
            pos[i * 3 + 1] = y - 8.0;
            pos[i * 3 + 2] = Math.sin(a) * r;
            aRad[i] = r;
            aAng[i] = a;
            aRnd[i] = Math.random();
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRad',     new THREE.BufferAttribute(aRad, 1));
        geo.setAttribute('aAng',     new THREE.BufferAttribute(aAng, 1));
        geo.setAttribute('aRnd',     new THREE.BufferAttribute(aRnd, 1));

        this.keplerMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:   { value: 0 },
                uPR:     { value: this.PR },
                uColorA: { value: new THREE.Color('#e2c799') },
                uColorB: { value: new THREE.Color('#94a3b8') }
            },
            vertexShader: `
                attribute float aRad, aAng, aRnd;
                uniform float uTime, uPR;
                varying float vRad, vRnd, vDoppler;

                void main() {
                    vRad = aRad;
                    vRnd = aRnd;
                    // Kepler's 3rd Law angular velocity: w ~ r^(-1.5)
                    float omega = 18.0 / pow(max(aRad, 6.0), 1.5);
                    float ang = aAng + uTime * omega;
                    vec3 p = vec3(cos(ang) * aRad, position.y, sin(ang) * aRad);
                    // Relativistic Doppler beaming approximation (approaching side brighter)
                    vDoppler = 0.72 + 0.28 * cos(ang);

                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.55 + aRnd * 1.15) * uPR * (190.0 / -mv.z), 0.0, 5.5);
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA, uColorB;
                varying float vRad, vRnd, vDoppler;

                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    float radialFade = smoothstep(10.0, 18.0, vRad) * smoothstep(66.0, 26.0, vRad);
                    float alpha = (1.0 - d * 2.0) * radialFade * (0.16 + vRnd * 0.28) * vDoppler;
                    vec3 col = mix(uColorA, uColorB, clamp((vRad - 12.0) / 48.0, 0.0, 1.0));
                    col = mix(col, vec3(1.0), vDoppler * 0.25);
                    gl_FragColor = vec4(col, alpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.keplerPts = this._pts(geo, this.keplerMat);
    }

    /* ── 4. ARCHITECTURAL HORIZON RINGS ────────────────────────────── */
    _buildCitadelRings() {
        this.citadelGroup = new THREE.Group();
        this.scene.add(this.citadelGroup);

        const configs = [
            { r: 62,  tube: 0.045, segs: 200, rx: Math.PI * 0.44, rz: 0.14,  spd: 0.0008,  col: this.primaryColor,   op: 0.11 },
            { r: 86,  tube: 0.04,  segs: 220, rx: -Math.PI * 0.3, rz: -0.32, spd: -0.0006, col: this.secondaryColor, op: 0.085 },
            { r: 120, tube: 0.05,  segs: 240, rx: Math.PI * 0.18, rz: 0.48,  spd: 0.0004,  col: this.primaryColor,   op: 0.07 }
        ];

        configs.forEach((c, idx) => {
            const ringGroup = new THREE.Group();
            ringGroup.rotation.x = c.rx;
            ringGroup.rotation.z = c.rz;

            const torusGeo = new THREE.TorusGeometry(c.r, c.tube, 12, c.segs);
            const torusMat = new THREE.MeshBasicMaterial({
                color: c.col.clone(),
                transparent: true,
                opacity: c.op,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            ringGroup.add(new THREE.Mesh(torusGeo, torusMat));

            this.citadelGroup.add(ringGroup);
            this.citadelRings.push({ group: ringGroup, torusMat, spd: c.spd, isPrimary: idx % 2 === 0 });
        });
    }

    /* ── 5. BLACKBODY STARFIELD & 3-ARM GALAXY ─────────────────────── */
    _stars() {
        this.starGroups = [];
        const M = this.M;
        [
            { n: M ? 3600 : 9500, r0: 340, r1: 820, s0: 0.35, s1: 1.2, sp: 0.7, a: 0.78 },
            { n: M ? 1100 : 2800, r0: 170, r1: 380, s0: 0.65, s1: 2.0, sp: 1.1, a: 0.88 },
            { n: M ? 180  : 480,  r0: 75,  r1: 260, s0: 1.2,  s1: 3.4, sp: 1.5, a: 0.95 }
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
                    uColorB: { value: new THREE.Color('#cbd5e1') }
                },
                vertexShader: `
                    attribute float aSize, aPhase;
                    uniform float uTime, uPR, uSp;
                    varying float vT, vPhase;
                    void main() {
                        vPhase = fract(aPhase * 0.318);
                        vT = 0.45 + 0.55 * sin(uTime * uSp + aPhase);
                        vec4 mv = modelViewMatrix * vec4(position, 1.0);
                        gl_Position = projectionMatrix * mv;
                        gl_PointSize = clamp(aSize * uPR * (0.75 + vT * 0.35) * (340.0 / -mv.z), 0.0, 9.0);
                    }
                `,
                fragmentShader: `
                    uniform float uA;
                    uniform vec3 uColorA, uColorB;
                    varying float vT, vPhase;
                    void main() {
                        float d = length(gl_PointCoord - 0.5);
                        if (d > 0.5) discard;
                        float a = pow(1.0 - d * 2.0, 1.5) * vT * uA;
                        vec3 tint = mix(uColorB, uColorA, smoothstep(0.4, 0.85, vPhase));
                        vec3 col  = mix(vec3(0.95, 0.96, 1.0), tint, 0.4);
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
        const n = this.M ? 2800 : 7200;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(n * 3);
        const rand = new Float32Array(n);
        for (let i = 0; i < n; i++) {
            const arm = i % 3;
            const t = Math.random();
            const r = 75 + t * 520;
            const a = (t * Math.PI * 4 + arm * Math.PI * 2 / 3) + (Math.random() - 0.5) * ((1 - t) * 0.4 + 0.05) * 2;
            pos[i * 3]     = r * Math.cos(a);
            pos[i * 3 + 1] = (Math.random() - 0.5) * r * 0.045 - 20;
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
                    float angle = atan(position.z, position.x) + uTime * 0.012 / max(r * 0.006, 1.0);
                    vec3 p = vec3(cos(angle) * r, position.y, sin(angle) * r);
                    vR = r;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.35 + aRand * 1.1) * (1.0 - r / 600.0) * uPR * 230.0 / -mv.z, 0.0, 4.8);
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA, uColorB;
                varying float vR, vRd;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    float a = (1.0 - d * 2.0) * (1.0 - vR / 600.0) * (0.16 + vRd * 0.3);
                    vec3 col = mix(uColorA, uColorB, clamp(vR / 380.0, 0.0, 1.0));
                    gl_FragColor = vec4(mix(col, vec3(1.0), 0.3), a);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        this.galDisk = this._pts(geo, this.galMat);
    }

    _cosmicDust() {
        const n = this.M ? 1200 : 3200;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(n * 3);
        const rand = new Float32Array(n);
        for (let i = 0; i < n; i++) {
            const r = 20 + Math.random() * 230;
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
                    p.y += sin(uTime * aRand * 0.32 + aRand * 6.28) * 0.8;
                    p.x += cos(uTime * aRand * 0.25 + aRand * 3.14) * 0.5;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.5 + aRand * 1.1) * uPR * (160.0 / -mv.z), 0.0, 5.5);
                }
            `,
            fragmentShader: `
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vec3(0.88, 0.91, 0.96), pow(1.0 - d * 2.0, 1.6) * 0.14);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        this.dustPts = this._pts(geo, this.dustMat);
    }

    /* ── PARADIGM SHIFT PALETTE TRANSITION ─────────────────────────── */
    setParadigmPalette(hexA, hexB) {
        const colA = new THREE.Color(hexA);
        const colB = new THREE.Color(hexB);

        const tweenColors = (mat) => {
            if (!mat?.uniforms) return;
            if (mat.uniforms.uColorA) gsap.to(mat.uniforms.uColorA.value, { r: colA.r, g: colA.g, b: colA.b, duration: 1.4, ease: 'power2.out' });
            if (mat.uniforms.uColorB) gsap.to(mat.uniforms.uColorB.value, { r: colB.r, g: colB.g, b: colB.b, duration: 1.4, ease: 'power2.out' });
        };

        this.triggerGridPulse(0.95);
        tweenColors(this.gridMat);
        tweenColors(this.nebulaMat);
        tweenColors(this.keplerMat);
        tweenColors(this.galMat);
        this.starGroups.forEach(s => tweenColors(s.mat));

        this.citadelRings.forEach(r => {
            const target = r.isPrimary ? colA : colB;
            gsap.to(r.torusMat.color, { r: target.r, g: target.g, b: target.b, duration: 1.4 });
        });
    }

    triggerGridPulse(strength = 1.0) {
        if (!this.gridMat) return;
        this.gridMat.uniforms.uPulse.value = strength;
        gsap.to(this.gridMat.uniforms.uPulse, { value: 0, duration: 2.0, ease: 'power2.out', overwrite: 'auto' });
    }

    update(cursorWorldPos) {
        const t = this.experience.time.elapsed;

        if (this.gridMat) {
            this.gridMat.uniforms.uTime.value = t;
            if (cursorWorldPos) {
                this.gridMat.uniforms.uCursorWorld.value.lerp(cursorWorldPos, 0.09);
            }
        }
        if (this.nebulaMat) this.nebulaMat.uniforms.uTime.value = t;
        if (this.keplerMat) this.keplerMat.uniforms.uTime.value = t;

        this.citadelRings.forEach(r => {
            r.group.rotation.z += r.spd;
            r.group.rotation.y += r.spd * 0.3;
        });

        this.starGroups.forEach((s, i) => {
            s.mat.uniforms.uTime.value = t;
            s.pts.rotation.y = t * (0.0008 - i * 0.0002);
            s.pts.rotation.x = t * 0.00012;
        });

        if (this.galMat) this.galMat.uniforms.uTime.value = t;
        if (this.dustMat) {
            this.dustMat.uniforms.uTime.value = t;
            this.dustPts.rotation.y = -t * 0.0014;
        }
    }
}
