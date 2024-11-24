import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  DirectionalLight,
  AmbientLight,
  MeshPhongMaterial,
  Mesh,
} from "three";

import { FontLoader, Font } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

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
  coins: number;
  textMesh: Mesh;
  font: Font;

  constructor(ref: HTMLElement) {
    this.textMesh = new Mesh();
    this.meshs = [];
    this.vaisseau = [];
    this.scene = new Scene();
    this.mouseXPos = 0;
    this.life = 10;
    this.coins = 0;
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
    this.renderer.setSize(window.innerWidth, window.innerHeight, resizeCanvas);

    ref.appendChild(this.renderer.domElement);

    const directionalLight = new DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 5, 10);
    this.scene.add(directionalLight);

    const directionalLightTwo = new DirectionalLight(0xffffff, 2);
    directionalLightTwo.position.set(0, 5, -3);
    this.scene.add(directionalLightTwo);

    const ambient = new AmbientLight();
    ambient.intensity = 0.01;
    this.scene.add(ambient);

    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (loadedFont) => {
        this.font = loadedFont;
        this.updateText();
      }
    );

    const ground = new Ground();
    this.meshs.push(ground);

    const eventLoading = new CustomEvent("loading", {
      detail: false,
    });

    const starship = new StarShip();

    const loadStarship = async () => {
      await starship.loadMesh();
      this.vaisseau.push(starship);
      this.addChildren();
      this.setView();
      this.registerEventListeners();
      window.dispatchEvent(eventLoading);
      this.tick();
    };

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
      this.meshs[i].tick();
    }
    this.vaisseau[0].tick(this.mouseXPos);
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

    const ground = this.meshs.find((mesh) => mesh instanceof Ground);

    if (!ground) return;

    for (let i = 0; i < ground.obstacles.length; i++) {
      const { boundingBox, typeOfObs } = ground.obstacles[i];
      const isColliding = vaisseauBox.intersectsBox(boundingBox);

      if (
        isColliding &&
        !this.obstacleCollisions[i] &&
        typeOfObs === "obstacle"
      ) {
        this.obstacleCollisions[i] = true;
        this.life -= 1;
        const event = new CustomEvent("collision", {
          detail: this.life,
        });
        window.dispatchEvent(event);
      }

      if (
        isColliding &&
        !this.obstacleCollisions[i] &&
        typeOfObs === "bonus" &&
        this.life > 0
      ) {
        this.obstacleCollisions[i] = true;
        this.coins += 1;
        ground.obstacles[i].obstacle.mesh.position.set(
          Math.random() * 8 - 3,
          0.5,
          234
        );
        this.updateText();
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
    });
    window.addEventListener("touchmove", (e) => {
      this.mouseXPos = e.touches[0].clientX;
    });
  }

  updateText() {
    if (this.textMesh) {
      this.scene.remove(this.textMesh);
    }

    const textGeometry = new TextGeometry(`${this.coins}$`, {
      font: this.font,
      size: 1.5,
      depth: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelSegments: 5,
    });

    const textMaterial = new MeshPhongMaterial({
      color: 0x4ccd66,
      emissive: 0x13520f,
    });
    this.textMesh = new Mesh(textGeometry, textMaterial);

    textGeometry.computeBoundingBox();
    const boundingBox = textGeometry.boundingBox;
    const textWidth = boundingBox.max.x - boundingBox.min.x;
    this.textMesh.position.set(textWidth / 2, 5, 24);
    this.textMesh.rotateY(Math.PI);
    this.textMesh.rotateX(-0.5);

    this.scene.add(this.textMesh);
  }
}
