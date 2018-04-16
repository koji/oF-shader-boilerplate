uniform float u_time;
uniform vec2  u_mouse;
uniform vec2  u_resolution;

void main(){
	vec2 m = vec2(u_mouse.x * 2.0 - 1.0, -u_mouse.y * 2.0 + 1.0);
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) * min(u_resolution.x, u_resolution.y);
	float t = sin(length(m - p) * 30.0 + u_time + 25.0);
	gl_FragColor = vec4(vec3(t), 1.0);
}

