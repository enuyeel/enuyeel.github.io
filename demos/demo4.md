---
layout: page
title: "WebGPU/Emscripten & Dawn Raytracing Demo"
permalink: /demo4
---

<img class="demo-page-image" src="/assets/raytracing_512x512.png">

<br>

**WebGPU/Emscripten & Dawn Raytracing Demo**

<br>

A simple raytracing demo built with Dawn WebGPU C/C++ headers for Windows and Web. It's following Peter Shirley's [**"Ray Tracing in One Weekend"**](https://raytracing.github.io/) series, and is written (mostly) in WGSL compute shader.

<br>

[**Click here to run it on your browser! Latest Chrome Canary is required with '#enable-unsafe-webgpu' flag enabled.**](/demos/raytracing)

<br>

**TODOs**

<br>

The current method to obtain a device in an Emscripten build involves using the 'wgpuInstanceRequestAdapter' and 'wgpuAdapterRequestDevice' functions, which internally call JavaScript functions. For further details, please refer to this [**link**](https://github.com/kainino0x/webgpu-cross-platform-demo/blob/8e1a5883f2d29a3030e813c0ccfaddea4f6398b5/main.cpp#L51). It appears that these functions are asynchronous in nature, and therefore the remaining initialization steps (such as creating a swap chain and initializing pipelines) should be performed within the callback function.

<br>

Another way to obtain a device in an Emscripten build is by using the function 'emscripten_webgpu_get_device()'. However, it appears that manually setting 'Module["preinitializedWebGPUDevice"]' in either JavaScript or HTML is required before calling this function. Several existing projects, notably @cwoffenden's [**"Hello, Triangle"**](https://github.com/cwoffenden/hello-webgpu/blob/6ada98bea21ad7283fb3a88b91d94b28f87ea190/src/ems/glue.cpp#L35) and @ocornut's [**Dear ImGui**](https://github.com/ocornut/imgui/blob/e8206db829f7c5d9a07985a2e2a8de6769cac64d/examples/example_emscripten_wgpu/web/index.html#L66), have demonstrated this approach. For further information, please refer to @mewmew-tea's [**article**](https://zenn.dev/kd_gamegikenblg/articles/a5a8effe43bf3c#%E3%81%8A%E3%81%BE%E3%81%91%EF%BC%92%EF%BC%9Adevice%E5%8F%96%E5%BE%97%E3%81%AE%E3%82%A2%E3%83%97%E3%83%AD%E3%83%BC%E3%83%81).

<br>

The current implementation is a bit messy, as I added Emscripten build-specific code into the main function as a last resort to overcome asynchronous issues. However, I plan to clean up the codebase for modularity and refine the code further, particularly if I decide to continue following up on Peter Shirley's later volumes.