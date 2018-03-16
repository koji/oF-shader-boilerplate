uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;



void main() {
    vec2 p = gl_FragCoord.xy / u_resolution.xy * u_slider4;
    for(float i = 1.0; i < 100.0; i+=5.0){
        p.x += 0.3 / i * sin(i * 3.0 * p.y + u_time * 0.1 + cos((u_time / (100. * i)) * i));
        p.y += 0.4 / i * cos(i * 3.0 * p.x + u_time * 2.1 + sin((u_time / (200. * i)) * i));
    }
    float r = cos(p.x + p.y + 2.)*.5+.5*u_slider1;
    float g = sin(p.x + p.y + 1.)*.5+.5+u_time*u_slider2;
    float b = (sin(p.x + p.y + 1.) + cos(p.x + p.y + 1.))*.25+.5+u_slider3;
    gl_FragColor = vec4(r, g, b, 1);
}
