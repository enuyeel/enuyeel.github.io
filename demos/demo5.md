---
layout: page
title: "WebGL2 Instanced Drawing & GPGPU Demo"
permalink: /demo5
---

<img class="demo-page-image" src="/assets/instancedDrawing+GPGPU_1440x810.png">

<br>

**WebGL2 Instanced Drawing & GPGPU Demo**

<br>

Built with: JavaScript, WebGL2, stats.js, dat.GUI, loaders.gl (OBJLoader)<br>
Instanced Drawing + GPGPU simulation using fragment shaders (no compute shader): This application consists of two rendering passes. The first GPGPU pass writes relevant information for rendering asteroids (such as position, rotation axis, and rotation angle) to a float texture (RGBA32F). The next instanced drawing pass extracts information (samples from) the previously written texture and builds a 4x4 matrix in the vertex shader.

<br>

[**Run it on your browser!**](/demos/WebGL2/instancedDrawing+GPGPU/)

<br>

[**Go to Github Repository**](https://github.com/enuyeel/WebGL2-Demos/tree/main/instancedDrawing%2BGPGPU)