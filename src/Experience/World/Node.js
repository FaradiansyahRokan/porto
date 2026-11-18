import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import Experience from '../Experience.js';
import ScrambleText from '../Utils/ScrambleText.js';

/**
 * Node — Silky, pearlescent 3D sculptural orb.
 * Designed for visual calm & tactile clarity: high-subdivision smooth spheres,
 * velvet subsurface Fresnel shading, whisper-thin orbital rings, and satin moons.
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

        this.floatOffset = index * 0.55;
        this.floatSpeed  = 0.42; // Calm ~0.07Hz coherent breathing rhythm
        this.rotSpeed    = 0.0022 + (index % 3) * 0.0008;

        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.userData = data;
        this.group.userData.isNode = true;
        this.group.userData.nodeInstance = this;

        this.cfg = this._cfg();
        this.colorVec = new THREE.Vector3(...(data.accentRgb || [0.89, 0.78, 0.60]));

        this._buildCoreOrb();
        this._buildGlow();
        this._buildSilkRings();
        this._buildSatinMoons();
        this._buildLabel();
    }

    _cfg() {
        const t = this.data.type;
        const c = this.data.category || '';
        const b = { r: 1.7, pattern: 0, rings: 1, moons: 1 };
        if (t === 'about')         return { ...b, r: 2.9, pattern: 1, rings: 2, moons: 3 };
        if (t === 'certification') return { ...b, r: 2.1, pattern: 2, rings: 2, moons: 2 };
        if (c === 'web3')          return { ...b, r: 1.8, pattern: 3, rings: 2, moons: 2 };
        if (c === 'infra')         return { ...b, r: 1.8, pattern: 2, rings: 2, moons: 1 };
        if (c === 'mobile')        return { ...b, r: 1.75, pattern: 1, rings: 1, moons: 2 };
        return b;
    }

    _buildCoreOrb() {
        const { r, pattern } = this.cfg;
        // High-subdivision sphere for completely smooth, zero-facet silhouette
        const geo = new THREE.SphereGeometry(r, 72, 72);

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
                varying float vRipple;

                void main() {
                    vec3 p = position;
                    // Gentle, liquid-pearl organic breathing — never jagged
                    float wave = sin(p.y * 1.8 + uTime * 1.1) * cos(p.x * 1.6 - uTime * 0.9);
                    float disp = wave * (0.014 + uHover * 0.028 + uPulse * 0.11);
                    p += normal * disp;
                    vRipple = disp;

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
                varying float vRipple;

                float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5); }
                float n21(vec2 p){
                    vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
                    return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);
                }
                float fbm(vec2 p){
                    float v=0., a=.5;
                    for(int i=0;i<5;i++){ v+=a*n21(p); p*=2.02; a*=.5; }
                    return v;
                }

                void main() {
                    vec2 uv = vec2(atan(vPos.z, vPos.x)/6.2832 + .5, asin(clamp(vPos.y/length(vPos), -1., 1.))/3.1416 + .5);
                    float surf = .5;

                    if (uPattern < .5) {
                        // Flowing silk currents
                        float n1 = fbm(uv * 2.8 + vec2(uTime * .018, uTime * .01));
                        surf = smoothstep(0.2, 0.85, n1);
                    } else if (uPattern < 1.5) {
                        // Pearlescent atmospheric bands
                        float w = fbm(uv * 2.4 + uTime * .015);
                        float bands = sin(uv.y * 12.0 + w * 3.2 + uTime * .025) * 0.5 + 0.5;
                        surf = mix(bands, w, 0.42);
                    } else if (uPattern < 2.5) {
                        // Frosted mineral mist
                        float n = fbm(uv * 3.2 - vec2(uTime * .012));
                        surf = pow(n, 1.15);
                    } else {
                        // Soft aurora swirl
                        float n = fbm(uv * 3.6 + vec2(uTime * .022, -uTime * .015));
                        surf = smoothstep(0.18, 0.88, n);
                    }

                    // Soft studio three-point lighting
                    vec3 keyLight  = normalize(vec3(0.9, 0.8, 1.0));
                    vec3 fillLight = normalize(vec3(-0.8, -0.3, 0.5));
                    float keyDiff  = max(dot(vN, keyLight), 0.0);
                    float fillDiff = max(dot(vN, fillLight), 0.0) * 0.25;
                    float wrapDiff = clamp((dot(vN, keyLight) + 0.45) / 1.45, 0.0, 1.0);

                    vec3 viewDir = normalize(vVP);
                    float fresnel = pow(clamp(1.0 - dot(viewDir, vN), 0.0, 1.0), 2.8);

                    // Specular satin sheen
                    vec3 halfVec = normalize(keyLight + viewDir);
                    float spec = pow(max(dot(vN, halfVec), 0.0), 28.0) * 0.35;

                    vec3 velvetShadow = mix(vec3(0.04, 0.045, 0.06), uColor * 0.18, 0.5);
                    vec3 midTone      = mix(vec3(0.22, 0.24, 0.28), uColor * 0.88, 0.72);
                    vec3 pearlLight   = mix(uColor, vec3(1.0), 0.62);

                    vec3 baseCol = mix(velvetShadow, midTone, smoothstep(0.15, 0.72, surf));
                    baseCol = mix(baseCol, pearlLight, smoothstep(0.6, 0.95, surf) * 0.65);

                    vec3 lit = baseCol * (0.28 + wrapDiff * 0.76 + fillDiff);
                    lit += pearlLight * spec * (0.6 + uHover * 0.6);
                    lit += mix(uColor, vec3(1.0), 0.55) * fresnel * (0.48 + uHover * 0.52 + uPulse * 0.9);
                    lit += vec3(1.0) * max(vRipple * 2.5, 0.0) * uPulse;

                    // Gentle figure-ground dimming when another node or filter is focused
                    lit *= (1.0 - uDim * 0.68);
                    gl_FragColor = vec4(clamp(lit, 0.0, 1.0), 1.0);
                }
            `
        });

        this.planetMesh = new THREE.Mesh(geo, this.planetMat);
        this.planetMesh.userData.nodeInstance = this;
        this.group.add(this.planetMesh);
    }

    _buildGlow() {
        const r = this.cfg.r;
        // Soft inner atmospheric mist
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
                    float f = pow(clamp(1.0 - dot(normalize(vVP), vN), 0.0, 1.0), 3.0);
                    vec3 col = mix(uColor, vec3(1.0), 0.42);
                    float alpha = f * (0.36 + uHover * 0.42) * (1.0 - uDim * 0.75);
                    gl_FragColor = vec4(col, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: false,
            side: THREE.FrontSide
        });
        this.atmMesh = new THREE.Mesh(new THREE.SphereGeometry(r * 1.38, 36, 36), this.atmMat);
        this.atmMesh.renderOrder = 1;
        this.group.add(this.atmMesh);

        // Wide, calm outer corona
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
                    float f = pow(clamp(1.0 - dot(normalize(vVP), vN), 0.0, 1.0), 5.0);
                    float alpha = f * (0.22 + uHover * 0.32) * (1.0 - uDim * 0.8);
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            depthTest: false,
            side: THREE.FrontSide
        });
        this.haloMesh = new THREE.Mesh(new THREE.SphereGeometry(r * 1.88, 36, 36), this.haloMat);
        this.haloMesh.renderOrder = 2;
        this.group.add(this.haloMesh);
    }

    _buildSilkRings() {
        const { r, rings: rc } = this.cfg;
        for (let i = 0; i < rc; i++) {
            const radius = r * (1.68 + i * 0.45);
            const geo    = new THREE.TorusGeometry(radius, 0.015, 16, 128);
            const mat    = new THREE.MeshBasicMaterial({
                color: new THREE.Color(this.data.accent || '#e2c799'),
                transparent: true,
                opacity: 0.24 - i * 0.06,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = Math.PI / 2 + (i % 2 === 0 ? 0.34 : -0.38);
            mesh.rotation.y = i * 0.55;
            this.group.add(mesh);
            this.rings.push({
                mesh,
                mat,
                baseOp: 0.24 - i * 0.06,
                spdX: (i % 2 === 0 ? 1 : -1) * 0.0018,
                spdZ: (i % 2 === 0 ? -1 : 1) * 0.0024
            });
        }
    }

    _buildSatinMoons() {
        const { r, moons: mc } = this.cfg;
        for (let i = 0; i < mc; i++) {
            const orR     = r * (2.55 + i * 1.05);
            const moonR   = r * (0.075 + i * 0.015);
            const baseSpd = 0.28 + i * 0.12;
            const offset  = (i / Math.max(1, mc)) * Math.PI * 2;
            const tilt    = (i % 2 === 0 ? 1 : -1) * (0.22 + i * 0.1);

            const mat = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: new THREE.Color(this.data.accent || '#e2c799'),
                emissiveIntensity: 0.35,
                roughness: 0.35,
                metalness: 0.1
            });
            const mesh = new THREE.Mesh(new THREE.SphereGeometry(moonR, 24, 24), mat);

            const orPts = [];
            for (let j = 0; j <= 84; j++) {
                const a = (j / 84) * Math.PI * 2;
                orPts.push(new THREE.Vector3(Math.cos(a) * orR, 0, Math.sin(a) * orR));
            }
            const oLine = new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(orPts),
                new THREE.LineBasicMaterial({
                    color: new THREE.Color(this.data.accent || '#ffffff'),
                    transparent: true,
                    opacity: 0.08,
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

    _buildLabel() {
        const div = document.createElement('button');
        div.type = 'button';
        div.className = 'project-label';
        div.style.setProperty('--node-accent', this.data.accent || '#e2c799');

        const idxStr = String(this.index).padStart(2, '0');
        const kicker = this.data.kicker || 'Project';

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
        this.label.position.set(0, this.cfg.r * 2.15 + 1.0, 0);
        this.group.add(this.label);
    }

    triggerPulse() {
        this.planetMat.uniforms.uPulse.value = 1.0;
        gsap.to(this.planetMat.uniforms.uPulse, { value: 0, duration: 1.6, ease: 'power3.out', overwrite: 'auto' });
        gsap.fromTo(
            this.planetMesh.scale,
            { x: 1.12, y: 1.12, z: 1.12 },
            { x: 1, y: 1, z: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' }
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
        this.rings.forEach(r => gsap.to(r.mat, { opacity: dimmed ? 0.03 : r.baseOp, duration: 0.45, overwrite: 'auto' }));
        this.labelEl?.classList.toggle('is-dimmed', dimmed);
    }

    update() {
        const t = this.experience.time.elapsed;
        if (this.planetMat.uniforms.uTime) this.planetMat.uniforms.uTime.value = t;

        const speedMult = this.isFocused ? 1.4 : 1.0;
        this.planetMesh.rotation.y += this.rotSpeed * speedMult;

        // Coherent breathing levitation
        const ty = (this.isHovered || this.isFocused) ? 0 : Math.sin(t * this.floatSpeed + this.floatOffset) * 0.42;
        this.planetMesh.position.y += (ty - this.planetMesh.position.y) * 0.05;
        const py = this.planetMesh.position.y;

        this.atmMesh.position.y  = py;
        this.haloMesh.position.y = py;

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
        });

        this.label.position.y = py + this.cfg.r * 2.15 + 1.0;
    }

    onMouseEnter() {
        if (this.isHovered) return;
        this.isHovered = true;
        if (this.experience.audio) this.experience.audio.play('hover');

        this.labelEl?.classList.add('is-hovered');
        this.scramble?.hover();

        // Figure-ground separation: gently soften non-hovered nodes to guide visual attention
        this.experience.world?.nodes?.forEach(n => {
            if (n !== this && !this.experience.isModalOpen && !this.experience.world?.activeCategory) {
                gsap.to(n.planetMat.uniforms.uDim, { value: 0.45, duration: 0.4, overwrite: 'auto' });
                gsap.to(n.atmMat.uniforms.uDim,    { value: 0.45, duration: 0.4, overwrite: 'auto' });
            }
        });

        gsap.to(this.planetMesh.scale, { x: 1.12, y: 1.12, z: 1.12, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
        gsap.to(this.atmMesh.scale,    { x: 1.16, y: 1.16, z: 1.16, duration: 0.5, overwrite: 'auto' });
        gsap.to(this.haloMesh.scale,   { x: 1.24, y: 1.24, z: 1.24, duration: 0.55, overwrite: 'auto' });
        gsap.to(this.planetMat.uniforms.uHover, { value: 1, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 1, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 1, duration: 0.35, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat, { opacity: 0.55, duration: 0.35, overwrite: 'auto' }));
        this.moons.forEach(m => { m.spd = m.baseSpd * 1.8; });
    }

    onMouseLeave() {
        if (!this.isHovered) return;
        this.isHovered = false;

        this.labelEl?.classList.remove('is-hovered');

        this.experience.world?.nodes?.forEach(n => {
            if (n !== this && !this.experience.world?.activeCategory) {
                gsap.to(n.planetMat.uniforms.uDim, { value: 0, duration: 0.45, overwrite: 'auto' });
                gsap.to(n.atmMat.uniforms.uDim,    { value: 0, duration: 0.45, overwrite: 'auto' });
            }
        });

        gsap.to(this.planetMesh.scale, { x: 1, y: 1, z: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
        gsap.to(this.atmMesh.scale,    { x: 1, y: 1, z: 1, duration: 0.5, overwrite: 'auto' });
        gsap.to(this.haloMesh.scale,   { x: 1, y: 1, z: 1, duration: 0.5, overwrite: 'auto' });
        gsap.to(this.planetMat.uniforms.uHover, { value: 0, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.atmMat.uniforms.uHover,    { value: 0, duration: 0.35, overwrite: 'auto' });
        gsap.to(this.haloMat.uniforms.uHover,   { value: 0, duration: 0.35, overwrite: 'auto' });
        this.rings.forEach(r => gsap.to(r.mat, { opacity: r.baseOp, duration: 0.35, overwrite: 'auto' }));
        this.moons.forEach(m => { m.spd = m.baseSpd; });
    }
}
