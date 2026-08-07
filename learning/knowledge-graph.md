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
- status: introduced
- depends-on: javascript-fundamentals
- introduced: 2026-08-06
- last-reviewed: 2026-08-06
- evidence: agreed backend runs in JS via Node as a direct consequence of Decision 1

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
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## three-js
- status: seed
- depends-on: javascript-fundamentals
- introduced: —
- last-reviewed: —
- evidence: —

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
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## css
- status: seed
- depends-on: html
- introduced: —
- last-reviewed: —
- evidence: —

## dom
- status: seed
- depends-on: html
- introduced: —
- last-reviewed: —
- evidence: —

## three-js-scene-camera-renderer
- status: seed
- depends-on: three-js
- introduced: —
- last-reviewed: —
- evidence: —

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
- status: seed
- depends-on: node-js
- introduced: —
- last-reviewed: —
- evidence: —

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
