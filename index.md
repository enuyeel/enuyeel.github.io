---
title: /home
layout: default
permalink: /
---

>"Man, this is the greatest gig in the world, being alive. You get to, you get to eat at Denny’s, wear a hat, whatever you wanna do."
**— Norm Macdonald**

# Articles

{% for post in site.posts %}
>[{{ post.date | date_to_string }}<br>{{ post.title }}]({{ post.url }})
{% if forloop.index != site.posts.size %}
{% comment %} 
> ***
{% endcomment %} 
{% endif %}
{% endfor %}

# Demos

>[<font color='green'>Image Addition, Subtraction, Product, Negative, Log Transform, Power Transform, Connected Component Labeling</font><br />](/demos/imageProcessing/1)

>[<font color='green'>Histogram Equalization / Matching, Gaussian Smoothing, Sobel Operator, Unsharp Masking</font><br />](/demos/imageProcessing/2)

>[<font color='green'>Worley Crater</font><br />](https://www.shadertoy.com/view/DlXXWr)