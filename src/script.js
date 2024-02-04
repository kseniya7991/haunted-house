import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//Fog
const fog = new THREE.Fog("#132641", 1, 16);
scene.fog = fog;

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load("/textures/door/color.jpg");
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
const doorAlphaTexture = textureLoader.load("/textures/door/alpha.jpg");
const doorAmbientOcclusionTexture = textureLoader.load("/textures/door/ambientOcclusion.jpg");
const doorHeightTexture = textureLoader.load("/textures/door/height.jpg");
const doorMetalnessTexture = textureLoader.load("/textures/door/metalness.jpg");
const doorRoughnessTexture = textureLoader.load("/textures/door/roughness.jpg");
const doorNormalTexture = textureLoader.load("/textures/door/normal.jpg");

const sandstoneColorTexture = textureLoader.load("/textures/sandstone/color.jpg");
sandstoneColorTexture.colorSpace = THREE.SRGBColorSpace;
const sandstoneAmbientOcclusionTexture = textureLoader.load("/textures/sandstone/ambientOcclusion.jpg");
const sandstoneRoughnessTexture = textureLoader.load("/textures/sandstone/roughness.jpg");
const sandstoneNormalTexture = textureLoader.load("/textures/sandstone/normal.jpg");

sandstoneColorTexture.repeat.set(2, 1.2);
sandstoneAmbientOcclusionTexture.repeat.set(2, 1.2);
sandstoneNormalTexture.repeat.set(2, 1.2);
sandstoneRoughnessTexture.repeat.set(2, 1.2);

sandstoneColorTexture.wrapS = THREE.RepeatWrapping;
sandstoneColorTexture.wrapT = THREE.RepeatWrapping;
sandstoneNormalTexture.wrapS = THREE.RepeatWrapping;
sandstoneNormalTexture.wrapT = THREE.RepeatWrapping;
sandstoneRoughnessTexture.wrapS = THREE.RepeatWrapping;
sandstoneRoughnessTexture.wrapT = THREE.RepeatWrapping;
sandstoneAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
sandstoneAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;

const grassColorTexture = textureLoader.load("/textures/grass2/color.jpg");
grassColorTexture.colorSpace = THREE.SRGBColorSpace;
const grassAmbientOcclusionTexture = textureLoader.load("/textures/grass2/ambientOcclusion.jpg");
const grassRoughnessTexture = textureLoader.load("/textures/grass2/roughness.jpg");
const grassNormalTexture = textureLoader.load("/textures/grass2/normal.jpg");

grassColorTexture.repeat.set(12, 12);
grassAmbientOcclusionTexture.repeat.set(12, 12);
grassNormalTexture.repeat.set(12, 12);
grassRoughnessTexture.repeat.set(12, 12);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassColorTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;

const graveColorTexture = textureLoader.load("/textures/grave/color.jpg");
graveColorTexture.colorSpace = THREE.SRGBColorSpace;
const graveAmbientOcclusionTexture = textureLoader.load("/textures/grave/ambientOcclusion.jpg");
const graveRoughnessTexture = textureLoader.load("/textures/grave/roughness.jpg");
const graveNormalTexture = textureLoader.load("/textures/grave/normal.jpg");

const windowColorTexture = textureLoader.load("/textures/window/color.jpg");
windowColorTexture.colorSpace = THREE.SRGBColorSpace;
const windowAlphaTexture = textureLoader.load("/textures/window/alpha.jpg");
const windowAmbientOcclusionTexture = textureLoader.load("/textures/window/ambientOcclusion.jpg");
const windowHeightTexture = textureLoader.load("/textures/window/height.jpg");
const windowMetalnessTexture = textureLoader.load("/textures/window/metalness.jpg");
const windowRoughnessTexture = textureLoader.load("/textures/window/roughness.jpg");
const windowNormalTexture = textureLoader.load("/textures/window/normal.jpg");
const windowBackground = textureLoader.load("/textures/window/windowBg.jpg");


/**
 * House
 */
const house = new THREE.Group();
scene.add(house);

//Walls
const houseSize = {
    width: 4,
    height: 2,
    depth: 4,
};
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(houseSize.width, houseSize.height, houseSize.depth),
    new THREE.MeshStandardMaterial({
        map: sandstoneColorTexture,
        aoMap: sandstoneAmbientOcclusionTexture,
        normalMap: sandstoneNormalTexture,
        roughnessMap: sandstoneRoughnessTexture,
    })
);
walls.position.set(0, houseSize.height / 2, 0);
house.add(walls);

//Roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3, 1.5, 4),
    new THREE.MeshStandardMaterial({
        color: "#706556",
    })
);
roof.position.set(0, 2.7, 0);
roof.rotation.y = Math.PI * 0.25;
house.add(roof);

//Door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.1,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture,
    })
);

door.position.set(0, 1.5 / 2, houseSize.depth / 2);
house.add(door);

//Window
const wallWindow = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: windowColorTexture,
        transparent: true,
        alphaMap: windowAlphaTexture,
        aoMap: windowAmbientOcclusionTexture,
        displacementMap: windowHeightTexture,
        displacementScale: 0.1,
        normalMap: windowNormalTexture,
        metalnessMap: windowMetalnessTexture,
        roughnessMap: windowRoughnessTexture,
    })
);

const windowBg = new THREE.Mesh(
    new THREE.PlaneGeometry(1.8, 1.2),
    new THREE.MeshStandardMaterial({
        map: windowBackground,
        transparent: true,
    })
);

