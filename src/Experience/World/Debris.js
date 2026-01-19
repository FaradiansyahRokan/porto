import * as THREE from 'three';
import gsap from 'gsap'; 
import Experience from '../Experience.js';

export default class Debris {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setGeometry();
        this.setMaterial();
        this.setMesh();
    }

    setGeometry() {
        this.geometry = new THREE.BufferGeometry();
        const count = 4000; // Jumlah Data Point (Banyakin biar padat)

        const positions = new Float32Array(count * 3);
        const randomness = new Float32Array(count); 

        for(let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Sebaran Sphere Luas (Latent Space)
            const r = 60 + Math.random() * 400; 
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] = z;

            randomness[i] = Math.random();
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('aRandom', new THREE.BufferAttribute(randomness, 1));
    }

    setMaterial() {
        this.material = new THREE.ShaderMaterial({
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: false,
            uniforms: {
                uTime: { value: 0 },
                uSize: { value: 4 * this.experience.sizes.pixelRatio }, // Ukuran kecil
                uColor: { value: new THREE.Color(0xffffff) } // PUTIH MURNI
            },
            vertexShader: `
                uniform float uTime;
                uniform float uSize;
                attribute float aRandom;
                
                void main() {
                    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                    
                    // Gerakan Floating Data (Naik turun dikit sesuai noise)
                    modelPosition.y += sin(uTime * aRandom * 0.5) * 1.0;

                    vec4 viewPosition = viewMatrix * modelPosition;
                    vec4 projectedPosition = projectionMatrix * viewPosition;

                    gl_Position = projectedPosition;

                    // Size attenuation (Makin jauh makin kecil)
                    gl_PointSize = uSize;
                    gl_PointSize *= (1.0 / - viewPosition.z);
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;

                void main() {
                    // BENTUK KOTAK (DIGITAL / PIXEL)
                    // Kita gak pake smoothstep lingkaran. Kita pake kotak tegas.
                    
                    // Efek kedip-kedip (Processing Data)
                    // float blink = step(0.5, sin(gl_FragCoord.x * 10.0)); // Optional glitch
                    
                    gl_FragColor = vec4(uColor, 0.6); // Opacity 0.6
                }
            `,
            transparent: true
        });
    }

    setMesh() {
        this.mesh = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    // Tetap simpan fungsi ini biar gak error dipanggil World
    animateColor(colorHex) {
        // Ignore color change, keep it Monochrome/White
    }
    
    resetColor() {
        // Ignore
    }

    update() {
        this.material.uniforms.uTime.value = this.experience.time.elapsed;
    }
}