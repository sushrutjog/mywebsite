import * as THREE from 'three';

export function createDodecahedron() {
    const geometry = new THREE.DodecahedronGeometry(7); // Another Platonic solid
    const material = new THREE.MeshStandardMaterial({ color: 0xee82ee, wireframe: true });
    const dodecahedron = new THREE.Mesh(geometry, material);
    return dodecahedron;
}