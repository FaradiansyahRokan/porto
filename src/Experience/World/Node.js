import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import Experience from '../Experience.js';
import ScrambleText from '../Utils/ScrambleText.js';

/**
 * Node — Sculptural 3D Paradigm Relic / Architectural Monolith.
 * Each category has a distinct sacred-geometry cage, gimbal ring assembly,
 * vertex-displaced energy core, and interactive overdrive pulse.
 */
export default class Node {
    constructor(data, position, index = 0) {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.data       = data;
        this.index      = index;
        this.isHovered  = false;
        this.isFocused  = false;
        this.isDimmed   = false;
        this.rings      = [];
        this.moons      = [];

        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed  = 0.35 + Math.random() * 0.25;
        this.rotSpeed    = 0.004 + Math.random() * 0.004;

        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.userData = data;
        this.group.userData.isNode = true;
        this.group.userData.nodeInstance = this;

        this.cfg = this._cfg();
        this.colorVec = new THREE.Vector3(...(data.accentRgb || [0.38, 0.74, 0.98]));

        this._buildCoreRelic();
        this._buildSacredCage();
        this._buildGlow();
        this._buildGimbalRings();
        this._buildSatellites();
        this._buildVerticalSpire();
        this._buildLabel();
    }

    _cfg() {
        const t = this.data.type;
        const c = this.data.category || '';
        const b = { r: 1.65, pattern: 0, rings: 2, moons: 2, archetype: 'nova' };
        if (t === 'about')         return { ...b, r: 2.85, pattern: 1, rings: 3, moons: 4, archetype: 'origin' };
        if (t === 'certification') return { ...b, r: 2.15, pattern: 3, rings: 2, moons: 3, archetype: 'vault' };
        if (c === 'web3')          return { ...b, r: 1.80, pattern: 3, rings: 2, moons: 3, archetype: 'obelisk' };
        if (c === 'infra')         return { ...b, r: 1.80, pattern: 2, rings: 3, moons: 2, archetype: 'dyson' };
        if (c === 'mobile')        return { ...b, r: 1.70, pattern: 2, rings: 2, moons: 2, archetype: 'gyro' };
        return b;
    }

    _buildCoreRelic() {
        const { r, pattern, archetype } = this.cfg;

        // Distinct core geometry per archetype
        let geo;
        if (archetype === 'obelisk') {
            geo = new THREE.OctahedronGeometry(r * 1.08, 3);
        } else if (archetype === 'vault') {
            geo = new THREE.IcosahedronGeometry(r * 1.04, 2);
        } else if (archetype === 'gyro') {
            geo = new THREE.IcosahedronGeometry(r, 4);
        } else {
            geo = new THREE.SphereGeometry(r, 64, 64);
        }

        this.planetMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime:    { value: 0 },
                uPattern: { value: pattern },
                uHover:   { value: 0 },
                uPulse:   { value: 0 },
                uDim:     { value: 0 },
                uColor:   { value: this.colorVec }
            },
            vertexShader: `
                uniform float uTime, uHover, uPulse;
                varying vec3 vN, vPos, vVP;
                varying float vDisp;

                void main() {
                    vec3 p = position;
                    // Harmonic sculptural displacement on hover / overdrive pulse
                    float wave = sin(p.x * 3.2 + uTime * 2.4) * cos(p.y * 3.2 - uTime * 1.8) * sin(p.z * 3.2 + uTime * 2.0);
                    float disp = wave * (0.04 + uHover * 0.08 + uPulse * 0.28);
                    p += normal * disp;
                    vDisp = disp;

                    vN   = normalize(normalMatrix * normal);
                    vPos = p;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    vVP  = -mv.xyz;
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: `
                uniform float uTime, uPattern, uHover, uPulse, uDim;
                uniform vec3 uColor;
                varying vec3 vN, vPos, vVP;
                varying float vDisp;

