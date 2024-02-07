import * as THREE from "three";
import { roofTexture } from "../textures";

const addRoof = (house) => {
    const roof = new THREE.Mesh(
        new THREE.ConeGeometry(3, 1.5, 4),
        new THREE.MeshStandardMaterial({
            map: roofTexture.roofColorTexture,
            transparent: true,
            aoMap: roofTexture.oofAmbientOcclusionTexture,
            normalMap: roofTexture.roofNormalTexture,
            roughnessMap: roofTexture.roofRoughnessTexture,
        })
    );
    roof.position.set(0, 2.7, 0);
    roof.rotation.y = Math.PI * 0.25;
    house.add(roof);
};

export default addRoof;
