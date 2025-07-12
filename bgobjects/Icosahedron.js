import * as THREE from 'three';

export function createIcosahedron() {
    const geometry = new THREE.IcosahedronGeometry(7); // A Platonic solid
    const material = new THREE.MeshStandardMaterial({ color: 0x1e90ff, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry, material);
    return icosahedron;
}