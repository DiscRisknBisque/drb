---
title: "Trail Mix"
description: "Enhances Meta's Coconut Latent Reasoning method with better graph navigation performance and token efficiency."
date: "Jul 18 2025"
demoURL: ""
repoURL: "https://github.com/DiscRisknBisque/coconut/tree/gnn-encoder"
---

## Highlights

- Extended Meta's Coconut method for training models to reason in continuous latent space with a graph neural network encoder.
- Results were positive: an uplift in accuracy from 97->98.2% 0-shot and a reduction in token usage of nearly 50% to only 8 per attempt.
- Ongoing work includes a "latent cartographer" to expose the model's graph exploration in an auditable way.

## Overview

As part of Obtego, we needed to ensure the most accurate possible retrieval from a knowledge graph, even in scenarios where the question was abstract. Because of this, I explored approaches for retreival from knowledge graphs and

Reasoning in cotinuous latent space feeds a models activations back into itself on each transformer pass rather than tokenizing it back in to natural language, preserving a superposition of activations that allows for better multi-arm graph exploration. The latent space isn't collapsed down to the token space until the last step, at which time the model produces its answer.

Meta produced a method called Coconut for training any open-weight model to perform this type of reasoning, with the predicted strong results on knowledge graph exploration. The paper tests graph exploration on a knowledge graph called ProsQA, a more complex variant of ProntoQA. Both datasets contain a knowledge graph with interconnected nonsense concepts, such as "Bob is a wumpus", so that

I extended this approach with a graph neural network (GNN) encoding layer that takes in the . Inspired by Harvard's work on KGARevion...

The results were encouraging. An uplift of..., putting it on par with other approaches like {}CoT.

## Ongoing Work

There is one caveat with latent reasoning appraoches: the inability for introspection of the chain of thought. I'm working on what I call a latent cartographer to inspect and project the activation superpositions back onto the graph so we can chart the path of exploration as a visual CoT.
