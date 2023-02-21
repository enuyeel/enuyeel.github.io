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

# Thingamajig

<blockquote>
<!-- <blockquote style="margin:auto;"> -->

<!-- <div style="margin: 0 auto;"> -->

<div class="demo-image-container">
  <a href="https://www.shadertoy.com/view/dtBXWG">
    <img class="demo-image" id="demo-image0" src="/assets/demo0_1920x1080.png">
  </a>
</div>

<div class="demo-image-container">
  <a href="https://www.shadertoy.com/view/DlXXWr">
    <img class="demo-image" id="demo-image1" src="/assets/demo1-2_1920x1080.png">
  </a>
</div>

<div class="demo-image-container">
  <a href="https://www.shadertoy.com/view/DtsXDH">
    <img class="demo-image" id="demo-image2" src="/assets/demo2_1920x1080.png">
  </a>
</div>

<div class="clear"></div>

</blockquote>
