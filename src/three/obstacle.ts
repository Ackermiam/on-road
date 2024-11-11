import { PlaneGeometry, Mesh, MeshLambertMaterial } from "three";

export class Obstacle {
  mesh: Mesh;

  constructor() {
    const geometry = new PlaneGeometry();
    const material = new MeshLambertMaterial({color: 0x0000ff});

    const obstacle = new Mesh(geometry, material);
    this.mesh = obstacle;
  }

  tick() {

  }
}