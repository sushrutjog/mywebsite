import * as THREE from 'three';

export function createSphere() {
    const geometry = new THREE.SphereGeometry(6, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x32cd32, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
}