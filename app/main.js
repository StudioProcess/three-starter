const W = 1280;
const H = 720;

let renderer, scene, camera, controls;

main();


function main() {
  
  setup(); // set up scene
  
  loop(); // start game loop
    
}


function setup() {
  
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize( W, H );
  // renderer.setPixelRatio( window.devicePixelRatio );
  document.body.appendChild( renderer.domElement );

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, W / H, 0.1, 1000 );
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  camera.position.z = 2;
  
  let geo = new THREE.BoxGeometry( 1, 1, 1 );
  let mat = new THREE.MeshBasicMaterial({ color: 0x1e90ff, wireframe: true });
  let cube = new THREE.Mesh( geo, mat );
  scene.add( cube );

}


function loop(time) {
  
  requestAnimationFrame( loop );
  renderer.render( scene, camera );
  
};
