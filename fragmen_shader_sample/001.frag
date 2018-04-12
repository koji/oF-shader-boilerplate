// draw a ring

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
    vec2 m = vec2(u_mouse.x * 2.0 - 1.0, -u_mouse.y * 2.0 + 1.0);
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    
    // ring
    float t = 0.02 / abs(0.75*sin(u_time) - length(p));
    
    gl_FragColor = vec4(vec3(t), 1.0);
}
