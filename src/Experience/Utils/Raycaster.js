import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Raycaster {
    constructor() {
        this.experience = new Experience();
        this.scene      = this.experience.scene;
        this.camera     = this.experience.camera;
        this.world      = this.experience.world;

        this.instance = new THREE.Raycaster();
        this.mouse    = new THREE.Vector2(-999, -999);

        this.currentIntersect = null;
        this.rawMouse = { x: 0, y: 0 };

        window.addEventListener('mousemove', (event) => this.onMouseMove(event));
        window.addEventListener('click', (event) => this.onClick(event));
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.rawMouse.x = event.clientX;
        this.rawMouse.y = event.clientY;
    }

    onClick(event) {
        if (!this.experience._started) return;
        if (this.experience.world?._dragMoved) return;
        if (event?.target?.closest?.('header, .hud-filters, .hud-dock, .quick-drawer, .modal-card, .relic-viewport-hud, .project-label, button, a')) return;

        if (this.currentIntersect && this.currentIntersect.data) {
            this.experience.selectNode?.(this.currentIntersect, true);
        }
    }

    update() {
        if (!this.experience._started) return;

        this.instance.setFromCamera(this.mouse, this.camera.instance);
        const world = this.experience.world;

        if (world && world.nodes && world.nodeGroup) {
            const objectsToTest = world.nodes.map(node => node.planetMesh).filter(Boolean);
            const intersects = this.instance.intersectObjects(objectsToTest, false);

            if (intersects.length > 0) {
                let obj = intersects[0].object;
                let selectedNode = null;
                while (obj && !selectedNode) {
                    if (obj.userData?.nodeInstance) selectedNode = obj.userData.nodeInstance;
                    obj = obj.parent;
                }

                if (selectedNode !== this.currentIntersect) {
                    if (this.currentIntersect) {
                        this.currentIntersect.onMouseLeave();
                    }
                    if (selectedNode) {
                        selectedNode.onMouseEnter();
                        if (this.experience.cursor) this.experience.cursor.enter();
                    }
                    this.currentIntersect = selectedNode;
                }
            } else {
                if (this.currentIntersect) {
                    this.currentIntersect.onMouseLeave();
                    if (this.experience.cursor) this.experience.cursor.leave();
                    this.currentIntersect = null;
                }
            }
        }
    }
}
