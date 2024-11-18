import { Object3D, ShaderMaterial, Mesh, PlaneGeometry, Clock } from "three";
import { Obstacle } from "./obstacle";
import ShaderFrag from "../shader/shader.frag?raw";
import ShaderVert from "../shader/shader.vert?raw";

export class Ground {
  meshData: any[];
  mesh: Object3D;
  lastPos: number;
  clock: Clock;
  material: ShaderMaterial;

  constructor() {
    this.uniform = [];
    this.lastPos = 0;
    this.mesh = new Object3D();
    this.meshData = [];
    this.clock = new Clock();
    this.material = new ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
      },
      vertexShader: ShaderVert,
      fragmentShader: ShaderFrag,
      transparent: true
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

    this.mesh.add(obstacle.mesh);
  }

  instanceRoadBit() {
    for (let i = 0; i < 30; i++) {
      this.meshData.push({
        zPos: i * 8,
      });
      if (i === 29) this.lastPos = i * 8;
    }
  }

  instanceMesh() {
    this.createPlane();
    this.meshData.forEach((mesh, index) => {
      if (index % 3 === 0) {
        this.createObstacle(mesh.zPos);
      }
    });
  }

  movePlanes() {
    this.mesh.children.forEach((mesh, index) => {
      mesh.position.z -= 0.7;

      if(index === 0) {
        mesh.position.z = 120;
      }
      if (mesh.position.z <= -1) {
        mesh.position.z = this.lastPos;
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
