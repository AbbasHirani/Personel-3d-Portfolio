import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f15353ff');

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Object: Dodecahedron on a Box
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x0077ff, emissive: 0x072534 });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = 0;

// Attach dodecahedron to box
box.add(dodecahedron);

// Add box to scene
scene.add(box);

// Lighting
const light = new THREE.SpotLight(0xffffff, 1, 100);
light.position.set(1, 1, 1);
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
