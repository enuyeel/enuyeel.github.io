---
title: /home
layout: home
permalink: /
---

>"Man, this is the greatest gig in the world, being alive. You get to, you get to eat at Denny’s, wear a hat, whatever you wanna do." — Norm Macdonald

<div style="border-top: var(--border); margin-bottom: 25px; margin-top: 25px;"></div>

># <u>Articles</u>

{% for post in site.posts %}
>[{{ post.date | date_to_string }}<br>{{ post.title }}]({{ post.url }})
{% if forloop.index != site.posts.size %}
{% comment %} 
> ***
{% endcomment %} 
{% endif %}
{% endfor %}

<div style="border-top: var(--border); margin-bottom: 25px; margin-top: 25px;"></div>

># <u>Thingamajig</u>

<blockquote>

<div class="grid">

  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/cs33R2">
      <img src="/assets/demo7_1920x1080.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/dtBXWG">
      <img src="/assets/demo0_1920x1080.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/DlXXWr">
      <img src="/assets/demo1-2_1920x1080.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/DtsXDH">
      <img src="/assets/demo2_1920x1080.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo2">
      <img src="/assets/demo5-2_512x512.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo0">
      <img src="/assets/demo3-2_1600x900.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo1">
      <img src="/assets/demo4-2_1600x900.png">
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo3">
      <img src="/assets/demo6-2_1600x900.png">
    </a>
  </div>

</div>

</blockquote>