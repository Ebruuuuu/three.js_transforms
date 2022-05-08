import './style.css'

import * as THREE from 'three'
import { AxesHelper, Mesh } from 'three'

//SCENE
const scene = new THREE.Scene()

//GROUP CUBE

//OBJECT

const groupCube = new THREE.Group()

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube1.position.x = 2
groupCube.add(cube1)

scene.add(groupCube)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'yellow' })
)
cube2.position.x = -2

groupCube.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'purple' })
)

groupCube.add(cube3)

groupCube.position.x = 0.5
groupCube.position.z = -1
groupCube.scale.x = 2
groupCube.rotation.y = 0.6

//axesHelper colorizes lines of the axes.
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// console.log(mesh.position.length()) // 2.449489742783178

// console.log(mesh.position.distanceTo(new THREE.Vector3(1, 2, 5))) // 4

// Convert this vector to a unit vector(its lenght is 1 unit)

// mesh.position.normalize()
// console.log(mesh.position.length()) // x=1, y=1, z=1

//sizes object
const sizes = {
  width: 1060,
  height: 800,
}
//CAMERA

//vertical vision angle:75 degrees = 1st parameter
//the aspect ratio = sizes.width / sizes.height = 2nd parameter
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.x = -1
camera.position.z = 7

scene.add(camera)

// camera.lookAt(new THREE.Vector3(1, 1, -15))
// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position)) //2.449489742783178

//RENDERER

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  /*if the object is equal to its property,
    we only use the object */
  canvas, // canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
