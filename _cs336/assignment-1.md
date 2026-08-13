---
title: "Assignment 1: BPE Tokenizer & Transformer Basics"
description: Assignment 1 笔记占位页。结构可按 Part 拆分，右侧 TOC 会跟着标题生成。
view_count_path: /blog/cs336/lecture-1/
giscus_comments: true
prev_page:
  title: "Lecture 1: Intro & Tokenization"
  path: /blog/cs336/lecture-1/
---

## Part 1: BPE Tokenizer

### 1.1 为什么需要 BPE？

在这里写 byte-level 与 subword-level 的取舍。

### 1.2 训练流程

Vocabulary initialization → pre-tokenization → merges。

### 1.3 Pre-tokenization

记录 GPT-2 正则、语义边界保护、以及实现时的坑。

## Part 2: Transformer 基础构建块

### Linear / Embedding / RMSNorm

把 `nn.py` 里你真正卡住或想记住的细节写在这里。

## Part 3: 激活与 FFN

SiLU、SwiGLU、以及 `d_ff` 对齐策略。

## Part 4: RoPE

相对位置如何进入 QK 点积；cos/sin cache 为什么要 `register_buffer(..., persistent=False)`。
