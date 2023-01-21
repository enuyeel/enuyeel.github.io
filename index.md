---
title: /home
layout: default
permalink: /
---

>"Man, this is the greatest gig in the world, being alive. You get to, you get to eat at Denny’s, wear a hat, whatever you wanna do."
**— Norm Macdonald**

# Blogs

{% for post in site.posts %}
>[{{ post.date | date_to_string }}<br>{{ post.title }}]({{ post.url }})
{% if forloop.index != site.posts.size %}
{% comment %} 
> ***
{% endcomment %} 
{% endif %}
{% endfor %}

# Demos

>[<font color='green'>Image Addition, Subtraction, Product, Negative, Log Transform, Power Transform, Connected Component Labeling</font><br />OpenGL / GLSL / C++<br />*<font color='red'>Req. WebGL2 enabled.</font>*](/demos/imageProcessing/1)
<!-- <br /> -->

>[<font color='green'>Histogram Equalization / Matching, Gaussian Smoothing, Sobel Operator, Unsharp Masking</font><br />OpenGL / GLSL / C++<br />*<font color='red'>Req. WebGL2 enabled.</font>*](/demos/imageProcessing/2)
<!-- <br /> -->