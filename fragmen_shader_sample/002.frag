// draw a ring

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
    //vec2 m = vec2(u_mouse.x * 2.0 - 1.0, -u_mouse.y * 2.0 + 1.0);
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    
    // ring
    float u = abs(sin((atan(p.y, p.x) + u_time * 0.5 + length(p) ) * 10.0)*0.5) + 0.31;
    float t = 0.02 / abs(0.35*sin(u_time) + u - length(p));
    
    gl_FragColor = vec4(vec3(t), 1.0);
}
