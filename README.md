# Aseprite AI Studio documentation

Public VitePress GDD and workflow handbook. [Read the published documentation](https://abhisekp.github.io/aseprite-ai-studio-docs/).

This repository contains documentation only. Desktop source, personal Aseprite binaries, model weights, credentials and private artwork are not distributed here.

## Edit and preview

Use Node.js 26, run `npm ci`, then `npm run docs:dev`. Run `npm run docs:build` to check all pages before pushing. `handbook/gdd.md` is the main GDD. The document describes the creative tool, not a separate combat game.

## Automated publication

Main-branch changes run the pinned GitHub Pages workflow. Pull requests build without publishing. The Pages deployment is public; review documentation before merging. The desktop app includes a versioned offline snapshot of this canonical handbook. VitePress 2 alpha is pinned for its current Vite toolchain and relocatable static output; builds are tested rather than assumed compatible.
