import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  DirectionalLight,
  AmbientLight,
  Box3
} from "three";

import { Ground } from "./ground.ts";
import { StarShip } from "./vaisseau.ts";

export class Logic {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  meshs: any[];
  vaisseau: any[];
  mouseXPos: number;
  obstacleCollisions: boolean[] = [];
  life: number;

  constructor(ref: HTMLElement) {
    this.meshs = [];
    this.vaisseau = [];
    this.scene = new Scene();
    this.mouseXPos = 0;
    this.life = 10;
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
      this.vaisseau.push(starship);
      this.addChildren();
      this.setView();
      this.registerEventListeners();
      this.tick();
    }

    loadStarship();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);
    this.tickChildren();
    this.isIntersect();

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  addChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.scene.add(this.meshs[i].mesh);
    }
    this.scene.add(this.vaisseau[0].mesh);
  }

  tickChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.meshs[i].tick(this.mouseXPos);
    }
    this.vaisseau[0].tick(this.mouseXPos)
  }

  setView() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  isIntersect() {
    if (!this.vaisseau.length || !this.meshs.length) return;

    const vaisseauBox = this.vaisseau[0].boundingBox;

    vaisseauBox.setFromObject(this.vaisseau[0].mesh);

    const ground = this.meshs.find((mesh) => mesh instanceof Ground) as Ground;
    if (!ground) return;

    for (let i = 0; i < ground.obstacles.length; i++) {
      const { boundingBox } = ground.obstacles[i];
      const isColliding = vaisseauBox.intersectsBox(boundingBox);

      if (isColliding && !this.obstacleCollisions[i]) {
        this.obstacleCollisions[i] = true;
        this.life -= 1;
        const event = new CustomEvent('collision', {
          detail: this.life
        })
        window.dispatchEvent(event);
      }

      if (!isColliding && this.obstacleCollisions[i]) {
        this.obstacleCollisions[i] = false;
      }
    }
  }

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("mousemove", (e) => {
      this.mouseXPos = e.clientX;
    })
    window.addEventListener('touchmove', (e) => {
      this.mouseXPos = e.touches[0].clientX
    })
  }
}
