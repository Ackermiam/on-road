import { Object3D, MeshLambertMaterial, Mesh, PlaneGeometry } from "three";

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
    const geometry = new PlaneGeometry(10, 5, 1);
    const material = new MeshLambertMaterial({ color: 0xff0000 });

    const box = new Mesh(geometry, material);

    box.rotateX(-Math.PI / 2);
    box.position.set(0, 0, zPos);

    this.mesh.add(box);
  }

  instanceRoadBit() {
    for (let i = 0; i < 30; i++) {
      this.meshData.push({
        zPos: i * 5.1,
      });
      if(i === 29) this.lastPos = i * 5.1;
    }
  }

  instanceMesh() {
    this.meshData.forEach((mesh) => {
      this.createPlane(mesh.zPos);
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
