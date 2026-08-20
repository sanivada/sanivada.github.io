---
title: "Notes on Nathan Lambert's tool use lecture"
description: "and answers to questions I had while watching the lecture"
pubDate: 2026-08-20
tags: ["tool calling", "harness"]
draft: false
---

>Disclaimer: These notes don't contain everything from the lecture, only things that I find interesting, not-obvious, or things I didn't understand at first (but then had to research) 

Models can only emit tokens and cannot interact directly with the world, so we need a system that performs real world actions based on model's instructions. Just like the human brain (and the nervous system), which can only interact with the outside world using the physical body.

An AI today usually means LLM (the model) + tools + harness.

**LLM model** (weights + architecture): the trained network. Source of knowledge, capabilities, personality, style, and more. Analogous to human brain.

**Tools**: Pre-defined actions that the model can request (eg: search, file edits, code execution, APIs). Simplest human analogy is arms & legs - brain sends a signal --> arms and legs respond by moving.

**Harness**: It is the software loop around the model which keeps the interaction with the user running, executes the tools, feeds the result back to the model, manages context. Analogous to rest of the human body which keeps everything running.

**How is function calling different from tool calling?**

Both of these are often used interchangeably these days but there's a small distinction. Function calling is a mechanism for the model to emit a structured schema request to invoke a specific programming function. Tool calling is more general, it means using external capabilities to accomplish a task. Tools can be code interpreter, file editor, database queries, a physical robot action.

**Why are tool call outputs masked from the loss during training?**

While training LLMs, we ask the models to predict tokens based on a given context. We calculate loss based on how good the model is able to predict the correct token. We then try to minimize this loss.

Masking tool call outputs from training loss means we do not ask the model to predict the tool output tokens (so no loss is calculated for these tokens). This is because we do not want the model to learn external tools. We want the model to learn when to call the tool and how to use the tool output to make an informed decision.

This is also the same reason user queries are also usually masked from training loss.

**Reasoning token continuity**: All frontier models are reasoning models these days, and they spend some tokens reasoning before either responding to the user or calling a tool. These reasoning traces are usually preserved between tool calls within a turn (meaning till the model has finished responding), but they are erased between turns to reduce serving costs. But this serving design choice and varies between model providers.


**References**:

- [Lecture Video](https://www.youtube.com/watch?v=GMry2DzC304&list=PLL1tdVxB1CpVpEtMHxwuR4uI4Lxjw00_y&index=21)
- [Tool Use Chapter: RLHF book](https://rlhfbook.com/c/13-tools)
