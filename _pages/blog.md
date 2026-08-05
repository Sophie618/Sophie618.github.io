---
layout: page
permalink: /blog/
title: Blog
description: Notes on agent memory, recursive self-improvement, learning, and growth.
nav: true
nav_order: 4
---

{% assign sophie_posts = site.posts | where: "sophie_post", true %}

<header class="blog-header">
  <p class="blog-kicker">Notes, questions, and ideas in progress</p>
  <h1>Writing 📝</h1>
  <p class="blog-lede">
    A place for research notes on agents and for the things I learn while growing as a researcher and builder.
  </p>
</header>

<section class="blog-topics" aria-labelledby="writing-topics">
  <h2 id="writing-topics">What I write about</h2>
  <div class="blog-topic-grid">
    <article>
      <span>01</span>
      <h3>Agent Memory</h3>
      <p>How agents retain, retrieve, revise, and use experience over long horizons.</p>
    </article>
    <article>
      <span>02</span>
      <h3>RSI</h3>
      <p>Recursive self-improvement, self-evolving models, and systems that learn how to improve themselves.</p>
    </article>
    <article>
      <span>03</span>
      <h3>Learning Notes</h3>
      <p>Paper reading, technical ideas, experiments, and concepts worth making precise.</p>
    </article>
    <article>
      <span>04</span>
      <h3>Reflections</h3>
      <p>Small records of research life, personal growth, changing beliefs, and lessons learned.</p>
    </article>
  </div>
</section>

<div class="blog-section-heading">
  <h2>All Posts</h2>
  <span>{{ sophie_posts.size }} {% if sophie_posts.size == 1 %}entry{% else %}entries{% endif %}</span>
</div>

{% if sophie_posts.size > 0 %}
  <ol class="blog-archive" aria-label="Blog posts">
    {% for post in sophie_posts %}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">
          <span>{{ post.date | date: "%Y" }}</span>
          {{ post.date | date: "%b %d" }}
        </time>
        <div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
          {% if post.tags.size > 0 %}
            <div class="blog-post-tags" aria-label="Tags">
              {% for tag in post.tags %}<span>{{ tag | replace: '-', ' ' }}</span>{% endfor %}
            </div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ol>
{% else %}
  <div class="blog-placeholder">
    <p class="eyebrow">Writing in progress</p>
    <h2>First notes are on the way.</h2>
    <p>Planned topics include memory for long-horizon agents, recursive self-improvement, and notes from research and life.</p>
  </div>
{% endif %}
