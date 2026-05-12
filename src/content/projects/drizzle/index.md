---
title: "Drizzle"
description: "A collection of libraries to simplify development of your dApps in Vanilla JS, React and Vue."
date: "Jul 18 2017"
demoURL: "https://archive.trufflesuite.com/docs/drizzle/"
repoURL: "https://github.com/ConsenSys-archive/drizzle"
---

## Highlights

- First framework to easily synchronize on-chain smart contract state with a dApp's frontend. Essentially a precursor to [WAGMI](https://wagmi.sh/).
- Framework agnostic with official React and Vue integrations.
- Notable users include Ubisoft, who used Drizzle to power the frontend of their Raving Rabbids web3 game.
- Peaked at over 2.8k downloads per month; 70k lifetime.

## Overview

After creating Truffle Boxes to make it easier to get started creating fullstack decentralized applications (dApps), I wanted to further reduce the boilerplate associated with synchronizing smart contract state on a blockchain with the state of a dApps's frontend. At the time, developers had to setup the plumbing, which was a multi-step process. Drizzle handled all of this for them:

1. Once initialized, Drizzle instantiates a connector library so we can query blockchain state and connect to a user's wallet (`web3JS`).
2. Initialize the desired smart contracts.
3. Observe the chain by subscribing to new block headers.
4. Using the connection library and initialized contract details, keep track of contract calls so we knows what to synchronize.
5. When a new block header comes in, check that the block isn't pending, then check if any transactions in the block touched our contracts.
6. If they did, replay the calls already in the store to refresh any potentially altered data. If they didn't we continue with the store data. Later, using our work with `truffle-decoder`, we were able to fetch contract state wholesale for an even quicker experience.

We officially supported integration with React via a suite of components, but purposefully kept the system agnostic so it could be used in other frameworks or vanilla JS.
