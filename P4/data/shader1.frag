#define PROCESSING_TEXTURE_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

uniform sampler2D texture;

varying vec4 vertColor;
varying vec4 vertTexCoord;

void main() {

  vec4 diffuse_color = texture2D(texture, vertTexCoord.xy);
  float pixIntensity = (diffuse_color.r * 0.3) + (diffuse_color.g * 0.6) + (diffuse_color.b * 0.1);

  vec2 lpos = vec2(vertTexCoord.x - (1.0 / 256.0), vertTexCoord.y);
  vec4 diffuse_color_l = texture2D(texture, lpos);
  float leftIntensity = (diffuse_color_l.r * 0.3) + (diffuse_color_l.g * 0.6) + (diffuse_color_l.b * 0.1);

  vec2 upos = vec2(vertTexCoord.x, vertTexCoord.y - (1.0 / 256.0));
  vec4 diffuse_color_u = texture2D(texture, upos);
  float upIntensity = (diffuse_color_u.r * 0.3) + (diffuse_color_u.g * 0.6) + (diffuse_color_u.b * 0.1);

  vec2 rpos = vec2(vertTexCoord.x + (1.0 / 256.0), vertTexCoord.y);
  vec4 diffuse_color_r = texture2D(texture, rpos);
  float rightIntensity = (diffuse_color_r.r * 0.3) + (diffuse_color_r.g * 0.6) + (diffuse_color_r.b * 0.1);

  vec2 dpos = vec2(vertTexCoord.x, vertTexCoord.y + (1.0 / 256.0));
  vec4 diffuse_color_d = texture2D(texture, dpos);
  float downIntensity = (diffuse_color_d.r * 0.3) + (diffuse_color_d.g * 0.6) + (diffuse_color_d.b * 0.1);

  float pix_L = ((leftIntensity + upIntensity + rightIntensity + downIntensity) - (4 * pixIntensity)) * 10.0;

  gl_FragColor = vec4(pix_L, pix_L, pix_L, 1.0);
}

