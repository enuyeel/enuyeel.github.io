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

<div class="grid" data-masonry='{ 
  "itemSelector": ".grid-item", 
  "columnWidth": ".grid-sizer",
  "gutter": ".gutter-sizer",
  "percentPosition": true }'>

  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/Dsy3RK">
      <img srcset="/assets/importance_sampling_visualized_1920x1080.png 1920w,
                   /assets/importance_sampling_visualized_1440x810.png 1440w,
                   /assets/importance_sampling_visualized_960x540.png 960w" alt="">
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/cs33R2">
      <img srcset="/assets/demo7_1920x1080.png 1920w,
                   /assets/demo7_1440x810.png 1440w,
                   /assets/demo7_960x540.png 960w" alt="">
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/dtBXWG">
      <img srcset="/assets/demo0_1920x1080.png 1920w,
                   /assets/demo0_1440x810.png 1440w,
                   /assets/demo0_960x540.png 960w" alt="">     
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/DlXXWr">
      <img srcset="/assets/demo1-2_1920x1080.png 1920w,
                   /assets/demo1-2_1440x810.png 1440w,
                   /assets/demo1-2_960x540.png 960w" alt="">   
    </a>
  </div>

  <div class="grid-item">
    <a href="https://www.shadertoy.com/view/DtsXDH">
      <img srcset="/assets/demo2_1920x1080.png 1920w,
                   /assets/demo2_1440x810.png 1440w,
                   /assets/demo2_960x540.png 960w" alt="">   
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo2">
      <img srcset="/assets/demo5-2_512x512.png 512" alt="">   
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo0">
      <img srcset="/assets/demo3-2_1600x900.png 1600w,
                   /assets/demo3-2_1200x675.png 1200w,
                   /assets/demo3-2_800x450.png 800w" alt="">   
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo1">
      <img srcset="/assets/demo4-2_1600x900.png 1600w,
                   /assets/demo4-2_1200x675.png 1200w,
                   /assets/demo4-2_800x450.png 800w" alt="">   
    </a>
  </div>

  <div class="grid-item">
    <a href="/demo3">
      <img srcset="/assets/demo6-2_1600x900.png 1600w,
                   /assets/demo6-2_1200x675.png 1200w,
                   /assets/demo6-2_800x450.png 800w" alt="">   
    </a>
  </div>

</div>

</blockquote>