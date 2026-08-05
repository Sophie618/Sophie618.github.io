---
layout: page
permalink: /blog/
title: "👋 Welcome to Yifei’Log"
browser_title: "Yifei'Log｜Yifei Wang"
nav_title: Blog
description: Hi, this is Yifei. I’m documenting my learning and research notes in this blog.
nav: true
nav_order: 4
---

{% assign sophie_posts = site.posts | where: "sophie_post", true %}

{% if sophie_posts.size > 0 %}

  <div class="blog-index-list" aria-label="Blog posts">
    {% for post in sophie_posts %}
      <article class="blog-index-entry">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        {% if post.description %}<p class="blog-index-summary">{{ post.description }}</p>{% endif %}
        <p class="blog-index-meta">
          Created on {{ post.date | date: '%B %d, %Y' }}
          <span data-goatcounter-path="{{ post.url }}"
            >&nbsp; · &nbsp;<i class="fa-regular fa-eye" aria-hidden="true"></i>
            <span class="goatcounter-count">--</span> views</span
          >
        </p>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p class="blog-index-empty">First notes are on the way.</p>
{% endif %}
