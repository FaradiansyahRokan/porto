import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import Experience from '../Experience.js';
import ScrambleText from '../Utils/ScrambleText.js';

export default class Node {
    constructor(data, position) {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.data       = data;
        this.isHovered  = false;
        this.moons      = [];
        this.rings      = [];

        this.floatOffset  = Math.random() * Math.PI * 2;
        this.floatSpeed   = 0.25 + Math.random() * 0.35;
        this.rotSpeed     = 0.003 + Math.random() * 0.006;

        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.userData         = data;
        this.group.userData.isNode  = true;
        this.group.userData.nodeInstance = this;

        this.cfg = this._cfg();
        this._makePlanet();
        this._makeGlow();
        this._makeRings();
        this._makeMoons();
        this._makeLabel();

        this.scene.add(this.group);
    }

    /* ── CONFIG ──────────────────────────────────────────────────── */
    _cfg() {
        const t = this.data.type;
        const k = (this.data.kicker || '').toLowerCase();
        const base = { r: 1.3, pattern: 0, rings: 0, moons: Math.floor(Math.random() * 2) };
        if (t === 'about')            return { ...base, r: 2.2, pattern: 1, rings: 2, moons: 2 };
        if (t === 'certification')    return { ...base, r: 1.9, pattern: 0, rings: 3, moons: 1 };
        if (k.includes('android'))    return { ...base, r: 1.5, pattern: 2, rings: 1, moons: 1 };
        if (k.includes('web3'))       return { ...base, r: 1.5, pattern: 3, rings: 1, moons: 0 };
        if (k.includes('backend'))    return { ...base, r: 1.4, pattern: 1, rings: 1 };
        if (k.includes('infra') || k.includes('nas')) return { ...base, r: 1.5, pattern: 2, rings: 2 };
        return base;
    }

