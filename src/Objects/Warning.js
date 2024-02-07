import * as THREE from "three";
import { warningTexture } from "../textures";
import { houseSize } from "./House";

const addWarning = (house) => {
    let warningMaterial = new THREE.MeshStandardMaterial({
        map: warningTexture.warningColorTexture,
        transparent: true,
        alphaMap: warningTexture.warningAlphaTexture,
        aoMap: warningTexture.warningAmbientOcclusionTexture,
        displacementMap: warningTexture.warningHeightTexture,
        displacementScale: 0.01,
        normalMap: warningTexture.warningNormalTexture,
        metalnessMap: warningTexture.warningMetalnessTexture,
        roughnessMap: warningTexture.warningRoughnessTexture,
        metalness: 0.5,
        roughness: 0.5,
    });
    let warningGeometry = new THREE.PlaneGeometry(0.7, 0.7, 100, 100);

    for (let i = 0; i < 10; i++) {
        const warning = new THREE.Mesh(warningGeometry, warningMaterial);

        let z = houseSize.depth / 2 + 0.001 * i;
        let x = Math.random() * (houseSize.width - 0.7) + 0.35 - houseSize.width / 2;
        let y = Math.random() * (houseSize.height - 0.8) + 0.35;
        warning.rotation.z = Math.random() * Math.PI * 2;
        warning.position.set(x, y, z);
        house.add(warning);
    }

    for (let i = 0; i < 10; i++) {
        const warning = new THREE.Mesh(warningGeometry, warningMaterial);

        let z = Math.random() * (houseSize.depth - 0.8) + 0.4 - houseSize.depth / 2;
        let x = -houseSize.width / 2 + 0.001 * i;
        let y = Math.random() * (houseSize.height - 0.8) + 0.35;
        warning.rotation.z = Math.random() * Math.PI * 2;
        warning.rotation.y = -Math.PI * 0.5;
        warning.position.set(x, y, z);
        house.add(warning);
    }

    for (let i = 0; i < 10; i++) {
        const warning = new THREE.Mesh(warningGeometry, warningMaterial);

        let z = -houseSize.depth / 2 + 0.001 * i;
        let x = Math.random() * (houseSize.width - 0.7) + 0.35 - houseSize.width / 2;
        let y = Math.random() * (houseSize.height - 0.8) + 0.35;
        warning.rotation.z = Math.random() * Math.PI * 2;
        warning.rotation.y = -Math.PI;
        warning.position.set(x, y, z);
        house.add(warning);
    }

    for (let i = 0; i < 10; i++) {
        const warning = new THREE.Mesh(warningGeometry, warningMaterial);

        let z = Math.random() * (houseSize.depth - 0.8) + 0.4 - houseSize.depth / 2;
        let x = houseSize.width / 2 + 0.001 * i;
        let y = Math.random() * (houseSize.height - 0.8) + 0.35;
        warning.rotation.z = Math.random() * Math.PI * 2;
        warning.rotation.y = Math.PI * 0.5;
        warning.position.set(x, y, z);
        house.add(warning);
    }
};

export default addWarning;
