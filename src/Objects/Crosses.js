import * as THREE from "three";
import { graveMatearial } from "./Graves";

const addCrosses = (house) => {
    const crossGeometry1 = new THREE.BoxGeometry(0.1, 1, 0.05);
    const crossGeometry2 = new THREE.BoxGeometry(0.4, 0.1, 0.05);

    for (let i = 0; i < 30; i++) {
        const cross = new THREE.Group();

        const cross1 = new THREE.Mesh(crossGeometry1, graveMatearial);
        const cross2 = new THREE.Mesh(crossGeometry2, graveMatearial);
        cross2.position.y = 0.3;
        cross2.position.z = 0.001;

        let angle = Math.random() * 2 * Math.PI;
        const radius = 3 + Math.random() * 6;
        let x = Math.sin(angle) * radius;
        let z = Math.cos(angle) * radius;
        let y = Math.random() * 0.2 + 0.1;

        cross.position.set(x, y, z);

        const rotationAngle = Math.random() * 0.4 - 0.2;
        cross.rotation.z = rotationAngle;
        cross.rotation.y = rotationAngle;
        cross.rotation.x = rotationAngle;

        cross.add(cross1, cross2);

        cross1.castShadow = true;
        cross2.castShadow = true;

        house.add(cross);
    }
};

export default addCrosses;
