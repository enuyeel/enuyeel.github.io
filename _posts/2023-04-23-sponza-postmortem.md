---
layout: post
title: "Sponza Postmortem"
permalink: /blog/:year/:month/:day/:title
---

This article is still in a draft state!

<br>

***

<br>

**Texture Loading**

<br>

<img class="demo-page-image" src="/assets/upsideDownTexture.png">

<br>

At first, it was difficult to identify the issue with the rendered scene other than the arch above the curtain wasn't properly textured, as shown in the left image. I initially suspected that the problem was with my texture loading function and spent some time trying to fix it. However, I later realized that the textures were indeed properly loaded, and I had been investigating the wrong issue.<br>
For this project, I opted to use STB to load texture images. By default, STB's behavior is to load the first pixel at the top-left of the image, which is the opposite of what OpenGL expects. The simple way to mitigate this problem is by the following function call:

<code>
stbi_set_flip_vertically_on_load(true);
</code>

<br>

The issue turned out to be quite common, and there are many online posts documenting it.

<br>

***

<br>

**Moiré Pattern**

<br>

<img class="demo-page-image" src="/assets/moire.png">

<br>

When the number of fragments is fewer than the number of texels in the texture they are being sampled from, a Moiré pattern can become visible, as shown in the picture on the left. One way to mitigate the Moire pattern is to use mipmaps, which are a sequence of down-scaled images that should have an image with a scale closely matching the area of the fragments of concern.<br>
To enable OpenGL to sample from mipmaps in situations where the number of fragments is less than the number of texels, you can specify any mipmap commands (such as GL_NEAREST_MIPMAP_NEAREST, GL_LINEAR_MIPMAP_NEAREST, etc.) for the symbolic name 'GL_TEXTURE_MIN_FILTER' in the glTexParameter() function. It is important to note that mipmapping is not applicable in situations where the number of fragments exceeds the number of texels to sample from, which should be obvious.<br>
However, mipmaps are not generated automatically when creating a texture object in OpenGL. Therefore, if mipmapping is required for such a texture, it is essential to manually invoke the glGenerateMipmap() function after binding the texture object.

<br>

***

<br>

**Fireflies**

<br>

<img class="demo-page-image" src="/assets/firefly.png">

<br>

I used the Blinn-Phong reflection model for this project and encountered a few bright spots, commonly referred to as "fireflies,". These bright specks were variable with respect to the camera's view vector, indicating that the issue was likely related to the calculation of specular highlights in the shader.

<code>
vec3 H = normalize(L + V);
vec3 specular = Ks * directionalLight.specular * pow( max( dot( H, N ), 0. ), Ns );
</code>

<br>

Judging from the initial code I wrote above, it was apparent that the last term was producing a value greater than 1.0. Given that the <code>Ns</code> value for the hanging vase is 50.0, as loaded from the .mtl file, it would suggest that the <code>dot( H, N )</code> was somehow yielding a value greater than 1.0.<br>
It's possible that the halfway vector <code>H</code> was evaluated to NaN or infinity, which could occur if <code>normalize(L + V)</code> involves a zero division. Otherwise, it would be impossible for the dot product of two normalized vectors to yield a value greater than 1.0.<br>
A quick remedy was to clamp the <code>dot( H, N )</code> between 0.0 and 1.0 as follows: 

<code>
vec3 specular = Ks * directionalLight.specular * pow( clamp( dot( H, N ), 0., 1. ), Ns );
</code>

<br>

The specular highlights in the background wall also significantly reduced after this change, and it looks a bit more natural.

<br>

***

<br>

**Bump Mapping & Normal Mapping**

<br>

***

<br>

**Multisample anti-aliasing (MSAA)**

<br>

***

<br>

**Bibliograph**

<br>