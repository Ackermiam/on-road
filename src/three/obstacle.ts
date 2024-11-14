import { PlaneGeometry, Mesh, Vector3, TextureLoader, MeshStandardMaterial, BufferAttribute, DoubleSide } from "three";

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
    const positionAttribute = mesh.geometry.getAttribute("position");
    const vertices = positionAttribute.array;
    const newVertices: number[] = [];

    for (let i = 0; i < vertices.length / 3; i++) {
      const choseIfChange = Math.floor(Math.random() * 2);
      const random = Math.random() * 0.4;

      const verticePosition = new Vector3().fromBufferAttribute(positionAttribute, i);

      if(i % 7 === 0 || i < 7 || i >= 42 && i <= 48) {

        verticePosition.z = 0;
        newVertices.push(...verticePosition)
      } else {
        if (choseIfChange === 1) {
          verticePosition.z = random;
          newVertices.push(...verticePosition)

        } else {
          newVertices.push(...verticePosition)
        }
      }

      if(i < 7) {
        console.log(verticePosition)
      }
    }

    const pushVertices = new Float32Array([...newVertices]);
    mesh.geometry.setAttribute(
      "position",
      new BufferAttribute(pushVertices, 3)
    );
  }
}
