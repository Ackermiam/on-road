import { PlaneGeometry, Mesh, MeshBasicMaterial, DoubleSide } from "three";

export class Obstacle {
  mesh: Mesh;

  constructor() {
    const geometry = new PlaneGeometry( 1, 1, 4, 4 );
    const material = new MeshBasicMaterial( {color: 0xffff00, side: DoubleSide, wireframe: true} );
    const plane = new Mesh( geometry, material );
    plane.rotateX(Math.PI / 2 +.2)
    plane.rotateZ(Math.PI / 2 +.2)
    this.mesh = plane;
  }

  tick() {

  }
}