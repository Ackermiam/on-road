import { Object3D } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class Coin {
  mesh: Object3D;
  loader: GLTFLoader;

  constructor() {
    this.loader = new GLTFLoader();
    this.mesh = new Object3D();

    this.tick();
  }

  tick() {
    this.animateCoin();

    requestAnimationFrame(() => {
      this.tick();
    })
  }

  async loadMesh() {
    const gltf = await this.loader.loadAsync("/on-road/models/coin/scene.gltf");
    this.mesh = gltf.scene;
    this.mesh.scale.set(2, 2, 2);
  }

  animateCoin() {
    this.mesh.rotateY( 0.02);
  }
}