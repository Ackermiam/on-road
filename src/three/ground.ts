import { Object3D, MeshLambertMaterial, Mesh, PlaneGeometry, TextureLoader, } from "three";
import {Obstacle} from "./obstacle";

export class Ground {
  meshData: any[];
  mesh: Object3D;
  lastPos: number;

  constructor() {
    this.lastPos = 0;
    this.mesh = new Object3D();
    this.meshData = [];

    this.generateRoad();
  }

  generateRoad() {
    this.instanceRoadBit();
    this.instanceMesh();
  }

  createPlane(zPos: number) {
    const texture = new TextureLoader().load("textures/textcristal.jpg");
    const geometry = new PlaneGeometry(10, 5, 3);
    const material = new MeshLambertMaterial({ color: 0xffffff });

    const box = new Mesh(geometry, material);

    box.rotateX(-Math.PI / 2);
    box.position.set(0, 0, zPos);

    this.mesh.add(box);
  }

  createObstacle(zPos: number) {
    const obstacle = new Obstacle();
    obstacle.mesh.position.set(0, -0.1, zPos);

    this.mesh.add(obstacle.mesh);
  }

  instanceRoadBit() {
    for (let i = 0; i < 30; i++) {
      this.meshData.push({
        zPos: i * 5,
      });
      if(i === 29) this.lastPos = i * 5;
    }
  }

  instanceMesh() {
    this.meshData.forEach((mesh, index) => {
      this.createPlane(mesh.zPos);
      if(index % 3 === 0) {
        this.createObstacle(mesh.zPos)
      }
    });
  }

  movePlanes() {
    this.mesh.children.forEach((mesh) => {
      mesh.position.z -= 0.3;

      if(mesh.position.z <= -1) {
        mesh.position.z = this.lastPos;
      }
    })
  }


  tick() {
    this.movePlanes();
  }
}
