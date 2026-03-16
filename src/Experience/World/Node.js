import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import Experience from '../Experience.js';
import ScrambleText from '../Utils/ScrambleText.js';

/**
 * Node — each portfolio item is rendered as a unique cosmic object.
 * Monochrome (white glow on black). No vertex displacement. No BackSide.
 */
export default class Node {
    constructor(data, position) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.data  = data;
        this.isHovered = false;
        this.rings = [];
        this.moons = [];
        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed  = 0.22 + Math.random() * 0.3;
        this.rotSpeed    = 0.002 + Math.random() * 0.005;

        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.userData = data;
        this.group.userData.isNode = true;
        this.group.userData.nodeInstance = this;

        this.cfg = this._cfg();
        this._buildPlanet();
        this._buildGlow();
        this._buildRings();
        this._buildMoons();
        this._buildLabel();

        this.scene.add(this.group);
    }

    _cfg() {
        const t = this.data.type, k = (this.data.kicker||'').toLowerCase();
        const b = { r:1.3, pattern:0, rings:0, moons:Math.floor(Math.random()*2), label:'' };
        if(t==='about')           return {...b,r:2.2,pattern:1,rings:2,moons:2};
        if(t==='certification')   return {...b,r:1.9,pattern:0,rings:3,moons:1};
        if(k.includes('android')) return {...b,r:1.5,pattern:2,rings:1,moons:1};
        if(k.includes('web3'))    return {...b,r:1.5,pattern:3,rings:1,moons:0};
        if(k.includes('backend')) return {...b,r:1.4,pattern:1,rings:1};
        if(k.includes('infra')||k.includes('nas')) return {...b,r:1.5,pattern:2,rings:2};
        return b;
    }

    _buildPlanet() {
        const { r, pattern } = this.cfg;
        this.planetMat = new THREE.ShaderMaterial({
            uniforms: { uTime:{value:0}, uPattern:{value:pattern}, uHover:{value:0} },
            vertexShader: `
                varying vec3 vN, vPos;
                void main(){
                    vN   = normalize(normalMatrix * normal);
                    vPos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime, uPattern, uHover;
                varying vec3 vN, vPos;

                float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}
                float n21(vec2 p){
                    vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
                    return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);
                }
                float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n21(p);p*=2.1;a*=.5;}return v;}

                void main(){
                    vec2 uv=vec2(atan(vPos.z,vPos.x)/6.2832+.5, asin(clamp(vPos.y/length(vPos),-1.,1.))/3.1416+.5);
                    float surf=.5;
                    if(uPattern<.5){
                        // Rocky — craters and ridges
                        surf=fbm(uv*4.+vec2(uTime*.035));
                        surf=mix(surf,step(.6,surf)*.9,0.3);
                    } else if(uPattern<1.5){
                        // Gas giant — bands with cyclones
                        float bands=sin(uv.y*20.+fbm(uv*2.5)*3.+uTime*.04)*.5+.5;
                        surf=mix(bands,fbm(uv*6.),0.28);
                    } else if(uPattern<2.5){
                        // Ice — cracked smooth
                        surf=fbm(uv*2.8+vec2(uTime*.018));
                        surf=mix(surf,pow(1.-fbm(uv*11.),2.)*.8,0.3);
                    } else {
                        // Lava — dark with white-hot cracks
                        float cracks=pow(fbm(uv*5.5+vec2(uTime*.07)),2.2);
                        surf=cracks;
                    }

                    vec3 ld=normalize(vec3(1.,.55,.5));
                    float diff=max(dot(vN,ld),0.);
                    float lit=mix(.05,.9,surf)*(0.18+diff*.82);

                    // Lava emissive
                    if(uPattern>2.5) lit+=surf*(1.-diff)*.3;

                    // Rim light
                    float rim=pow(1.-abs(dot(vN,vec3(0,0,1))),3.);
                    lit+=rim*(.1+uHover*.18);

                    gl_FragColor=vec4(vec3(clamp(lit,0.,1.)),1.);
                }
            `,
        });
        this.planetMesh = new THREE.Mesh(new THREE.SphereGeometry(this.cfg.r, 52, 52), this.planetMat);
        this.group.add(this.planetMesh);
    }

    _buildGlow() {
        const r = this.cfg.r;
        // Inner atmosphere — FrontSide only
        this.atmMat = new THREE.ShaderMaterial({
            uniforms:{ uHover:{value:0} },
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uHover;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),2.8);gl_FragColor=vec4(vec3(.82,.9,1.),f*(.48+uHover*.55)*.78);}`,
            transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, depthTest:false, side:THREE.FrontSide
        });
        this.atmMesh = new THREE.Mesh(new THREE.SphereGeometry(r*1.48,24,24), this.atmMat);
        this.atmMesh.renderOrder=1; this.group.add(this.atmMesh);

        // Outer halo — FrontSide
        this.haloMat = new THREE.ShaderMaterial({
            uniforms:{ uHover:{value:0} },
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uHover;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),5.2);gl_FragColor=vec4(vec3(.72,.84,1.),f*(.26+uHover*.38)*.62);}`,
            transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, depthTest:false, side:THREE.FrontSide
        });
        this.haloMesh = new THREE.Mesh(new THREE.SphereGeometry(r*1.95,24,24), this.haloMat);
        this.haloMesh.renderOrder=2; this.group.add(this.haloMesh);
    }

    _buildRings() {
        const {r, rings: rc} = this.cfg; if(!rc) return;
        for(let i=0;i<rc;i++){
            const inner=r*(1.75+i*.55), outer=inner+r*.26;
            const mat=new THREE.ShaderMaterial({
                uniforms:{uTime:{value:0},uHover:{value:0}},
                vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
                fragmentShader:`uniform float uTime,uHover;varying vec2 vUv;
                    float h(float n){return fract(sin(n)*43758.5);}
                    void main(){
                        float rad=vUv.x;
                        float band=sin(rad*42.+uTime*.055)*.5+.5;
                        float gap=h(floor(rad*22.))>.58?0.:1.;
                        float d=band*gap;
                        float edge=smoothstep(0.,.09,rad)*smoothstep(1.,.91,rad);
                        float a=d*edge*(.32+uHover*.22);
                        gl_FragColor=vec4(vec3(.75+d*.25),a);
                    }`,
                transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, depthTest:false, side:THREE.DoubleSide
            });
            const geo=new THREE.RingGeometry(inner,outer,92,2);
            const pos=geo.attributes.position, uv=geo.attributes.uv;
            for(let j=0;j<pos.count;j++){
                const x=pos.getX(j),y=pos.getY(j),d=Math.sqrt(x*x+y*y);
                uv.setXY(j,(d-inner)/(outer-inner),Math.atan2(y,x)/(Math.PI*2)+.5);
            }
            const mesh=new THREE.Mesh(geo,mat);
            mesh.rotation.x=Math.PI/2+(Math.random()-.5)*.38;
            mesh.rotation.z=(Math.random()-.5)*.22;
            this.group.add(mesh); this.rings.push({mesh,mat});
        }
    }

    _buildMoons() {
        const {r, moons:mc} = this.cfg;
        for(let i=0;i<mc;i++){
            const orR=r*(3.+i*1.75+Math.random()*.7), moonR=r*(.075+Math.random()*.085);
            const spd=.28+Math.random()*.45, offset=Math.random()*Math.PI*2, tilt=(Math.random()-.5)*.75;
            const mat=new THREE.MeshStandardMaterial({color:0x888888,roughness:.9,metalness:.05});
            const mesh=new THREE.Mesh(new THREE.SphereGeometry(moonR,12,12),mat);
            // Orbit as line (not torus mesh)
            const orPts=[];
            for(let j=0;j<=68;j++) orPts.push(new THREE.Vector3(Math.cos(j/68*Math.PI*2)*orR,0,Math.sin(j/68*Math.PI*2)*orR));
            const oLine=new THREE.Line(new THREE.BufferGeometry().setFromPoints(orPts),
                new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.055,blending:THREE.AdditiveBlending,depthWrite:false}));
            oLine.rotation.x=tilt;
            this.group.add(oLine); this.group.add(mesh);
            this.moons.push({mesh,orR,spd,offset,tilt});
        }
    }

    _buildLabel() {
        const div=document.createElement('div');
        div.className='project-label';div.textContent=this.data.title;
        div.style.cssText='opacity:0;transition:opacity .3s ease,transform .3s ease;transform:translateY(6px)';
        this.scramble=new ScrambleText(div);
        this.label=new CSS2DObject(div);
        this.label.position.set(0,this.cfg.r*2.3+.9,0);
        this.group.add(this.label);
    }

    update(){
        const t=this.experience.time.elapsed;
        const delta=this.experience.time.delta/1000;
        if(this.planetMat.uniforms.uTime) this.planetMat.uniforms.uTime.value=t;
        this.rings.forEach(r=>{if(r.mat.uniforms.uTime)r.mat.uniforms.uTime.value=t;});
        this.planetMesh.rotation.y+=this.rotSpeed;
        const ty=this.isHovered?0:Math.sin(t*this.floatSpeed+this.floatOffset)*.48;
        this.planetMesh.position.y+=(ty-this.planetMesh.position.y)*.05;
        const py=this.planetMesh.position.y;
        this.atmMesh.position.y=py; this.haloMesh.position.y=py;
        this.rings.forEach(r=>r.mesh.position.y=py);
        this.moons.forEach(m=>{
            const a=t*m.spd+m.offset;
            const cT=Math.cos(m.tilt),sT=Math.sin(m.tilt);
            m.mesh.position.x=Math.cos(a)*m.orR;
            m.mesh.position.z=Math.sin(a)*m.orR*cT;
            m.mesh.position.y=py+Math.sin(a)*m.orR*sT;
            m.mesh.rotation.y+=.009;
        });
        this.label.position.y=py+this.cfg.r*2.3+.9;
    }

    onMouseEnter(){
        if(this.isHovered)return; this.isHovered=true;
        if(this.experience.audio) this.experience.audio.play('hover');
        this.label.element.style.opacity='1'; this.label.element.style.transform='translateY(0)';
        this.scramble.hover();

        gsap.to(this.planetMesh.scale,{x:1.14,y:1.14,z:1.14,duration:.5,ease:'back.out(1.7)'});
        gsap.to(this.atmMesh.scale,{x:1.2,y:1.2,z:1.2,duration:.5});
        gsap.to(this.haloMesh.scale,{x:1.35,y:1.35,z:1.35,duration:.6});
        gsap.to(this.planetMat.uniforms.uHover,{value:1,duration:.4});
        gsap.to(this.atmMat.uniforms.uHover,{value:1,duration:.4});
        gsap.to(this.haloMat.uniforms.uHover,{value:1,duration:.4});
        this.rings.forEach(r=>gsap.to(r.mat.uniforms.uHover,{value:1,duration:.4}));
        this.moons.forEach(m=>{m._spd=m.spd;m.spd*=2.5;});
    }
    onMouseLeave(){
        if(!this.isHovered)return; this.isHovered=false;
        this.label.element.style.opacity='0'; this.label.element.style.transform='translateY(6px)';

        gsap.to(this.planetMesh.scale,{x:1,y:1,z:1,duration:.5});
        gsap.to(this.atmMesh.scale,{x:1,y:1,z:1,duration:.5});
        gsap.to(this.haloMesh.scale,{x:1,y:1,z:1,duration:.5});
        gsap.to(this.planetMat.uniforms.uHover,{value:0,duration:.4});
        gsap.to(this.atmMat.uniforms.uHover,{value:0,duration:.4});
        gsap.to(this.haloMat.uniforms.uHover,{value:0,duration:.4});
        this.rings.forEach(r=>gsap.to(r.mat.uniforms.uHover,{value:0,duration:.4}));
        this.moons.forEach(m=>{if(m._spd)m.spd=m._spd;});
    }
}