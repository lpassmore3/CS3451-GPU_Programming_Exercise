#define PROCESSING_TEXTURE_SHADER

uniform mat4 transform;
uniform mat4 texMatrix;

attribute vec4 position;
attribute vec4 color;
attribute vec3 normal;
attribute vec2 texCoord;

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform sampler2D texture;

void main() {
  vertColor = color;
  vertTexCoord = texMatrix * vec4(texCoord, 1.0, 1.0);

  vec4 diffuse_color = texture2D(texture, vertTexCoord.st) * vertColor;

  float intensity = (diffuse_color.r * 0.3) + (diffuse_color.g * 0.6) + (diffuse_color.b * 0.1);

  vec4 offset = vec4(normal * intensity * -150.0, 0.0);

  vec4 pos = position + offset;
  gl_Position = transform * pos;

}
