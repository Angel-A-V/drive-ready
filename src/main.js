import * as THREE from 'three'

// The Scene holds everything in the 3D world — objects, lights, etc. Empty for now.
const scene = new THREE.Scene()

// The Camera defines the viewpoint. Params: field of view (degrees), aspect ratio, near clip, far clip
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5; // TODO(you): pick a number greater than 0 — how far back should the camera sit from the origin (0,0,0)?

// The Renderer draws the scene through the camera, onto a <canvas> element
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement) // Not sure what this line does, my assumption is it's something realted to the DOM's understanding of this code

renderer.render(scene, camera)
