---
layout: post
title: "Perspective Projection Matrix (OpenGL)"
permalink: /blog/:year/:month/:day/:title
---

This article is still in a draft state!

<br>

***

<br>

To create the illusion of perspective in the rendered scene, we define the view volume in camera space as a frustum shape. We then mathematically map this view volume onto a cuboid, which, by default in OpenGL, is a normalized cube with a radius of $$1$$. We refer to this mapping as a transformation from camera space to NDC (Normalized Device Coordinates) space. NDC space is where the vertices, which have the potential to contribute to the final rendered image, are expected to be located inside the aforementioned cuboid. This mapping causes the vertices inside the view volume to be distorted and appears larger towards the near plane than those further away. This effect is known as foreshortening, and it is precisely the effect we desire from this transformation.<br>
Returning to the "cuboid" we mentioned earlier, it's worth noting that in OpenGL, there is limited flexibility in choosing the shape of this cuboid. Originally, in previous versions of OpenGL, the normalized cube used for mapping the view volume was only a unit cube with a radius of $$1$$ centered at the origin. However, starting from OpenGL $$4.6$$, additional options are available. Now, we can choose a normalized cube that has been cut in half along the z-axis. By calling the <code>glClipControl()</code> function, we can modify this behavior, and the <code>depth</code> argument of the function controls the shape of the cuboid. The names of the constants used for the <code>depth</code> argument are self-explanatory. You can either set the <code>depth</code> to <code>GL_NEGATIVE_ONE_TO_ONE</code> (which is the default option) or <code>GL_ZERO_TO_ONE</code>.<br>
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

In the next section, it explicitly states that the vertex's normalized device coordinates $$(x_d,y_d,z_d)$$ can be obtained through "perspective division" on clip coordinates as follows. One can associate the division of <code>gl_Position</code> by its w component <code>gl_Position.w</code> with "perspective division".<br>

$$
(x_d,y_d,z_d)=(\frac{x_c}{w_c}, \frac{y_c}{w_c}, \frac{z_c}{w_c})
$$

This article won't cover the step-by-step process for deriving the camera-to-clip matrix, but there are many articles available online, such as [Songho08], which provides an extensive explanation on it. The following is a summary of each step from [Songho08]:<br>

<br>

* Projecting the x and y components of the vertex's camera coordinates $$(x_{cam}, y_{cam})$$ to the view volume's near plane yields $$(x_p, y_p)$$, which are all inversely proportional to $$-z_{cam}$$. This idea extends to adjusting the 4th row of the matrix accordingly (row-major), so that after the multiplication, $$w_{c}$$ becomes $$-z_{cam}$$.<br>
> * It is worth noting that [Songho08] assumes that $$z_{near}$$ and $$z_{far}$$ are positive values, similar to how the deprecated <code>glFrustum()</code> function expects the <code>nearVal</code> and <code>farVal</code> arguments. This implicit assumption contributes to $$w_c$$ becoming $$-z_{cam}$$ instead of $$z_{cam}$$. One can attempt to derive a matrix by treating $$z_{near}$$ and $$z_{far}$$ as negative values, but this leads to a problem that will be addressed shortly.<br>
* Find the linear relationship between $$(x_p, y_p)$$ and $$(x_d, y_d)$$, and use this relationship to populate the first and second rows of the matrix.<br><br>
* By observing that $$z_d$$ does not rely on $$x_{cam}$$ and $$y_{cam}$$, we can complete the third row of the matrix. It is important to note that this non-linear relationship between $$z_{cam}$$ and $$z_d$$ contributes to the issue of z-fighting.<br>
> * [Songho08] derives the mapping function from $$z_{cam}$$ to $$z_{d}$$ with the following $$(z_{cam}, z_{d})$$ relations: $$(-z_{near}, -1)$$ and $$(-z_{far}, 1)$$. We could have used $$(-z_{near}, 1)$$ and $$(-z_{far}, -1)$$ to maintain consistency in the handedness for both clip space and NDC space. However, it appears that there is an underlying assumption that the NDC space is in the left-handed coordinate system. Why is that?<br><br> The confusion deepens when even the official OpenGL specifications explicitly state that "OpenGL does not force left- or right-handedness on any of its coordinate systems" in one of its appendices. However, it is important to read between the lines to understand the true implications. OpenGL indeed offers the freedom to choose the handedness through functions like <code>glClipControl()</code> and <code>glDepthRange()</code>. However, it is important to note that by default, OpenGL operates on a left-handed coordinate system for NDC space. This can be inferred from the excerpt taken from the official reference page for <code>glDepthRange()</code>: "After clipping and division by $$w$$, depth coordinates range from $$-1$$ to $$1$$, corresponding to the near and far clipping planes."

<br>

The GLM (OpenGL Mathematics) library provides different perspective projection matrices based on the preprocessor constants defined. Specifically, the function <code>frustumRH_NO()</code> returns a 4x4 matrix that corresponds to the default OpenGL settings. This function assumes a right-handed system for the camera space and a left-handed system for the NDC space, as depicted in the figures below. As expected, this matrix coincides with the one derived from [Songho08].<br>

<br>

<img class="demo-page-image" src="/assets/posts/frustum/4_1.png">
<img class="demo-page-image" src="/assets/posts/frustum/4_2.png">

<br>

The following is the matrix returned from frustumRH_NO() in row-major order, along with the vertex's position in both clip space and NDC space.<br>

$$0 \leq z_{near},z_{far}\\
z_{near}\leq z_{far}\\
-z_{far}\leq z_{cam}\leq -z_{near}$$

