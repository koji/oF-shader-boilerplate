### ShaderToy

```c
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Output to screen
    fragColor = vec4(col,1.0);
}
```


For glslViewer & oFShader
```c
uniform float u_time;
uniform vec2 u_resolution;

void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord/u_resolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx+vec3(0,2,4));

    // Output to screen
    gl_FragColor = vec4(col,1.0);
}
```
