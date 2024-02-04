import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

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
const fog = new THREE.Fog("#27446e", 1, 15);
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
        color: "#ad8f68",
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

door.geometry.setAttribute("uv2", new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2));
door.position.set(0, 1.5 / 2, houseSize.depth / 2 + 0.01);
house.add(door);

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
const graveMatearial = new THREE.MeshStandardMaterial({ color: "#939492" });
const graveGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.1);

for (let i = 0; i < 60; i++) {
    let grave = new THREE.Mesh(graveGeometry, graveMatearial);

    let angle = Math.random() * 2 * Math.PI;
    const radius = 3 + Math.random() * 6;
    let x = Math.sin(angle) * radius;
    let z = Math.cos(angle) * radius;

    grave.position.set(x, 0.3, z);

    const rotationAngle = Math.random() * 0.4 - 0.2;
    grave.rotation.z = rotationAngle;
    grave.rotation.y = rotationAngle;
    grave.rotation.x = rotationAngle;
    house.add(grave);
}

// Floor
const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ color: "#a9c388" }));
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;
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
renderer.setClearColor("#27446e");

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
