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

        this.setInstance();
        this._setupMobileGyro();
    }

    setInstance() {
        this.rig = new THREE.Group();
        this.scene.add(this.rig);
        this.instance = new THREE.PerspectiveCamera(48, this.sizes.width / this.sizes.height, 0.1, 5000);
        // Elevated vantage point so the 3D Spacetime Gravity Grid & Citadel Rings feel monumental
        this.instance.position.set(0, 14, 118);
        this.instance.lookAt(this.lookAtTarget);
        this.rig.add(this.instance);
    }

    _setupMobileGyro() {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', e => {
                if (e.gamma !== null && e.beta !== null) {
                    this._targetX = (e.beta  - 40) / 60 * 0.25;
                    this._targetY = e.gamma / 90 * 0.25;
                }
            }, { passive: true });
        }
    }

    /**
     * Smoothly flies the 3D camera right up to a sculptural Relic,
     * framing it in the left-center 3D viewport while the Dossier Blade opens on the right.
     */
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
            duration: 1.0,
            ease: 'power3.out',
            overwrite: 'auto'
        });

        // After rotation, the node's position in world space is at angle 0 in X/Z (i.e. x=0, z=radius)
        const rHoriz = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
        const nodeWorldAfter = new THREE.Vector3(0, pos.y, rHoriz);

        const dist = node.cfg.r * (this.experience.isMobile ? 6.2 : 4.8) + 5.0;
        // Offset lookAt to the right on desktop so the 3D Relic is framed on the left side of the screen
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
            duration: 1.4,
            ease: 'expo.out',
            overwrite: 'auto'
        });

        gsap.to(this.lookAtTarget, {
            x: lookDest.x,
            y: lookDest.y,
            z: lookDest.z,
            duration: 1.4,
            ease: 'expo.out',
            overwrite: 'auto'
        });
    }

    returnToOverview() {
        this.isInspecting = false;
        const zOverview = this.experience.isMobile ? 108 : 118;

        gsap.to(this.instance.position, {
            x: 0,
            y: 14,
            z: zOverview,
            duration: 1.35,
            ease: 'expo.out',
            overwrite: 'auto'
        });

        gsap.to(this.lookAtTarget, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.35,
            ease: 'expo.out',
            overwrite: 'auto'
        });
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        const raycaster = this.experience.raycaster;
        const isMobile  = this.experience.isMobile;
        const parallaxMult = this.isInspecting ? 0.06 : 0.24;

        if (isMobile) {
            this._curX += (this._targetX * parallaxMult - this._curX) * 0.05;
            this._curY += (this._targetY * parallaxMult - this._curY) * 0.05;
            this.rig.rotation.x = this._curX;
            this.rig.rotation.y = this._curY;
        } else if (raycaster && !this.experience._bhCinematicActive) {
            const mouse = raycaster.mouse;
            const tX = mouse.y * parallaxMult;
            const tY = -mouse.x * parallaxMult;
            this._curX += (tX - this._curX) * 0.055;
            this._curY += (tY - this._curY) * 0.055;
            this.rig.rotation.x = this._curX;
            this.rig.rotation.y = this._curY;
        }

        if (!this.experience._bhCinematicActive) {
            this.instance.lookAt(this.lookAtTarget);
        }
    }
}
