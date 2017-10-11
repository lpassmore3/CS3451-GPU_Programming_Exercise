#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

varying vec4 vertColor;
varying vec4 vertTexCoord;

void main() {
  float cx = (vertTexCoord.s * 3.0) - 2.1;
  float cy = (vertTexCoord.t * 3.0) - 1.5;

  float za = 0.0;
  float zb = 0.0;
  for (int i = 0; i <= 20; i++) {
    float tempza = pow(za, 2.0) - pow(zb, 2.0) + cx;
    float tempzb = (za * zb * 2.0) + cy;

    za = tempza;
    zb = tempzb;
  }

  if (za > 1.0 / 256.0 || za < -1.0 / 256.0 || zb > 1.0 / 256.0 || zb < -1.0 / 256.0) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  } else {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
}

