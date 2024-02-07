import * as THREE from "three";
import { bushTexture } from "../textures";
import { houseSize } from "./House";

const addBushes = (house, gui) => {
    const bushes = new THREE.Group();

    const bushGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const bushMaterail = new THREE.MeshPhysicalMaterial({
        map: bushTexture.bushColorTexture,
        transparent: true,
        aoMap: bushTexture.ushAmbientOcclusionTexture,
        displacementMap: bushTexture.bushHeightTexture,
        displacementScale: 0.08,
        normalMap: bushTexture.bushNormalTexture,
        roughnessMap: bushTexture.bushRoughnessTexture,
    });

    const bush1 = new THREE.Mesh(bushGeometry, bushMaterail);
    bush1.position.set(-1.2, 0.2, houseSize.depth / 2 + 0.5);
    bush1.scale.set(0.85, 0.85, 0.85);

    const bush2 = new THREE.Mesh(bushGeometry, bushMaterail);
    bush2.position.set(-1.7, 0.1, houseSize.depth / 2 + 0.8);
    bush2.scale.set(0.4, 0.4, 0.4);

    const bush3 = new THREE.Mesh(bushGeometry, bushMaterail);
    bush3.position.set(1.3, 0.2, houseSize.depth / 2 + 0.5);
    bush3.scale.set(0.7, 0.7, 0.7);

    const bush4 = new THREE.Mesh(bushGeometry, bushMaterail);
    bush4.position.set(0.8, 0.1, houseSize.depth / 2 + 0.6);
    bush4.scale.set(0.3, 0.3, 0.3);

    const bush5 = new THREE.Mesh(bushGeometry, bushMaterail);
    bush5.position.set(1.8, 0.1, houseSize.depth / 2 + 0.8);
    bush5.scale.set(0.35, 0.35, 0.35);

    bushMaterail.sheen = 1;
    bushMaterail.sheenRoughness = 0.5;
    bushMaterail.sheenColor = new THREE.Color(0x16e807);

    bushes.add(bush1, bush2, bush3, bush4, bush5);

    //Shadows
    bush1.castShadow = true;
    bush2.castShadow = true;
    bush3.castShadow = true;
    bush4.castShadow = true;
    bush5.castShadow = true;

    house.add(bushes);
};

export default addBushes;