    /* ── PLANET (no vertex displacement — that caused flickering) ── */
    _makePlanet() {
        const r = this.cfg.r;
        const p = this.cfg.pattern;

        // Surface fragment shader only — NO noise in vertex, NO displacement
        this.planetMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:    { value: 0 },
                uPattern: { value: p },
                uHover:   { value: 0 },
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPos;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vPos    = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime, uPattern, uHover;
                varying vec3 vNormal, vPos;

                // Cheap hash-based noise (no shared NOISE_GLSL — avoids duplicate function errors)
                float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
                float n21(vec2 p) {
                    vec2 i = floor(p), f = fract(p);
                    f = f * f * (3.0 - 2.0 * f);
                    return mix(mix(h21(i), h21(i+vec2(1,0)), f.x),
                               mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y);
                }
                float fbm(vec2 p) {
                    float v = 0.0, a = 0.5;
                    for(int i=0;i<4;i++){ v += a * n21(p); p *= 2.1; a *= 0.5; }
                    return v;
                }

                void main() {
                    // Spherical UV
                    vec2 uv = vec2(
                        atan(vPos.z, vPos.x) / 6.2832 + 0.5,
                        asin(clamp(vPos.y / length(vPos), -1.0, 1.0)) / 3.1416 + 0.5
                    );

                    float surf = 0.5;
                    if (uPattern < 0.5) {
                        // Rocky
                        surf = fbm(uv * 4.0 + vec2(uTime * 0.04));
                    } else if (uPattern < 1.5) {
                        // Gas bands
                        float bands = sin(uv.y * 18.0 + fbm(uv * 2.0) * 3.0 + uTime * 0.05) * 0.5 + 0.5;
                        surf = mix(bands, fbm(uv * 5.0), 0.3);
                    } else if (uPattern < 2.5) {
                        // Ice
                        surf = fbm(uv * 3.0 + vec2(uTime * 0.02));
                        surf = mix(surf, 1.0 - fbm(uv * 10.0), 0.25);
                    } else {
                        // Lava: dark base, bright cracks
                        float cracks = pow(fbm(uv * 6.0 + vec2(uTime * 0.08)), 2.0);
                        surf = cracks;
                    }

                    // Lighting
                    vec3 lightDir = normalize(vec3(1.0, 0.6, 0.5));
                    float diff    = max(dot(vNormal, lightDir), 0.0);
                    float ambient = 0.18;

                    float dark   = 0.05;
                    float bright = (uPattern > 2.5) ? 0.7 : 0.88;
                    float lit    = mix(dark, bright, surf) * (ambient + diff * 0.82);

                    // Lava emissive on dark side
                    if (uPattern > 2.5) {
                        lit += surf * (1.0 - diff) * 0.25;
                    }

                    // Rim light
                    float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
                    lit += rim * 0.12 + rim * uHover * 0.15;

                    gl_FragColor = vec4(vec3(clamp(lit, 0.0, 1.0)), 1.0);
                }
            `,
        });

        this.planetMesh = new THREE.Mesh(
            new THREE.SphereGeometry(r, 48, 48),
            this.planetMat
        );
        this.group.add(this.planetMesh);
    }

    /* ── GLOW (two additive FrontSide spheres, no BackSide) ──────── */
    _makeGlow() {
        const r = this.cfg.r;

        // Inner atmosphere — tight fresnel
        this.atmMat = new THREE.ShaderMaterial({
            uniforms: { uHover: { value: 0 } },
            vertexShader: `
                varying vec3 vN, vVP;
                void main() {
                    vN  = normalize(normalMatrix * normal);
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    vVP = -mv.xyz;
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform float uHover;
                varying vec3 vN, vVP;
                void main() {
                    float f = 1.0 - dot(normalize(vVP), vN);
                    f = pow(clamp(f, 0.0, 1.0), 3.0);
                    float a = f * (0.5 + uHover * 0.6);
                    gl_FragColor = vec4(vec3(0.80, 0.88, 1.0), a * 0.8);
                }
            `,
            transparent: true,
            blending:    THREE.AdditiveBlending,
            depthWrite:  false,
            depthTest:   false,
            side:        THREE.FrontSide,
        });
        this.atmMesh = new THREE.Mesh(
            new THREE.SphereGeometry(r * 1.45, 24, 24),
            this.atmMat
        );
        this.atmMesh.renderOrder = 1;
        this.group.add(this.atmMesh);

        // Outer halo — wider, softer, also FrontSide (no BackSide = no black wedge)
        this.haloMat = new THREE.ShaderMaterial({
            uniforms: { uHover: { value: 0 } },
            vertexShader: `
                varying vec3 vN, vVP;
                void main() {
                    vN  = normalize(normalMatrix * normal);
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    vVP = -mv.xyz;
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform float uHover;
                varying vec3 vN, vVP;
                void main() {
                    float f = 1.0 - dot(normalize(vVP), vN);
                    f = pow(clamp(f, 0.0, 1.0), 5.0);
                    float a = f * (0.3 + uHover * 0.4);
                    gl_FragColor = vec4(vec3(0.70, 0.80, 1.0), a * 0.6);
                }
            `,
            transparent: true,
            blending:    THREE.AdditiveBlending,
            depthWrite:  false,
            depthTest:   false,
            side:        THREE.FrontSide,
        });
        this.haloMesh = new THREE.Mesh(
            new THREE.SphereGeometry(r * 1.9, 24, 24),
            this.haloMat
        );
        this.haloMesh.renderOrder = 2;
        this.group.add(this.haloMesh);
    }

    /* ── RINGS ───────────────────────────────────────────────────── */
    _makeRings() {
        const r  = this.cfg.r;
        const rc = this.cfg.rings;
        if (!rc) return;

        for (let i = 0; i < rc; i++) {
            const inner = r * (1.8 + i * 0.55);
            const outer = inner + r * 0.28;

            const mat = new THREE.ShaderMaterial({
                uniforms: { uTime: { value: 0 }, uHover: { value: 0 } },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float uTime, uHover;
                    varying vec2 vUv;
                    float h(float n) { return fract(sin(n) * 43758.5); }
                    void main() {
                        float rad  = vUv.x;
                        float band = sin(rad * 40.0 + uTime * 0.06) * 0.5 + 0.5;
                        float gap  = h(floor(rad * 20.0)) > 0.6 ? 0.0 : 1.0;
                        float d    = band * gap;
                        float edge = smoothstep(0.0, 0.1, rad) * smoothstep(1.0, 0.9, rad);
                        float a    = d * edge * (0.35 + uHover * 0.25);
                        gl_FragColor = vec4(vec3(0.75 + d * 0.25), a);
                    }
                `,
                transparent: true,
                blending:    THREE.AdditiveBlending,
                depthWrite:  false,
                depthTest:   false,
                side:        THREE.DoubleSide,
            });

            // Fix ring UVs
            const geo = new THREE.RingGeometry(inner, outer, 96, 2);
            const pos = geo.attributes.position;
            const uv  = geo.attributes.uv;
            for (let j = 0; j < pos.count; j++) {
                const x = pos.getX(j), y = pos.getY(j);
                const d = Math.sqrt(x * x + y * y);
                uv.setXY(j, (d - inner) / (outer - inner), Math.atan2(y, x) / (Math.PI * 2) + 0.5);
            }

            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.4;
            mesh.rotation.z = (Math.random() - 0.5) * 0.25;
            this.group.add(mesh);
            this.rings.push({ mesh, mat });
        }
    }

    /* ── MOONS ───────────────────────────────────────────────────── */
    _makeMoons() {
        const r  = this.cfg.r;
        const mc = this.cfg.moons;

        for (let i = 0; i < mc; i++) {
            const orbitR = r * (3.0 + i * 1.8 + Math.random() * 0.8);
            const moonR  = r * (0.08 + Math.random() * 0.09);
            const spd    = 0.3 + Math.random() * 0.5;
            const offset = Math.random() * Math.PI * 2;
            const tilt   = (Math.random() - 0.5) * 0.8;

            const mat = new THREE.MeshStandardMaterial({
                color:    0x888888,
                roughness: 0.9,
                metalness: 0.05,
            });
            const mesh = new THREE.Mesh(new THREE.SphereGeometry(moonR, 12, 12), mat);

            // Orbit circle (line, not torus mesh)
            const orbitPts = [];
            for (let j = 0; j <= 72; j++) {
                const a = (j / 72) * Math.PI * 2;
                orbitPts.push(new THREE.Vector3(Math.cos(a) * orbitR, 0, Math.sin(a) * orbitR));
            }
            const orbitLine = new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(orbitPts),
                new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false })
            );
            orbitLine.rotation.x = tilt;
            this.group.add(orbitLine);
            this.group.add(mesh);
            this.moons.push({ mesh, orbitR, spd, offset, tilt });
        }
    }

    /* ── LABEL ───────────────────────────────────────────────────── */
    _makeLabel() {
        const div = document.createElement('div');
        div.className  = 'project-label';
        div.textContent = this.data.title;
        div.style.cssText = 'opacity:0;transition:opacity .3s ease,transform .3s ease;transform:translateY(6px)';
        this.scramble = new ScrambleText(div);
        this.label    = new CSS2DObject(div);
        this.label.position.set(0, this.cfg.r * 2.2 + 1.0, 0);
        this.group.add(this.label);
    }

    /* ── UPDATE ──────────────────────────────────────────────────── */
    update() {
        const t     = this.experience.time.elapsed;
        const delta = this.experience.time.delta / 1000;

        // Update shader time (planet + rings only — glow mats have no uTime)
        if (this.planetMat.uniforms.uTime) this.planetMat.uniforms.uTime.value = t;
        this.rings.forEach(r => { if (r.mat.uniforms.uTime) r.mat.uniforms.uTime.value = t; });

        // Self rotate
        this.planetMesh.rotation.y += this.rotSpeed;

        // Float Y
        const ty = this.isHovered ? 0 : Math.sin(t * this.floatSpeed + this.floatOffset) * 0.5;
        this.planetMesh.position.y += (ty - this.planetMesh.position.y) * 0.05;
        const py = this.planetMesh.position.y;

        this.atmMesh.position.y  = py;
        this.haloMesh.position.y = py;
        this.rings.forEach(r => r.mesh.position.y = py);

        // Moons orbit
        this.moons.forEach(m => {
            const a = t * m.spd + m.offset;
            const cosT = Math.cos(m.tilt), sinT = Math.sin(m.tilt);
            m.mesh.position.x =  Math.cos(a) * m.orbitR;
            m.mesh.position.z =  Math.sin(a) * m.orbitR * cosT;
            m.mesh.position.y =  py + Math.sin(a) * m.orbitR * sinT;
            m.mesh.rotation.y += 0.01;
        });

        // Label
        this.label.position.y = py + this.cfg.r * 2.2 + 1.0;
    }

    /* ── HOVER ───────────────────────────────────────────────────── */
    onMouseEnter() {
        if (this.isHovered) return;
        this.isHovered = true;
        if (this.experience.audio) this.experience.audio.play('hover');
        if (this.experience.world.background) this.experience.world.background.animateColor('#ffffff');

        this.label.element.style.opacity   = '1';
        this.label.element.style.transform = 'translateY(0)';
        this.scramble.hover();

        gsap.to(this.planetMesh.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.5, ease: 'back.out(1.7)' });
        gsap.to(this.atmMesh.scale,    { x: 1.2,  y: 1.2,  z: 1.2,  duration: 0.5 });
        gsap.to(this.haloMesh.scale,   { x: 1.35, y: 1.35, z: 1.35, duration: 0.6 });
        gsap.to(this.planetMat.uniforms.uHover, { value: 1, duration: 0.4 });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 1, duration: 0.4 });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 1, duration: 0.4 });
        this.rings.forEach(r => gsap.to(r.mat.uniforms.uHover, { value: 1, duration: 0.4 }));
        this.moons.forEach(m => { m._spd = m.spd; m.spd *= 2.5; });
    }

    onMouseLeave() {
        if (!this.isHovered) return;
        this.isHovered = false;
        if (this.experience.world.background) this.experience.world.background.resetColor();

        this.label.element.style.opacity   = '0';
        this.label.element.style.transform = 'translateY(6px)';

        gsap.to(this.planetMesh.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
        gsap.to(this.atmMesh.scale,    { x: 1, y: 1, z: 1, duration: 0.5 });
        gsap.to(this.haloMesh.scale,   { x: 1, y: 1, z: 1, duration: 0.5 });
        gsap.to(this.planetMat.uniforms.uHover, { value: 0, duration: 0.4 });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 0, duration: 0.4 });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 0, duration: 0.4 });
        this.rings.forEach(r => gsap.to(r.mat.uniforms.uHover, { value: 0, duration: 0.4 }));
        this.moons.forEach(m => { if (m._spd) m.spd = m._spd; });
    }
}