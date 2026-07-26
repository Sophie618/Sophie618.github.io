---
layout: page
title: Projects
permalink: /projects/
description: From research ideas to interactive prototypes in AI products, agent systems, and data visualization.
nav: true
nav_order: 2
---

<div class="demo-intro">
  <p>
    These projects explore a shared question: how can foundation-model capabilities move into real-world workflows
    through clear, low-friction human interaction? Each video is a complete product walkthrough and can be played directly.
  </p>
</div>

<div class="demo-list">
  <article class="demo-card featured-demo">
    <div class="demo-copy">
      <div class="demo-index">01 · AI PRODUCT</div>
      <h2>Collector+ <span>Turn saved content into active learning</span></h2>
      <p>
        A low-latency content assistant for information overload. It uses an LLM to reconstruct long-form text and video
        as binary prediction questions, turning passive reading into an intuition-driven game while preserving source-grounded Q&A.
      </p>
      <ul>
        <li>Linear-monolithic architecture and an asynchronous FastAPI pipeline with 15–30 second end-to-end generation</li>
        <li>General-purpose parsing for WeChat articles, Bilibili videos, and dynamically rendered pages</li>
        <li>React Context state management and structured prompt engineering</li>
      </ul>
      <div class="tech-row"><span>FastAPI</span><span>React</span><span>LLM</span><span>Prompt Engineering</span></div>
      <div class="project-links">
        <a href="https://github.com/YifeiWang0618/Creator_ai">GitHub ↗</a>
        <a href="https://collectorai.top/">Live Demo ↗</a>
      </div>
    </div>
    <div class="demo-media">
      <video controls preload="metadata" poster="{{ '/assets/img/sophie/collector-poster.jpg' | relative_url }}" playsinline>
        <source src="{{ '/assets/video/demos/collector-demo.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video playback.
      </video>
    </div>
  </article>

  <article class="demo-card">
    <div class="demo-copy">
      <div class="demo-index">02 · GENERATIVE UI</div>
      <h2>FitSnap <span>From video semantics to structured action</span></h2>
      <p>
        Converts unstructured instructional videos into actionable steps. A long-context model removes semantic noise,
        extracts actions, and aligns timestamps, while the frontend generates task-specific interfaces for fitness, cooking, and more.
      </p>
      <ul>
        <li>DeepSeek-V3 long-context understanding with schema-constrained JSON output</li>
        <li>Bidirectional synchronization between video timestamps and step cards</li>
        <li>Immersive, hands-busy navigation designed for real-world task execution</li>
      </ul>
      <div class="tech-row"><span>Next.js 16</span><span>React 19</span><span>DeepSeek-V3</span><span>Zustand</span></div>
      <div class="project-links"><a href="https://fit-snap-beige.vercel.app/">Live Demo ↗</a></div>
    </div>
    <div class="demo-media vertical-media">
      <video controls preload="metadata" poster="{{ '/assets/img/sophie/fitsnap-poster.jpg' | relative_url }}" playsinline>
        <source src="{{ '/assets/video/demos/fitsnap-demo.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video playback.
      </video>
    </div>
  </article>

  <article class="demo-card bigem-demo">
    <div class="demo-copy">
      <div class="demo-index">03 · DATA VISUALIZATION</div>
      <h2>BiGEM <span>2025 iGEM Best Software</span></h2>
      <p>
        A retrieval and visualization platform for iGEM data from 2004 to 2024. The project received a Gold Medal at
        the 2025 iGEM Competition and won Best Software in the undergraduate division.
      </p>
      <ul>
        <li>Python-based data collection, cleaning, and synthetic-biology knowledge linking</li>
        <li>D3.js and Three.js force-directed graphs, trees, and Sankey visualizations</li>
        <li>Fuzzy, expanded retrieval supported by LLM-based semantic analysis</li>
      </ul>
      <div class="tech-row"><span>React</span><span>D3.js</span><span>Three.js</span><span>Python</span></div>
      <div class="project-links">
        <a href="https://gitlab.igem.org/2025/software-tools/bit-china">Source ↗</a>
        <a href="https://2025.igem.wiki/bit-china/software">Project Wiki ↗</a>
      </div>
    </div>
    <div class="bigem-media-grid">
      <div>
        <p class="video-label">Software platform</p>
        <video controls preload="metadata" poster="{{ '/assets/img/sophie/bigem-poster.jpg' | relative_url }}" playsinline>
          <source src="{{ '/assets/video/demos/bigem-software-demo.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video playback.
        </video>
      </div>
      <div>
        <p class="video-label">Wiki interaction</p>
        <video controls preload="metadata" poster="{{ '/assets/img/sophie/bigem-poster.jpg' | relative_url }}" playsinline>
          <source src="{{ '/assets/video/demos/bigem-wiki-demo.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support embedded video playback.
        </video>
      </div>
    </div>
  </article>

  <article class="demo-card">
    <div class="demo-copy">
      <div class="demo-index">04 · AGENT SYSTEM</div>
      <h2>[WIP] Multi-Agent Shopping Assistant <span>Agentic commerce workflow</span></h2>
      <p>
        An MCP-based shopping assistant that connects an LLM to commerce backends through a standardized tool protocol,
        covering the full path from intent recognition and tool discovery to structured result visualization.
      </p>
      <ul>
        <li>Exploration of a Planner–Worker multi-agent collaboration architecture</li>
        <li>LLM → Router → MCP Server → Backend API tool chain</li>
        <li>Vue 3 conversational interface with structured product-card rendering</li>
      </ul>
      <div class="tech-row"><span>Python</span><span>Vue 3</span><span>MCP</span><span>RAG</span></div>
      <div class="project-links"><a href="https://github.com/YifeiWang0618/Multi-Agent">GitHub ↗</a></div>
    </div>
    <div class="demo-media">
      <video controls preload="metadata" poster="{{ '/assets/img/sophie/shopping-poster.jpg' | relative_url }}" playsinline>
        <source src="{{ '/assets/video/demos/shopping-demo.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support embedded video playback.
      </video>
    </div>
  </article>
</div>
