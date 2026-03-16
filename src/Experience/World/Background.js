import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.M = this.experience.isMobile;
        this.PR = Math.min(this.experience.sizes.pixelRatio, 2);
        this.pulsarMats = [];
        this.auroraRings = [];

        this._stars();
        this._galaxyDisk();
        this._nebulaDust();
        this._cosmicDust();
        this._pulsars();
        this._godRays();
        this._aurora();
        this._darkMatterWeb();
    }

    _pts(geo, mat) { const p = new THREE.Points(geo, mat); this.scene.add(p); return p; }
    _line(pts, op) {
        const g = new THREE.BufferGeometry().setFromPoints(pts);
        const m = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false });
        const l = new THREE.Line(g, m); this.scene.add(l); return l;
    }

    _stars() {
        this.starGroups = [];
        const M = this.M;
        [
            { n: M?4000:11000, r0:400,r1:800, s0:.3,s1:1.1, sp:1.0, a:.75 },
            { n: M?1200: 2800, r0:200,r1:400, s0:.5,s1:2.0, sp:1.7, a:.85 },
            { n: M?180 :  550, r0: 70,r1:280, s0:1.2,s1:4.5,sp:2.3, a:.95 },
        ].forEach(c => {
            const geo = new THREE.BufferGeometry();
            const pos=new Float32Array(c.n*3),sz=new Float32Array(c.n),ph=new Float32Array(c.n);
            for(let i=0;i<c.n;i++){
                const r=c.r0+Math.random()*(c.r1-c.r0),t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);
                pos[i*3]=r*Math.sin(p)*Math.cos(t);pos[i*3+1]=r*Math.sin(p)*Math.sin(t);pos[i*3+2]=r*Math.cos(p);
                sz[i]=c.s0+Math.random()*(c.s1-c.s0);ph[i]=Math.random()*Math.PI*2;
            }
            geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
            geo.setAttribute('aSize',new THREE.BufferAttribute(sz,1));
            geo.setAttribute('aPhase',new THREE.BufferAttribute(ph,1));
            const mat=new THREE.ShaderMaterial({
                uniforms:{uTime:{value:0},uPR:{value:this.PR},uA:{value:c.a},uSp:{value:c.sp}},
                vertexShader:`attribute float aSize,aPhase;uniform float uTime,uPR,uSp;varying float vT;
                    void main(){vT=.35+.65*abs(sin(uTime*uSp+aPhase));vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPR*vT*(360./-mv.z),0.,12.);}`,
                fragmentShader:`uniform float uA;varying float vT;
                    void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=(1.-d*2.)*vT*uA;
                    float warm=step(.7,vT);gl_FragColor=vec4(mix(vec3(.75,.82,1.),vec3(1.,.95,.85),warm*.5),a);}`,
                transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
            });
            const p=this._pts(geo,mat);
            this.starGroups.push({pts:p,mat});
        });
    }

    _galaxyDisk() {
        const n=this.M?3500:9000,geo=new THREE.BufferGeometry();
        const pos=new Float32Array(n*3),rand=new Float32Array(n);
        for(let i=0;i<n;i++){
            const arm=i%3,t=Math.random(),r=80+t*580;
            const a=(t*Math.PI*4+arm*Math.PI*2/3)+(Math.random()-.5)*((1-t)*.38+.04)*2;
            pos[i*3]=r*Math.cos(a);pos[i*3+1]=(Math.random()-.5)*r*.055;pos[i*3+2]=r*Math.sin(a);
            rand[i]=Math.random();
        }
        geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
        geo.setAttribute('aRand',new THREE.BufferAttribute(rand,1));
        this.galMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0},uPR:{value:this.PR}},
            vertexShader:`attribute float aRand;uniform float uTime,uPR;varying float vR,vRd;
                void main(){vRd=aRand;float r=length(position.xz);
                float angle=atan(position.z,position.x)+uTime*.011/max(r*.006,1.);
                vec3 p=vec3(cos(angle)*r,position.y,sin(angle)*r);vR=r;
                vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                gl_PointSize=clamp((.35+aRand*1.1)*(1.-r/620.)*uPR*230./-mv.z,0.,5.);}`,
            fragmentShader:`varying float vR,vRd;
                void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
                float a=(1.-d*2.)*(1.-vR/620.)*(.2+vRd*.38);
                gl_FragColor=vec4(vec3(.78+vRd*.22),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.galDisk=this._pts(geo,this.galMat);
    }

    _nebulaDust() {
        const n=this.M?80:200,geo=new THREE.BufferGeometry();
        const pos=new Float32Array(n*3),sz=new Float32Array(n);
        for(let i=0;i<n;i++){
            const r=180+Math.random()*480,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);
            pos[i*3]=r*Math.sin(p)*Math.cos(t);pos[i*3+1]=r*Math.sin(p)*Math.sin(t)*.4;pos[i*3+2]=r*Math.cos(p);
            sz[i]=80+Math.random()*140;
        }
        geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
        geo.setAttribute('aSize',new THREE.BufferAttribute(sz,1));
        this.nebMat=new THREE.ShaderMaterial({
            uniforms:{uPR:{value:this.PR}},
            vertexShader:`attribute float aSize;uniform float uPR;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPR*(700./-mv.z),0.,220.);}`,
            fragmentShader:`void main(){vec2 uv=gl_PointCoord-.5;float d=length(uv);if(d>.5)discard;float a=smoothstep(.5,0.,d)*.045;gl_FragColor=vec4(vec3(.85),a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.nebPts=this._pts(geo,this.nebMat);
    }

    _cosmicDust() {
        const n=this.M?1800:4500,geo=new THREE.BufferGeometry();
        const pos=new Float32Array(n*3),rand=new Float32Array(n);
        for(let i=0;i<n;i++){
            const r=20+Math.random()*300,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);
            pos[i*3]=r*Math.sin(p)*Math.cos(t);pos[i*3+1]=r*Math.sin(p)*Math.sin(t);pos[i*3+2]=r*Math.cos(p);
            rand[i]=Math.random();
        }
        geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
        geo.setAttribute('aRand',new THREE.BufferAttribute(rand,1));
        this.dustMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0},uPR:{value:this.PR}},
            vertexShader:`attribute float aRand;uniform float uTime,uPR;
                void main(){vec3 p=position;p.y+=sin(uTime*aRand*.4+aRand*6.28)*.85;p.x+=cos(uTime*aRand*.3+aRand*3.14)*.5;
                vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                gl_PointSize=clamp((.6+aRand*1.3)*uPR*(160./-mv.z),0.,7.);}`,
            fragmentShader:`void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vec3(.78),(1.-d*2.)*.14);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        this.dustPts=this._pts(geo,this.dustMat);
    }

    _pulsars() {
        this.pGroup=new THREE.Group();this.scene.add(this.pGroup);
        [{p:new THREE.Vector3(300,80,-390),ph:0},{p:new THREE.Vector3(-430,-60,195),ph:2.1}].forEach(({p,ph})=>{
            const mat=new THREE.ShaderMaterial({
                uniforms:{uTime:{value:0},uPh:{value:ph}},
                vertexShader:`attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
                fragmentShader:`uniform float uTime,uPh;varying float vT;void main(){float pulse=pow(abs(sin(uTime*3.+uPh)),10.)*1.5;gl_FragColor=vec4(vec3(1.),(1.-vT)*.065*pulse);}`,
                transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
            });
            [-1,1].forEach(d=>{
                const pts=[],dir=new THREE.Vector3(d,.04*d,.07).normalize();
                for(let i=0;i<=50;i++) pts.push(p.clone().addScaledVector(dir,i/50*580));
                const geo=new THREE.BufferGeometry().setFromPoints(pts);
                const tA=new Float32Array(51);for(let i=0;i<=50;i++)tA[i]=i/50;
                geo.setAttribute('aT',new THREE.BufferAttribute(tA,1));
                this.pGroup.add(new THREE.Line(geo,mat));
            });
            const dm=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uPh:{value:ph}},vertexShader:`void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float uTime,uPh;void main(){float p=pow(abs(sin(uTime*3.+uPh)),4.);gl_FragColor=vec4(vec3(1.),p*.45);}`,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
            const dot=new THREE.Mesh(new THREE.SphereGeometry(1.4,8,8),dm);dot.position.copy(p);this.pGroup.add(dot);
            this.pulsarMats.push({mat,dm});
        });
    }

    _godRays() {
        this.gRGroup=new THREE.Group();this.scene.add(this.gRGroup);
        for(let i=0;i<12;i++){
            const a=(i/12)*Math.PI*2,sp=(Math.random()-.5)*.18,len=260+Math.random()*160;
            this._line([new THREE.Vector3(0,0,0),new THREE.Vector3(Math.cos(a+sp)*len,(Math.random()-.5)*50,Math.sin(a+sp)*len)],.007+Math.random()*.009);
        }
        // also a few vertical shafts
        for(let i=0;i<4;i++){
            const x=(Math.random()-.5)*80,z=(Math.random()-.5)*80;
            this._line([new THREE.Vector3(x,-200,z),new THREE.Vector3(x,200,z)],.006);
        }
    }

    _aurora() {
        this.aGroup=new THREE.Group();this.scene.add(this.aGroup);this.aRings=[];
        [{r:205,n:270,op:.05,rx:.3,rz:.1,s:{x:.00014,y:.0002,z:.0001}},
         {r:290,n:340,op:.038,rx:1.1,rz:.4,s:{x:.00008,y:.00013,z:.0002}},
         {r:368,n:420,op:.045,rx:.7,rz:1.2,s:{x:.0002,y:.0001,z:.00005}},
         {r:445,n:500,op:.026,rx:1.5,rz:.8,s:{x:.0001,y:.00008,z:.00017}},
         {r:528,n:580,op:.02,rx:.4,rz:.6,s:{x:.00011,y:.00016,z:.00007}},
        ].forEach(c=>{
            const pts=[];for(let i=0;i<=c.n;i++) pts.push(new THREE.Vector3(Math.cos(i/c.n*Math.PI*2)*c.r,0,Math.sin(i/c.n*Math.PI*2)*c.r));
            const mat=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:c.op,blending:THREE.AdditiveBlending,depthWrite:false});
            const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),mat);
            l.rotation.x=c.rx;l.rotation.z=c.rz;l.userData.s=c.s;
            this.aGroup.add(l);this.aRings.push(l);
        });
    }

    // Dark matter web — faint interconnected filaments across the universe
    _darkMatterWeb() {
        const n=this.M?30:60;
        const nodes=[];
        for(let i=0;i<n;i++){
            const r=100+Math.random()*450,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);
            nodes.push(new THREE.Vector3(r*Math.sin(p)*Math.cos(t),r*Math.sin(p)*Math.sin(t),r*Math.cos(p)));
        }
        const pts=[];
        nodes.forEach((a,i)=>{
            const near=[...nodes].sort((x,y)=>a.distanceTo(x)-a.distanceTo(y)).slice(1,4);
            near.forEach(b=>{ if(a.distanceTo(b)<220){ pts.push(a);pts.push(b); } });
        });
        if(!pts.length) return;
        const geo=new THREE.BufferGeometry().setFromPoints(pts);
        const mat=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.015,blending:THREE.AdditiveBlending,depthWrite:false});
        this.dmWeb=new THREE.LineSegments(geo,mat);
        this.scene.add(this.dmWeb);
    }

    animateColor(h){}
    resetColor(){}

    update(){
        const t=this.experience.time.elapsed;
        this.starGroups.forEach((s,i)=>{s.mat.uniforms.uTime.value=t;s.pts.rotation.y=t*(.0011-i*.0003);s.pts.rotation.x=t*.00018;});
        if(this.galMat){this.galMat.uniforms.uTime.value=t;}
        if(this.nebPts) this.nebPts.rotation.y=t*.003;
        if(this.dustMat){this.dustMat.uniforms.uTime.value=t;this.dustPts.rotation.y=-t*.0018;}
        if(this.gRGroup) this.gRGroup.rotation.y=t*.005;
        this.pulsarMats.forEach(p=>{p.mat.uniforms.uTime.value=t;p.dm.uniforms.uTime.value=t;});
        if(this.pGroup) this.pGroup.rotation.y=t*.032;
        this.aRings.forEach(r=>{r.rotation.x+=r.userData.s.x;r.rotation.y+=r.userData.s.y;r.rotation.z+=r.userData.s.z;});
        if(this.dmWeb) this.dmWeb.rotation.y=t*.0008;
    }
}