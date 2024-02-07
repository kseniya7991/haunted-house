import * as THREE from "three";

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

//=====================================
//            Door Texture
//=====================================

const doorColorTexture = textureLoader.load("/textures/door2/color.jpg");
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
const doorAlphaTexture = textureLoader.load("/textures/door2/alpha.jpg");
const doorAmbientOcclusionTexture = textureLoader.load("/textures/door2/ambientOcclusion.jpg");
const doorHeightTexture = textureLoader.load("/textures/door2/height.png");
const doorMetalnessTexture = textureLoader.load("/textures/door2/metalness.jpg");
const doorRoughnessTexture = textureLoader.load("/textures/door2/roughness.jpg");
const doorNormalTexture = textureLoader.load("/textures/door2/normal.jpg");

export const doorTexture = {
    doorColorTexture,
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorHeightTexture,
    doorMetalnessTexture,
    doorRoughnessTexture,
    doorNormalTexture,
};

//=====================================
//            Panel Texture
//=====================================

const panelColorTexture = textureLoader.load("/textures/panels/color.jpg");
panelColorTexture.colorSpace = THREE.SRGBColorSpace;
const panelAmbientOcclusionTexture = textureLoader.load("/textures/sandstone/ambientOcclusion.jpg");
const panelRoughnessTexture = textureLoader.load("/textures/panels/roughness.jpg");
const panelNormalTexture = textureLoader.load("/textures/panels/normal.jpg");

export const panelTexture = {
    panelColorTexture,
    panelAmbientOcclusionTexture,
    panelRoughnessTexture,
    panelNormalTexture,
};

//=====================================
//            Grass Texture
//=====================================

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

export const grassTexture = {
    grassColorTexture,
    grassNormalTexture,
    grassRoughnessTexture,
    grassAmbientOcclusionTexture,
};

//=====================================
//            Grave Texture
//=====================================
const graveColorTexture = textureLoader.load("/textures/grave/color.jpg");
graveColorTexture.colorSpace = THREE.SRGBColorSpace;
const graveAmbientOcclusionTexture = textureLoader.load("/textures/grave/ambientOcclusion.jpg");
const graveRoughnessTexture = textureLoader.load("/textures/grave/roughness.jpg");
const graveNormalTexture = textureLoader.load("/textures/grave/normal.jpg");

export const graveTexture = {
    graveColorTexture,
    graveNormalTexture,
    graveRoughnessTexture,
    graveAmbientOcclusionTexture,
};

//=====================================
//            Roof Texture
//=====================================

const roofColorTexture = textureLoader.load("/textures/roof/color.jpg");
roofColorTexture.colorSpace = THREE.SRGBColorSpace;
const roofAmbientOcclusionTexture = textureLoader.load("/textures/roof/ambientOcclusion.jpg");
const roofHeightTexture = textureLoader.load("/textures/roof/height.png");
const roofRoughnessTexture = textureLoader.load("/textures/roof/roughness.jpg");
const roofNormalTexture = textureLoader.load("/textures/roof/normal.jpg");

roofColorTexture.rotation = Math.PI * 1.96;
roofHeightTexture.rotation = Math.PI * 1.96;
roofAmbientOcclusionTexture.rotation = Math.PI * 1.96;
roofRoughnessTexture.rotation = Math.PI * 1.96;
roofNormalTexture.rotation = Math.PI * 1.96;

roofColorTexture.repeat.set(6, 1);
roofAmbientOcclusionTexture.repeat.set(6, 1);
roofNormalTexture.repeat.set(6, 1);
roofRoughnessTexture.repeat.set(6, 1);
roofColorTexture.wrapS = THREE.RepeatWrapping;
roofColorTexture.wrapT = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapT = THREE.RepeatWrapping;
roofRoughnessTexture.wrapS = THREE.RepeatWrapping;
roofRoughnessTexture.wrapT = THREE.RepeatWrapping;
roofAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
roofAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;

export const roofTexture = {
    roofColorTexture,
    roofNormalTexture,
    roofHeightTexture,
    roofRoughnessTexture,
    roofAmbientOcclusionTexture,
};

//=====================================
//           Warning Texture
//=====================================

const warningColorTexture = textureLoader.load("/textures/warning/color.jpg");
warningColorTexture.colorSpace = THREE.SRGBColorSpace;
const warningAmbientOcclusionTexture = textureLoader.load("/textures/warning/ambientOcclusion.jpg");
const warningAlphaTexture = textureLoader.load("/textures/warning/opacity.jpg");
const warningHeightTexture = textureLoader.load("/textures/warning/height.png");
const warningRoughnessTexture = textureLoader.load("/textures/warning/roughness.jpg");
const warningMetalnessTexture = textureLoader.load("/textures/warning/metalness.jpg");
const warningNormalTexture = textureLoader.load("/textures/warning/normal.jpg");

export const warningTexture = {
    warningColorTexture,
    warningNormalTexture,
    warningHeightTexture,
    warningAlphaTexture,
    warningRoughnessTexture,
    warningMetalnessTexture,
    warningAmbientOcclusionTexture,
};

//=====================================
//           Bush Texture
//=====================================

const bushColorTexture = textureLoader.load("/textures/bush/color.jpg");
bushColorTexture.colorSpace = THREE.SRGBColorSpace;
const bushAmbientOcclusionTexture = textureLoader.load("/textures/bush/ambientOcclusion.jpg");
const bushHeightTexture = textureLoader.load("/textures/bush/height.png");
const bushRoughnessTexture = textureLoader.load("/textures/bush/roughness.jpg");
const bushNormalTexture = textureLoader.load("/textures/bush/normal.jpg");

bushColorTexture.repeat.set(3, 2);
bushAmbientOcclusionTexture.repeat.set(3, 2);
bushHeightTexture.repeat.set(3, 2);
bushRoughnessTexture.repeat.set(3, 2);
bushNormalTexture.repeat.set(3, 2);

bushColorTexture.wrapS = THREE.RepeatWrapping;
bushColorTexture.wrapT = THREE.RepeatWrapping;
bushAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
bushAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
bushHeightTexture.wrapS = THREE.RepeatWrapping;
bushHeightTexture.wrapT = THREE.RepeatWrapping;
bushRoughnessTexture.wrapS = THREE.RepeatWrapping;
bushRoughnessTexture.wrapT = THREE.RepeatWrapping;
bushNormalTexture.wrapS = THREE.RepeatWrapping;
bushNormalTexture.wrapT = THREE.RepeatWrapping;

export const bushTexture = {
    bushColorTexture,
    bushNormalTexture,
    bushHeightTexture,
    bushRoughnessTexture,
    bushAmbientOcclusionTexture,
};
