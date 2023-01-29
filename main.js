function init(){
//scene
var scene = new THREE.Scene();

//camera
var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    1000,
);

camera.position.x=0;
camera.position.y=20;
camera.position.z=30;
camera.lookAt(new THREE.Vector3(0,0,0));

//ball geometry
var sphereGeo = new THREE.SphereGeometry(10,80,80);

//sphere material
var sphereMat = new THREE.PointsMaterial( {
        color: "rgb(255,255,255)",
        size: 0.25,
    });

//combine geo and material
var particleSytem = new THREE.Points(sphereGeo, sphereMat);
particleSytem.name='particlSystem';

//adding sphere to the scene
scene.add(particleSytem);


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor("rgb(20,20,20)");
//adding orbit controls
var controls = new THREE.OrbitControls(camera,renderer.domElement);


document.getElementById('webg1').appendChild(renderer.domElement);
update(camera,scene,renderer,controls);
}

function update(camera,scene,renderer,controls){

    controls.update();

    var particleSytem = scene.getObjectByName('particlSystem');
    particleSytem.rotation.y+=0.005;
    renderer.render(scene,camera);
    requestAnimationFrame(function(){
        update(camera,scene,renderer, controls);
    });
    }

init();