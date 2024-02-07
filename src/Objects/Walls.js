import * as THREE from "three";
import { panelTexture } from "../textures";
import { houseSize } from "./House";

const addWalls = (house) => {
    const walls = new THREE.Mesh(
        new THREE.BoxGeometry(houseSize.width, houseSize.height, houseSize.depth),
        new THREE.MeshStandardMaterial({
            map: panelTexture.panelColorTexture,
            aoMap: panelTexture.panelAmbientOcclusionTexture,
            normalMap: panelTexture.panelNormalTexture,
            roughnessMap: panelTexture.panelRoughnessTexture,
            metalness: 0.7,
            roughness: 0.8,
        })
    );
    walls.position.set(0, houseSize.height / 2, 0);
    house.add(walls);

    //Shadow
    walls.castShadow = true;
};

export default addWalls;
