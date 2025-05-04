import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
let canvas=document.querySelector('#mycanvas');

let scene=new THREE.Scene();

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
let material=new THREE.MeshBasicMaterial({color:"red"});
let shape=new THREE.Mesh(geometry,material);
shape.position.x=4;
scene.add(shape);


let size={width:1200,height:800}
let camera=new THREE.PerspectiveCamera(80,size.width/size.height);
 camera.position.set(2,1,2);
camera.lookAt(shape.position);
scene.add(camera);
const controls = new OrbitControls( camera, canvas );



let renderer=new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(size.width,size.height);



let func=()=>{
 
    window.requestAnimationFrame(func);

    //console.log('hi');
    renderer.render(scene,camera);
    controls.update();
    
}

func();



