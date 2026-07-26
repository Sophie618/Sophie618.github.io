---
layout: about
title: About
permalink: /
subtitle: Undergraduate Student @ Beijing Institute of Technology
nav_order: 1

profile:
  align: right
  image: sophie/profile.jpg
  image_circular: true
  social_icons: true
  more_info: >
    <p><strong>Computer Science and Technology</strong></p>
    <p>Beijing Institute of Technology</p>

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="home-about">
  <p class="home-greeting">Hi, I am Yifei Wang (王艺霏). Feel free to call me Sophie.</p>

  <p>
    I am an undergraduate student in the Xu Teli Honors Program at
    <a href="https://www.bit.edu.cn/">Beijing Institute of Technology</a>, majoring in Computer Science and Technology.
    My current interests center on <strong>reinforcement learning with long-term memory, self-evolving models,
    recursive learning and self-improvement, multimodal foundation models, and model interpretability</strong>.
  </p>

  <p>
    I am interested in how agents can use memory as part of learning and decision-making, improve their own capabilities
    through recursive feedback loops, and evolve over long-horizon interactions. I also study multimodal representations
    and model interpretability.
  </p>

  <p>
    I welcome conversations about research collaborations and future opportunities. More background:
    <a href="{{ '/assets/pdf/wang-yifei-cv-en.pdf' | relative_url }}">English CV</a> /
    <a href="{{ '/assets/pdf/wang-yifei-cv.pdf' | relative_url }}">中文简历</a>.
  </p>

  <h2>Research Interests</h2>

  <ul class="research-list">
    <li>Reinforcement learning with long-term memory for adaptive agents</li>
    <li>Self-evolving models, recursive learning, and self-improvement</li>
    <li>Multimodal foundation models and agentic systems</li>
    <li>Model interpretability and brain–model semantic alignment</li>
  </ul>

  <h2>Research & Experience</h2>

  <div class="home-timeline">
    <div class="timeline-entry">
      <time>Apr 2026 — Jun 2026</time>
      <div>
        <h3>Product Solutions Intern · ByteDance Volcano Ark</h3>
        <p class="timeline-meta">AI Products & MaaS Solutions · Beijing</p>
        <p>Connected foundation-model capabilities with enterprise scenarios and practical product delivery paths.</p>
      </div>
    </div>

    <div class="timeline-entry">
      <time>Dec 2025 — May 2026</time>
      <div>
        <h3>Threader · Long-term Memory for Conversational Agents</h3>
        <p class="timeline-meta">Research collaboration with Tsinghua University · Co-author · NeurIPS 2026 under review</p>
        <p>Co-developed a lossless long-term memory framework using topic segmentation, multi-view encoding, and multi-signal retrieval.</p>
      </div>
    </div>

    <div class="timeline-entry">
      <time>Sep 2025 — May 2026</time>
      <div>
        <h3>SAIL · Brain–Model Semantic Alignment</h3>
        <p class="timeline-meta">Beijing Institute of Technology · Co-author · NeurIPS 2026 under review</p>
        <p>Studied interpretable multimodal representations by aligning sparse model features with fMRI signals from the human visual cortex.</p>
      </div>
    </div>

  </div>

  <h2>Selected Highlights</h2>

  <ul class="plain-highlights">
    <li><strong>Best Software & Gold Medal</strong> at the 2025 iGEM Competition.</li>
    <li><strong>Beijing First Prize</strong> in the China Undergraduate Mathematical Contest in Modeling.</li>
  </ul>

  <h2>Projects</h2>

  <p>
    Beyond research, I build interactive systems for gamified reading, structured video understanding, multi-agent shopping,
    and biological data visualization. See the <a href="{{ '/projects/' | relative_url }}">Projects & Demos</a> page for working videos and links.
  </p>

  <h2 id="latest-posts">Latest Posts</h2>

{% assign sophie_posts = site.posts | where: "sophie_post", true %}

{% if sophie_posts.size > 0 %}

  <div class="latest-placeholder" aria-label="Latest blog posts">
    {% for post in sophie_posts limit: 3 %}
    <div>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %Y" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>Read post</small>
    </div>
    {% endfor %}
  </div>
  {% else %}
  <div class="latest-placeholder" aria-label="Latest posts coming soon">
    <div>
      <time>Jul 2026</time>
      <span>Designing Memory for Long-Horizon AI Agents</span>
      <small>Coming soon</small>
    </div>
    <div>
      <time>Jun 2026</time>
      <span>From Video Streams to Structured, Actionable Instructions</span>
      <small>Coming soon</small>
    </div>
    <div>
      <time>May 2026</time>
      <span>Sparse Features as a Bridge Between Models and Brains</span>
      <small>Coming soon</small>
    </div>
  </div>
  {% endif %}
</div>
