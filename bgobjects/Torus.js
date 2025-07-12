import * as THREE from 'three';

export function createTorus() {
    const geometry = new THREE.TorusGeometry(5, 1.5, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    return torus;
}