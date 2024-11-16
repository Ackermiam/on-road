import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  DirectionalLight,
  AmbientLight
} from "three";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Obstacle } from "./obstacle.ts";

export class TestObstacle {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  meshs: any[];

  constructor(ref: HTMLElement) {
    this.meshs = [];
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    this.camera.position.set(1, 3, 10);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0, 0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new OrbitControls(this.camera, this.renderer.domElement)

    ref.appendChild(this.renderer.domElement);

    const directionalLight = new DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 10, 10).normalize();

    const ambient = new AmbientLight();
    ambient.intensity = 0.05;
    this.scene.add(ambient);

    const obstacle = new Obstacle();

    this.meshs.push(obstacle);

    this.scene.add(directionalLight);
    this.addChildren();
    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  addChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.scene.add(this.meshs[i].mesh);
    }
  }
}
