#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

varying vec4 vertColor;
varying vec4 vertTexCoord;

void main() {

  gl_FragColor = vec4(0.2, 0.4, 1.0, 0.5);

  for (int i = 1; i <=5; i+= 2) {
    for (int j = 1; j <= 5; j+= 2) {
      if (pow((vertTexCoord.s - ((1.0 / 6.0) * i)), 2) + pow((vertTexCoord.t - ((1.0 / 6.0) * j)), 2) <= pow(0.1, 2)) {
        gl_FragColor = vec4(0.2, 0.4, 1.0, 0);
      }
    }
  }


}

