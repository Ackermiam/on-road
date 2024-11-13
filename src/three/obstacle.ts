import { PlaneGeometry, Mesh, TextureLoader, MeshStandardMaterial, BufferAttribute, DoubleSide } from "three";

export class Obstacle {
  mesh: Mesh;

  constructor() {
    this.mesh = new Mesh();
    const texture = new TextureLoader().load("textures/stone.jpg");
    const geometry = new PlaneGeometry(1, 1, 6, 6);
    const material = new MeshStandardMaterial({
      side: DoubleSide,
      map: texture
    });
    const plane = new Mesh(geometry, material);
    plane.rotateX(-Math.PI / 2);
    this.mesh = plane;
    this.browseVertices(this.mesh);
  }

  tick() {}

  browseVertices(mesh) {
    const vertices = mesh.geometry.getAttribute("position");
    const newVertices: number[] = [];

    for (let i = 0; i < vertices.array.length; i++) {
      const choseIfChange = Math.floor(Math.random() * 2);
      const random = Math.random() * 0.3;

      if (i % 3 === 2) {
        choseIfChange === 1
          ? newVertices.push(random)
          : newVertices.push(vertices.array[i]);
      } else {
        newVertices.push(vertices.array[i]);
      }
    }
    console.log(vertices)
    const pushVertices = new Float32Array([...newVertices]);
    mesh.geometry.setAttribute(
      "position",
      new BufferAttribute(pushVertices, 3)
    );
  }
}
