import * as THREE from "three";
import { doorTexture } from "../textures";
import { houseSize } from "./House";

const addDoor = (house) => {
    const door = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2, 100, 100),
        new THREE.MeshStandardMaterial({
            map: doorTexture.doorColorTexture,
            transparent: true,
            alphaMap: doorTexture.doorAlphaTexture,
            aoMap: doorTexture.doorAmbientOcclusionTexture,
            displacementMap: doorTexture.doorHeightTexture,
            displacementScale: 0.1,
            normalMap: doorTexture.doorNormalTexture,
            metalnessMap: doorTexture.doorMetalnessTexture,
            roughnessMap: doorTexture.doorRoughnessTexture,
        })
    );

    door.position.set(0, 1.5 / 2 + 0.2, houseSize.depth / 2 + 0.02);
    house.add(door);
};

export default addDoor;