                float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5); }
                float n21(vec2 p){
                    vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
                    return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);
                }
                float fbm(vec2 p){
                    float v=0., a=.5;
                    for(int i=0;i<5;i++){ v+=a*n21(p); p*=2.12; a*=.5; }
                    return v;
                }

                void main() {
                    vec2 uv = vec2(atan(vPos.z, vPos.x)/6.2832 + .5, asin(clamp(vPos.y/length(vPos), -1., 1.))/3.1416 + .5);
                    float surf = .5;
                    float veins = 0.;

                    if (uPattern < .5) {
                        surf = fbm(uv * 5.0 + vec2(uTime * .03, 0.));
                        veins = smoothstep(.58, .76, fbm(uv * 11. - uTime * .04));
                    } else if (uPattern < 1.5) {
                        float w = fbm(uv * 3.5 + uTime * .025);
                        float bands = sin(uv.y * 24. + w * 4.5 + uTime * .05) * .5 + .5;
                        surf = mix(bands, w, .35);
                        veins = smoothstep(.62, .82, bands * w);
                    } else if (uPattern < 2.5) {
                        surf = fbm(uv * 3.8 + vec2(uTime * .02));
                        float crack = abs(sin(uv.x * 30. + surf * 6.) * sin(uv.y * 26. - surf * 5.));
                        veins = pow(1. - clamp(crack, 0., 1.), 4.5);
                    } else {
                        float n = fbm(uv * 5.5 + vec2(uTime * .06, -uTime * .04));
                        surf = pow(n, 1.5);
                        veins = pow(smoothstep(.42, .8, n), 2.0);
                    }

                    vec3 ld = normalize(vec3(1.2, 0.8, 0.9));
                    float diff = max(dot(vN, ld), 0.0);
                    vec3 viewDir = normalize(vVP);
                    float fresnel = pow(clamp(1.0 - dot(viewDir, vN), 0.0, 1.0), 2.3);

                    vec3 deepObsidian = vec3(0.015, 0.02, 0.045);
                    vec3 midColor     = mix(vec3(0.1, 0.14, 0.22), uColor * 0.9, 0.72);
                    vec3 peakColor    = mix(uColor, vec3(1.0), 0.65);

                    vec3 col = mix(deepObsidian, midColor, smoothstep(0.12, 0.68, surf));
                    col = mix(col, peakColor, smoothstep(0.62, 0.92, surf));

                    vec3 lit = col * (0.25 + diff * 0.85);
                    float nightGlow = smoothstep(0.4, 0.0, diff);
                    lit += uColor * veins * (0.45 + nightGlow * 0.75 + uHover * 0.55 + uPulse * 1.4);
                    lit += mix(uColor, vec3(1.0), 0.5) * fresnel * (0.65 + uHover * 0.7 + uPulse * 1.2);
                    lit += vec3(1.0) * max(vDisp * 3.0, 0.0) * (uHover + uPulse);

                    lit *= (1.0 - uDim * 0.75);
                    gl_FragColor = vec4(clamp(lit, 0.0, 1.0), 1.0);
                }
            `
        });

        this.planetMesh = new THREE.Mesh(geo, this.planetMat);
        this.planetMesh.userData.nodeInstance = this;
        this.group.add(this.planetMesh);
    }

    _buildSacredCage() {
        // Outer architectural wireframe cage surrounding the core
        const { r, archetype } = this.cfg;
        let cageGeo;
        if (archetype === 'origin') {
            cageGeo = new THREE.OctahedronGeometry(r * 1.38, 0);
        } else if (archetype === 'vault' || archetype === 'obelisk') {
            cageGeo = new THREE.DodecahedronGeometry(r * 1.35, 0);
        } else if (archetype === 'dyson') {
            cageGeo = new THREE.CylinderGeometry(r * 1.28, r * 1.28, r * 2.1, 8, 1, true);
        } else {
            cageGeo = new THREE.IcosahedronGeometry(r * 1.34, 0);
        }

        const edges = new THREE.EdgesGeometry(cageGeo);
        this.cageMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(this.data.accent || '#38bdf8'),
            transparent: true,
            opacity: 0.32,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.cageMesh = new THREE.LineSegments(edges, this.cageMat);
        this.group.add(this.cageMesh);
    }

    _buildGlow() {
        const r = this.cfg.r;
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
                    float f = pow(clamp(1.0 - dot(normalize(vVP), vN), 0.0, 1.0), 2.5);
                    vec3 col = mix(uColor, vec3(1.0), 0.35);
                    float alpha = f * (0.48 + uHover * 0.55) * (1.0 - uDim * 0.75);
                    gl_FragColor = vec4(col, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: false,
            side: THREE.FrontSide
        });
        this.atmMesh = new THREE.Mesh(new THREE.SphereGeometry(r * 1.48, 28, 28), this.atmMat);
        this.atmMesh.renderOrder = 1;
        this.group.add(this.atmMesh);

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
                    float f = pow(clamp(1.0 - dot(normalize(vVP), vN), 0.0, 1.0), 4.5);
                    float alpha = f * (0.28 + uHover * 0.42) * (1.0 - uDim * 0.8);
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: false,
            side: THREE.FrontSide
        });
        this.haloMesh = new THREE.Mesh(new THREE.SphereGeometry(r * 2.05, 28, 28), this.haloMat);
        this.haloMesh.renderOrder = 2;
        this.group.add(this.haloMesh);
    }

    _buildGimbalRings() {
        const { r, rings: rc } = this.cfg;
        for (let i = 0; i < rc; i++) {
            const radius = r * (1.72 + i * 0.48);
            const tube   = 0.032 + (i === 0 ? 0.015 : 0);
            const geo    = new THREE.TorusGeometry(radius, tube, 10, 96);
            const mat    = new THREE.MeshBasicMaterial({
                color: new THREE.Color(this.data.accent || '#38bdf8'),
                transparent: true,
                opacity: 0.38 - i * 0.07,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = Math.PI / 2 + (i % 2 === 0 ? 0.35 : -0.42);
            mesh.rotation.y = i * 0.6;
            this.group.add(mesh);
            this.rings.push({
                mesh,
                mat,
                baseOp: 0.38 - i * 0.07,
                spdX: (i % 2 === 0 ? 1 : -1) * (0.004 + i * 0.002),
                spdZ: (i % 2 === 0 ? -1 : 1) * (0.006 + i * 0.0015)
            });
        }
    }

    _buildSatellites() {
        const { r, moons: mc } = this.cfg;
        for (let i = 0; i < mc; i++) {
            const orR     = r * (2.65 + i * 1.15);
            const satSize = r * (0.1 + i * 0.02);
            const baseSpd = 0.42 + i * 0.2;
            const offset  = (i / Math.max(1, mc)) * Math.PI * 2;
            const tilt    = (i % 2 === 0 ? 1 : -1) * (0.24 + i * 0.12);

            const mat = new THREE.MeshBasicMaterial({
                color: new THREE.Color(this.data.accent || '#ffffff'),
                wireframe: i % 2 === 1
            });
            const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(satSize, 0), mat);

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
                    opacity: 0.14,
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

    _buildVerticalSpire() {
        // Vertical architectural laser axis through the relic
        const h = this.cfg.r * 3.4;
        const pts = [new THREE.Vector3(0, -h, 0), new THREE.Vector3(0, h, 0)];
        this.spireMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(this.data.accent || '#38bdf8'),
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.spire = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), this.spireMat);
        this.group.add(this.spire);
    }

    _buildLabel() {
        const div = document.createElement('button');
        div.type = 'button';
        div.className = 'project-label';
        div.style.setProperty('--node-accent', this.data.accent || '#38bdf8');

        const idxStr = String(this.index).padStart(2, '0');
        const kicker = this.data.kicker || 'Relic';

        div.innerHTML = `
            <span class="pl-index">${idxStr}</span>
            <span class="pl-meta">
                <span class="pl-code">${kicker}</span>
                <span class="pl-title">${this.data.title}</span>
            </span>
        `;

        div.addEventListener('click', (e) => {
            e.stopPropagation();
            this.experience.selectNode?.(this, true);
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
        this.label.position.set(0, this.cfg.r * 2.35 + 1.2, 0);
        this.group.add(this.label);
    }

    triggerPulse() {
        this.planetMat.uniforms.uPulse.value = 1.0;
        gsap.to(this.planetMat.uniforms.uPulse, { value: 0, duration: 1.4, ease: 'expo.out', overwrite: 'auto' });
        gsap.fromTo(
            this.cageMesh.scale,
            { x: 1.35, y: 1.35, z: 1.35 },
            { x: 1, y: 1, z: 1, duration: 1.1, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' }
        );
    }

    setFocused(focused) {
        this.isFocused = focused;
        this.labelEl?.classList.toggle('is-focused', focused);
        if (focused) this.triggerPulse();
    }

    setDimmed(dimmed) {
        this.isDimmed = dimmed;
        const target = dimmed ? 1 : 0;
        gsap.to(this.planetMat.uniforms.uDim, { value: target, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uDim,    { value: target, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uDim,   { value: target, duration: 0.45, overwrite: 'auto' });
        if (this.cageMat) gsap.to(this.cageMat, { opacity: dimmed ? 0.06 : 0.32, duration: 0.45, overwrite: 'auto' });
        this.labelEl?.classList.toggle('is-dimmed', dimmed);
    }

    update() {
        const t = this.experience.time.elapsed;
        if (this.planetMat.uniforms.uTime) this.planetMat.uniforms.uTime.value = t;

        // Rotate core & counter-rotate sacred geometry cage
        const speedMult = this.isFocused ? 1.8 : 1.0;
        this.planetMesh.rotation.y += this.rotSpeed * speedMult;
        this.planetMesh.rotation.x = Math.sin(t * 0.4 + this.floatOffset) * 0.12;

        if (this.cageMesh) {
            this.cageMesh.rotation.y -= this.rotSpeed * 0.85 * speedMult;
            this.cageMesh.rotation.z += this.rotSpeed * 0.4 * speedMult;
        }

        // Levitation
        const ty = (this.isHovered || this.isFocused) ? 0 : Math.sin(t * this.floatSpeed + this.floatOffset) * 0.5;
        this.planetMesh.position.y += (ty - this.planetMesh.position.y) * 0.06;
        const py = this.planetMesh.position.y;

        this.atmMesh.position.y  = py;
        this.haloMesh.position.y = py;
        if (this.cageMesh) this.cageMesh.position.y = py;

        // Gimbal rings rotation
        this.rings.forEach(r => {
            r.mesh.position.y = py;
            r.mesh.rotation.x += r.spdX * speedMult;
            r.mesh.rotation.z += r.spdZ * speedMult;
        });

        this.moons.forEach(m => {
            const a  = t * m.spd + m.offset;
            const cT = Math.cos(m.tilt), sT = Math.sin(m.tilt);
            m.mesh.position.x = Math.cos(a) * m.orR;
            m.mesh.position.z = Math.sin(a) * m.orR * cT;
            m.mesh.position.y = py + Math.sin(a) * m.orR * sT;
            m.mesh.rotation.y += 0.025;
            m.mesh.rotation.x += 0.015;
        });

        this.label.position.y = py + this.cfg.r * 2.35 + 1.2;
    }

    onMouseEnter() {
        if (this.isHovered) return;
        this.isHovered = true;
        if (this.experience.audio) this.experience.audio.play('hover');

        this.labelEl?.classList.add('is-hovered');
        this.scramble?.hover();

        gsap.to(this.planetMesh.scale, { x: 1.18, y: 1.18, z: 1.18, duration: 0.45, ease: 'back.out(1.7)', overwrite: 'auto' });
        gsap.to(this.cageMesh.scale,   { x: 1.22, y: 1.22, z: 1.22, duration: 0.45, ease: 'back.out(1.7)', overwrite: 'auto' });
        gsap.to(this.atmMesh.scale,    { x: 1.25, y: 1.25, z: 1.25, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.haloMesh.scale,   { x: 1.45, y: 1.45, z: 1.45, duration: 0.55, overwrite: 'auto' });
        gsap.to(this.planetMat.uniforms.uHover, { value: 1, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 1, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 1, duration: 0.35, overwrite: 'auto' });
        if (this.cageMat)  gsap.to(this.cageMat,  { opacity: 0.85, duration: 0.35, overwrite: 'auto' });
        if (this.spireMat) gsap.to(this.spireMat, { opacity: 0.65, duration: 0.35, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat, { opacity: 0.78, duration: 0.35, overwrite: 'auto' }));
        this.moons.forEach(m => { m.spd = m.baseSpd * 2.5; });
    }

    onMouseLeave() {
        if (!this.isHovered) return;
        this.isHovered = false;

        this.labelEl?.classList.remove('is-hovered');

        gsap.to(this.planetMesh.scale, { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.cageMesh.scale,   { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.atmMesh.scale,    { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.haloMesh.scale,   { x: 1, y: 1, z: 1, duration: 0.45, overwrite: 'auto' });
        gsap.to(this.planetMat.uniforms.uHover, { value: 0, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 0, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 0, duration: 0.35, overwrite: 'auto' });
        if (this.cageMat)  gsap.to(this.cageMat,  { opacity: 0.32, duration: 0.35, overwrite: 'auto' });
        if (this.spireMat) gsap.to(this.spireMat, { opacity: 0.2,  duration: 0.35, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat, { opacity: r.baseOp, duration: 0.35, overwrite: 'auto' }));
        this.moons.forEach(m => { m.spd = m.baseSpd; });
    }
}
