import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

import { doorTexture, panelTexture, graveTexture, grassTexture, warningTexture, roofTexture } from "./textures";

import addBushes from "./Objects/Bush";
import addGraves from "./Objects/Graves";
import addCrosses from "./Objects/Crosses";
import addFloor from "./Objects/Floor";
import addWarning from "./Objects/Warning";
import addRoof from "./Objects/Roof";
import addDoor from "./Objects/Door";
import addWalls from "./Objects/Walls";

import initAmbientLight from "./Lights/AmbientLight";
import initDirectionalLight from "./Lights/DirectionalLight";
import initDoorLight from "./Lights/DoorLight";
import initGhostLight from "./Lights/GhostLight";

import { houseSize } from "./Objects/House";

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
 * House
 */
const house = new THREE.Group();
scene.add(house);

/**
 * Add Objects to the house
 */

addWalls(house);
addWarning(house);
addRoof(house);
addDoor(house);
addBushes(house, gui);
addGraves(house);
addCrosses(house);
addFloor(house);

/**
 * Lights
 */
// Ambient light
const ambientLight = initAmbientLight(scene, gui);

// Directional light
const moonLight = initDirectionalLight(scene, gui);

//Door light
const doorLight = initDoorLight(scene, gui);

//Ghost Light
const ghostLights = initGhostLight(scene);

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
ghostLights.ghostLight1.castShadow = true;
ghostLights.ghostLight2.castShadow = true;
ghostLights.ghostLight3.castShadow = true;

moonLight.shadow.mapSize.width = 256;
moonLight.shadow.mapSize.height = 256;
moonLight.shadow.camera.far = 7;

doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;

ghostLights.ghostLight1.shadow.mapSize.width = 256;
ghostLights.ghostLight1.shadow.mapSize.height = 256;
ghostLights.ghostLight1.shadow.camera.far = 7;

ghostLights.ghostLight2.shadow.mapSize.width = 256;
ghostLights.ghostLight2.shadow.mapSize.height = 256;
ghostLights.ghostLight2.shadow.camera.far = 7;

ghostLights.ghostLight3.shadow.mapSize.width = 256;
ghostLights.ghostLight3.shadow.mapSize.height = 256;
ghostLights.ghostLight3.shadow.camera.far = 7;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    //Update ghosts
    const ghostAngle1 = elapsedTime * 0.25;
    ghostLights.ghostLight1.position.x = Math.cos(ghostAngle1) * (7 + Math.sin(elapsedTime * 0.7));
    ghostLights.ghostLight1.position.z = Math.sin(ghostAngle1) * (6 + Math.sin(elapsedTime * 0.5));
    ghostLights.ghostLight1.position.y = Math.cos(elapsedTime) + 1;

    const ghostAngle2 = -elapsedTime * 0.2;
    ghostLights.ghostLight2.position.x = Math.cos(ghostAngle2) * (4 + Math.sin(elapsedTime * 0.2));
    ghostLights.ghostLight2.position.z = Math.sin(ghostAngle2) * (6 + Math.sin(elapsedTime * 0.5));
    ghostLights.ghostLight2.position.y = Math.cos(elapsedTime) / 2 + 0.6;

    const ghostAngle3 = elapsedTime * 0.4;
    ghostLights.ghostLight3.position.x = Math.cos(ghostAngle3) * (7 + Math.sin(elapsedTime * 1.5));
    ghostLights.ghostLight3.position.z = Math.sin(ghostAngle3) * (6 + Math.cos(elapsedTime * 0.5));
    ghostLights.ghostLight3.position.y = Math.cos(elapsedTime) / 2 + 0.6;

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
