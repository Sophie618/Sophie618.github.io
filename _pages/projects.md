---
layout: page
title: Projects & Demos
permalink: /projects/
description: 从研究想法到可交互原型：AI 应用、智能体系统与数据可视化。
nav: true
nav_order: 2
---

<div class="demo-intro">
  <p>
    这些项目围绕一个共同问题展开：如何让大模型能力进入真实工作流，并以清晰、低摩擦的交互服务于人。
    视频均为完整产品录屏，可直接播放。
  </p>
</div>

<div class="demo-list">
  <article class="demo-card featured-demo">
    <div class="demo-copy">
      <div class="demo-index">01 · AI PRODUCT</div>
      <h2>Collector+ <span>别让收藏夹继续吃灰</span></h2>
      <p>
        面向信息过载的低延迟内容提取助手。通过 LLM 将长文本与视频重构为二元预测性问题，
        以“直觉对赌”实现游戏化阅读，并支持对收藏内容的来源问答。
      </p>
      <ul>
        <li>Linear Monolithic + FastAPI 异步管道，端到端生成约 15–30 秒</li>
        <li>通用微信公众号 / B 站内容解析与动态页面处理</li>
        <li>React Context 全局状态与结构化 Prompt Engineering</li>
      </ul>
      <div class="tech-row"><span>FastAPI</span><span>React</span><span>LLM</span><span>Prompt Engineering</span></div>
      <div class="project-links">
        <a href="https://github.com/Sophie618/Creator_ai">GitHub ↗</a>
        <a href="https://collectorai.top/">Live Demo ↗</a>
      </div>
    </div>
    <div class="demo-media">
      <video controls preload="metadata" poster="{{ '/assets/img/sophie/collector-poster.jpg' | relative_url }}" playsinline>
        <source src="{{ '/assets/video/demos/collector-demo.mp4' | relative_url }}" type="video/mp4">
        你的浏览器暂不支持视频播放。
      </video>
    </div>
  </article>

  <article class="demo-card">
    <div class="demo-copy">
      <div class="demo-index">02 · GENERATIVE UI</div>
      <h2>FitSnap <span>视频语义到结构化行动</span></h2>
      <p>
        将非结构化教学视频实时转换为可执行步骤。大模型完成语义降噪、动作抽取与时间戳对齐，
        前端根据内容类型动态生成健身、烹饪等场景的专属 UI。
      </p>
      <ul>
        <li>DeepSeek-V3 长上下文理解与严格 JSON 结构化输出</li>
        <li>视频时间戳与步骤卡双向联动</li>
        <li>面向双手占用场景的沉浸式步骤导航</li>
      </ul>
      <div class="tech-row"><span>Next.js 16</span><span>React 19</span><span>DeepSeek-V3</span><span>Zustand</span></div>
      <div class="project-links"><a href="https://fit-snap-beige.vercel.app/">Live Demo ↗</a></div>
    </div>
    <div class="demo-media vertical-media">
      <video controls preload="metadata" poster="{{ '/assets/img/sophie/fitsnap-poster.jpg' | relative_url }}" playsinline>
        <source src="{{ '/assets/video/demos/fitsnap-demo.mp4' | relative_url }}" type="video/mp4">
        你的浏览器暂不支持视频播放。
      </video>
    </div>
  </article>

  <article class="demo-card">
    <div class="demo-copy">
      <div class="demo-index">03 · AGENT SYSTEM</div>
      <h2>Multi-Agent Shopping Assistant <span>Work in progress</span></h2>
      <p>
        基于 MCP 协议的电商智能助手平台。系统以标准化工具协议连接 LLM 与电商后端，
        验证从意图识别、工具发现到结果可视化的完整数据链路。
      </p>
      <ul>
        <li>Planner–Worker 多智能体协作架构探索</li>
        <li>LLM → Router → MCP Server → Backend API 工具链</li>
        <li>Vue 3 对话界面与商品卡片渲染</li>
      </ul>
      <div class="tech-row"><span>Python</span><span>Vue 3</span><span>MCP</span><span>RAG</span></div>
      <div class="project-links"><a href="https://github.com/Sophie618/Multi-Agent">GitHub ↗</a></div>
    </div>
    <div class="demo-media">
      <video controls preload="metadata" poster="{{ '/assets/img/sophie/shopping-poster.jpg' | relative_url }}" playsinline>
        <source src="{{ '/assets/video/demos/shopping-demo.mp4' | relative_url }}" type="video/mp4">
        你的浏览器暂不支持视频播放。
      </video>
    </div>
  </article>

  <article class="demo-card bigem-demo">
    <div class="demo-copy">
      <div class="demo-index">04 · DATA VISUALIZATION</div>
      <h2>BiGEM <span>2025 iGEM Best Software</span></h2>
      <p>
        面向 2004–2024 年 iGEM 数据的数据检索与可视化平台。项目获得 2025 iGEM 国际金奖，
        并获全球本科生组 Best Software。
      </p>
      <ul>
        <li>Python 数据抓取、清洗与合成生物学知识关联</li>
        <li>D3.js / Three.js 力导向图、树状图与桑基图</li>
        <li>结合大模型语义分析的模糊扩展检索</li>
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
          你的浏览器暂不支持视频播放。
        </video>
      </div>
      <div>
        <p class="video-label">Wiki interaction</p>
        <video controls preload="metadata" poster="{{ '/assets/img/sophie/bigem-poster.jpg' | relative_url }}" playsinline>
          <source src="{{ '/assets/video/demos/bigem-wiki-demo.mp4' | relative_url }}" type="video/mp4">
          你的浏览器暂不支持视频播放。
        </video>
      </div>
    </div>
  </article>
</div>
