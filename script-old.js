const canvas=document.querySelector('#mycanvas');

let scene=new THREE.Scene();


let material = new THREE.MeshBasicMaterial({color:0xff0000});
let geometry = new THREE.BoxGeometry(1, 1, 1); 
//let geometry = new THREE.BoxGeometry(1, 1, 1);


//let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

let shape = new THREE.Mesh(geometry,material);
//let shape = new THREE.Mesh(geometry, material);








scene.add(shape);


scene.add(shape);

let size={width:1200,height:300};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

