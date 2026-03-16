import * as THREE from 'three';
import Experience from '../Experience.js';
import Node from './Node.js';
import Background from './Background.js';
import contentData from '../../data/contentData.js';
import certificationData from '../../data/certifications.js';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.time       = this.experience.time;
        this.nodes      = [];
        this.traffic    = [];
        this.shootingStars = [];
        this.comets     = [];
        this.nextShootingStar = 1.5;
        this.nextComet  = 5.0;

        this.nodeGroup = new THREE.Group();
        this.scene.add(this.nodeGroup);

        this.setupLights();
        this.setupBackground();
        this.setupNodes();
        this.setupPlasmaWeb();
        this.setupAsteroidBelts();
        this.setupSpaceStations();
        this.setupShootingStarPool();

        this.isPaused = false;
        this.mouse    = {x:0,y:0};
        this.targetMouse = {x:0,y:0};
        window.addEventListener('mousemove',e=>{
            this.targetMouse.x=(e.clientX/window.innerWidth)-.5;
            this.targetMouse.y=(e.clientY/window.innerHeight)-.5;
        });
    }

    /* ── LIGHTS ─────────────────────────────────────────────────── */
    setupLights() {
        // Very low ambient — universe is mostly dark
        this.scene.add(new THREE.AmbientLight(0x08080f, 0.4));

        // Main cold star light
        const main = new THREE.DirectionalLight(0xc8d0ff, 1.8);
        main.position.set(120, 100, 80);
        this.scene.add(main);

        // Warm back fill (dying star)
        const back = new THREE.DirectionalLight(0xffd0a0, 0.25);
        back.position.set(-100,-40,-80);
        this.scene.add(back);

        // Galaxy core point light — pulsating
        this.coreLight = new THREE.PointLight(0xffffff, 4, 300);
        this.coreLight.position.set(0,0,0);
        this.scene.add(this.coreLight);

        // Scattered rim lights
        [0,1,2,3].forEach(i=>{
            const a=i/4*Math.PI*2;
            const l=new THREE.PointLight(0x6688ff, .6, 200);
            l.position.set(Math.cos(a)*100,30+i*10,Math.sin(a)*100);
            this.scene.add(l);
        });
    }

    /* ── BACKGROUND ─────────────────────────────────────────────── */
    setupBackground() {
        this.background = new Background();
    }

    /* ── NODES ───────────────────────────────────────────────────── */
    setupNodes() {
        const cert = {
            type:'certification', title:'Sertifikasi', kicker:'Professional',
            desc:'Kumpulan lisensi dan sertifikasi profesional yang telah saya raih.',
            image:'https://placehold.co/800x400/111111/ffffff?text=Certifications',
            certList:certificationData
        };
        const about   = contentData.find(d=>d.type==='about');
        const projects= contentData.filter(d=>d.type!=='about'&&!d.certList);
        const all     = [about,cert,...projects];

        all.forEach((data,i)=>{
            const phi  =Math.acos(-1+(2*i)/all.length);
            const theta=Math.sqrt(all.length*Math.PI)*phi;
            const r    =48;
            const pos  =new THREE.Vector3().setFromSphericalCoords(r,phi,theta);
            const node =new Node(data,pos);
            node.originalPos=pos.clone();
            this.nodes.push(node);
            this.nodeGroup.add(node.group);
        });
    }

    /* ── PLASMA WEB (connections) ────────────────────────────────── */
    setupPlasmaWeb() {
        this.webGroup=new THREE.Group();
        this.nodeGroup.add(this.webGroup);

        // Connection line material with flow animation
        this.webMat=new THREE.ShaderMaterial({
            uniforms:{uTime:{value:0}},
            vertexShader:`
                attribute float aProgress;
                varying float vProg;
                void main(){ vProg=aProgress; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
            `,
            fragmentShader:`
                uniform float uTime; varying float vProg;
                void main(){
                    // Multi-flow: 3 pulses per line
                    float f1=fract(vProg*3.-uTime*.4);
                    float f2=fract(vProg*3.-uTime*.4-.33);
                    float f3=fract(vProg*3.-uTime*.4-.66);
                    float b1=smoothstep(0.,.08,f1)*smoothstep(.25,.1,f1);
                    float b2=smoothstep(0.,.08,f2)*smoothstep(.25,.1,f2)*.7;
                    float b3=smoothstep(0.,.08,f3)*smoothstep(.25,.1,f3)*.5;
                    float base=.04, bright=b1+b2+b3;
                    float alpha=base+bright*.3;
                    gl_FragColor=vec4(vec3(.7+bright*.3,.75+bright*.25,1.),alpha);
                }
            `,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });

        // Tiny data packets
        const pkGeo=new THREE.SphereGeometry(.05,6,6);
        const pkMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.7,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:false});

        // Glowing packet trail
        const trailGeo=new THREE.SphereGeometry(.18,6,6);
        const trailMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.12,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:false});

        this.nodes.forEach((node,idx)=>{
            const nearby=this.nodes
                .map((o,j)=>({d:node.group.position.distanceTo(o.group.position),n:o,j}))
                .filter(x=>x.j!==idx).sort((a,b)=>a.d-b.d).slice(0,3);

            nearby.forEach(({n:target})=>{
                const s=node.group.position, e=target.group.position;
                const mid=new THREE.Vector3().addVectors(s,e).multiplyScalar(.5);
                mid.add(new THREE.Vector3((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10));
                const curve=new THREE.QuadraticBezierCurve3(s,mid,e);
                const pts=curve.getPoints(80);
                const geo=new THREE.BufferGeometry().setFromPoints(pts);
                const prog=new Float32Array(pts.length);
                pts.forEach((_,i)=>prog[i]=i/(pts.length-1));
                geo.setAttribute('aProgress',new THREE.BufferAttribute(prog,1));
                this.webGroup.add(new THREE.Line(geo,this.webMat));

                // 2-3 packets per line
                const pc=2+Math.floor(Math.random()*2);
                for(let k=0;k<pc;k++){
                    const pk=new THREE.Mesh(pkGeo,pkMat.clone());
                    const trail=new THREE.Mesh(trailGeo,trailMat.clone());
                    this.nodeGroup.add(pk);
                    this.nodeGroup.add(trail);
                    this.traffic.push({pk,trail,curve,spd:.003+Math.random()*.009,progress:Math.random()});
                }
            });
        });
    }

    /* ── ASTEROID BELTS ──────────────────────────────────────────── */
    setupAsteroidBelts() {
        // 3 rings at different radii and inclinations
        const belts=[
            {r:75, spread:10, count:500, incline:.15, spd:.012},
            {r:110,spread:12, count:800, incline:.4,  spd:.007},
            {r:155,spread:8,  count:400, incline:1.2, spd:.004},
        ];
        belts.forEach(b=>{
            const geo=new THREE.BufferGeometry();
            const pos=new Float32Array(b.count*3), sz=new Float32Array(b.count), rand=new Float32Array(b.count);
            for(let i=0;i<b.count;i++){
                const r=b.r+(Math.random()-.5)*b.spread;
                const theta=Math.random()*Math.PI*2;
                const y=(Math.random()-.5)*b.spread*.3;
                pos[i*3]=r*Math.cos(theta); pos[i*3+1]=y; pos[i*3+2]=r*Math.sin(theta);
                sz[i]=.4+Math.random()*1.8; rand[i]=Math.random();
            }
            geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
            geo.setAttribute('aSize',new THREE.BufferAttribute(sz,1));
            geo.setAttribute('aRand',new THREE.BufferAttribute(rand,1));
            const mat=new THREE.ShaderMaterial({
                uniforms:{uTime:{value:0},uSpd:{value:b.spd},uPR:{value:this.experience.sizes.pixelRatio},uIncline:{value:b.incline}},
                vertexShader:`
                    attribute float aSize,aRand;
                    uniform float uTime,uSpd,uPR,uIncline;
                    varying float vR;
                    void main(){
                        vR=aRand;
                        float r=length(position.xz);
                        float angle=atan(position.z,position.x)+uTime*uSpd*(1.+aRand*.3);
                        float cosI=cos(uIncline), sinI=sin(uIncline);
                        vec3 p=vec3(cos(angle)*r, position.y*cosI - sin(angle)*r*sinI, sin(angle)*r*cosI + position.y*sinI);
                        p.y+=sin(uTime*aRand*.5)*aRand*.4;
                        vec4 mv=modelViewMatrix*vec4(p,1.);
                        gl_Position=projectionMatrix*mv;
                        gl_PointSize=aSize*uPR*(300./-mv.z);
                    }
                `,
                fragmentShader:`
                    varying float vR;
                    void main(){
                        float d=length(gl_PointCoord-.5);if(d>.5)discard;
                        float a=(1.-d*2.)*.3;
                        gl_FragColor=vec4(vec3(.55+vR*.4),a);
                    }
                `,
                transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
            });
            const pts=new THREE.Points(geo,mat);
            this.scene.add(pts);
            if(!this._beltMats) this._beltMats=[];
            this._beltMats.push(mat);
        });
    }

    /* ── SPACE STATIONS / STRUCTURES ────────────────────────────── */
    setupSpaceStations() {
        // Orbiting tetrahedra / octahedra as abstract space infrastructure
        this.structures=[];
        const geos=[
            new THREE.OctahedronGeometry(.8,0),
            new THREE.TetrahedronGeometry(.6,0),
            new THREE.IcosahedronGeometry(.5,0),
        ];
        const positions=[
            new THREE.Vector3(65,15,-30),
            new THREE.Vector3(-50,-20,55),
            new THREE.Vector3(30,40,60),
            new THREE.Vector3(-70,10,-20),
            new THREE.Vector3(45,-35,40),
        ];
        positions.forEach((pos,i)=>{
            const geo=geos[i%geos.length];
            const mat=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true,transparent:true,opacity:.3,blending:THREE.AdditiveBlending,depthWrite:false});
            const mesh=new THREE.Mesh(geo,mat);
            mesh.position.copy(pos);
            // Outer wireframe

            this.scene.add(mesh);
            this.structures.push({
                mesh,
                rotAxis:new THREE.Vector3(Math.random(),Math.random(),Math.random()).normalize(),
                rotSpd:.003+Math.random()*.007,
                orbitCenter:pos.clone().setLength(pos.length()),
                orbitSpd:.0005+Math.random()*.001,
                orbitAngle:Math.random()*Math.PI*2,
                orbitRadius:pos.length()
            });
        });
    }

    /* ── SHOOTING STARS POOL ─────────────────────────────────────── */
    setupShootingStarPool() {
        this.shootingStarGroup=new THREE.Group();
        this.scene.add(this.shootingStarGroup);
        this.cometGroup=new THREE.Group();
        this.scene.add(this.cometGroup);
    }

    _spawnShootingStar() {
        const start=new THREE.Vector3((Math.random()-.5)*500,100+Math.random()*200,(Math.random()-.5)*500);
        const dir  =new THREE.Vector3((Math.random()-.5)*1.5,-1-Math.random()*.8,(Math.random()-.5)*1.5).normalize();
        const len  =20+Math.random()*40;

        const pts=[start,start.clone().add(dir.clone().multiplyScalar(-len))];
        const geo=new THREE.BufferGeometry().setFromPoints(pts);
        const mat=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:1.0,blending:THREE.AdditiveBlending,depthWrite:false});
        const line=new THREE.Line(geo,mat);
        this.shootingStarGroup.add(line);
        this.shootingStars.push({line,dir,start:start.clone(),spd:5+Math.random()*6,life:0,maxLife:.6+Math.random()*.5,mat});
    }

    _spawnComet() {
        // Larger, slower with glowing coma
        const start=new THREE.Vector3((Math.random()-.5)*600,150+Math.random()*150,(Math.random()-.5)*600);
        const dir  =new THREE.Vector3((Math.random()-.5),-0.3-Math.random()*.4,(Math.random()-.5)).normalize();
        const pts=[start];
        for(let i=1;i<=20;i++) pts.push(start.clone().add(dir.clone().multiplyScalar(-i*4)));
        const geo=new THREE.BufferGeometry().setFromPoints(pts);
        const mat=new THREE.ShaderMaterial({
            uniforms:{uLife:{value:0}},
            vertexShader:`attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
            fragmentShader:`uniform float uLife;varying float vT;void main(){float a=(1.-vT)*(1.-uLife)*.7;gl_FragColor=vec4(.9,.95,1.,a);}`,
            transparent:true,depthWrite:false,blending:THREE.AdditiveBlending
        });
        const tArr=new Float32Array(pts.length);pts.forEach((_,i)=>tArr[i]=i/(pts.length-1));
        geo.setAttribute('aT',new THREE.BufferAttribute(tArr,1));
        const line=new THREE.Line(geo,mat);
        this.cometGroup.add(line);
        this.comets.push({line,dir,start:start.clone(),spd:1.5+Math.random()*1.5,life:0,maxLife:3+Math.random()*2,mat});
    }

    /* ── UPDATE ──────────────────────────────────────────────────── */
    update() {
        const t=this.experience.time.elapsed;
        const delta=this.experience.time.delta/1000;

        // Background
        this.background.update();

        // Core light pulse
        this.coreLight.intensity=3+Math.sin(t*1.4)*1.2;

        // Web
        if(this.webMat) this.webMat.uniforms.uTime.value=t;

        // Belt mats
        if(this._beltMats) this._beltMats.forEach(m=>m.uniforms.uTime.value=t);

        // Nodes
        this.nodes.forEach(n=>n.update());

        // Traffic
        this.traffic.forEach(item=>{
            item.progress+=item.spd;
            if(item.progress>1) item.progress=0;
            const pos=item.curve.getPoint(item.progress);
            item.pk.position.copy(pos);
            item.trail.position.copy(pos);
            const s=.8+Math.sin(t*10+item.progress*25)*.5;
            item.pk.scale.setScalar(s);
            item.trail.scale.setScalar(s*1.5);
        });

        // Structures orbit+rotate
        this.structures.forEach(s=>{
            s.mesh.rotateOnAxis(s.rotAxis,s.rotSpd);
            s.orbitAngle+=s.orbitSpd;
            // Slow drift orbit
            s.mesh.position.x=Math.cos(s.orbitAngle)*s.orbitRadius*.98+Math.sin(s.orbitAngle*.3)*5;
            s.mesh.position.z=Math.sin(s.orbitAngle)*s.orbitRadius*.98+Math.cos(s.orbitAngle*.2)*5;
            s.mesh.position.y+=Math.sin(t*.1+s.orbitAngle)*.005;
        });

        // Rotate node cluster
        const isHovering=this.experience.raycaster&&this.experience.raycaster.currentIntersect;
        this.mouse.x+=(this.targetMouse.x-this.mouse.x)*.05;
        this.mouse.y+=(this.targetMouse.y-this.mouse.y)*.05;
        if(!this.isPaused&&!isHovering){
            this.nodeGroup.rotation.y+=.0004;
            this.nodeGroup.rotation.x+=.00007;
        }

        // Shooting stars
        if(t>this.nextShootingStar){
            this._spawnShootingStar();
            this.nextShootingStar=t+.8+Math.random()*2.5;
        }
        for(let i=this.shootingStars.length-1;i>=0;i--){
            const s=this.shootingStars[i];
            s.life+=delta;
            s.start.addScaledVector(s.dir,s.spd);
            const pa=s.line.geometry.attributes.position;
            pa.setXYZ(0,s.start.x,s.start.y,s.start.z);
            pa.needsUpdate=true;
            s.mat.opacity=Math.max(0,1-s.life/s.maxLife);
            if(s.life>=s.maxLife){ this.shootingStarGroup.remove(s.line); s.line.geometry.dispose(); this.shootingStars.splice(i,1); }
        }

        // Comets
        if(t>this.nextComet){
            this._spawnComet();
            this.nextComet=t+8+Math.random()*15;
        }
        for(let i=this.comets.length-1;i>=0;i--){
            const c=this.comets[i];
            c.life+=delta;
            c.start.addScaledVector(c.dir,c.spd);
            const pa=c.line.geometry.attributes.position;
            for(let j=0;j<=20;j++){
                const p=c.start.clone().add(c.dir.clone().multiplyScalar(-j*4));
                pa.setXYZ(j,p.x,p.y,p.z);
            }
            pa.needsUpdate=true;
            c.mat.uniforms.uLife.value=c.life/c.maxLife;
            if(c.life>=c.maxLife){ this.cometGroup.remove(c.line); c.line.geometry.dispose(); this.comets.splice(i,1); }
        }
    }
}