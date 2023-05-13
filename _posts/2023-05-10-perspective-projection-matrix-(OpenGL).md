---
layout: post
title: "Perspective Projection Matrix (OpenGL)"
permalink: /blog/:year/:month/:day/:title
---

This article is still in a draft state!

<br>

***

<code>
GLM_CLIP_CONTROL_LH_ZO (GLM_CLIP_CONTROL_LH_BIT | GLM_CLIP_CONTROL_ZO_BIT) 
</code>

$$frustumLH\_ZO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{z_{far}}{z_{far}-z_{near}} & \frac{-z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & 1 & 0
\end{bmatrix}$$

<code>
GLM_CLIP_CONTROL_LH_NO (GLM_CLIP_CONTROL_LH_BIT | GLM_CLIP_CONTROL_NO_BIT) 
</code>

$$frustumLH\_NO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{z_{far}+z_{near}}{z_{far}-z_{near}} & \frac{-2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & 1 & 0
\end{bmatrix}$$

<code>
GLM_CLIP_CONTROL_RH_ZO (GLM_CLIP_CONTROL_RH_BIT | GLM_CLIP_CONTROL_ZO_BIT)
</code>

$$frustumRH\_ZO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{-z_{far}}{z_{far}-z_{near}} & \frac{-z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & -1 & 0
\end{bmatrix}$$

<br>

***

<br>

To create the illusion of perspective in the scene being rendered, we define the view volume in the camera space as a frustum shape, and then mathematically map this view volume onto a cuboid, which is by default, a normalized cube with a radius of $$1$$. We refer to this mapping as a transformation from camera space to NDC (Normalized Device Coordinates) space. NDC space is where the vertices that are potentially visible are expected to be located inside the aforementioned cuboid. This mapping causes the vertices inside the view volume to be distorted and appears larger towards the near plane than those further away. This effect is known as foreshortening, and it is precisely the effect we desire from this transformation.<br>
Returning to the "cuboid" we mentioned earlier, it's worth noting that in OpenGL, there is limited flexibility in choosing the shape of this cuboid. It can either be a normalized cube with a radius of $$1$$ centered at the origin or a normalized cube that has been cut in half along the z-axis. We can modify this behavior by calling the <code>glClipControl()</code> function, and its <code>depth</code> argument controls the shape of the cuboid. By default, the cuboid's volume in the NDC space is defined for a depth of <code>GL_NEGATIVE_ONE_TO_ONE</code>.<br>
One way to check the default behavior of the cuboid's volume in OpenGL is by not defining the view volume in the camera space. The simplest way to achieve this is by not performing any transformations on the vertex positions passed as part of the vertex attributes inside the vertex shader, as shown below:<br>
<pre><code>
#version 300 es
  
layout (location = 0) in vec3 vertexModelPosition;

void main() {
  gl_Position = vec4(vertexModelPosition, 1.);
}
</code></pre><br>
We will revisit the topic of the <code>w</code> component of <code>gl_Position</code> shortly, but it is important to note that in the example given above, it must be set to $$1$$. One can observe that as long as the <code>x</code>,<code>y</code>, and <code>z</code> component of <code>vertexModelPosition</code> falls within the range of $$[-1, 1]$$, it will be rendered on the screen, which aligns well with the default behavior of cuboid's volume discussed earlier.<br>
At this point, we can move on to deriving the actual transformation matrix, but unfortunately, there's an additional constraint on what OpenGL expects for gl_Position in the vertex shader pass. Naturally, we would hope to pass the vertices' positions in the NDC space as <code>gl_Position</code>. However, we must set it accordingly so that <code>gl_Position.xyz / gl_Position.w</code> would actually yield the vertices' positions in the NDC space.<br>
TODO: Why is clipping performed in clip space instead of NDC space?<br>
This brings our attention to the auxiliary coordinate space called clip space, which precedes the NDC space. Contrary to what we would normally expect, primitives are clipped in clip space instead of NDC space, hence the name clip space. It is documented in the official OpenGL specifications that primitives in *clip coordinates* $$(x_c,y_c,z_c,w_c)$$ are clipped to the clip volume, which is by default defined as follows:<br>

$$
-w_c\leq x_c\leq w_c\\
-w_c\leq y_c\leq w_c\\
-w_c\leq z_c\leq w_c
$$

In the next section, it explicitly states that the vertex's normalized device coordinates $$(x_d,y_d,z_d)$$ are calculated by default as follows:<br>

$$
(x_d,y_d,z_d)=(\frac{x_c}{w_c}, \frac{y_c}{w_c}, \frac{z_c}{w_c})
$$

This article won't cover the step-by-step process for deriving the camera-to-clip matrix, but there are many articles available online, such as [Songho08], which provides an extensive explanation on it. The following is a summary of each step from [Songho08]:<br>

<br>

* Projecting the x and y components of the vertex's camera coordinates $$(x_{cam}, y_{cam})$$ to the view volume's near plane yields $$(x_p, y_p)$$, which are all inversely proportional to $$-z_{cam}$$. This suggests why $$w_c$$ must be $$-z_{cam}$$.

<br>

<img class="demo-page-image" src="/assets/posts/frustum/4_1.svg">
<img class="demo-page-image" src="/assets/posts/frustum/4_2.svg">

<br>

$$z_{near},z_{far}\leq 0\\
z_{near}\geq z_{far}\\
z_{near}\geq z\geq z_{far}$$

<code>
GLM_CLIP_CONTROL_RH_NO (GLM_CLIP_CONTROL_RH_BIT | GLM_CLIP_CONTROL_NO_BIT)
</code>

$$frustumRH\_NO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{-(z_{far}+z_{near})}{z_{far}-z_{near}} & \frac{-2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & -1 & 0
\end{bmatrix}$$

$$x_{clip}=\frac{2\cdot z_{near}}{r-l}x_{cam}+\frac{r+l}{r-l}z_{cam}\\
y_{clip}=\frac{2\cdot z_{near}}{t-b}y_{cam}+\frac{t+b}{t-b}z_{cam}\\
z_{clip}=\frac{-(z_{far}+z_{near})}{z_{far}-z_{near}}z_{cam}+\frac{-2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}}\\
w_{clip}=-z_{cam}$$

$$x_{ndc}=\frac{-2\cdot z_{near}}{r-l}\cdot \frac{x_{cam}}{z_{cam}}+\frac{-(r+l)}{r-l}\\
y_{ndc}=\frac{-2\cdot z_{near}}{t-b}\cdot \frac{y_{cam}}{z_{cam}}+\frac{-(t+b)}{t-b}\\
z_{ndc}=\frac{z_{far}+z_{near}}{z_{far}-z_{near}}+\frac{2\cdot z_{far}\cdot z_{near}}{(z_{far}-z_{near})\cdot z_{cam}}$$

<br>

$$frustumRH\_NO'=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{-(r+l)}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{-(t+b)}{t-b} & 0 \\
0 & 0 & \frac{-(z_{far}+z_{near})}{z_{far}-z_{near}} & \frac{2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & 1 & 0
\end{bmatrix}$$

$$x_{clip}=\frac{2\cdot z_{near}}{r-l}x_{cam}+\frac{-(r+l)}{r-l}z_{cam}\\
y_{clip}=\frac{2\cdot z_{near}}{t-b}y_{cam}+\frac{-(t+b)}{t-b}z_{cam}\\
z_{clip}=\frac{-(z_{far}+z_{near})}{z_{far}-z_{near}}z_{cam}+\frac{2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}}\\
w_{clip}=z_{cam}$$

$$x_{NDC}=\frac{2\cdot z_{near}}{r-l}\cdot \frac{x_{cam}}{z_{cam}}+\frac{-(r+l)}{r-l}$$

***

<br>

**Bibliograph**

<br>

[[**Songho08**]](http://www.songho.ca/opengl/gl_projectionmatrix.html) Songho Ahn. 2008. OpenGL Projection Matrix. http://www.songho.ca/opengl/gl_projectionmatrix.html<br>

<br>