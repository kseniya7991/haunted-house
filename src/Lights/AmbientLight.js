import * as THREE from "three";

const initAmbientLight = (scene, gui) => {
    const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.2);
    gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
    scene.add(ambientLight);
    return ambientLight;
};

export default initAmbientLight;
