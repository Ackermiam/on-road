import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  DirectionalLight,
  AmbientLight
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
    this.camera.position.set(0, 5, -3);
    this.camera.lookAt(0, 5, 0);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    const resizeCanvas = window.devicePixelRatio > 1;
    this.renderer.setSize(window.innerWidth, window.innerHeight, resizeCanvas)

    ref.appendChild(this.renderer.domElement);

    const directionalLight = new DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 5, 10);
    this.scene.add(directionalLight);

    const ambient = new AmbientLight();
    ambient.intensity = 0.01;
    this.scene.add(ambient);

    const ground = new Ground();
    this.meshs.push(ground);

    const starship = new StarShip();

    const loadStarship = async () => {
      await starship.loadMesh()
      this.meshs.push(starship);
      this.addChildren();
    }
    loadStarship();
    this.setView();

    this.registerEventListeners();
    this.getMousePos();
    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);
    this.tickChildren();
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
    window.addEventListener('touchmove', (e) => {
      this.mouseXPos = e.touches[0].clientX
    })
  }

  setView() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
  }
}
