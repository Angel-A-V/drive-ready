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
