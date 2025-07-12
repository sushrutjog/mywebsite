import * as THREE from 'three';
import html2canvas from 'html2canvas';

// Import object creators
import { createTorus } from './bgobjects/Torus.js';
import { createIcosahedron } from './bgobjects/Icosahedron.js';
import { createSphere } from './bgobjects/Sphere.js';
import { createKleinBottle } from './bgobjects/KleinBottle.js';
import { createDodecahedron } from './bgobjects/Dodecahedron.js';

// --- Global variables ---
let scene, camera, renderer, backgroundObjects = [];
let webpagePlane, planeHeight; // We'll store our paper strip and its final height here

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
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // --- Simple Paper Strip ---
    // We create a placeholder plane. It starts as a square.
    // We will scale it to the correct aspect ratio once the texture is ready.
    const planeWidth = 30; // The width of our paper strip in the 3D scene
    const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeWidth); 
    const planeMaterial = new THREE.MeshStandardMaterial({ 
        map: null, 
        side: THREE.DoubleSide,
        transparent: true // Good practice for textures
    });
    webpagePlane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(webpagePlane);

    // Asynchronously generate the texture and apply it to our plane.
    renderContentToCanvas(webpagePlane);
    
    // Set an initial camera position. We start looking at the top of where the plane will be.
    camera.position.set(0, 0, 25);
    camera.lookAt(0, 0, 0);

    // The background objects remain the same
    populateBackground();
    window.addEventListener('resize', onWindowResize);
    const scrollDiv = document.createElement('div');
    scrollDiv.style.height = '500vh';
    document.body.appendChild(scrollDiv);

    animate();
}

/**
 * Renders HTML content and applies it as a texture to the paper strip.
 */
function renderContentToCanvas(targetObject) {
    const content = document.getElementById('website-content');
    
    html2canvas(content, { 
        backgroundColor: '#f0f0f0',
    }).then(canvas => {
        console.log("html2canvas render successful.");
        
        // Create a new texture from the final canvas
        const texture = new THREE.CanvasTexture(canvas);
        const aspectRatio = canvas.height / canvas.width;
        
        // Apply the new texture to the material
        targetObject.material.map = texture;
        
        // This is the key: we scale the plane's Y-axis to match the content's aspect ratio
        targetObject.scale.y = aspectRatio;
        
        targetObject.material.needsUpdate = true;
        
        // Store the final calculated height. This is crucial for the camera scrolling.
        planeHeight = targetObject.geometry.parameters.height * aspectRatio;
        
        // Set the initial camera Y position to the top of the scaled plane
        camera.position.y = planeHeight / 2;

        console.log("New texture created and applied. Calculated plane height:", planeHeight);
    }).catch(error => {
        console.error("html2canvas failed:", error);
    });
}

/**
 * Creates and places all background objects. (This function remains unchanged)
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
 * Updates the camera's position for a simple vertical scroll.
 */
function updateCamera() {
    // Wait until the planeHeight has been calculated and set.
    if (!planeHeight) return;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    
    // The camera's Y position moves from the top of the plane to the bottom.
    // Top of the plane is at y = planeHeight / 2.
    const startY = planeHeight / 2;
    
    // As we scroll, move the camera down by the percentage of the total plane height.
    camera.position.y = startY - (scrollPercent * planeHeight);
}

/**
 * The main animation loop.
 */
function animate() {
    requestAnimationFrame(animate);

    // Animate background objects
    backgroundObjects.forEach(obj => {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
    });

    updateCamera();

    renderer.render(scene, camera);
}

// --- Start the application ---
init();