$$frustumRH\_NO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{-(z_{far}+z_{near})}{z_{far}-z_{near}} & \frac{-2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & -1 & 0
\end{bmatrix}$$

$$x_{c}=\frac{2\cdot z_{near}}{r-l}x_{cam}+\frac{r+l}{r-l}z_{cam}\\
y_{c}=\frac{2\cdot z_{near}}{t-b}y_{cam}+\frac{t+b}{t-b}z_{cam}\\
z_{c}=\frac{-(z_{far}+z_{near})}{z_{far}-z_{near}}z_{cam}+\frac{-2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}}\\
w_{c}=-z_{cam}$$

$$x_{d}=\frac{-2\cdot z_{near}}{r-l}\cdot \frac{x_{cam}}{z_{cam}}+\frac{-(r+l)}{r-l}\\
y_{d}=\frac{-2\cdot z_{near}}{t-b}\cdot \frac{y_{cam}}{z_{cam}}+\frac{-(t+b)}{t-b}\\
z_{d}=\frac{z_{far}+z_{near}}{z_{far}-z_{near}}+\frac{2\cdot z_{far}\cdot z_{near}}{(z_{far}-z_{near})\cdot z_{cam}}$$

Now, let's return to the topic of how we assumed that $$z_{near}$$ and $$z_{far}$$ were positive values in order to derive our initial projection matrix. We can actually treat them as negative values and proceed with deriving the projection matrix, resulting in several changes compared to our initial projection matrix. One of the most notable changes is that now $$w_c$$ equals $$z_{cam}$$, instead of $$-z_{cam}$$. I will refer to our second version of the projection matrix conveniently as $$frustumRH\_NO'$$, and it is as follows:

$$z_{near},z_{far}\leq 0\\
z_{far}\leq z_{near}\\
z_{far}\leq z_{cam}\leq z_{near}$$

$$frustumRH\_NO'=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{-(r+l)}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{-(t+b)}{t-b} & 0 \\
0 & 0 & \frac{-(z_{near}+z_{far})}{z_{near}-z_{far}} & \frac{2\cdot z_{near}\cdot z_{far}}{z_{near}-z_{far}} \\
0 & 0 & 1 & 0
\end{bmatrix}$$

$$x_{c}=\frac{2\cdot z_{near}}{r-l}x_{cam}+\frac{-(r+l)}{r-l}z_{cam}\\
y_{c}=\frac{2\cdot z_{near}}{t-b}y_{cam}+\frac{-(t+b)}{t-b}z_{cam}\\
z_{c}=\frac{-(z_{near}+z_{far})}{z_{near}-z_{far}}z_{cam}+\frac{2\cdot z_{near}\cdot z_{far}}{z_{near}-z_{far}}\\
w_{c}=z_{cam}\\$$

$$x_{d}=\frac{2\cdot z_{near}}{r-l}\frac{x_{cam}}{z_{cam}}+\frac{-(r+l)}{r-l}\\
y_{d}=\frac{2\cdot z_{near}}{t-b}\frac{y_{cam}}{z_{cam}}+\frac{-(t+b)}{t-b}\\
z_{d}=\frac{-(z_{near}+z_{far})}{z_{near}-z_{far}}+\frac{2\cdot z_{near}\cdot z_{far}}{(z_{near}-z_{far})\cdot z_{cam}}$$

You can check out that no matter which point in the camera space $$(x_{cam}, y_{cam}, z_{cam})$$ you multiply with $$frustumRH\_NO'$$, the resulting value after the perspective division $$(x_d, y_d, z_d)$$ remains identical to what you would obtain using the first version of the matrix. However, if you attempt to use the second version of the matrix in your OpenGL application, it would essentially draw nothing on the screen. What could be the reason for this? The answer lies within the definition of the clip volume as outlined in the OpenGL specifications we previously discussed, particularly in the third condition. 

$$
-w_c\leq z_c\leq w_c
$$

This condition only evaluates to true for $$z_c$$, and $$w_c$$ calculated using the $$frustumRH\_NO$$. Although the $$z_d$$ values after perspective division might yield similar results for two different matrices, primitives are clipped to the clip volume in clip space before reaching the NDC space. In the case of the $$frustumRH\_NO'$$ matrix, vertices inside the view volume will never satisfy the above condition. As a result, they are guaranteed to be clipped.

<br>

***

<br>

TODO: Deriving different versions of the perspective projection matrix based on their handedness and the dimension of the NDC.

$$frustumLH\_ZO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{z_{far}}{z_{far}-z_{near}} & \frac{-z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & 1 & 0
\end{bmatrix}$$

$$frustumLH\_NO=
\begin{bmatrix}
\frac{2\cdot z_{near}}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\
0 & \frac{2\cdot z_{near}}{t-b} & \frac{t+b}{t-b} & 0 \\
0 & 0 & \frac{z_{far}+z_{near}}{z_{far}-z_{near}} & \frac{-2\cdot z_{far}\cdot z_{near}}{z_{far}-z_{near}} \\
0 & 0 & 1 & 0
\end{bmatrix}$$

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

**Bibliograph**

<br>

[[**Songho08**]](http://www.songho.ca/opengl/gl_projectionmatrix.html) Songho Ahn. 2008. OpenGL Projection Matrix. http://www.songho.ca/opengl/gl_projectionmatrix.html<br>
[[**Wellings16**]](https://matthewwellings.com/blog/the-new-vulkan-coordinate-system/) Matthew Wellings. 2016. The New Vulkan Coordinate System. https://matthewwellings.com/blog/the-new-vulkan-coordinate-system/<br>

<br>