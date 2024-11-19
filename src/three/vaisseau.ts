import { Object3D } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class StarShip {
  mesh: Object3D;
  loader: GLTFLoader;

  constructor() {
    this.loader = new GLTFLoader();
    this.mesh = new Object3D();
  }

  tick(xPos: number) {
    this.moveStarship(xPos);
  }

  moveStarship(xPos: number) {
    if(xPos === 0) {
      this.mesh.position.set(0.01, 0.1, 20)
    } else {
      const x = (xPos / window.innerWidth) * 2 - 1;
      this.mesh.position.set(- x * 8, 0.1, 20)
      this.mesh.rotation.y = x / 6
      this.mesh.rotation.z = - x / 5
    }
  }

  async loadMesh() {
    const gltf = await this.loader.loadAsync("/on-road/models/starship/scene.gltf");
    this.mesh = gltf.scene;
    this.mesh.scale.x = .2;
    this.mesh.scale.y = .2;
    this.mesh.scale.z = .2;
    this.mesh.position.y = 0;
  }
}