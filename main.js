import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';

// Import all the object creation functions
import { createTorus } from './bgobjects/Torus.js';
import { createIcosahedron } from './bgobjects/Icosahedron.js';
import { createSphere } from './bgobjects/Sphere.js';
import { createKleinBottle } from './bgobjects/KleinBottle.js';
import { createDodecahedron } from './bgobjects/Dodecahedron.js';

// --- Scene, Camera, and Renderer Setup (same as before) ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// --- Lighting (same as before) ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// --- Möbius Strip and Texture (same as before) ---
const content = document.getElementById('website-content');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = content.scrollHeight;

function renderContentToCanvas() {
    const html_as_string = new XMLSerializer().serializeToString(content);
    const data = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">` +
        '<foreignObject width="100%" height="100%">' +
        html_as_string +
        '</foreignObject>' +
        '</svg>';
    const img = new Image();
    const svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        mobiusTexture.needsUpdate = true;
    };
    img.src = url;
}

const mobiusTexture = new THREE.CanvasTexture(canvas);
renderContentToCanvas();

const mobiusFunction = (u, v, target) => {
    u *= Math.PI;
    v *= 2 * Math.PI;
    const x = (1 + 0.5 * v * Math.cos(u / 2)) * Math.cos(u);
    const y = (1 + 0.5 * v * Math.cos(u / 2)) * Math.sin(u);
    const z = 0.5 * v * Math.sin(u / 2);
    target.set(x, y, z).multiplyScalar(15);
};
const mobiusGeometry = new ParametricGeometry(mobiusFunction, 250, 50);
const mobiusMaterial = new THREE.MeshStandardMaterial({ map: mobiusTexture, side: THREE.DoubleSide, metalness: 0.2, roughness: 0.8 });
const mobiusStrip = new THREE.Mesh(mobiusGeometry, mobiusMaterial);
scene.add(mobiusStrip);


// --- NEW: Dynamic Background Object Population ---
const backgroundObjects = [];
const objectCreators = [
    createTorus,
    createIcosahedron,
    createSphere,
    createKleinBottle,
    createDodecahedron
];
const NUM_OBJECTS = 25;

for (let i = 0; i < NUM_OBJECTS; i++) {
    // Pick a random object creator function
    const createObject = objectCreators[Math.floor(Math.random() * objectCreators.length)];
    const object = createObject();

    // Generate random positions
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(150));
    
    // Ensure objects are not too close to the strip's center
    const distance = Math.sqrt(x*x + y*y + z*z);
    if(distance < 50) {
        // Simple way to push it further out if too close
        const scale = 50 / distance;
        object.position.set(x * scale, y * scale, z * scale);
    } else {
        object.position.set(x, y, z);
    }
    
    // Generate random rotations
    object.rotation.set(
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI
    );

    // Give each object a random rotational speed for animation
    object.userData.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
    };

    backgroundObjects.push(object);
    scene.add(object);
}


// --- Scroll and Camera Animation (same as before) ---
const path = new THREE.CatmullRomCurve3(
    new ParametricGeometry(mobiusFunction, 250, 1).attributes.position.array.map((_, i, arr) =>
        i % 3 === 0 ? new THREE.Vector3(arr[i], arr[i + 1], arr[i + 2]) : null
    ).filter(v => v)
);

function updateCamera() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = window.scrollY / scrollableHeight;

    const pathPoint = path.getPointAt(scrollPercent);
    const lookAtPoint = path.getPointAt((scrollPercent + 0.01) % 1);

    // Position the camera slightly "above" the strip's surface
    const tangent = path.getTangentAt(scrollPercent).normalize();
    const up = new THREE.Vector3(0, 0, 1); // A general 'up' direction
    const binormal = new THREE.Vector3().crossVectors(tangent, up).normalize();
    const cameraOffset = binormal.multiplyScalar(5); // Adjust this value to move camera further/closer

    camera.position.copy(pathPoint).add(cameraOffset);
    camera.lookAt(lookAtPoint);
}


// --- Animation Loop (Updated for background objects) ---
function animate() {
    requestAnimationFrame(animate);

    // Animate all background objects
    backgroundObjects.forEach(obj => {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
    });

    updateCamera();
    renderer.render(scene, camera);
}

// --- Window Resize and Scroll Setup (same as before) ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add a dummy div to create scrollbar - needs to be tall enough!
const scrollDiv = document.createElement('div');
scrollDiv.style.height = '500vh'; // Increased height for a longer scroll journey
document.body.appendChild(scrollDiv);

// Initial call
animate();