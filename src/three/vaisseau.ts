import { BoxGeometry, MeshLambertMaterial, Mesh } from "three"

export class StarShip {
  mesh: Mesh;

  constructor() {
    this.mesh = new Mesh();

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshLambertMaterial({color: 0x00FF00});

    const mesh = new Mesh(geometry, material);
    mesh.position.set(0, 0.5, 15);

    this.mesh = mesh;
  }

  tick(xPos: number) {
    this.moveStarship(xPos);
  }

  moveStarship(xPos: number) {
    const x = (xPos / window.innerWidth) * 2 - 1;
    this.mesh.position.set(- x * 3, 0.5, 15)
  }
}