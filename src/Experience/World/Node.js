import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import Experience from '../Experience.js';
import ScrambleText from '../Utils/ScrambleText.js';

/**
 * Node — Renders each portfolio item as a bespoke chromatic celestial body
 * with procedural biome shaders, Fresnel atmosphere, orbital rings, moons,
 * and an interactive HUD marker.
 */
export default class Node {
    constructor(data, position, index = 0) {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.data       = data;
        this.index      = index;
        this.isHovered  = false;
        this.isDimmed   = false;
        this.rings      = [];
        this.moons      = [];

        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed  = 0.28 + Math.random() * 0.25;
        this.rotSpeed    = 0.0025 + Math.random() * 0.004;

        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.userData = data;
        this.group.userData.isNode = true;
        this.group.userData.nodeInstance = this;

        this.cfg = this._cfg();
        this.colorVec = new THREE.Vector3(...(data.accentRgb || [0.38, 0.74, 0.98]));

        this._buildPlanet();
        this._buildGlow();
        this._buildRings();
        this._buildMoons();
        this._buildReticle();
        this._buildLabel();
    }

    _cfg() {
        const t = this.data.type;
        const k = (this.data.kicker || '').toLowerCase();
        const b = { r: 1.45, pattern: 0, rings: 1, moons: 1 };
        if (t === 'about')                         return { ...b, r: 2.55, pattern: 1, rings: 3, moons: 3 };
        if (t === 'certification')                 return { ...b, r: 2.05, pattern: 3, rings: 2, moons: 2 };
        if (k.includes('android'))                 return { ...b, r: 1.55, pattern: 2, rings: 1, moons: 1 };
        if (k.includes('web3'))                    return { ...b, r: 1.65, pattern: 3, rings: 2, moons: 1 };
        if (k.includes('backend'))                 return { ...b, r: 1.50, pattern: 1, rings: 1, moons: 1 };
        if (k.includes('infra') || k.includes('nas')) return { ...b, r: 1.65, pattern: 2, rings: 2, moons: 2 };
        return b;
    }

