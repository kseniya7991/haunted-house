import * as THREE from "three";
import { grassTexture } from "../textures";

const addFloor = (house) => {
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({ map: grassTexture.grassColorTexture })
    );
    floor.rotation.x = -Math.PI * 0.5;
    floor.position.y = 0;

    floor.receiveShadow = true;
    house.add(floor);
};

export default addFloor;
