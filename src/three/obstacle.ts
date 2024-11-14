import {
  PlaneGeometry,
  Mesh,
  Vector3,
  MeshStandardMaterial,
  BufferAttribute,
  DoubleSide,
  TextureLoader,
} from "three";

export class Obstacle {
  mesh: Mesh;

  constructor() {
    this.mesh = new Mesh();
    const texture = new TextureLoader().load("textures/textcristal.jpg");
    const geometry = new PlaneGeometry(3.3, 3.3, 20, 20);
    const material = new MeshStandardMaterial({
      side: DoubleSide,
      map: texture,
      color: 0x00ffe5,
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
      const choseIfChange = Math.random() * 1;
      const multiplier = Math.floor(Math.random() * 3);
      const verticePosition = new Vector3().fromBufferAttribute(
        positionAttribute,
        i
      );
      const dist = verticePosition.distanceTo(new Vector3(0, 0, 0));

      if (dist < 1.65 && choseIfChange > 0.75) {
        let intensity = dist / (3.3 / 2);
        verticePosition.z = Math.abs(intensity - 1) * multiplier;
        newVertices.push(...verticePosition);
      } else {
        verticePosition.z = 0;
        newVertices.push(...verticePosition);
      }
    }

    const pushVertices = new Float32Array([...newVertices]);
    mesh.geometry.setAttribute(
      "position",
      new BufferAttribute(pushVertices, 3)
    );
  }
}
