import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';

export function createKleinBottle() {
    const kleinBottleFunction = (u, v, target) => {
        u *= Math.PI;
        v *= 2 * Math.PI;
        u = u * 2;
        let x, y, z;
        if (u < Math.PI) {
            x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
            z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
        } else {
            x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
            z = -8 * Math.sin(u);
        }
        y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
        target.set(x, y, z).multiplyScalar(1.5); // Scaled down a bit
    };

    const geometry = new ParametricGeometry(kleinBottleFunction, 50, 50);
    const material = new THREE.MeshStandardMaterial({ color: 0xffd700, wireframe: true, side: THREE.DoubleSide });
    const kleinBottle = new THREE.Mesh(geometry, material);
    return kleinBottle;
}