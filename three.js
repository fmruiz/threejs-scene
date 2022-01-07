let camera;
let scene;
let render;
let geometry;
let material;
let mesh;

function init() {
  // THREE
  // parameters of camera(FOV, relation heigh and width, min distance, max distance)
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / innerHeight,
    1,
    1500
  );
  // camera position(x,y,z)
  camera.position.set(0, 0, 300);
  // scene mount
  scene = new THREE.Scene();
  // add camera to scene
  scene.add(camera);
  // geometry of scene
  geometry = new THREE.IcosahedronGeometry(100, 3);
  // material
  material = new THREE.MeshBasicMaterial({
    color: "red",
    wireframe: true,
    wireframeLineWidth: 4,
  });
  // create mesh
  mesh = new THREE.Mesh(geometry, material);
  // add mesh to scene
  scene.add(mesh);
  // render
  render = new THREE.WebGLRenderer();
  render.setClearColor("black", 1);
  render.setSize(window.innerWidth, window.innerHeight);
  // add to body render
  document.body.appendChild(render.domElement);
}

init();

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x = 0.002;
  mesh.rotation.y = 0.002;

  render.render(scene, camera)
}

animate();