import {
  Object3D,
  ShaderMaterial,
  Mesh,
  PlaneGeometry,
  Clock,
  Box3,
} from "three";
import { Obstacle } from "./obstacle";
import { Coin } from "./coin";
import ShaderFrag from "../shader/shader.frag?raw";
import ShaderVert from "../shader/shader.vert?raw";

export class Ground {
  meshData: any[];
  mesh: Object3D;
  lastPos: number;
  clock: Clock;
  material: ShaderMaterial;
  obstacles: {
    obstacle: Obstacle | Coin;
    boundingBox: Box3;
    typeOfObs: string;
  }[];
  speed: number;

  constructor() {
    this.lastPos = 0;
    this.mesh = new Object3D();
    this.meshData = [];
    this.clock = new Clock();
    this.obstacles = [];
    this.speed = 0.4;
    this.material = new ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
      },
      vertexShader: ShaderVert,
      fragmentShader: ShaderFrag,
      transparent: true,
    });

    const interval = setInterval(() => {
      this.speed += 0.05;
    }, 20000);

    window.addEventListener("collision", (e) => {
      if (e.detail === 0) {
        clearInterval(interval);
      }
    });
    this.generateRoad();
  }

  generateRoad() {
    this.instanceRoadBit();
    this.instanceMesh();
  }

  createPlane() {
    const geometry = new PlaneGeometry(13, 260, 3);

    const box = new Mesh(geometry, this.material);

    box.rotateX(-Math.PI / 2);
    box.position.set(0, 0, 120);

    this.mesh.add(box);
  }

  createObstacle(zPos: number) {
    const random = Math.random() * 8 - 3;
    const obstacle = new Obstacle();
    obstacle.mesh.position.set(random, -0.1, zPos);
    const boundingBox = new Box3().setFromObject(obstacle.mesh);
    const typeOfObs = 'obstacle';

    this.obstacles.push({ obstacle, boundingBox, typeOfObs });
    this.mesh.add(obstacle.mesh);
  }

  async createCoin(zPos: number) {
    const random = Math.random() * 8 - 3;
    const obstacle = new Coin();
    await obstacle.loadMesh();
    obstacle.mesh.position.set(random, 0.5, zPos);
    const boundingBox = new Box3().setFromObject(obstacle.mesh);
    const typeOfObs = 'bonus';

    this.obstacles.push({ obstacle, boundingBox, typeOfObs });
    this.mesh.add(obstacle.mesh);
  }

  instanceRoadBit() {
    for (let i = 0; i < 30; i++) {
      this.meshData.push({
        zPos: 200 + i * 8,
      });
      if (i === 29) {
        this.lastPos = i * 8;
      }
    }
  }

  instanceMesh() {
    this.createPlane();

    this.meshData.forEach((mesh, index) => {
      if (index % 3 === 0) {
        this.createObstacle(mesh.zPos);
      } if(index % 2 === 0) {
        this.createCoin(mesh.zPos);
      }
    });
  }

  movePlanes() {
    this.mesh.children.forEach((mesh, index) => {
      mesh.position.z -= this.speed;

      if (index === 0) {
        mesh.position.z = 120;
      }
      if (mesh.position.z <= -1) {
        mesh.position.z = this.lastPos;
        mesh.position.x = Math.random() * 8 - 3;
      }
    });

    this.obstacles.forEach(({ obstacle, boundingBox, typeOfObs }) => {
      if(typeOfObs === 'obstacle') {
        obstacle.mesh.scale.set(0.5, 0.5, 0.5);
        boundingBox.setFromObject(obstacle.mesh);
        obstacle.mesh.scale.set(1, 1, 1)
      } else {
        boundingBox.setFromObject(obstacle.mesh);
      }
    });
  }

  getTime() {
    this.material.uniforms.u_time.value = this.clock.getElapsedTime() / 2;
  }

  tick() {
    this.movePlanes();
    this.getTime();
  }
}
