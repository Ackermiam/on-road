import { Object3D, Box3 } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class StarShip {
  mesh: Object3D;
  loader: GLTFLoader;
  boundingBox: Box3;

  constructor() {
    this.loader = new GLTFLoader();
    this.mesh = new Object3D();
    this.boundingBox = new Box3();
  }

  tick(xPos: number) {
    this.moveStarship(xPos);
    this.updateBoundingBox();
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

  updateBoundingBox() {
    this.boundingBox.setFromObject(this.mesh);
  }

  async loadMesh() {
    const gltf = await this.loader.loadAsync("/on-road/models/starship/scene.gltf");
    this.mesh = gltf.scene;
    this.mesh.scale.set(0.2, 0.2, 0.2);
    this.mesh.position.y = 0;
    this.updateBoundingBox();
  }
}