    _buildPlanet() {
        const { r, pattern } = this.cfg;
        this.planetMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:    { value: 0 },
                uPattern: { value: pattern },
                uHover:   { value: 0 },
                uDim:     { value: 0 },
                uColor:   { value: this.colorVec }
            },
            vertexShader: `
                varying vec3 vN, vPos, vVP;
                void main() {
                    vN   = normalize(normalMatrix * normal);
                    vPos = position;
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    vVP  = -mv.xyz;
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform float uTime, uPattern, uHover, uDim;
                uniform vec3 uColor;
                varying vec3 vN, vPos, vVP;

                float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5); }
                float n21(vec2 p){
                    vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
                    return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);
                }
                float fbm(vec2 p){
                    float v=0., a=.5;
                    for(int i=0;i<5;i++){ v+=a*n21(p); p*=2.08; a*=.5; }
                    return v;
                }

                void main() {
                    vec2 uv = vec2(atan(vPos.z, vPos.x)/6.2832 + .5, asin(clamp(vPos.y/length(vPos), -1., 1.))/3.1416 + .5);
                    float surf = .5;
                    float veins = 0.;

                    if (uPattern < .5) {
                        // Continental & tectonic ridges
                        surf = fbm(uv * 4.5 + vec2(uTime * .025, 0.));
                        veins = smoothstep(.62, .78, fbm(uv * 10. - uTime * .03));
                    } else if (uPattern < 1.5) {
                        // Jovian gas giant bands & storms
                        float w = fbm(uv * 3.2 + uTime * .02);
                        float bands = sin(uv.y * 22. + w * 4.2 + uTime * .04) * .5 + .5;
                        surf = mix(bands, w, .32);
                        veins = smoothstep(.68, .85, bands * w);
                    } else if (uPattern < 2.5) {
                        // Cryo-tech world with glowing fractures
                        surf = fbm(uv * 3.5 + vec2(uTime * .015));
                        float crack = abs(sin(uv.x * 28. + surf * 6.) * sin(uv.y * 24. - surf * 5.));
                        veins = pow(1. - clamp(crack, 0., 1.), 5.);
                    } else {
                        // Quantum / Magma core with high-energy veins
                        float n = fbm(uv * 5.2 + vec2(uTime * .05, -uTime * .03));
                        surf = pow(n, 1.6);
                        veins = pow(smoothstep(.45, .82, n), 2.2);
                    }

                    vec3 ld = normalize(vec3(1.1, .65, .75));
                    float diff = max(dot(vN, ld), 0.);
                    vec3 viewDir = normalize(vVP);
                    float fresnel = pow(clamp(1. - dot(viewDir, vN), 0., 1.), 2.6);

                    // Deep space shadow to luminous accent surface
                    vec3 deepShadow = vec3(0.02, 0.03, 0.06);
                    vec3 midTone    = mix(vec3(0.14, 0.18, 0.26), uColor * 0.85, 0.65);
                    vec3 highTone   = mix(uColor, vec3(1.0), 0.55);

                    vec3 surfaceCol = mix(deepShadow, midTone, smoothstep(0.15, 0.7, surf));
                    surfaceCol = mix(surfaceCol, highTone, smoothstep(0.65, 0.95, surf));

                    // Day/Night shading + nightside energy veins
                    vec3 litColor = surfaceCol * (0.22 + diff * 0.88);
                    float nightMask = smoothstep(0.35, 0.0, diff);
                    litColor += uColor * veins * (0.35 + nightMask * 0.65 + uHover * 0.45);

                    // Atmospheric Fresnel rim
                    litColor += mix(uColor, vec3(1.0), 0.4) * fresnel * (0.55 + uHover * 0.65);

                    // Dimming support when filtering categories
                    litColor *= (1.0 - uDim * 0.72);

                    gl_FragColor = vec4(clamp(litColor, 0.0, 1.0), 1.0);
                }
            `
        });

        this.planetMesh = new THREE.Mesh(new THREE.SphereGeometry(r, 56, 56), this.planetMat);
        this.group.add(this.planetMesh);
    }

    _buildGlow() {
        const r = this.cfg.r;
        // Inner chromatic atmosphere
        this.atmMat = new THREE.ShaderMaterial({
            uniforms: {
                uHover: { value: 0 },
                uDim:   { value: 0 },
                uColor: { value: this.colorVec }
            },
            vertexShader: `
                varying vec3 vN, vVP;
                void main() {
                    vN = normalize(normalMatrix * normal);
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    vVP = -mv.xyz;
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform float uHover, uDim;
                uniform vec3 uColor;
                varying vec3 vN, vVP;
                void main() {
                    float f = pow(clamp(1. - dot(normalize(vVP), vN), 0., 1.), 2.4);
                    vec3 col = mix(uColor, vec3(1.0), 0.35);
                    float alpha = f * (0.52 + uHover * 0.58) * (1.0 - uDim * 0.75);
                    gl_FragColor = vec4(col, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: false,
            side: THREE.FrontSide
        });
        this.atmMesh = new THREE.Mesh(new THREE.SphereGeometry(r * 1.42, 28, 28), this.atmMat);
        this.atmMesh.renderOrder = 1;
        this.group.add(this.atmMesh);

        // Outer corona halo
        this.haloMat = new THREE.ShaderMaterial({
            uniforms: {
                uHover: { value: 0 },
                uDim:   { value: 0 },
                uColor: { value: this.colorVec }
            },
            vertexShader: `
                varying vec3 vN, vVP;
                void main() {
                    vN = normalize(normalMatrix * normal);
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    vVP = -mv.xyz;
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform float uHover, uDim;
                uniform vec3 uColor;
                varying vec3 vN, vVP;
                void main() {
                    float f = pow(clamp(1. - dot(normalize(vVP), vN), 0., 1.), 4.6);
                    float alpha = f * (0.3 + uHover * 0.45) * (1.0 - uDim * 0.8);
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: false,
            side: THREE.FrontSide
        });
        this.haloMesh = new THREE.Mesh(new THREE.SphereGeometry(r * 1.95, 28, 28), this.haloMat);
        this.haloMesh.renderOrder = 2;
        this.group.add(this.haloMesh);
    }

    _buildRings() {
        const { r, rings: rc } = this.cfg;
        if (!rc) return;
        for (let i = 0; i < rc; i++) {
            const inner = r * (1.68 + i * 0.52);
            const outer = inner + r * 0.28;
            const mat = new THREE.ShaderMaterial({
                uniforms: {
                    uTime:  { value: 0 },
                    uHover: { value: 0 },
                    uDim:   { value: 0 },
                    uColor: { value: this.colorVec }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float uTime, uHover, uDim;
                    uniform vec3 uColor;
                    varying vec2 vUv;
                    float h(float n){ return fract(sin(n)*43758.5); }
                    void main() {
                        float rad = vUv.x;
                        float band = sin(rad * 40. + uTime * .08) * .5 + .5;
                        float gap = h(floor(rad * 20.)) > .62 ? 0.15 : 1.0;
                        float d = band * gap;
                        float edge = smoothstep(0., .1, rad) * smoothstep(1., .9, rad);
                        float a = d * edge * (.38 + uHover * .32) * (1.0 - uDim * 0.75);
                        vec3 col = mix(uColor, vec3(1.0), 0.45 + d * 0.35);
                        gl_FragColor = vec4(col, a);
                    }
                `,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                depthTest: false,
                side: THREE.DoubleSide
            });

            const geo = new THREE.RingGeometry(inner, outer, 96, 2);
            const pos = geo.attributes.position;
            const uv  = geo.attributes.uv;
            for (let j = 0; j < pos.count; j++) {
                const x = pos.getX(j), y = pos.getY(j), d = Math.sqrt(x * x + y * y);
                uv.setXY(j, (d - inner) / (outer - inner), Math.atan2(y, x) / (Math.PI * 2) + 0.5);
            }
            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = Math.PI / 2 + (i % 2 === 0 ? 0.22 : -0.18);
            mesh.rotation.z = (i - 0.5) * 0.16;
            this.group.add(mesh);
            this.rings.push({ mesh, mat });
        }
    }

    _buildMoons() {
        const { r, moons: mc } = this.cfg;
        for (let i = 0; i < mc; i++) {
            const orR    = r * (2.85 + i * 1.45);
            const moonR  = r * (0.08 + i * 0.025);
            const baseSpd = 0.32 + i * 0.18;
            const offset = (i / Math.max(1, mc)) * Math.PI * 2;
            const tilt   = (i % 2 === 0 ? 1 : -1) * (0.18 + i * 0.1);

            const mat = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: new THREE.Color(this.data.accent || '#38bdf8'),
                emissiveIntensity: 0.45,
                roughness: 0.5,
                metalness: 0.2
            });
            const mesh = new THREE.Mesh(new THREE.SphereGeometry(moonR, 14, 14), mat);

            const orPts = [];
            for (let j = 0; j <= 72; j++) {
                const a = (j / 72) * Math.PI * 2;
                orPts.push(new THREE.Vector3(Math.cos(a) * orR, 0, Math.sin(a) * orR));
            }
            const oLine = new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(orPts),
                new THREE.LineBasicMaterial({
                    color: new THREE.Color(this.data.accent || '#ffffff'),
                    transparent: true,
                    opacity: 0.12,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                })
            );
            oLine.rotation.x = tilt;
            this.group.add(oLine);
            this.group.add(mesh);
            this.moons.push({ mesh, orR, spd: baseSpd, baseSpd, offset, tilt });
        }
    }

    _buildReticle() {
        // Subtle 3D orbital target ring around the planet
        const r = this.cfg.r * 2.35;
        const pts = [];
        for (let i = 0; i <= 64; i++) {
            const a = (i / 64) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0));
        }
        this.reticleMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(this.data.accent || '#38bdf8'),
            transparent: true,
            opacity: 0.14,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.reticle = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), this.reticleMat);
        this.group.add(this.reticle);
    }

    _buildLabel() {
        const div = document.createElement('button');
        div.type = 'button';
        div.className = 'project-label';
        div.style.setProperty('--node-accent', this.data.accent || '#38bdf8');

        const code = this.data.code || `NODE-${String(this.index).padStart(2, '0')}`;
        const kicker = this.data.kicker || 'System';

        div.innerHTML = `
            <span class="pl-dot"></span>
            <span class="pl-meta">
                <span class="pl-code">${code} · ${kicker}</span>
                <span class="pl-title">${this.data.title}</span>
            </span>
        `;

        // Allow direct click/tap on the floating 3D label
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            this.experience.selectNode?.(this);
        });
        div.addEventListener('mouseenter', () => {
            this.onMouseEnter();
            this.experience.cursor?.enter();
        });
        div.addEventListener('mouseleave', () => {
            this.onMouseLeave();
            this.experience.cursor?.leave();
        });

        this.titleSpan = div.querySelector('.pl-title');
        this.scramble  = new ScrambleText(this.titleSpan);
        this.labelEl   = div;

        this.label = new CSS2DObject(div);
        this.label.position.set(0, this.cfg.r * 2.25 + 1.1, 0);
        this.group.add(this.label);
    }

    setDimmed(dimmed) {
        this.isDimmed = dimmed;
        const target = dimmed ? 1 : 0;
        gsap.to(this.planetMat.uniforms.uDim, { value: target, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uDim,    { value: target, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uDim,   { value: target, duration: 0.45, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat.uniforms.uDim, { value: target, duration: 0.45, overwrite: 'auto' }));
        if (this.labelEl) {
            this.labelEl.classList.toggle('is-dimmed', dimmed);
        }
    }

    update() {
        const t = this.experience.time.elapsed;
        if (this.planetMat.uniforms.uTime) this.planetMat.uniforms.uTime.value = t;
        this.rings.forEach((r, idx) => {
            if (r.mat.uniforms.uTime) r.mat.uniforms.uTime.value = t;
            r.mesh.rotation.z += (idx % 2 === 0 ? 0.0012 : -0.0009);
        });

        this.planetMesh.rotation.y += this.rotSpeed;

        const ty = this.isHovered ? 0 : Math.sin(t * this.floatSpeed + this.floatOffset) * 0.45;
        this.planetMesh.position.y += (ty - this.planetMesh.position.y) * 0.06;
        const py = this.planetMesh.position.y;

        this.atmMesh.position.y  = py;
        this.haloMesh.position.y = py;
        this.rings.forEach(r => { r.mesh.position.y = py; });

        if (this.reticle) {
            this.reticle.position.y = py;
            if (this.experience.camera?.instance) {
                this.reticle.lookAt(this.experience.camera.instance.position);
            }
        }

        this.moons.forEach(m => {
            const a  = t * m.spd + m.offset;
            const cT = Math.cos(m.tilt), sT = Math.sin(m.tilt);
            m.mesh.position.x = Math.cos(a) * m.orR;
            m.mesh.position.z = Math.sin(a) * m.orR * cT;
            m.mesh.position.y = py + Math.sin(a) * m.orR * sT;
            m.mesh.rotation.y += 0.012;
        });

        this.label.position.y = py + this.cfg.r * 2.25 + 1.1;
    }

    onMouseEnter() {
        if (this.isHovered) return;
        this.isHovered = true;
        if (this.experience.audio) this.experience.audio.play('hover');

        this.labelEl?.classList.add('is-hovered');
        this.scramble?.hover();

        gsap.to(this.planetMesh.scale, { x: 1.18, y: 1.18, z: 1.18, duration: 0.45, ease: 'back.out(1.7)', overwrite: 'auto' });
        gsap.to(this.atmMesh.scale,    { x: 1.24, y: 1.24, z: 1.24, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.haloMesh.scale,   { x: 1.42, y: 1.42, z: 1.42, duration: 0.55, overwrite: 'auto' });
        gsap.to(this.planetMat.uniforms.uHover, { value: 1, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 1, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 1, duration: 0.35, overwrite: 'auto' });
        if (this.reticleMat) gsap.to(this.reticleMat, { opacity: 0.65, duration: 0.35, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat.uniforms.uHover, { value: 1, duration: 0.35, overwrite: 'auto' }));
        this.moons.forEach(m => { m.spd = m.baseSpd * 2.4; });
    }

    onMouseLeave() {
        if (!this.isHovered) return;
        this.isHovered = false;

        this.labelEl?.classList.remove('is-hovered');

        gsap.to(this.planetMesh.scale, { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.atmMesh.scale,    { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.haloMesh.scale,   { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.planetMat.uniforms.uHover, { value: 0, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 0, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 0, duration: 0.35, overwrite: 'auto' });
        if (this.reticleMat) gsap.to(this.reticleMat, { opacity: 0.14, duration: 0.35, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat.uniforms.uHover, { value: 0, duration: 0.35, overwrite: 'auto' }));
        this.moons.forEach(m => { m.spd = m.baseSpd; });
    }
}
