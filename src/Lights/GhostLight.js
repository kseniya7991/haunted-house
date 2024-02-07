import * as THREE from "three";

const initGhostLight = (scene) => {
    const ghostLight1 = new THREE.PointLight("#36ebf5", 8, 10);
    const ghostLight1Helper = new THREE.PointLightHelper(ghostLight1);
    ghostLight1Helper.visible = false;

    const ghostLight2 = new THREE.PointLight("#7d48e8", 8, 4);
    const ghostLight2Helper = new THREE.PointLightHelper(ghostLight2);
    ghostLight2Helper.visible = false;

    const ghostLight3 = new THREE.PointLight("#d7e01b", 8, 8);
    const ghostLight3Helper = new THREE.PointLightHelper(ghostLight3);
    ghostLight3Helper.visible = false;

    scene.add(ghostLight1, ghostLight1Helper);
    scene.add(ghostLight2, ghostLight2Helper);
    scene.add(ghostLight3, ghostLight3Helper);

    return { ghostLight1, ghostLight2, ghostLight3 };
};

export default initGhostLight;
