import * as THREE from 'three';
import gsap from 'gsap'; // <--- JANGAN LUPA IMPORT INI
import Experience from '../Experience.js';

export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;

        this.setGeometry();
        this.setMaterial();
        this.setMesh();
    }

    setGeometry() {
        this.geometry = new THREE.SphereGeometry(1000, 128, 128);
    }

    setMaterial() {
        this.material = new THREE.ShaderMaterial({
            side: THREE.BackSide,
            
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color(0xffffff) }, // Warna Puncak
                uDeepColor: { value: new THREE.Color(0x000000) } // Warna Lembah
            },
            vertexShader: `
                uniform float uTime;
                varying float vNoise;
                varying vec3 vNormal;

                // --- NOISE FUNCTION ---
                vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
                vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
                float snoise(vec3 v){ 
                    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                    vec3 i  = floor(v + dot(v, C.yyy) );
                    vec3 x0 = v - i + dot(i, C.xxx);
                    vec3 g = step(x0.yzx, x0.xyz);
                    vec3 l = 1.0 - g;
                    vec3 i1 = min( g.xyz, l.zxy );
                    vec3 i2 = max( g.xyz, l.zxy );
                    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
                    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
                    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
                    i = mod(i, 289.0 );
                    vec4 p = permute( permute( i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                    float n_ = 0.142857142857;
                    vec3 ns = n_ * D.wyz - D.xzx;
                    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
                    vec4 x_ = floor(j * ns.z);
                    vec4 y_ = floor(j - 7.0 * x_ );
                    vec4 x = x_ *ns.x + ns.yyyy;
                    vec4 y = y_ *ns.x + ns.yyyy;
                    vec4 h = 1.0 - abs(x) - abs(y);
                    vec4 b0 = vec4( x.xy, y.xy );
                    vec4 b1 = vec4( x.zw, y.zw );
                    vec4 s0 = floor(b0)*2.0 + 1.0;
                    vec4 s1 = floor(b1)*2.0 + 1.0;
                    vec4 sh = -step(h, vec4(0.0));
                    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
                    vec3 p0 = vec3(a0.xy,h.x);
                    vec3 p1 = vec3(a0.zw,h.y);
                    vec3 p2 = vec3(a1.xy,h.z);
                    vec3 p3 = vec3(a1.zw,h.w);
                    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
                    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                    m = m * m; 
                    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) ); 
                } 

                void main() { 
                    vNormal = normal;
                    vec3 noisePos = normalize(position) * 1.2; 
                    float noise = snoise(vec3(noisePos.x, noisePos.y, noisePos.z + uTime * 0.2));
                    vNoise = noise;
                    vec3 newPosition = position + normal * (noise * 300.0);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
                }
            `,
            fragmentShader: `
                varying float vNoise;
                uniform vec3 uColor;
                uniform vec3 uDeepColor;

                void main() {
                    float mixStrength = vNoise * 0.5 + 0.5;
                    mixStrength = smoothstep(0.0, 1.0, mixStrength);
                    vec3 color = mix(uDeepColor, uColor, mixStrength); 
                    gl_FragColor = vec4(color, 1.0); 
                }
            `,
            wireframe: true 
        });
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 0, 0); 
        this.scene.add(this.mesh);
    }

    // --- FUNGSI YG HILANG ---
    animateColor(colorHex) {
        gsap.to(this.material.uniforms.uColor.value, { 
            r: new THREE.Color(colorHex).r,
            g: new THREE.Color(colorHex).g,
            b: new THREE.Color(colorHex).b,
            duration: 1.5,
            ease: "power2.inOut"
        });

        const deepColor = new THREE.Color(colorHex);
        deepColor.multiplyScalar(0.1); 

        gsap.to(this.material.uniforms.uDeepColor.value, { 
            r: deepColor.r,
            g: deepColor.g,
            b: deepColor.b,
            duration: 1.5,
            ease: "power2.inOut"
        });
    }
    
    resetColor() {
        gsap.to(this.material.uniforms.uColor.value, { 
            r: 1, g: 1, b: 1, 
            duration: 1.5 
        });
        gsap.to(this.material.uniforms.uDeepColor.value, { 
            r: 0, g: 0, b: 0, 
            duration: 1.5 
        });
    }

    update() {
        this.material.uniforms.uTime.value = this.experience.time.elapsed;
        this.mesh.rotation.y = this.experience.time.elapsed * 0.05;
        this.mesh.rotation.z = this.experience.time.elapsed * 0.02;
    }
}