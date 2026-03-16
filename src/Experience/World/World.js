import * as THREE from 'three';
import Experience from '../Experience.js';
import Node from './Node.js';
import Background from './Background.js';
// import NeuralNetwork from './NeuralNetwork.js';
import contentData from '../../data/contentData.js';
import certificationData from '../../data/certifications.js';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.M          = this.experience.isMobile;
        this.nodes      = [];
        this.traffic    = [];
        this.shots      = [];
        this.comets     = [];
        this.nextShot   = 1.5;
        this.nextComet  = 7.0;

        this.nodeGroup = new THREE.Group();
        this.scene.add(this.nodeGroup);

        this._lights();
        this.background = new Background();
        this._nodes();
        this._web();
        this._asteroids();
        this._cosmicObjects();   // Black hole, neutron star, dyson sphere, quasar
        this._supernova();       // Supernova remnant expanding shell
        this._memoryCore();    // Dream Archive hidden object
        this._setupBHClick();
        this._shootPool();
        this._touchSetup();

        // this.neuralNetwork = new NeuralNetwork();

        this.isPaused = false;
        this._tm = {x:0,y:0}; this._sm = {x:0,y:0};
        window.addEventListener('mousemove', e=>{
            this._tm.x=(e.clientX/window.innerWidth)-.5;
            this._tm.y=(e.clientY/window.innerHeight)-.5;
        });
    }

    _lights() {
        this.scene.add(new THREE.AmbientLight(0x060610, .5));
        const d=new THREE.DirectionalLight(0xa8beff,2.0);d.position.set(110,90,75);this.scene.add(d);
        const b=new THREE.DirectionalLight(0xffd8a0,.28);b.position.set(-90,-35,-70);this.scene.add(b);
        this.coreLight=new THREE.PointLight(0xffffff,4.2,310);this.coreLight.position.set(0,0,0);this.scene.add(this.coreLight);
        const rim1=new THREE.PointLight(0xffffff,.6,180);rim1.position.set(90,25,70);this.scene.add(rim1);
        const rim2=new THREE.PointLight(0xffffff,.5,180);rim2.position.set(-75,-18,-55);this.scene.add(rim2);
    }

    _nodes() {
        const cert={type:'certification',title:'Sertifikasi',kicker:'Professional',
            desc:'Kumpulan lisensi dan sertifikasi profesional.',
            image:'https://placehold.co/800x400/050510/ffffff?text=Certifications',certList:certificationData};
        const about=contentData.find(d=>d.type==='about');
        const projs=contentData.filter(d=>d.type!=='about'&&!d.certList);
        const all=[about,cert,...projs];
        all.forEach((data,i)=>{
            const phi=Math.acos(-1+(2*i)/all.length),theta=Math.sqrt(all.length*Math.PI)*phi;
            const r=this.M?36:46;
            const pos=new THREE.Vector3().setFromSphericalCoords(r,phi,theta);
            const node=new Node(data,pos);
            node.originalPos=pos.clone();
            this.nodes.push(node); this.nodeGroup.add(node.group);
        });
    }

    _web() {
        this.webGroup=new THREE.Group();this.nodeGroup.add(this.webGroup);
        this.webMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aP;varying float vP;void main(){vP=aP;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader:`uniform float uTime;varying float vP;
                void main(){
                    float f1=fract(vP*2.8-uTime*.33);float f2=fract(vP*2.8-uTime*.33-.35);
                    float b=smoothstep(0.,.065,f1)*smoothstep(.22,.08,f1)+smoothstep(0.,.065,f2)*smoothstep(.22,.08,f2)*.6;
                    gl_FragColor=vec4(vec3(.78+b*.22),.033+b*.28);
                }`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        const pkG=new THREE.SphereGeometry(.045,5,5);
        const pkM=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.78,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:false});
        this.nodes.forEach((node,idx)=>{
            const near=this.nodes.map((o,j)=>({d:node.group.position.distanceTo(o.group.position),n:o,j}))
                .filter(x=>x.j!==idx).sort((a,b)=>a.d-b.d).slice(0,3);
            near.forEach(({n:target})=>{
                const s=node.group.position,e=target.group.position;
                const mid=new THREE.Vector3().addVectors(s,e).multiplyScalar(.5)
                    .add(new THREE.Vector3((Math.random()-.5)*9,(Math.random()-.5)*9,(Math.random()-.5)*9));
                const curve=new THREE.QuadraticBezierCurve3(s,mid,e);
                const pts=curve.getPoints(68);
                const geo=new THREE.BufferGeometry().setFromPoints(pts);
                const prog=new Float32Array(pts.length);pts.forEach((_,i)=>prog[i]=i/(pts.length-1));
                geo.setAttribute('aP',new THREE.BufferAttribute(prog,1));
                this.webGroup.add(new THREE.Line(geo,this.webMat));
                for(let k=0;k<2+Math.floor(Math.random()*2);k++){
                    const pk=new THREE.Mesh(pkG,pkM.clone());
                    this.nodeGroup.add(pk);
                    this.traffic.push({pk,curve,spd:.003+Math.random()*.008,progress:Math.random()});
                }
            });
        });
    }

    _asteroids() {
        [{r:68, sp:8,  n:this.M?180:460, inc:.12, spd:.011},
         {r:100,sp:10, n:this.M?280:650, inc:.36, spd:.007},
         {r:140,sp:7,  n:this.M?130:340, inc:1.1, spd:.004},
        ].forEach(b=>{
            const geo=new THREE.BufferGeometry();
            const pos=new Float32Array(b.n*3),sz=new Float32Array(b.n),rand=new Float32Array(b.n);
            for(let i=0;i<b.n;i++){
                const r=b.r+(Math.random()-.5)*b.sp,th=Math.random()*Math.PI*2;
                pos[i*3]=r*Math.cos(th);pos[i*3+1]=(Math.random()-.5)*b.sp*.22;pos[i*3+2]=r*Math.sin(th);
                sz[i]=.35+Math.random()*1.5;rand[i]=Math.random();
            }
            geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
            geo.setAttribute('aSize',new THREE.BufferAttribute(sz,1));
            geo.setAttribute('aRand',new THREE.BufferAttribute(rand,1));
            const mat=new THREE.ShaderMaterial({
                uniforms:{uTime:{value:0},uSpd:{value:b.spd},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)},uInc:{value:b.inc}},
                vertexShader:`attribute float aSize,aRand;uniform float uTime,uSpd,uPR,uInc;varying float vR;
                    void main(){vR=aRand;float r=length(position.xz);
                    float angle=atan(position.z,position.x)+uTime*uSpd*(1.+aRand*.22);
                    float cI=cos(uInc),sI=sin(uInc);
                    vec3 p=vec3(cos(angle)*r,position.y*cI-sin(angle)*r*sI,sin(angle)*r*cI+position.y*sI);
                    p.y+=sin(uTime*aRand*.38)*aRand*.28;
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp(aSize*uPR*(265./-mv.z),0.,6.);}`,
                fragmentShader:`varying float vR;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vec3(.5+vR*.38),(1.-d*2.)*.38);}`,
                transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
            });
            this.scene.add(new THREE.Points(geo,mat));
            if(!this._bMats)this._bMats=[];this._bMats.push(mat);
        });
    }

    /* ── COSMIC OBJECTS ──────────────────────────────
     * Black hole, Neutron star, Quasar jet, Dyson sphere wireframe
     * All placed far from node cluster so they don't overlap
     * All monochrome, all particle/line based
     ─────────────────────────────────────────────── */
    _cosmicObjects() {
        this.cosmicGroup=new THREE.Group();this.scene.add(this.cosmicGroup);
        this.cosmicMats=[];

        // ── 1. BLACK HOLE (Gargantua-style) ──
        // Accretion disk = stacked ring lines, event horizon = dark sphere silhouette
        const bhPos=new THREE.Vector3(180,20,-120);
        const bhGroup=new THREE.Group();bhGroup.position.copy(bhPos);

        // Accretion disk rings (flat plane ± slight tilt, rotating)
        this.bhMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aAngle,aRad;uniform float uTime;varying float vR,vA;
                void main(){
                    vA=aAngle;vR=aRad;
                    float a=aAngle+uTime*(1.5/max(aRad*.08,1.)); // inner faster
                    vec3 p=vec3(cos(a)*aRad,0.,sin(a)*aRad);
                    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
                }`,
            fragmentShader:`uniform float uTime;varying float vR,vA;
                void main(){
                    // Doppler shift: brighter on approaching side
                    float dopp=.5+.5*cos(vA+uTime*1.5);
                    float fade=smoothstep(28.,8.,vR)*smoothstep(6.,16.,vR);
                    float a=fade*(.3+dopp*.5);
                    gl_FragColor=vec4(vec3(1.),a);
                }`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.cosmicMats.push(this.bhMat);
        // Build rings from r=8 to r=28
        const bhGeo=new THREE.BufferGeometry();
        const bhAngles=[],bhRads=[];
        for(let r=8;r<=28;r+=.18){
            const n=Math.floor(120+r*8);
            for(let i=0;i<n;i++){
                const a=(i/n)*Math.PI*2;
                bhAngles.push(a); bhRads.push(r);
            }
        }
        const bhPos3=new Float32Array(bhAngles.length*3);
        bhAngles.forEach((a,i)=>{bhPos3[i*3]=Math.cos(a)*bhRads[i];bhPos3[i*3+1]=0;bhPos3[i*3+2]=Math.sin(a)*bhRads[i];});
        bhGeo.setAttribute('position',new THREE.BufferAttribute(bhPos3,3));
        bhGeo.setAttribute('aAngle',new THREE.BufferAttribute(new Float32Array(bhAngles),1));
        bhGeo.setAttribute('aRad',new THREE.BufferAttribute(new Float32Array(bhRads),1));
        const bhPts=new THREE.Points(bhGeo,this.bhMat);
        // Slight tilt like Gargantua
        bhPts.rotation.x=Math.PI*.12;
        bhGroup.add(bhPts);

        // Event horizon — dark void sphere (opaque black so stars behind disappear)
        const ehMesh=new THREE.Mesh(new THREE.SphereGeometry(7,32,32),new THREE.MeshBasicMaterial({color:0x000000,depthWrite:true}));
        bhGroup.add(ehMesh);

        // Photon sphere glow ring at r≈10.5
        const psRing=this._ringLine(bhGroup,10.5,.0,Math.PI*.12,.08);

        // Gravitational lensing arcs (faint lines above/below BH)
        for(let arc=0;arc<6;arc++){
            const arcPts=[];
            for(let i=0;i<=40;i++){
                const t2=i/40,a=t2*Math.PI;
                const r2=12+Math.sin(a)*8*(1+arc*.5);
                const side=arc%2?1:-1;
                arcPts.push(new THREE.Vector3(Math.cos(a+arc*.4)*r2,side*(4+arc*1.5)*Math.sin(a),Math.sin(a+arc*.4)*r2*(.2+arc*.08)));
            }
            const am=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.06-arc*.008,blending:THREE.AdditiveBlending,depthWrite:false});
            bhGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arcPts),am));
        }
        this.cosmicGroup.add(bhGroup);
        this.bhGroup=bhGroup;

        // ── 2. NEUTRON STAR ──
        // Super dense, rapid rotation, magnetic field lines, X-ray jets
        const nsPos=new THREE.Vector3(-160,30,140);
        const nsGroup=new THREE.Group();nsGroup.position.copy(nsPos);

        // Core — very small, very bright
        this.nsMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uTime;varying vec3 vN,vVP;
                void main(){
                    float pulse=.85+.15*sin(uTime*30.); // rapid spin flicker
                    float diff=max(dot(vN,normalize(vec3(1.,.5,.5))),0.);
                    float rim=pow(1.-abs(dot(normalize(vVP),vN)),2.5)*.8;
                    float lit=(diff*.8+.2+rim)*pulse;
                    gl_FragColor=vec4(vec3(lit),1.);
                }`,
        });
        this.cosmicMats.push(this.nsMat);
        nsGroup.add(new THREE.Mesh(new THREE.SphereGeometry(3.5,32,32),this.nsMat));

        // Magnetosphere field lines
        for(let i=0;i<8;i++){
            const a=(i/8)*Math.PI*2;
            const fPts=[];
            for(let j=0;j<=30;j++){
                const t2=j/30,angle=t2*Math.PI;
                const r2=3.8+Math.sin(angle)*12;
                fPts.push(new THREE.Vector3(Math.cos(a)*r2*Math.sin(angle),r2*Math.cos(angle)*1.5,Math.sin(a)*r2*Math.sin(angle)));
            }
            const fm=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.08,blending:THREE.AdditiveBlending,depthWrite:false});
            nsGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(fPts),fm));
        }
        // X-ray jets (up & down)
        this.nsJetMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader:`uniform float uTime;varying float vT;void main(){float p=pow(abs(sin(uTime*30.)),.5);float a=(1.-vT)*.25*p;gl_FragColor=vec4(vec3(1.),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.cosmicMats.push(this.nsJetMat);
        [-1,1].forEach(dir=>{
            const jPts=[],tArr=[];
            for(let i=0;i<=30;i++){jPts.push(new THREE.Vector3(0,dir*i*1.8,0));tArr.push(i/30);}
            const jGeo=new THREE.BufferGeometry().setFromPoints(jPts);
            jGeo.setAttribute('aT',new THREE.BufferAttribute(new Float32Array(tArr),1));
            nsGroup.add(new THREE.Line(jGeo,this.nsJetMat));
        });
        nsGroup.userData.rotSpd=0.15; // rapid rotation
        this.cosmicGroup.add(nsGroup);
        this.nsGroup=nsGroup;

        // ── 3. QUASAR JET (distant, massive) ──
        const qPos=new THREE.Vector3(-250,-40,-200);
        const qGroup=new THREE.Group();qGroup.position.copy(qPos);
        // Core accretion
        this.qMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader:`uniform float uTime;varying float vT;void main(){float p=abs(sin(uTime*.8+vT*3.))*.5+.5;float a=(1.-vT)*(.18+p*.12);gl_FragColor=vec4(vec3(1.),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.cosmicMats.push(this.qMat);
        // Two relativistic jets — very long, narrow
        [-1,1].forEach(dir=>{
            const n=60,jPts=[],tArr=[];
            for(let i=0;i<=n;i++){
                const t2=i/n,spread=t2*3*dir;
                jPts.push(new THREE.Vector3((Math.random()-.5)*spread*.5,dir*i*3.5,(Math.random()-.5)*spread*.5));
                tArr.push(t2);
            }
            const geo=new THREE.BufferGeometry().setFromPoints(jPts);
            geo.setAttribute('aT',new THREE.BufferAttribute(new Float32Array(tArr),1));
            qGroup.add(new THREE.Line(geo,this.qMat));
        });
        // Core dot
        qGroup.add(new THREE.Mesh(new THREE.SphereGeometry(4,16,16),new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader:`uniform float uTime;varying vec3 vN;void main(){float p=.85+.15*sin(uTime*.9);float rim=pow(1.-abs(dot(vN,vec3(0,0,1))),2.)*p;gl_FragColor=vec4(vec3(rim+.2),1.);}`,
        })));
        this.cosmicGroup.add(qGroup);
        this.qGroup=qGroup;

        // ── 4. DYSON SPHERE (wireframe around distant star) ──
        const dsPos=new THREE.Vector3(220,-35,160);
        const dsGroup=new THREE.Group();dsGroup.position.copy(dsPos);
        // Inner star
        dsGroup.add(new THREE.Mesh(new THREE.SphereGeometry(5,12,12),new THREE.MeshBasicMaterial({color:0xffffff})));
        // Wireframe shell segments (partial — under construction vibe)
        const dsMat=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.15,blending:THREE.AdditiveBlending,depthWrite:false});
        // Latitude rings
        for(let lat=-3;lat<=3;lat++){
            const y=lat*4.5,r2=Math.sqrt(Math.max(0,18*18-y*y));
            const rPts=[];
            const segs=lat===0?60:Math.floor(40+Math.abs(lat)*5);
            // Partial ring — leave gaps for "under construction"
            for(let i=0;i<=segs;i++){
                if(Math.random()<.12&&i>0)continue; // random gaps
                const a=(i/segs)*Math.PI*2;
                rPts.push(new THREE.Vector3(Math.cos(a)*r2,y,Math.sin(a)*r2));
            }
            if(rPts.length>1) dsGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rPts),dsMat));
        }
        // Longitude arcs
        for(let i=0;i<12;i++){
            const a=(i/12)*Math.PI*2;
            const lPts=[];
            for(let j=0;j<=20;j++){
                const phi=j/20*Math.PI;
                lPts.push(new THREE.Vector3(Math.sin(phi)*Math.cos(a)*18,Math.cos(phi)*18,Math.sin(phi)*Math.sin(a)*18));
            }
            if(Math.random()>.35) dsGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(lPts),dsMat));
        }
        dsGroup.userData.rotSpd=0.002;
        this.cosmicGroup.add(dsGroup);
        this.dsGroup=dsGroup;

        // ── 6. NEBULA (Pillars of Creation style) ──
        // Dense particle cloud — towering gas columns
        const nebPos=new THREE.Vector3(80,60,-220);
        const nebGroup=new THREE.Group();nebGroup.position.copy(nebPos);
        const pillarCount=3;
        for(let pi=0;pi<pillarCount;pi++){
            const pCount=this.M?120:320;
            const pGeo=new THREE.BufferGeometry();
            const pPos=new Float32Array(pCount*3),pSz=new Float32Array(pCount),pRand=new Float32Array(pCount);
            const pillarX=(pi-1)*12, pillarH=25+pi*8;
            for(let i=0;i<pCount;i++){
                const h=Math.random()*pillarH;
                const spread=(1-h/pillarH)*5+1;
                pPos[i*3]=pillarX+(Math.random()-.5)*spread*2;
                pPos[i*3+1]=h;
                pPos[i*3+2]=(Math.random()-.5)*spread*2;
                pSz[i]=2+Math.random()*4; pRand[i]=Math.random();
            }
            pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));
            pGeo.setAttribute('aSize',new THREE.BufferAttribute(pSz,1));
            pGeo.setAttribute('aRand',new THREE.BufferAttribute(pRand,1));
            const pMat=new THREE.ShaderMaterial({
                uniforms:{uTime:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)},uIdx:{value:pi}},
                vertexShader:`attribute float aSize,aRand;uniform float uTime,uPR,uIdx;varying float vR;
                    void main(){vR=aRand;
                    vec3 p=position;p.y+=sin(uTime*(aRand*.3+.1)+aRand*6.28)*.4;
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp(aSize*uPR*(300./-mv.z),0.,18.);}`,
                fragmentShader:`varying float vR;
                    void main(){vec2 uv=gl_PointCoord-.5;float d=length(uv);if(d>.5)discard;
                    float a=smoothstep(.5,0.,d)*(.12+vR*.18);gl_FragColor=vec4(vec3(.88+vR*.12),a);}`,
                transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
            });
            const pillar=new THREE.Points(pGeo,pMat);
            nebGroup.add(pillar);
            if(!this._nebMats)this._nebMats=[];
            this._nebMats.push(pMat);
        }
        this.cosmicGroup.add(nebGroup);
        this.nebGroup=nebGroup;

        // ── 7. DARK MATTER HALO (invisible mass, visible lensing) ──
        // Faint ring filaments suggesting dark matter concentration
        const dmPos=new THREE.Vector3(-100,-25,50);
        const dmGroup=new THREE.Group();dmGroup.position.copy(dmPos);
        this.dmMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aPhase;uniform float uTime;varying float vP;
                void main(){vP=aPhase;float wobble=sin(uTime*.2+aPhase)*0.02;
                vec3 p=position*(1.+wobble);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
            fragmentShader:`uniform float uTime;varying float vP;
                void main(){float p=abs(sin(uTime*.3+vP*4.))*.5+.5;float a=.025+p*.015;
                gl_FragColor=vec4(vec3(1.),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        // 4 nested elliptical filaments
        [18,28,40,55].forEach((r,ri)=>{
            const n=120+ri*40;
            const pts=[],phases=[];
            for(let i=0;i<=n;i++){
                const a=(i/n)*Math.PI*2;
                pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r*.35,(Math.random()-.5)*r*.08));
                phases.push(a);
            }
            const geo=new THREE.BufferGeometry().setFromPoints(pts);
            geo.setAttribute('aPhase',new THREE.BufferAttribute(new Float32Array(phases),1));
            const l=new THREE.Line(geo,this.dmMat);
            l.rotation.x=-.3+ri*.15;l.rotation.z=ri*.2;
            dmGroup.add(l);
        });
        dmGroup.userData.rotSpd=0.0006;
        this.cosmicGroup.add(dmGroup);
        this.dmGroup=dmGroup;

        // ── 8. EXOPLANET SYSTEM (mini solar system) ──
        const exoPos=new THREE.Vector3(150,40,100);
        const exoGroup=new THREE.Group();exoGroup.position.copy(exoPos);
        // Parent star (small, white-hot)
        const starMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uTime;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),2.);float p=.85+.15*sin(uTime*1.8);gl_FragColor=vec4(vec3(p*.9+f*.6),1.);}`,
        });
        exoGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.5,16,16),starMat));
        // 4 exoplanets orbiting at different radii
        this._exoPlanets=[];
        [6,10,15,22].forEach((orb,ei)=>{
            const pMat=new THREE.MeshStandardMaterial({color:0xaaaaaa,roughness:.9,metalness:.05,
                emissive:0x111111,emissiveIntensity:.1});
            const radius=.4+ei*.18;
            const planet=new THREE.Mesh(new THREE.SphereGeometry(radius,12,12),pMat);
            // Orbit line
            const oPts=[];for(let i=0;i<=60;i++) oPts.push(new THREE.Vector3(Math.cos(i/60*Math.PI*2)*orb,0,Math.sin(i/60*Math.PI*2)*orb));
            const oLine=new THREE.Line(new THREE.BufferGeometry().setFromPoints(oPts),
                new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.04,blending:THREE.AdditiveBlending,depthWrite:false}));
            exoGroup.add(oLine);exoGroup.add(planet);
            this._exoPlanets.push({mesh:planet,orb,spd:.008-ei*.0012,offset:Math.random()*Math.PI*2});
        });
        if(!this._cosmicMiscMats)this._cosmicMiscMats=[];
        this._cosmicMiscMats.push(starMat);
        this.cosmicGroup.add(exoGroup);
        this.exoGroup=exoGroup;

        // ── 9. MAGNETAR (ultra-magnetized neutron star) ──
        // Tiny but insanely bright, with field lines more extreme than NS
        const mgPos=new THREE.Vector3(-180,55,-60);
        const mgGroup=new THREE.Group();mgGroup.position.copy(mgPos);
        this.mgMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uTime;varying vec3 vN,vVP;
                void main(){float p=.7+.3*sin(uTime*50.);// ultra rapid spin 50Hz
                float rim=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),1.8)*.9;
                float diff=max(dot(vN,normalize(vec3(1.,.5,.5))),0.);
                gl_FragColor=vec4(vec3((diff*.7+.3+rim)*p),1.);}`,
        });
        mgGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.8,20,20),this.mgMat));
        // More extreme field lines — 12 of them in complex pattern
        for(let i=0;i<12;i++){
            const a=(i/12)*Math.PI*2;
            const fPts=[];
            for(let j=0;j<=25;j++){
                const t2=j/25,ang=t2*Math.PI;
                const r2=2.2+Math.sin(ang)*18*(1+Math.sin(a)*.3);
                fPts.push(new THREE.Vector3(Math.cos(a)*r2*Math.sin(ang),r2*Math.cos(ang)*2,Math.sin(a)*r2*Math.sin(ang)));
            }
            mgGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(fPts),
                new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.07,blending:THREE.AdditiveBlending,depthWrite:false})));
        }
        mgGroup.userData.rotSpd=0.08; // extremely fast
        this.cosmicGroup.add(mgGroup);
        this.mgGroup=mgGroup;

        // ── 10. COSMIC STRING (theoretical 1D defect in spacetime) ──
        // Ultra thin glowing filament crossing the scene
        const csPoints=[];
        for(let i=0;i<=60;i++){
            const t2=i/60,noise=(Math.sin(t2*12)+Math.cos(t2*7))*.8;
            csPoints.push(new THREE.Vector3(-300+t2*600,noise+Math.sin(t2*5)*3,Math.cos(t2*8)*8));
        }
        const csGeo=new THREE.BufferGeometry().setFromPoints(csPoints);
        const tArr=new Float32Array(61);csPoints.forEach((_,i)=>tArr[i]=i/60);
        csGeo.setAttribute('aT',new THREE.BufferAttribute(tArr,1));
        this.csMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aT;uniform float uTime;varying float vT;
                void main(){vT=aT;
                vec3 p=position;p.y+=sin(uTime*.08+aT*20.)*.25;// subtle vibration
                gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
            fragmentShader:`uniform float uTime;varying float vT;
                void main(){float wave=abs(sin(vT*8.-uTime*.5))*.5+.5;
                float a=.03+wave*.04;gl_FragColor=vec4(vec3(1.),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.scene.add(new THREE.Line(csGeo,this.csMat));

        // ── 5. WORMHOLE (Einstein-Rosen bridge) ──
        const whPos=new THREE.Vector3(-200,15,220);
        const whGroup=new THREE.Group();whGroup.position.copy(whPos);
        this.whMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`attribute float aA,aR;uniform float uTime;varying float vR,vA;
                void main(){vR=aR;vA=aA;float a=aA+uTime*(-.8/max(aR*.12,1.));vec3 p=vec3(cos(a)*aR,0,sin(a)*aR);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
            fragmentShader:`uniform float uTime;varying float vR,vA;
                void main(){
                    float throat=smoothstep(14.,5.,vR)*smoothstep(4.,10.,vR);
                    float spin=abs(sin(vA*4.+uTime*2.))*.4+.6;
                    float a=throat*spin*.32;
                    gl_FragColor=vec4(vec3(1.),a);
                }`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.cosmicMats.push(this.whMat);
        const whAngles=[],whRads=[],whPositions=[];
        for(let r=5;r<=14;r+=.15){
            const n=Math.floor(80+r*10);
            for(let i=0;i<n;i++){
                const a=(i/n)*Math.PI*2;
                whAngles.push(a);whRads.push(r);
                whPositions.push(Math.cos(a)*r,0,Math.sin(a)*r);
            }
        }
        const whGeo=new THREE.BufferGeometry();
        whGeo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(whPositions),3));
        whGeo.setAttribute('aA',new THREE.BufferAttribute(new Float32Array(whAngles),1));
        whGeo.setAttribute('aR',new THREE.BufferAttribute(new Float32Array(whRads),1));
        const whPts=new THREE.Points(whGeo,this.whMat);
        whPts.rotation.x=Math.PI*.08;
        whGroup.add(whPts);
        // Event horizon void
        whGroup.add(new THREE.Mesh(new THREE.SphereGeometry(4.5,16,16),new THREE.MeshBasicMaterial({color:0x000000,depthWrite:true})));
        this.cosmicGroup.add(whGroup);
        this.whGroup=whGroup;
    }

    /* ── MEMORY CORE (Dream Archive) ────────────────
     * A cracked icosahedron that pulses in the dark.
     * Hover → triggers intimate dream text.
     ─────────────────────────────────────────────── */
    _memoryCore() {
        const pos = new THREE.Vector3(-30, 15, -35); // near center, slightly off
        this.memoryCoreGroup = new THREE.Group();
        this.memoryCoreGroup.position.copy(pos);

        // Fractured shell — icosahedron wireframe
        const geo = new THREE.IcosahedronGeometry(4.5, 1);
        this.mcMat = new THREE.ShaderMaterial({
            uniforms: { uTime:{value:0}, uHover:{value:0} },
            vertexShader: `
                uniform float uTime, uHover;
                varying vec3 vPos;
                void main(){
                    vPos = position;
                    // Subtle breathing
                    float breath = 1.0 + sin(uTime*0.8)*0.04 + uHover*0.08;
                    gl_Position = projectionMatrix*modelViewMatrix*vec4(position*breath,1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime, uHover;
                varying vec3 vPos;
                void main(){
                    float pulse = 0.5 + 0.5*sin(uTime*1.2);
                    float base = 0.06 + pulse*0.04 + uHover*0.35;
                    // Crack effect — dark gaps
                    float crack = abs(sin(vPos.x*8.0)*sin(vPos.y*8.0)*sin(vPos.z*8.0));
                    base *= smoothstep(0.0, 0.3, crack);
                    gl_FragColor = vec4(vec3(base), base*1.4);
                }
            `,
            transparent:true, blending:THREE.AdditiveBlending,
            depthWrite:false, wireframe:true,
        });
        const shell = new THREE.Mesh(geo, this.mcMat);
        this.memoryCoreGroup.add(shell);

        // Inner glow point
        const innerMat = new THREE.ShaderMaterial({
            uniforms:{ uTime:{value:0} },
            vertexShader:`varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
            fragmentShader:`uniform float uTime;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),3.);float p=0.5+0.5*sin(uTime*0.9);gl_FragColor=vec4(vec3(f*p*.5),f*p*.4);}`,
            transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.FrontSide
        });
        this.memoryCoreGroup.add(new THREE.Mesh(new THREE.SphereGeometry(2.5,16,16),innerMat));
        this.mcInnerMat = innerMat;

        // Floating fragments — tiny icosahedra orbiting
        this.mcFragments = [];
        for(let i=0;i<6;i++){
            const fgeo = new THREE.IcosahedronGeometry(0.3+Math.random()*0.25,0);
            const fmat = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true,transparent:true,opacity:0.08+Math.random()*0.06});
            const fm = new THREE.Mesh(fgeo,fmat);
            const angle = (i/6)*Math.PI*2;
            fm.position.set(Math.cos(angle)*7,Math.sin(angle*0.7)*2.5,Math.sin(angle)*7);
            fm.userData = { angle, speed: 0.004+Math.random()*0.004, radius:6+Math.random()*2 };
            this.memoryCoreGroup.add(fm);
            this.mcFragments.push(fm);
        }

        // Raycaster object tag
        this.memoryCoreGroup.userData.isMemoryCore = true;
        this.scene.add(this.memoryCoreGroup);
        this._mcHoverTime = 0;
        this._mcDreamShown = false;
    }

    _ringLine(parent,r,rx,ry,op){
        const pts=[];for(let i=0;i<=80;i++)pts.push(new THREE.Vector3(Math.cos(i/80*Math.PI*2)*r,0,Math.sin(i/80*Math.PI*2)*r));
        const m=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:op,blending:THREE.AdditiveBlending,depthWrite:false});
        const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),m);
        l.rotation.x=rx;l.rotation.y=ry;parent.add(l);return l;
    }

    /* ── SUPERNOVA REMNANT ─────────────────────────── */
    _supernova() {
        const pos=new THREE.Vector3(120,-55,180);
        this.snGroup=new THREE.Group();this.snGroup.position.copy(pos);
        this.snRadius=0;this.snMaxRadius=35;this.snExpanding=true;
        // Expanding shell particles
        const n=this.M?300:700;
        const geo=new THREE.BufferGeometry();
        const bpos=new Float32Array(n*3),rand=new Float32Array(n);
        for(let i=0;i<n;i++){
            const t2=Math.random()*Math.PI*2,p2=Math.acos(2*Math.random()-1);
            bpos[i*3]=Math.sin(p2)*Math.cos(t2);bpos[i*3+1]=Math.sin(p2)*Math.sin(t2);bpos[i*3+2]=Math.cos(p2);
            rand[i]=Math.random();
        }
        geo.setAttribute('position',new THREE.BufferAttribute(bpos,3));
        geo.setAttribute('aRand',new THREE.BufferAttribute(rand,1));
        this.snMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0},uRadius:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)}},
            vertexShader:`attribute float aRand;uniform float uTime,uRadius,uPR;varying float vR;
                void main(){
                    vR=aRand;float r=uRadius*(1.+aRand*.15);
                    vec3 p=normalize(position)*r;
                    p+=normalize(position)*(sin(uTime*aRand*2.+aRand*6.28)*.8);
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp((1.+aRand*1.8)*uPR*(240./-mv.z),0.,8.);
                }`,
            fragmentShader:`uniform float uRadius;varying float vR;
                void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
                float fade=1.-uRadius/35.;
                float a=(1.-d*2.)*fade*(.25+vR*.35);gl_FragColor=vec4(vec3(.9+vR*.1),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.snPts=new THREE.Points(geo,this.snMat);this.snGroup.add(this.snPts);
        this.scene.add(this.snGroup);
    }

    _shootPool(){
        this.shotGroup=new THREE.Group();this.cometGroup=new THREE.Group();
        this.scene.add(this.shotGroup);this.scene.add(this.cometGroup);
    }
    _spawnShot(){
        const s=new THREE.Vector3((Math.random()-.5)*500,100+Math.random()*180,(Math.random()-.5)*500);
        const d=new THREE.Vector3((Math.random()-.5)*1.1,-.85-Math.random()*.5,(Math.random()-.5)*1.1).normalize();
        const geo=new THREE.BufferGeometry().setFromPoints([s,s.clone().add(d.clone().multiplyScalar(-(16+Math.random()*32)))]);
        const mat=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:1,blending:THREE.AdditiveBlending,depthWrite:false});
        const line=new THREE.Line(geo,mat);
        this.shotGroup.add(line);
        this.shots.push({line,d,pos:s.clone(),spd:5+Math.random()*5,life:0,maxLife:.55+Math.random()*.4,mat});
    }
    _spawnComet(){
        const s=new THREE.Vector3((Math.random()-.5)*580,155+Math.random()*110,(Math.random()-.5)*580);
        const d=new THREE.Vector3((Math.random()-.5)*.7,-.22-Math.random()*.28,(Math.random()-.5)*.7).normalize();
        const pts=[]; for(let i=0;i<=22;i++)pts.push(s.clone().add(d.clone().multiplyScalar(-i*3.8)));
        const geo=new THREE.BufferGeometry().setFromPoints(pts);
        const tArr=new Float32Array(23);pts.forEach((_,i)=>tArr[i]=i/22);
        geo.setAttribute('aT',new THREE.BufferAttribute(tArr,1));
        const mat=new THREE.ShaderMaterial({
            uniforms:{uLife:{value:0}},
            vertexShader:`attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader:`uniform float uLife;varying float vT;void main(){float a=(1.-vT)*(1.-uLife)*.55;gl_FragColor=vec4(vec3(.9,.96,1.),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        const line=new THREE.Line(geo,mat);
        this.cometGroup.add(line);
        this.comets.push({line,d,pos:s.clone(),spd:1.1+Math.random()*1.1,life:0,maxLife:3.5+Math.random()*2,mat});
    }

    _setupBHClick(){
        // Desktop click on black hole area
        window.addEventListener('click', () => {
            if(!this.bhGroup || this.experience.isModalOpen) return;
            const ray = this.experience.raycaster?.instance;
            const cam = this.experience.camera?.instance;
            if(!ray || !cam) return;
            const mouse = this.experience.raycaster?.mouse;
            if(!mouse) return;
            ray.setFromCamera(mouse, cam);
            // Test against bhGroup children
            const hits = ray.intersectObjects([this.bhGroup], true);
            if(hits.length > 0) window.dispatchEvent(new Event('bhClick'));
        });
    }

    _touchSetup(){
        if(!this.M)return;
        window.addEventListener('touchend',e=>{
            if(e.changedTouches.length!==1)return;
            const t=e.changedTouches[0];
            if(this.experience.raycaster){
                this.experience.raycaster.mouse.x=(t.clientX/window.innerWidth)*2-1;
                this.experience.raycaster.mouse.y=-(t.clientY/window.innerHeight)*2+1;
                this.experience.raycaster.onClick();
            }
        },{passive:true});
    }

    pauseRotation(){this.isPaused=true;}resumeRotation(){this.isPaused=false;}

    update(){
        const t=this.experience.time.elapsed;
        const delta=this.experience.time.delta/1000;
        this.background.update();
        // if (this.neuralNetwork) this.neuralNetwork.update();

        // Time-aware brightness tweak (applied once)
        if(!this._timeApplied && window._timeMode){
            this._timeApplied=true;
            const mode=window._timeMode;
            // Adjust star twinkle speed and core light based on time
            if(mode==='night'){
                // Sharper, brighter stars, lower ambient
                this.coreLight.intensity=3.0;
                document.body.classList.add('time-night');
            } else if(mode==='day'){
                this.coreLight.intensity=5.5;
                document.body.classList.add('time-day');
            } else {
                this.coreLight.intensity=4.2;
                document.body.classList.add('time-twilight');
            }
        }
        this.coreLight.intensity=3.3+Math.sin(t*1.25)*.9;
        if(this.webMat)this.webMat.uniforms.uTime.value=t;
        if(this._bMats)this._bMats.forEach(m=>m.uniforms.uTime.value=t);

        // Cosmic objects
        if(this.bhMat)this.bhMat.uniforms.uTime.value=t;
        if(this.nsMat){this.nsMat.uniforms.uTime.value=t;this.nsJetMat.uniforms.uTime.value=t;}
        if(this.nsGroup)this.nsGroup.rotation.y=t*this.nsGroup.userData.rotSpd;
        if(this.qMat)this.qMat.uniforms.uTime.value=t;
        if(this.dsGroup)this.dsGroup.rotation.y=t*this.dsGroup.userData.rotSpd;
        // New cosmic object updates
        if(this._nebMats) this._nebMats.forEach(m=>m.uniforms.uTime.value=t);
        if(this.nebGroup) this.nebGroup.rotation.y=t*.01;
        if(this.dmMat)  this.dmMat.uniforms.uTime.value=t;
        if(this.dmGroup) this.dmGroup.rotation.y=t*this.dmGroup.userData.rotSpd;
        if(this._exoPlanets) this._exoPlanets.forEach(p=>{
            const a=t*p.spd+p.offset;
            p.mesh.position.x=Math.cos(a)*p.orb;
            p.mesh.position.z=Math.sin(a)*p.orb;
            p.mesh.rotation.y+=.02;
        });
        if(this._cosmicMiscMats) this._cosmicMiscMats.forEach(m=>{if(m.uniforms?.uTime)m.uniforms.uTime.value=t;});
        if(this.mgMat)  this.mgMat.uniforms.uTime.value=t;
        if(this.mgGroup) this.mgGroup.rotation.y=t*this.mgGroup.userData.rotSpd;
        if(this.csMat)  this.csMat.uniforms.uTime.value=t;
        if(this.whMat)this.whMat.uniforms.uTime.value=t;

        // Supernova expansion
        if(this.snMat){
            this.snMat.uniforms.uTime.value=t;
            if(this.snExpanding){
                this.snRadius+=delta*.8;
                if(this.snRadius>=this.snMaxRadius){this.snRadius=0;} // loop
                this.snMat.uniforms.uRadius.value=this.snRadius;
                this.snPts.rotation.y=t*.05;this.snPts.rotation.x=t*.03;
            }
        }

        this.nodes.forEach(n=>n.update());
        this._sm.x+=(this._tm.x-this._sm.x)*.05;
        this._sm.y+=(this._tm.y-this._sm.y)*.05;

        const hovering=this.experience.raycaster?.currentIntersect;
        const glitching = this.nodeGroup.userData._glitchSpeedUp;
        if(!this.isPaused&&!hovering){
            this.nodeGroup.rotation.y += glitching ? .008 : .00042;
            this.nodeGroup.rotation.x += glitching ? .003 : .000062;
        }

        // Memory core update
        if(this.memoryCoreGroup && this.mcMat) {
            this.mcMat.uniforms.uTime.value = t;
            this.mcInnerMat.uniforms.uTime.value = t;
            this.memoryCoreGroup.rotation.y = t * 0.08;
            this.memoryCoreGroup.rotation.x = Math.sin(t*0.12)*0.15;
            // Fragment orbits
            this.mcFragments.forEach(f=>{
                f.userData.angle += f.userData.speed;
                f.position.x = Math.cos(f.userData.angle)*f.userData.radius;
                f.position.z = Math.sin(f.userData.angle)*f.userData.radius;
                f.rotation.y += 0.02;
            });
            // Check hover via raycaster
            const ray = this.experience.raycaster;
            if(ray && !this.experience.isModalOpen){
                const hits = ray.instance?.intersectObjects([this.memoryCoreGroup],true) || [];
                if(hits.length > 0){
                    this.mcMat.uniforms.uHover.value = Math.min(this.mcMat.uniforms.uHover.value+0.04,1);
                    this._mcHoverTime += delta;
                    if(this._mcHoverTime > 1.8 && !this._mcDreamShown){
                        this._mcDreamShown = true;
                        window.experience?.showDream(Math.floor(Math.random()*7));
                    }
                } else {
                    this.mcMat.uniforms.uHover.value = Math.max(this.mcMat.uniforms.uHover.value-0.03,0);
                    this._mcHoverTime = 0;
                    this._mcDreamShown = false;
                }
            }
        }

        this.traffic.forEach(it=>{
            it.progress+=it.spd;if(it.progress>1)it.progress=0;
            it.pk.position.copy(it.curve.getPoint(it.progress));
            it.pk.scale.setScalar(.7+Math.sin(t*9+it.progress*20)*.45);
        });

        if(t>this.nextShot){this._spawnShot();this.nextShot=t+.65+Math.random()*2.;}
        for(let i=this.shots.length-1;i>=0;i--){
            const s=this.shots[i];s.life+=delta;s.pos.addScaledVector(s.d,s.spd);
            const pa=s.line.geometry.attributes.position;pa.setXYZ(0,s.pos.x,s.pos.y,s.pos.z);pa.needsUpdate=true;
            s.mat.opacity=Math.max(0,1-s.life/s.maxLife);
            if(s.life>=s.maxLife){this.shotGroup.remove(s.line);s.line.geometry.dispose();this.shots.splice(i,1);}
        }
        if(t>this.nextComet){this._spawnComet();this.nextComet=t+9+Math.random()*13;}
        for(let i=this.comets.length-1;i>=0;i--){
            const c=this.comets[i];c.life+=delta;c.pos.addScaledVector(c.d,c.spd);
            const pa=c.line.geometry.attributes.position;
            for(let j=0;j<=22;j++){const p2=c.pos.clone().add(c.d.clone().multiplyScalar(-j*3.8));pa.setXYZ(j,p2.x,p2.y,p2.z);}
            pa.needsUpdate=true;c.mat.uniforms.uLife.value=c.life/c.maxLife;
            if(c.life>=c.maxLife){this.cometGroup.remove(c.line);c.line.geometry.dispose();this.comets.splice(i,1);}
        }
    }
}