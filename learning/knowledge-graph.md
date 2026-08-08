# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## javascript-fundamentals
- status: introduced
- depends-on: none
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: explained why one language end-to-end avoids splitting attention across ecosystems

## node-js
- status: practicing
- depends-on: javascript-fundamentals
- introduced: 2026-08-06
- last-reviewed: 2026-08-08
- evidence: agreed backend runs in JS via Node as a direct consequence of Decision 1; diagnosed (with guidance) why `node` failed to resolve on Windows/WSL while `npm` worked — landed on the exact-filename-match mechanism (`node.exe` vs a plain `npm` script) after two guesses

## express
- status: introduced
- depends-on: node-js
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: explained why a framework with a bigger community/docs matters more than a "technically better" niche one

## mongodb
- status: introduced
- depends-on: javascript-fundamentals
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: explained why JSON-shaped data end-to-end reduces the number of new connection styles to learn

## vanilla-frontend-approach
- status: introduced
- depends-on: javascript-fundamentals
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: recognized combining Three.js + a UI framework simultaneously would be a rougher start

## managed-hosting-services
- status: introduced
- depends-on: none
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: explained why offloading database security/ops to a managed service (Atlas) makes sense at this stage

## typescript
- status: seed
- depends-on: javascript-fundamentals
- introduced: —
- last-reviewed: —
- evidence: —

## react
- status: seed
- depends-on: javascript-fundamentals
- introduced: —
- last-reviewed: —
- evidence: —

## react-three-fiber
- status: seed
- depends-on: react, three-js
- introduced: —
- last-reviewed: —
- evidence: —

## sql
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## git
- status: practicing
- depends-on: none
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: ran git init/add/commit hands-on for the first commit; correctly predicted staging behavior; initially thought a repo gets a "name" from its folder, corrected after seeing real `git init` output

## three-js
- status: practicing
- depends-on: javascript-fundamentals
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: ran `npm install three` and correctly predicted both effects (node_modules entry + package.json update) before checking; after guidance, explained the dependencies-vs-devDependencies split (Vite is a build-time tool, Three.js code ships and runs in the browser); wrote the `import * as THREE from 'three'` line himself; correctly predicted the page would render cleanly and the console would log a version number, then confirmed it printed 185, matching the installed package.json version

## github-remote
- status: practicing
- depends-on: git
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: used `gh repo create --source=. --remote=origin` and `git push -u origin main` hands-on; correctly predicted the repo would appear on GitHub's site, initially expected push output to mirror commit's insertion stats — corrected after seeing real output (push reports remote branch state, not a file diff)

## rest-api
- status: seed
- depends-on: express
- introduced: —
- last-reviewed: —
- evidence: —

## deployment
- status: seed
- depends-on: git, managed-hosting-services
- introduced: —
- last-reviewed: —
- evidence: —

## html
- status: practicing
- depends-on: none
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: wrote title and h1 fill-ins in index.html himself; correctly predicted what the tab title and page heading would show before opening the file in the browser

## css
- status: practicing
- depends-on: html
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: filled in background-color and h1 color values in styles.css himself and correctly predicted the visual result; correctly predicted that a typo'd property (`colr`) would be silently ignored rather than error, showing real understanding of CSS's forgiving parser

## dom
- status: practicing
- depends-on: html
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly predicted (before trying) that a live edit to h1 text in DevTools would not change index.html on disk, and that refreshing would revert the edit; confirmed both hands-on and explained the file-vs-live-DOM distinction in his own words

## three-js-scene-camera-renderer
- status: practicing
- depends-on: three-js
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: filled in `camera.position.z = 5` himself; correctly predicted the page would show no visible shape (empty scene, nothing to render) before checking; after refreshing, correctly explained why the canvas appeared solid black (WebGL's default clear color) and why the `<h1>` was still visible (canvas just appended after it in normal document flow, not replacing it)

## 3d-geometry-materials
- status: seed
- depends-on: three-js
- introduced: —
- last-reviewed: —
- evidence: —

## render-loop
- status: seed
- depends-on: three-js
- introduced: —
- last-reviewed: —
- evidence: —

## camera-controls
- status: seed
- depends-on: three-js
- introduced: —
- last-reviewed: —
- evidence: —

## npm-and-package-json
- status: practicing
- depends-on: node-js
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: explained package.json as the manifest listing scripts/dependencies; ran `npm create vite@latest .` himself and, without being told, correctly reasoned that `index.html` got overwritten because Vite's scaffold needs a file at that exact name/path, while `styles.css` survived because Vite's stylesheet lives at a different path — applying the exact-name-match idea from the node/npm case to a new situation; distinguished `dependencies` (ships/runs in the final product) from `devDependencies` (build-time only) after guided discussion

## express-routes
- status: seed
- depends-on: express
- introduced: —
- last-reviewed: —
- evidence: —

## localhost-and-ports
- status: seed
- depends-on: node-js
- introduced: —
- last-reviewed: —
- evidence: —

## http-request-response-cycle
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## fetch-api
- status: seed
- depends-on: http-request-response-cycle
- introduced: —
- last-reviewed: —
- evidence: —

## json-format
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## rest-endpoint-design
- status: seed
- depends-on: express-routes
- introduced: —
- last-reviewed: —
- evidence: —

## mongodb-schemas
- status: seed
- depends-on: mongodb
- introduced: —
- last-reviewed: —
- evidence: —

## environment-variables
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## password-hashing
- status: seed
- depends-on: express
- introduced: —
- last-reviewed: —
- evidence: —

## db-connection
- status: seed
- depends-on: mongodb, express
- introduced: —
- last-reviewed: —
- evidence: —

## data-modeling
- status: seed
- depends-on: mongodb-schemas
- introduced: —
- last-reviewed: —
- evidence: —

## crud-operations
- status: seed
- depends-on: mongodb-schemas, rest-endpoint-design
- introduced: —
- last-reviewed: —
- evidence: —

## dynamic-content-rendering
- status: seed
- depends-on: dom, fetch-api
- introduced: —
- last-reviewed: —
- evidence: —

## quiz-scoring-logic
- status: seed
- depends-on: javascript-fundamentals
- introduced: —
- last-reviewed: —
- evidence: —

## user-sessions-auth
- status: seed
- depends-on: password-hashing
- introduced: —
- last-reviewed: —
- evidence: —

## progress-data-queries
- status: seed
- depends-on: mongodb-schemas
- introduced: —
- last-reviewed: —
- evidence: —

## production-environment-variables
- status: seed
- depends-on: environment-variables
- introduced: —
- last-reviewed: —
- evidence: —

## railway-deployment
- status: seed
- depends-on: deployment
- introduced: —
- last-reviewed: —
- evidence: —

## cloudflare-deployment
- status: seed
- depends-on: deployment
- introduced: —
- last-reviewed: —
- evidence: —

## atlas-connection
- status: seed
- depends-on: mongodb, deployment
- introduced: —
- last-reviewed: —
- evidence: —

## debugging-workflow
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## git-commit-practice
- status: seed
- depends-on: git
- introduced: —
- last-reviewed: —
- evidence: —

## manual-end-to-end-testing
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —
