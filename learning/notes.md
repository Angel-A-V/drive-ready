# Notes

<!-- Reference notes, written after real questions came up in a lesson. Not a substitute for the live quizzing — that's what actually keeps this stuff fresh — just a place to look something up if it slips. -->

## Why did `node` fail on the command line, but `npm` worked?
Windows Node.js was installed, but the actual binary is named `node.exe` — there's no plain file called `node`. Bash's PATH lookup matches the *exact* filename typed, so `node` found nothing even though `node.exe` was right there. `npm`, by contrast, ships an extra plain file literally named `npm` (a Unix-shell script, alongside `npm.cmd`/`npm.ps1` for Windows shells) — so `npm` matched immediately.
Fix: a small wrapper script named `node` that calls `node.exe`, plus adding the Windows Node folder to `PATH`.

## Why did Vite's scaffold overwrite `index.html` but leave `styles.css` alone?
Same "exact name" idea, different tool. Vite's vanilla template needs a file at exactly `index.html` to work as its entry point — so it writes/overwrites that file no matter what, even when you choose "ignore files and continue." Its own stylesheet lives at a *different* path, `src/style.css` — no name collision with the root `styles.css`, so that one was untouched.

## `dependencies` vs `devDependencies` in `package.json`
- **`devDependencies`** — tools needed only while *building* the project on your own machine. Vite is one: it bundles your source into final files, then its job is done. It never has to run in a visitor's browser.
- **`dependencies`** — code that's actually part of the shipped product and runs live. Three.js is one: its code executes in the browser every time the page loads, drawing the 3D scene.
- Quick test: *if I deleted this package right after deploying, would the live site break?* Delete Vite → fine. Delete Three.js → the scene stops rendering.

## What `npm install <package>` actually does
Two things, every time:
1. Downloads the package's code into `node_modules/`
2. Adds an entry to `package.json` (under `dependencies`, or `devDependencies` with the `--save-dev`/`-D` flag)

## Importing a local file vs an installed package
- Local file → needs a relative path: `import './style.css'`
- Installed package → just the package name, no `./`: `import * as THREE from 'three'` — Node/Vite know to look inside `node_modules` for a bare name like that.

## `THREE.REVISION`
A property Three.js exposes containing its own version number — a quick way to confirm the library actually loaded and which build you're running. Printed `185`, matching the `^0.185.1` installed in `package.json`.

## Geometry vs. material
- **Geometry** — the shape itself: raw vertex data (for `BoxGeometry(width, height, depth)`, the 8 corners of a box). Knows nothing about color or appearance.
- **Material** — how the surface looks: color, shininess, whether it reacts to light. Knows nothing about shape.
- A **`Mesh`** is what glues one geometry + one material together into a single object Three.js can actually draw. `scene.add(mesh)` is the Three.js-scene-graph equivalent of `document.body.appendChild(...)` for the DOM — same idea ("insert this into the tree the renderer walks"), different tree.

## `MeshBasicMaterial` ignores lighting — on purpose
`MeshBasicMaterial` always shows its flat, literal color, regardless of whether the scene has any lights. That's exactly why it's a good early choice: this scene has zero lights so far, and a *lit* material (like `MeshStandardMaterial`) would render pure black with no light to react to. Easy trap: it's tempting to think an unlit material is "showing you what light looks like hitting the object" — it's the opposite, it skips lighting math entirely.

## Object literal shorthand bug: `{FFC5D3}` vs `{ color: 0xFFC5D3 }`
`{ }` in JS holds key/value pairs. `{FFC5D3}` is actually valid syntax, but it means something specific: **shorthand** for `{ FFC5D3: FFC5D3 }` — a property named `FFC5D3` whose value comes from an existing variable of the same name. Since no such variable existed, this throws a `ReferenceError` at runtime. The fix is spelling out the key: `{ color: 0xFFC5D3 }`.
