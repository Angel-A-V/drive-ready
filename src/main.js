import * as THREE from 'three'

// The Scene holds everything in the 3D world — objects, lights, etc. Empty for now.
const scene = new THREE.Scene()

// The Camera defines the viewpoint. Params: field of view (degrees), aspect ratio, near clip, far clip
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5; // TODO(you): pick a number greater than 0 — how far back should the camera sit from the origin (0,0,0)?

// The Renderer draws the scene through the camera, onto a <canvas> element
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// This append adds the render to browers DOM tree (whatever that means?)
document.body.appendChild(renderer.domElement) // Not sure what this line does, my assumption is it's something realted to the DOM's understanding of this code

// Geometry defines the object's shape — a BoxGeometry needs width, height, depth
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Material defines how the surface looks. MeshBasicMaterial ignores lighting entirely — good for now, since the scene has no lights yet
const material = new THREE.MeshBasicMaterial({color: 0xFFC5D3}) // TODO(you): pick a real hex color, e.g. 0xff0000 for red

// Mesh combines a geometry + a material into one object Three.js can actually draw
const cube = new THREE.Mesh(geometry, material)
// TODO(you): add cube to the scene, the same way renderer.domElement got added to the page aboved
scene.add( cube )

renderer.render(scene, camera)