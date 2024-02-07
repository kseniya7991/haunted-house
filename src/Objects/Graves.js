import * as THREE from "three";
import { graveTexture } from "../textures";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export const graveMatearial = new THREE.MeshStandardMaterial({
    map: graveTexture.graveColorTexture,
    aoMap: graveTexture.graveAmbientOcclusionTexture,
    roughnessMap: graveTexture.graveRoughnessTexture,
    normalMap: graveTexture.graveNormalTexture,
});

const addGraves = (house) => {
    const graveGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.1);

    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/jetbrains_mono_bold.typeface.json", (font) => {
        for (let i = 0; i < 60; i++) {
            let grave = new THREE.Mesh(graveGeometry, graveMatearial);

            let angle = Math.random() * 2 * Math.PI;
            const radius = 3 + Math.random() * 6;
            let x = Math.sin(angle) * radius;
            let z = Math.cos(angle) * radius;

            grave.position.set(x, 0.3, z);

            grave.castShadow = true;

            const graveGroup = new THREE.Group();

            graveGroup.add(grave);

            const textGeometry = new TextGeometry(`unknown №${i}`, {
                font,
                size: 0.05,
                height: 0.01,
            });
            textGeometry.computeBoundingBox();
            textGeometry.center();

            const text = new THREE.Mesh(textGeometry, new THREE.MeshStandardMaterial({ color: "#ffffff" }));
            graveGroup.add(text);
            text.position.set(x, 0.5, z + 0.05);

            const rotationAngle = Math.random() * 0.4 - 0.2;
            grave.rotation.z = rotationAngle;
            grave.rotation.y = rotationAngle;

            text.rotation.z = rotationAngle;
            text.rotation.y = rotationAngle;

            house.add(graveGroup);
        }
    });
};

export default addGraves;
