---
title: "Slicewise"
description: "An agent skill for dividing software development into milestones with verifiable slices"
date: "May 10 2026"
demoURL: ""
repoURL: "https://github.com/DiscRisknBisque/slicewise"
---

## Highlights

- More reliable than using a coding harness alone. Claude Code evals found an uplift in reliability slice drafting and open question follow-up compared to not using the skill.
- Suitable for novice and advanced developers alike thanks to guidance throughout the process.

## Overview

I like using agents to code, but I want to maintain knowledge of the codebase and ensure they stay on task. Frameworks like the BMAD Method handle this quite well, but product so much documentation output that I found myself glazing over while reading through it. To find a happy medium between extreme detail and vibe coding, I created Slicewise.

Slicewise is a universal Agent Skill for steering coding work through small, reviewable vertical slices. Vertical slices keep progress concrete. Each slice should produce behavior or an artifact that a reviewer can run, inspect, or discuss.

It provides the following benefits:

- Greater Reliability: While LLMs + coding harnesses generally understand slice-based development methodology, they don't take certain actions consistently, like failing to capture decisions. For eval results see Why Use This?.
- You Maintain Control: Vertical slices ensure implementation can be verified by you, the developer. Each slice is guided by questions you answer at the end of each previous slice.
- Reduced Planning Fatigue: Each slice is easier to consume than one long architecture document.
- Preserved Decision Traces: Decision documents are generated through the process, so nothing is lost during development.
- Reduced Risk: Any slice or milestone that goes bad can easily be discarded and replanned without losing a large amount of progress.

It is designed for any agentic coding harness that can read files, edit files, ask the user questions, and follow a skill prompt. The skill does not depend on a particular vendor, local app, automation service, or repository workflow.

## Ongoing Work

To make the system even easier to use, I'm working on a GUI harness wrapper. It adds automatic git management so it's even easier to manage slices, along with, and fun themes for pizza, cake, and pie.
