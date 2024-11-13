import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  DirectionalLight
} from "three";

import { Ground } from "./ground.ts";
import { StarShip } from "./vaisseau.ts";

export class Logic {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  meshs: any[];
  mouseXPos: number;

  constructor(ref: HTMLElement) {
    this.meshs = [];
    this.scene = new Scene();
    this.mouseXPos = 0;
    this.camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    this.camera.position.set(0, 5, -2);
    this.camera.lookAt(0, 5, 0);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0, 0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    ref.appendChild(this.renderer.domElement);

    const directionalLight = new DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 10, 10);

    const ground = new Ground();
    const starship = new StarShip(this.mouseXPos);

    this.meshs.push(ground);
    this.meshs.push(starship);

    this.scene.add(directionalLight);
    this.addChildren();
    //this.tickChildren();
    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);
    this.tickChildren();
    this.getMousePos();
    requestAnimationFrame(() => {
      this.tick();
    });
  }

  addChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.scene.add(this.meshs[i].mesh);
    }
  }

  tickChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      i === 1 ? this.meshs[i].tick(this.mouseXPos) : this.meshs[i].tick();
    }
  }

  getMousePos() {
    window.addEventListener("mousemove", (e) => {
      this.mouseXPos = e.clientX;
    })
  }
}
