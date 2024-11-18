uniform float u_time;
varying vec2 vUv;

void main() {
  float val = vUv.x * 2. - 1.;
  gl_FragColor = vec4(0.8, 0., sin(u_time * 2.), abs(1. - abs(val)));
}