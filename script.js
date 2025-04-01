
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let canvas=document.querySelector('#mycanvas');

//let scene=new THREE.Scene();

// let geometry=new THREE.BoxGeometry( 1, 1, 1 );
// let material=new THREE.MeshBasicMaterial({color:'red'});
// let shape=new THREE.Mesh(geometry,material);
// shape.position.set(2,-2,2);
// shape.rotation.x=50;
// scene.add(shape);


// let group=new THREE.Group();
// scene.add(group);

// let box1=new THREE.Mesh(new THREE.BoxGeometry( 1, 3, 3 ),new THREE.MeshBasicMaterial({color:'red'}));
// group.add(box1);
// box1.position.x=-15;

// let box2=new THREE.Mesh(new THREE.BoxGeometry( 6, 2, 2 ),new THREE.MeshBasicMaterial({color:'blue'}));
// group.add(box2);






// let size={width:1200,height:600}

// let camera=new THREE.PerspectiveCamera(85,size.width/size.height);
// camera.position.set(2,-2,4);
// camera.lookAt(group.position);
// scene.add(camera);

// let renderer=new THREE.WebGLRenderer({canvas:canvas});
// renderer.setSize(size.width,size.height);



// let myfunc=()=>{
//     window.requestAnimationFrame(myfunc);
//     //console.log('hi');
//     renderer.render(scene,camera);
// }

// myfunc();


let mycanvas=document.querySelector('#mycanvas');

let scene=new THREE.Scene();

let object=new THREE.Group();
scene.add(object);

let shape1=new THREE.Mesh(new THREE.BoxGeometry( 1, 3, 3 ),new THREE.MeshBasicMaterial({color:'red'}))

let shape2=new THREE.Mesh(new THREE.BoxGeometry( 2, -3, 1 ),new THREE.MeshBasicMaterial({color:'blue'}))

object.add(shape1);
shape1.position.x=-1;

object.add(shape2);
shape2.position.x=-2;


let size={
    width:1200,height:400
}
let camera= new THREE.PerspectiveCamera( 70, size.width / size.height);
camera.position.set(2,1,2);
camera.lookAt(object.position);
scene.add(camera);





let renderer=new THREE.WebGLRenderer({canvas:mycanvas});
renderer.setSize(size.width,size.height);


const controls = new OrbitControls( camera, mycanvas );
controls.update();


let animation=()=>{
    window.requestAnimationFrame(animation);
    //console.log("lkdsf");
    renderer.render(scene,camera);
}

animation();