windowBg.position.z = 0.01;
wallWindow.position.z = 0.02;
const windowGroup = new THREE.Group();
scene.add(windowGroup);

windowGroup.add(wallWindow, windowBg);

windowGroup.position.set(houseSize.width / 2 + 0.01, 1, houseSize.depth / 2 - 2);
windowGroup.rotation.y = Math.PI * 0.5;
windowGroup.scale.set(0.5, 0.5, 0.5);

//Bushes
const bushes = new THREE.Group();
house.add(bushes);

const bushGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const bushMaterail = new THREE.MeshStandardMaterial({ color: "#37a616" });

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

bushes.add(bush1, bush2, bush3, bush4, bush5);

//Graves
const graveMatearial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveAmbientOcclusionTexture,
    roughnessMap: graveRoughnessTexture,
    normalMap: graveNormalTexture,
});
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

//Crosses

const crossGeometry1 = new THREE.BoxGeometry(0.1, 1, 0.05);
const crossGeometry2 = new THREE.BoxGeometry(0.4, 0.1, 0.05);

for (let i = 0; i < 30; i++) {
    const cross = new THREE.Group();

    const cross1 = new THREE.Mesh(crossGeometry1, graveMatearial);
    const cross2 = new THREE.Mesh(crossGeometry2, graveMatearial);
    cross2.position.y = 0.3;
    cross2.position.z = 0.001;

    let angle = Math.random() * 2 * Math.PI;
    const radius = 3 + Math.random() * 6;
    let x = Math.sin(angle) * radius;
    let z = Math.cos(angle) * radius;
    let y = Math.random() * 0.2 + 0.1;
    
    cross.position.set(x,  y, z);

    const rotationAngle = Math.random() * 0.4 - 0.2;
    cross.rotation.z = rotationAngle;
    cross.rotation.y = rotationAngle;
    cross.rotation.x = rotationAngle;


    cross.add(cross1, cross2);

    cross1.castShadow = true;
    cross2.castShadow = true;

    house.add(cross);
}

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ map: grassColorTexture })
);
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;

floor.receiveShadow = true;
scene.add(floor);

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.1);
gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
scene.add(ambientLight);

// Directional light
const moonLight = new THREE.DirectionalLight("#b9d5ff", 0.26);
moonLight.position.set(4, 5, -2);
gui.add(moonLight, "intensity").min(0).max(1).step(0.001);
gui.add(moonLight.position, "x").min(-5).max(5).step(0.001);
gui.add(moonLight.position, "y").min(-5).max(5).step(0.001);
gui.add(moonLight.position, "z").min(-5).max(5).step(0.001);
scene.add(moonLight);

//Door light
const doorLight = new THREE.PointLight("#ff7d46", 10, 10);
doorLight.position.set(0, houseSize.height - 0.4, houseSize.depth / 2 + 1);

let doorLightHelper = new THREE.PointLightHelper(doorLight);
doorLightHelper.visible = false;
scene.add(doorLightHelper);
scene.add(doorLight);

//Ghost Light
const ghostLight1 = new THREE.PointLight("#36ebf5", 8, 6);
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

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor("#132641");

/**
 * Shadows
 */
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

moonLight.castShadow = true;
doorLight.castShadow = true;
ghostLight1.castShadow = true;
ghostLight2.castShadow = true;
ghostLight3.castShadow = true;

moonLight.shadow.mapSize.width = 256;
moonLight.shadow.mapSize.height = 256;
moonLight.shadow.camera.far = 7;

doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;

ghostLight1.shadow.mapSize.width = 256;
ghostLight1.shadow.mapSize.height = 256;
ghostLight1.shadow.camera.far = 7;

ghostLight2.shadow.mapSize.width = 256;
ghostLight2.shadow.mapSize.height = 256;
ghostLight2.shadow.camera.far = 7;

ghostLight3.shadow.mapSize.width = 256;
ghostLight3.shadow.mapSize.height = 256;
ghostLight3.shadow.camera.far = 7;

walls.castShadow = true;
bush1.castShadow = true;
bush2.castShadow = true;
bush3.castShadow = true;
bush4.castShadow = true;
bush5.castShadow = true;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    //Update ghosts
    const ghostAngle1 = elapsedTime * 0.25;
    ghostLight1.position.x = Math.cos(ghostAngle1) * (7 + Math.sin(elapsedTime * 0.7));
    ghostLight1.position.z = Math.sin(ghostAngle1) * (6 + Math.sin(elapsedTime * 0.5));
    ghostLight1.position.y = Math.cos(elapsedTime) + 1;

    const ghostAngle2 = -elapsedTime * 0.2;
    ghostLight2.position.x = Math.cos(ghostAngle2) * (4 + Math.sin(elapsedTime * 0.2));
    ghostLight2.position.z = Math.sin(ghostAngle2) * (6 + Math.sin(elapsedTime * 0.5));
    ghostLight2.position.y = Math.cos(elapsedTime) / 2 + 0.6;

    const ghostAngle3 = elapsedTime * 0.4;
    ghostLight3.position.x = Math.cos(ghostAngle3) * (7 + Math.sin(elapsedTime * 1.5));
    ghostLight3.position.z = Math.sin(ghostAngle3) * (6 + Math.cos(elapsedTime * 0.5));
    ghostLight3.position.y = Math.cos(elapsedTime) / 2 + 0.6;

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
