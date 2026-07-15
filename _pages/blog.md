---
layout: page
permalink: /blog/
title: Blog
description: Notes on AI agents, multimodal learning, interpretability, and building human-centered systems.
nav: true
nav_order: 4
---

{% assign sophie_posts = site.posts | where: "sophie_post", true %}

<div class="blog-intro">
  <p>
    Research notes, project reflections, and ideas in progress. I write about long-horizon AI agents, multimodal systems,
    interpretable representations, and the process of turning model capabilities into useful products.
  </p>
</div>

{% if sophie_posts.size > 0 %}

  <div class="latest-placeholder blog-post-list" aria-label="Blog posts">
    {% for post in sophie_posts %}
      <div>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %Y" }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>{{ post.date | date: "%d %b" }}</small>
      </div>
    {% endfor %}
  </div>
{% else %}
  <div class="blog-placeholder">
    <p class="eyebrow">Writing in progress</p>
    <h2>First notes are on the way.</h2>
    <p>
      Planned topics include memory for long-horizon agents, structured interfaces for video understanding, and sparse
      representations as a bridge between models and the brain.
    </p>
  </div>
{% endif %}
