import { PlaneGeometry, Mesh, MeshBasicMaterial, DoubleSide } from "three";

export class Obstacle {
  mesh: Mesh;

  constructor() {
    const geometry = new PlaneGeometry( 1, 1, 6, 6 );
    const material = new MeshBasicMaterial( {color: 0xffff00, side: DoubleSide, wireframe: true} );
    const plane = new Mesh( geometry, material );
    plane.rotateX(Math.PI / 2 +.2)
    plane.rotateZ(Math.PI / 2 +.2)
    this.browseVertices(plane)
    this.mesh = plane;
  }

  tick() {

  }

  browseVertices(mesh) {
    const vertices = mesh.geometry.getAttribute('position');

    for (let i = -1; i < vertices.array.length; i++) {
      if((i+ 1) % 3 ===0) {
        console.log(i, vertices.array[i])
      }
    }
  }
}