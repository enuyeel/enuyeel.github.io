---
title: /blog
layout: default
permalink: /blog
---

{% for post in site.posts %}
>[{{ post.date | date_to_string }}<br>{{ post.title }}]({{ post.url }})
{% if forloop.index != site.posts.size %}
> ***
{% endif %}
{% endfor %}