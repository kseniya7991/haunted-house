import * as THREE from "three";
import { houseSize } from "../Objects/House";

const initDoorLight = (scene, gui) => {
    const doorLight = new THREE.PointLight("#ff7d46", 10, 10);
    doorLight.position.set(0, houseSize.height - 0.4, houseSize.depth / 2 + 1);

    let doorLightHelper = new THREE.PointLightHelper(doorLight);
    doorLightHelper.visible = false;
    scene.add(doorLightHelper);
    scene.add(doorLight);

    return doorLight;
};

export default initDoorLight;
