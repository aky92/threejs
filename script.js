

let canvas=document.querySelector('#mycanvas');

let scene=new THREE.Scene();

// let geometry=new THREE.BoxGeometry( 1, 1, 1 );
// let material=new THREE.MeshBasicMaterial({color:'red'});
// let shape=new THREE.Mesh(geometry,material);
// shape.position.set(2,-2,2);
// shape.rotation.x=50;
// scene.add(shape);


let group=new THREE.Group();
scene.add(group);

let box1=new THREE.Mesh(new THREE.BoxGeometry( 1, 3, 3 ),new THREE.MeshBasicMaterial({color:'red'}));
group.add(box1);
box1.position.x=-15;

let box2=new THREE.Mesh(new THREE.BoxGeometry( 6, 2, 2 ),new THREE.MeshBasicMaterial({color:'blue'}));
group.add(box2);






let size={width:1200,height:600}

let camera=new THREE.PerspectiveCamera(85,size.width/size.height);
camera.position.set(2,-2,4);
camera.lookAt(group.position);
scene.add(camera);

let renderer=new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(size.width,size.height);
renderer.render(scene,camera);

