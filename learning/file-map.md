# File map

<!-- Every file/folder is either explained or parked — no mystery boxes. -->
<!-- known: explained in the learner's own words | parked: honest one-liner for now, deep dive scheduled | generated: machine-made, never edit, always rebuildable -->

## /
- learning/project.md — known (2026-08-06) — your project, MVP, and trunk
- learning/plan.md — known (2026-08-06) — the build plan and locked decisions
- learning/knowledge-graph.md — known (2026-08-06) — the living map of what you actually know → [[javascript-fundamentals]]
- learning/file-map.md — known (2026-08-06) — this file: why every file in the repo exists
- learning/notes.md — known (2026-08-08) — reference notes on real questions/explanations from lessons, for lookup (not a substitute for live quizzing)
- .git/ — generated (2026-08-06) — created by `git init`; holds the full commit history, never edit directly → [[git]]
- index.html — known (2026-08-08) — the homepage; now Vite's entry point (loads `src/main.js` as a module) instead of a plain file you open directly → [[html]]
- styles.css — known (2026-08-08) — styling for index.html, linked via `<link rel="stylesheet">` → [[css]]
- learning/environment.md — known (2026-08-08) — records that lessons should write commands for WSL bash on this machine
- package.json — known (2026-08-08) — project manifest: name, `dev`/`build`/`preview` scripts, and dependencies (currently just Vite) → [[npm-and-package-json]]
- package-lock.json — generated (2026-08-08) — exact locked versions of every installed package and sub-dependency; never hand-edited → [[npm-and-package-json]]
- node_modules/ — generated (2026-08-08) — downloaded package code from npm install; gitignored, never edited, rebuildable via `npm install` → [[npm-and-package-json]]
- .gitignore — known (2026-08-08) — added by the Vite scaffold; excludes node_modules, build output, editor files from git
- src/main.js — known (2026-08-08) — JS entry point loaded by index.html; sets up the Three.js Scene, Camera, and Renderer and appends the render canvas to the page → [[three-js]] [[three-js-scene-camera-renderer]]
- public/favicon.svg — known (2026-08-08) — browser tab icon, referenced by index.html's `<link rel="icon">`
