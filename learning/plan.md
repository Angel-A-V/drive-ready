# Learning plan: DriveReady (working title) — 3D DMV Practice Simulator

## Locked decisions
- Core language: JavaScript, end to end — one language across frontend, 3D rendering, and backend instead of splitting attention across ecosystems.
- Frontend: Plain HTML/CSS/JavaScript + Three.js — avoids learning a UI framework and a 3D library simultaneously; React deliberately deferred to a separate side project.
- Backend: Node.js + Express — the de facto standard Node framework, largest community and beginner-doc coverage.
- Database: MongoDB — JSON-shaped documents match JS objects, keeping the data "shape" consistent through the whole stack.
- Hosting: Cloudflare (frontend) + Railway (backend) + MongoDB Atlas (database) — leverages the learner's existing hands-on experience with Cloudflare and Railway; Atlas offloads database security/ops to a managed service.
- Frontend tooling: no build tool for Section 1 (raw HTML/CSS opened directly); add Vite once Three.js needs npm packages in Section 2. Vite is a dev server/bundler, not a UI framework, so it doesn't conflict with the vanilla-JS decision above. Learner has used Vite in past projects but never learned how it actually works — Section 2 should teach the internals, not just drop it in as a familiar black box.

## Sections
### 1. A basic page rendering locally  [x] complete
**Deliverable:** A plain HTML/CSS page open and viewable in the browser, no server involved.
**Concepts:** html, css, dom

- [x] Set up the project folder and initialize git — concepts: git
- [x] Write a minimal HTML page and open it directly in the browser — concepts: html, dom
- [x] Style the page with CSS — concepts: css
- [x] Inspect the live page with browser dev tools to see the DOM — concepts: dom

### 2. A static Three.js scene  [ ] not started
**Deliverable:** A single 3D driving scenario rendering on the page with a controllable camera — "it exists and I can look around."
**Concepts:** three-js, three-js-scene-camera-renderer, 3d-geometry-materials, render-loop, camera-controls

- [x] Check for Node.js/npm and scaffold the project with Vite — concepts: node-js, npm-and-package-json
- [ ] Install Three.js and understand npm dependencies/imports — concepts: three-js
- [ ] Set up the basic scene, camera, and renderer — concepts: three-js-scene-camera-renderer
- [ ] Add a 3D object to the scene (geometry + material) — concepts: 3d-geometry-materials
- [ ] Add the render loop so it actually draws continuously — concepts: render-loop
- [ ] Add camera controls so you can look around the scene — concepts: camera-controls

### 3. A simple local server  [ ] not started
**Deliverable:** An Express server running locally that serves the page, instead of opening the file directly.
**Concepts:** node-js, express, npm-and-package-json, express-routes, localhost-and-ports

### 4. Talking to the server (APIs)  [ ] not started
**Deliverable:** The frontend fetches a list of scenarios from the server instead of it being hardcoded.
**Concepts:** http-request-response-cycle, fetch-api, json-format, rest-endpoint-design, rest-api

### 5. Remembering things (database)  [ ] not started
**Deliverable:** MongoDB wired in; a user can create an account and log back in, and it actually persists.
**Concepts:** mongodb, mongodb-schemas, environment-variables, password-hashing, db-connection

### 6. Core feature: scenarios, quizzes, flashcards  [ ] not started
**Deliverable:** Multiple scenarios, quiz questions, and flashcards pulled live from the database and usable end to end.
**Concepts:** data-modeling, crud-operations, dynamic-content-rendering, quiz-scoring-logic

### 7. Progress tracking  [ ] not started
**Deliverable:** A dashboard showing what the logged-in user has attempted and where they need work.
**Concepts:** user-sessions-auth, progress-data-queries

### 8. Going live (deployment)  [ ] not started
**Deliverable:** The real site, reachable at a URL, running on Cloudflare + Railway + Atlas.
**Concepts:** deployment, production-environment-variables, railway-deployment, cloudflare-deployment, atlas-connection

### 9. Finishing the MVP loop  [ ] not started
**Deliverable:** The full loop — log in, pick a scenario, practice, take a quiz, see progress update — works start to finish without you in the room.
**Concepts:** debugging-workflow, git, git-commit-practice, manual-end-to-end-testing
