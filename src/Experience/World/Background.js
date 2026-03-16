import * as THREE from 'three';
import gsap from 'gsap';
import Experience from '../Experience.js';

/**
 * Background — pure particle/shader based, ZERO large solid geometry.
 * No BackSide spheres with displacement, no PlaneGeometry, no large Torus rings.
 * Everything is either: Points (particles), Lines, or the outer shell sphere (no displacement, no rotation).
 */
export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time  = this.experience.time;
        this.pulsarMats = [];
        this.auroraLines = [];

        // Sky: handled by renderer clearColor — no sphere geometry needed
        this.buildStarField();      // 3-layer star particles
        this.buildGalaxyDisk();     // Spiral arm particles
        this.buildNebulaDust();     // Large soft dust clouds (particles)
        this.buildCosmicDust();     // Fine floating dust
        this.buildPulsarBeams();    // Pulsar line beams
        this.buildWormholeRings();  // Wormhole: stacked torus particles, NOT mesh
        this.buildGodRays();        // God ray lines from center
        this.buildAuroraLines();    // Aurora: lines only, no solid torus mesh
    }

    /* ── STAR FIELD ─────────────────────────────────────────────── */
    buildStarField() {
        this.starGroups = [];
        const layers = [
            { count: 12000, minR: 400, maxR: 800, minS: 0.3, maxS: 1.1, speed: 1.0, alpha: 0.75 },
            { count:  3000, minR: 200, maxR: 400, minS: 0.6, maxS: 2.0, speed: 1.6, alpha: 0.85 },
            { count:   600, minR:  80, maxR: 280, minS: 1.2, maxS: 4.5, speed: 2.2, alpha: 0.92 },
        ];

        layers.forEach(cfg => {
            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(cfg.count * 3);
            const sz  = new Float32Array(cfg.count);
            const ph  = new Float32Array(cfg.count);

            for (let i = 0; i < cfg.count; i++) {
                const r = cfg.minR + Math.random() * (cfg.maxR - cfg.minR);
                const t = Math.random() * Math.PI * 2;
                const p = Math.acos(2 * Math.random() - 1);
                pos[i*3]   = r * Math.sin(p) * Math.cos(t);
                pos[i*3+1] = r * Math.sin(p) * Math.sin(t);
                pos[i*3+2] = r * Math.cos(p);
                sz[i]  = cfg.minS + Math.random() * (cfg.maxS - cfg.minS);
                ph[i]  = Math.random() * Math.PI * 2;
            }

            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            geo.setAttribute('aSize',    new THREE.BufferAttribute(sz, 1));
            geo.setAttribute('aPhase',   new THREE.BufferAttribute(ph, 1));

            const mat = new THREE.ShaderMaterial({
                uniforms: {
                    uTime:  { value: 0 },
                    uPR:    { value: Math.min(this.experience.sizes.pixelRatio, 2) },
                    uAlpha: { value: cfg.alpha },
                    uSpd:   { value: cfg.speed },
                },
                vertexShader: `
                    attribute float aSize, aPhase;
                    uniform float uTime, uPR, uSpd;
                    varying float vT;
                    void main(){
                        vT = 0.4 + 0.6 * abs(sin(uTime * uSpd + aPhase));
                        vec4 mv = modelViewMatrix * vec4(position, 1.0);
                        gl_Position = projectionMatrix * mv;
                        // Hard clamp — prevents giant points near camera
                        float sz = aSize * uPR * vT * (350.0 / -mv.z);
                        gl_PointSize = clamp(sz, 0.0, 10.0);
                    }
                `,
                fragmentShader: `
                    uniform float uAlpha;
                    varying float vT;
                    void main(){
                        float d = length(gl_PointCoord - 0.5);
                        if(d > 0.5) discard;
                        float a = (1.0 - d * 2.0) * vT * uAlpha;
                        // Star color: cold blue-white to warm yellow
                        vec3 cold = vec3(0.78, 0.84, 1.0);
                        vec3 warm = vec3(1.0,  0.93, 0.75);
                        gl_FragColor = vec4(mix(cold, warm, vT * 0.4), a);
                    }
                `,
                transparent: true,
                depthWrite:  false,
                blending:    THREE.AdditiveBlending,
            });

            const pts = new THREE.Points(geo, mat);
            this.scene.add(pts);
            this.starGroups.push({ pts, mat });
        });
    }

    /* ── GALAXY DISK ────────────────────────────────────────────── */
    buildGalaxyDisk() {
        const count = 10000;
        const geo   = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const rand  = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const arm     = Math.floor(Math.random() * 3);
            const t       = Math.random();
            const r       = 80 + t * 600;
            const spiral  = t * Math.PI * 4 + (arm * Math.PI * 2 / 3);
            const spread  = (1 - t) * 0.35 + 0.04;
            const angle   = spiral + (Math.random() - 0.5) * spread * 2;

            pos[i*3]   = r * Math.cos(angle);
            pos[i*3+1] = (Math.random() - 0.5) * r * 0.06;
            pos[i*3+2] = r * Math.sin(angle);
            rand[i]    = Math.random();
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 1));

        this.galaxyMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uPR:   { value: Math.min(this.experience.sizes.pixelRatio, 2) },
            },
            vertexShader: `
                attribute float aRand;
                uniform float uTime, uPR;
                varying float vRand, vR;
                void main(){
                    vRand = aRand;
                    float r     = length(position.xz);
                    float spd   = 0.012 / max(r * 0.007, 1.0);
                    float angle = atan(position.z, position.x) + uTime * spd;
                    vec3 p = vec3(cos(angle) * r, position.y, sin(angle) * r);
                    vR = r;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    float sz = (0.4 + aRand * 1.2) * (1.0 - r / 700.0) * uPR * 250.0 / -mv.z;
                    gl_PointSize = clamp(sz, 0.0, 6.0);
                }
            `,
            fragmentShader: `
                varying float vRand, vR;
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if(d > 0.5) discard;
                    float fade = 1.0 - vR / 700.0;
                    float a    = (1.0 - d * 2.0) * fade * (0.25 + vRand * 0.4);
                    gl_FragColor = vec4(vec3(0.7 + vRand * 0.3), a);
                }
            `,
            transparent: true,
            depthWrite:  false,
            blending:    THREE.AdditiveBlending,
        });

        this.galaxyDisk = new THREE.Points(geo, this.galaxyMat);
        this.scene.add(this.galaxyDisk);
    }

    /* ── NEBULA DUST (large soft clouds) ────────────────────────── */
    buildNebulaDust() {
        const count = 250;
        const geo   = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const sz    = new Float32Array(count);
        const ph    = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const r = 150 + Math.random() * 500;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            pos[i*3]   = r * Math.sin(p) * Math.cos(t);
            pos[i*3+1] = r * Math.sin(p) * Math.sin(t) * 0.5;
            pos[i*3+2] = r * Math.cos(p);
            sz[i]  = 60 + Math.random() * 120;
            ph[i]  = Math.random() * Math.PI * 2;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aSize',    new THREE.BufferAttribute(sz, 1));
        geo.setAttribute('aPhase',   new THREE.BufferAttribute(ph, 1));

        this.nebulaMat = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uPR: { value: Math.min(this.experience.sizes.pixelRatio, 2) } },
            vertexShader: `
                attribute float aSize, aPhase;
                uniform float uPR;
                void main(){
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mv;
                    // Nebula clouds: large BUT clamped hard so they can't be > 300px
                    float sz = aSize * uPR * (800.0 / -mv.z);
                    gl_PointSize = clamp(sz, 0.0, 300.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                void main(){
                    vec2 uv = gl_PointCoord - 0.5;
                    float d = length(uv);
                    if(d > 0.5) discard;
                    float a = smoothstep(0.5, 0.0, d) * 0.055;
                    gl_FragColor = vec4(vec3(0.18), a);
                }
            `,
            transparent: true,
            depthWrite:  false,
            blending:    THREE.AdditiveBlending,
        });

        this.nebulaDust = new THREE.Points(geo, this.nebulaMat);
        this.scene.add(this.nebulaDust);
    }

    /* ── FINE COSMIC DUST ───────────────────────────────────────── */
    buildCosmicDust() {
        const count = 5000;
        const geo   = new THREE.BufferGeometry();
        const pos   = new Float32Array(count * 3);
        const rand  = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const r = 25 + Math.random() * 350;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            pos[i*3]   = r * Math.sin(p) * Math.cos(t);
            pos[i*3+1] = r * Math.sin(p) * Math.sin(t);
            pos[i*3+2] = r * Math.cos(p);
            rand[i] = Math.random();
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('aRand',    new THREE.BufferAttribute(rand, 1));

        this.dustMat = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uPR: { value: Math.min(this.experience.sizes.pixelRatio, 2) } },
            vertexShader: `
                attribute float aRand;
                uniform float uTime, uPR;
                void main(){
                    vec3 p = position;
                    p.y += sin(uTime * aRand * 0.4 + aRand * 6.28) * 1.0;
                    p.x += cos(uTime * aRand * 0.3 + aRand * 3.14) * 0.6;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    float sz = (0.8 + aRand * 1.5) * uPR * (180.0 / -mv.z);
                    gl_PointSize = clamp(sz, 0.0, 8.0);
                }
            `,
            fragmentShader: `
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if(d > 0.5) discard;
                    gl_FragColor = vec4(vec3(0.8), (1.0 - d * 2.0) * 0.18);
                }
            `,
            transparent: true,
            depthWrite:  false,
            blending:    THREE.AdditiveBlending,
        });

        this.cosmicDust = new THREE.Points(geo, this.dustMat);
        this.scene.add(this.cosmicDust);
    }

    /* ── PULSAR BEAMS (lines only) ──────────────────────────────── */
    buildPulsarBeams() {
        this.pulsarGroup = new THREE.Group();
        this.scene.add(this.pulsarGroup);

        [
            { pos: new THREE.Vector3(320, 90, -420),  phase: 0 },
            { pos: new THREE.Vector3(-460, -70, 210), phase: 2.1 },
        ].forEach(({ pos, phase }) => {
            const mat = new THREE.ShaderMaterial({
                uniforms: { uTime: { value: 0 }, uPhase: { value: phase } },
                vertexShader: `
                    attribute float aT;
                    uniform float uTime, uPhase;
                    varying float vT;
                    void main(){
                        vT = aT;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float uTime, uPhase;
                    varying float vT;
                    void main(){
                        float pulse = pow(abs(sin(uTime * 3.0 + uPhase)), 10.0);
                        float a = (1.0 - vT) * 0.07 * pulse;
                        gl_FragColor = vec4(1.0, 1.0, 1.0, a);
                    }
                `,
                transparent: true,
                depthWrite:  false,
                blending:    THREE.AdditiveBlending,
            });

            [-1, 1].forEach(dir => {
                const pts   = [];
                const beamDir = new THREE.Vector3(dir, 0.05 * dir, 0.08).normalize();
                for (let i = 0; i <= 50; i++) {
                    pts.push(pos.clone().addScaledVector(beamDir, (i / 50) * 650));
                }
                const geo   = new THREE.BufferGeometry().setFromPoints(pts);
                const tArr  = new Float32Array(51);
                for (let i = 0; i <= 50; i++) tArr[i] = i / 50;
                geo.setAttribute('aT', new THREE.BufferAttribute(tArr, 1));
                this.pulsarGroup.add(new THREE.Line(geo, mat));
            });

            // Pulsar core dot (small sphere, tiny)
            const dotMat = new THREE.ShaderMaterial({
                uniforms: { uTime: { value: 0 }, uPhase: { value: phase } },
                vertexShader:   `void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
                fragmentShader: `uniform float uTime, uPhase; void main(){ float p = pow(abs(sin(uTime*3.0+uPhase)),4.0); gl_FragColor = vec4(1.0,1.0,1.0,p*0.5); }`,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            const dot = new THREE.Mesh(new THREE.SphereGeometry(1.5, 8, 8), dotMat);
            dot.position.copy(pos);
            this.pulsarGroup.add(dot);
            this.pulsarMats.push({ mat, dotMat });
        });
    }

    /* ── WORMHOLE RINGS (particles only, no solid torus mesh) ───── */
    buildWormholeRings() {
        // Use a Points system arranged in rings — NOT TorusGeometry meshes
        // This completely avoids any solid geometry that could show as white shape
        const center = new THREE.Vector3(-380, 40, 200);
        const radii  = [12, 22, 34, 48, 62, 76, 88];
        const allPos = [];
        const allSz  = [];
        const allPh  = [];

        radii.forEach((r, ri) => {
            const count = Math.floor(60 + r * 1.8);
            for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2;
                allPos.push(
                    center.x + Math.cos(angle) * r,
                    center.y + Math.sin(angle) * r,
                    center.z
                );
                allSz.push(0.4 + (radii.length - ri) * 0.15);
                allPh.push(angle + ri * 0.7);
            }
        });

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(allPos), 3));
        geo.setAttribute('aSize',    new THREE.BufferAttribute(new Float32Array(allSz),  1));
        geo.setAttribute('aPhase',   new THREE.BufferAttribute(new Float32Array(allPh),  1));

        this.wormholeMat = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uPR: { value: Math.min(this.experience.sizes.pixelRatio, 2) } },
            vertexShader: `
                attribute float aSize, aPhase;
                uniform float uTime, uPR;
                varying float vBright;
                void main(){
                    // Rotate rings
                    float angle = aPhase + uTime * 0.8;
                    float r = length(position.xy - vec2(-380.0, 40.0)); // approx
                    vBright = 0.3 + 0.7 * abs(sin(uTime * 1.2 + aPhase));
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mv;
                    float sz = aSize * uPR * (400.0 / -mv.z);
                    gl_PointSize = clamp(sz, 0.0, 6.0);
                }
            `,
            fragmentShader: `
                varying float vBright;
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if(d > 0.5) discard;
                    float a = (1.0 - d * 2.0) * vBright * 0.45;
                    gl_FragColor = vec4(vec3(0.85), a);
                }
            `,
            transparent: true,
            depthWrite:  false,
            blending:    THREE.AdditiveBlending,
        });

        this.wormholePoints = new THREE.Points(geo, this.wormholeMat);
        this.scene.add(this.wormholePoints);
    }

    /* ── GOD RAYS ───────────────────────────────────────────────── */
    buildGodRays() {
        this.godRayGroup = new THREE.Group();
        this.scene.add(this.godRayGroup);

        for (let i = 0; i < 14; i++) {
            const angle   = (i / 14) * Math.PI * 2;
            const spread  = (Math.random() - 0.5) * 0.22;
            const len     = 300 + Math.random() * 200;
            const pts     = [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(
                    Math.cos(angle + spread) * len,
                    (Math.random() - 0.5) * 60,
                    Math.sin(angle + spread) * len
                ),
            ];
            const geo = new THREE.BufferGeometry().setFromPoints(pts);
            const mat = new THREE.LineBasicMaterial({
                color:       0xffffff,
                transparent: true,
                opacity:     0.008 + Math.random() * 0.01,
                blending:    THREE.AdditiveBlending,
                depthWrite:  false,
            });
            this.godRayGroup.add(new THREE.Line(geo, mat));
        }
    }

    /* ── AURORA LINES (lines only, never solid torus) ───────────── */
    buildAuroraLines() {
        // Replace torus mesh rings with point-sampled circles
        // No MeshBasicMaterial at all here
        this.auroraGroup = new THREE.Group();
        this.scene.add(this.auroraGroup);

        const configs = [
            { r: 220, count: 300, op: 0.06, rx: 0.3,  rz: 0.1,  spd: { x: 0.00015, y: 0.0002,  z: 0.0001 } },
            { r: 310, count: 380, op: 0.04, rx: 1.1,  rz: 0.4,  spd: { x: 0.00008, y: 0.00015, z: 0.0002 } },
            { r: 390, count: 460, op: 0.05, rx: 0.7,  rz: 1.2,  spd: { x: 0.0002,  y: 0.0001,  z: 0.00005 } },
            { r: 470, count: 540, op: 0.03, rx: 1.5,  rz: 0.8,  spd: { x: 0.0001,  y: 0.00008, z: 0.00018 } },
            { r: 560, count: 620, op: 0.025,rx: 0.4,  rz: 0.6,  spd: { x: 0.00012, y: 0.00018, z: 0.00007 } },
        ];

        this.auroraRings = configs.map(cfg => {
            const pts = [];
            for (let i = 0; i <= cfg.count; i++) {
                const a = (i / cfg.count) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * cfg.r, 0, Math.sin(a) * cfg.r));
            }
            const geo = new THREE.BufferGeometry().setFromPoints(pts);
            const mat = new THREE.LineBasicMaterial({
                color:       0xffffff,
                transparent: true,
                opacity:     cfg.op,
                blending:    THREE.AdditiveBlending,
                depthWrite:  false,
            });
            const line = new THREE.Line(geo, mat);
            line.rotation.x = cfg.rx;
            line.rotation.z = cfg.rz;
            line.userData.spd = cfg.spd;
            this.auroraGroup.add(line);
            return line;
        });
    }

    /* ── COLOR MOOD ─────────────────────────────────────────────── */
    animateColor(colorHex) {
        // No shell mat — mood via dust/star brightness only
    }
    resetColor() {
        // No shell mat
    }

    /* ── UPDATE ─────────────────────────────────────────────────── */
    update() {
        const t = this.experience.time.elapsed;

        // Stars
        this.starGroups.forEach((s, i) => {
            s.mat.uniforms.uTime.value = t;
            s.pts.rotation.y = t * (0.0012 - i * 0.0003);
            s.pts.rotation.x = t * 0.0002;
        });

        // Galaxy disk
        if (this.galaxyMat) this.galaxyMat.uniforms.uTime.value = t;

        // Nebula + dust
        if (this.nebulaMat) this.nebulaMat.uniforms.uTime.value = t;
        if (this.nebulaDust) this.nebulaDust.rotation.y = t * 0.003;
        if (this.dustMat)   this.dustMat.uniforms.uTime.value = t;
        if (this.cosmicDust) this.cosmicDust.rotation.y = -t * 0.002;

        // Wormhole rings spin
        if (this.wormholeMat) this.wormholeMat.uniforms.uTime.value = t;
        if (this.wormholePoints) this.wormholePoints.rotation.z = t * 0.5;

        // God rays
        if (this.godRayGroup) this.godRayGroup.rotation.y = t * 0.006;

        // Pulsar beams
        this.pulsarMats.forEach(p => {
            p.mat.uniforms.uTime.value = t;
            p.dotMat.uniforms.uTime.value = t;
        });
        if (this.pulsarGroup) this.pulsarGroup.rotation.y = t * 0.035;

        // Aurora rings
        this.auroraRings.forEach(r => {
            r.rotation.x += r.userData.spd.x;
            r.rotation.y += r.userData.spd.y;
            r.rotation.z += r.userData.spd.z;
        });
    }
}