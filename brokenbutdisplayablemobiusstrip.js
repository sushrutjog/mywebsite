import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import html2canvas from 'html2canvas';

// --- !! FIX: ADDED THE MISSING IMPORT STATEMENTS !! ---
import { createTorus } from './bgobjects/Torus.js';
import { createIcosahedron } from './bgobjects/Icosahedron.js';
import { createSphere } from './bgobjects/Sphere.js';
import { createKleinBottle } from './bgobjects/KleinBottle.js';
import { createDodecahedron } from './bgobjects/Dodecahedron.js';

// --- Global variables ---
let scene, camera, renderer, path, backgroundObjects = [];

/**
 * The main initialization function.
 */
function init() {
    // --- Scene, Camera, and Renderer Setup ---
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ 
        canvas: document.querySelector('#bg'), 
        antialias: true,
        preserveDrawingBuffer: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 30;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // --- Möbius Strip ---
    const mobiusFunction = (u, v, target) => {
        u *= Math.PI;
        v *= 2 * Math.PI;
        const x = (1 + 0.5 * v * Math.cos(u / 2)) * Math.cos(u);
        const y = (1 + 0.5 * v * Math.cos(u / 2)) * Math.sin(u);
        const z = 0.5 * v * Math.sin(u / 2);
        target.set(x, y, z).multiplyScalar(15);
    };
    const mobiusGeometry = new ParametricGeometry(mobiusFunction, 250, 50);
    
    const mobiusMaterial = new THREE.MeshStandardMaterial({ 
        map: null, 
        side: THREE.DoubleSide, 
        metalness: 0.2, 
        roughness: 0.8 
    });
    const mobiusStrip = new THREE.Mesh(mobiusGeometry, mobiusMaterial);
    scene.add(mobiusStrip);

    // Asynchronously generate the texture and apply it when ready.
    renderContentToCanvas(mobiusStrip);

    // --- Camera Path Creation ---
    try {
        const points = [];
        const tempGeometry = new ParametricGeometry(mobiusFunction, 250, 1);
        const positionAttribute = tempGeometry.attributes.position;
        if (!positionAttribute || positionAttribute.count === 0) { throw new Error("Failed to get path points."); }
        for (let i = 0; i < positionAttribute.count; i++) {
            points.push(new THREE.Vector3().fromBufferAttribute(positionAttribute, i));
        }
        path = new THREE.CatmullRomCurve3(points);
        path.closed = true;
    } catch (error) {
        console.error("CRITICAL: Could not create camera path.", error);
        return; 
    }

    populateBackground();
    window.addEventListener('resize', onWindowResize);
    const scrollDiv = document.createElement('div');
    scrollDiv.style.height = '500vh';
    document.body.appendChild(scrollDiv);

    animate();
}

/**
 * Renders HTML content and applies it as a NEW texture to the provided object.
 */
function renderContentToCanvas(targetObject) {
    const content = document.getElementById('website-content');
    
    html2canvas(content, { 
        backgroundColor: '#f0f0f0',
    }).then(canvas => {
        console.log("html2canvas render successful.");
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;

        targetObject.material.map = texture;
        targetObject.material.needsUpdate = true;
        
        console.log("New texture created and applied successfully.");
    }).catch(error => {
        console.error("html2canvas failed:", error);
    });
}

/**
 * Creates and places all background objects.
 */
function populateBackground() {
    const objectCreators = [createTorus, createIcosahedron, createSphere, createKleinBottle, createDodecahedron];
    const NUM_OBJECTS = 25;
    for (let i = 0; i < NUM_OBJECTS; i++) {
        const createObject = objectCreators[Math.floor(Math.random() * objectCreators.length)];
        const object = createObject();
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(150));
        const distance = new THREE.Vector3(x, y, z).length();
        if(distance < 50) {
            object.position.set(x, y, z).normalize().multiplyScalar(50 + Math.random() * 50);
        } else {
            object.position.set(x, y, z);
        }
        object.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI);
        object.userData.rotationSpeed = { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01 };
        backgroundObjects.push(object);
        scene.add(object);
    }
}

/**
 * Handles window resize events.
 */
function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Updates the camera's position based on scroll.
 */
function updateCamera() {
    if (!path) return;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    const lookAhead = 0.001; 
    const pathPoint = path.getPointAt(scrollPercent);
    const lookAtPoint = path.getPointAt((scrollPercent + lookAhead) % 1);

    if (!pathPoint || !lookAtPoint) return;

    camera.position.copy(pathPoint);
    const tangent = path.getTangentAt(scrollPercent).normalize();
    const up = new THREE.Vector3(0, 0, 1);
    const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
    camera.position.addScaledVector(normal, 5);
    camera.lookAt(lookAtPoint);
}

/**
 * The main animation loop.
 */
function animate() {
    requestAnimationFrame(animate);
    backgroundObjects.forEach(obj => {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
    });
    updateCamera();
    renderer.render(scene, camera);
}

// --- Start the application ---
init();