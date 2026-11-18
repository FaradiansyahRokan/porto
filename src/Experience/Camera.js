import * as THREE from 'three';
import gsap from 'gsap';
import Experience from './Experience.js';

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes  = this.experience.sizes;
        this.scene  = this.experience.scene;
        this.canvas = this.experience.canvas;

        this._targetX = 0;
        this._targetY = 0;
        this._curX    = 0;
        this._curY    = 0;

        this.isInspecting = false;
        this.lookAtTarget = new THREE.Vector3(0, 0, 0);

        // Smooth scroll orbital state (overview only)
        this._scrollVal = 0;
        this._overviewPos = new THREE.Vector3(0, 14, 118);

        this.setInstance();
        this._setupMobileGyro();
    }

    setInstance() {
        this.rig = new THREE.Group();
        this.scene.add(this.rig);
        this.instance = new THREE.PerspectiveCamera(48, this.sizes.width / this.sizes.height, 0.1, 5000);
        this.instance.position.set(0, 14, 118);
        this.instance.lookAt(this.lookAtTarget);
        this.rig.add(this.instance);
    }

    _setupMobileGyro() {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', e => {
                if (e.gamma !== null && e.beta !== null) {
                    this._targetX = (e.beta  - 40) / 60 * 0.22;
                    this._targetY = e.gamma / 90 * 0.22;
                }
            }, { passive: true });
        }
    }

    /**
     * Smoothly glides the overview camera along a calming Interstellar orbital arc
     * driven by momentum scroll progress (0 -> 1).
     */
    setScrollOffset(progress) {
        if (this.isInspecting || this.experience._bhCinematicActive || !this.experience._started) return;
        this._scrollVal = progress;

        const baseZ = this.experience.isMobile ? 108 : 118;
        const targetZ = baseZ - progress * 44;              // Smoothly glide closer (118 -> 74)
        const targetY = 14 - progress * 10 + Math.sin(progress * Math.PI) * 5;
        const targetX = Math.sin(progress * Math.PI * 1.2) * 16;

        this._overviewPos.set(targetX, targetY, targetZ);
    }

    flyToNode(node) {
        if (!node || !this.experience.world?.nodeGroup) return;
        this.isInspecting = true;

        const worldGroup = this.experience.world.nodeGroup;
        const pos = node.originalPos.clone();

        // Align worldGroup rotation using shortest angular path so Next/Prev never spins 330°
        let targetGroupRotY = worldGroup.rotation.y;
        const targetGroupRotX = 0;
        if (pos.lengthSq() > 1) {
            const desiredY = -Math.atan2(pos.x, pos.z);
            const deltaY = Math.atan2(
                Math.sin(desiredY - worldGroup.rotation.y),
                Math.cos(desiredY - worldGroup.rotation.y)
            );
            targetGroupRotY = worldGroup.rotation.y + deltaY;
        }

        gsap.to(worldGroup.rotation, {
            x: targetGroupRotX,
            y: targetGroupRotY,
            z: 0,
            duration: 1.05,
            ease: 'power3.out',
            overwrite: 'auto'
        });

        const rHoriz = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
        const nodeWorldAfter = new THREE.Vector3(0, pos.y, rHoriz);

        const dist = node.cfg.r * (this.experience.isMobile ? 6.2 : 4.8) + 5.0;
        const sideOffset = this.experience.isMobile ? 0 : node.cfg.r * 2.15;
        const verticalOffset = this.experience.isMobile ? -node.cfg.r * 1.4 : 0;

        const camDest = new THREE.Vector3(
            nodeWorldAfter.x + sideOffset * 0.35,
            nodeWorldAfter.y + 1.2 + verticalOffset,
            nodeWorldAfter.z + dist
        );
        const lookDest = new THREE.Vector3(
            nodeWorldAfter.x + sideOffset,
            nodeWorldAfter.y + verticalOffset,
            nodeWorldAfter.z
        );

        gsap.to(this.instance.position, {
            x: camDest.x,
            y: camDest.y,
            z: camDest.z,
            duration: 1.3,
            ease: 'expo.out',
            overwrite: 'auto'
        });

        gsap.to(this.lookAtTarget, {
            x: lookDest.x,
            y: lookDest.y,
            z: lookDest.z,
            duration: 1.3,
            ease: 'expo.out',
            overwrite: 'auto'
        });
    }

    returnToOverview() {
        this.isInspecting = false;
        this.setScrollOffset(this._scrollVal);

        gsap.to(this.instance.position, {
            x: this._overviewPos.x,
            y: this._overviewPos.y,
            z: this._overviewPos.z,
            duration: 1.25,
            ease: 'expo.out',
            overwrite: 'auto'
        });

        gsap.to(this.lookAtTarget, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.25,
            ease: 'expo.out',
            overwrite: 'auto'
        });
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        const dt = Math.min((this.experience.time?.delta || 16) / 1000, 0.05);
        // Frame-rate independent exponential damping for 60Hz/120Hz/144Hz smoothness
        const damp = 1 - Math.exp(-5.2 * dt);

        const raycaster = this.experience.raycaster;
        const isMobile  = this.experience.isMobile;
        const parallaxMult = this.isInspecting ? 0.055 : 0.2;

        if (isMobile) {
            this._curX += (this._targetX * parallaxMult - this._curX) * damp;
            this._curY += (this._targetY * parallaxMult - this._curY) * damp;
            this.rig.rotation.x = this._curX;
            this.rig.rotation.y = this._curY;
        } else if (raycaster && !this.experience._bhCinematicActive) {
            const mouse = raycaster.mouse;
            const tX = mouse.y * parallaxMult;
            const tY = -mouse.x * parallaxMult;
            this._curX += (tX - this._curX) * damp;
            this._curY += (tY - this._curY) * damp;
            this.rig.rotation.x = this._curX;
            this.rig.rotation.y = this._curY;
        }

        // Smoothly glide overview camera toward scroll orbital target
        if (this.experience._started && !this.isInspecting && !this.experience._bhCinematicActive && !this._introActive) {
            const camDamp = 1 - Math.exp(-4.0 * dt);
            this.instance.position.lerp(this._overviewPos, camDamp);
        }

        if (!this.experience._bhCinematicActive) {
            this.instance.lookAt(this.lookAtTarget);
        }
    }
}
