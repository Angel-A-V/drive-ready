# Project: DriveReady (working title) — 3D DMV Practice Simulator

## About me
- 5th-year Computer Science and Engineering major, job-hunting in the field soon
- Has written code before (websites, class algorithms) but leans heavily on AI/prompt engineering to move fast — wants to rebuild the muscle of coding it himself
- Comfortable with basic terminal commands (mkdir, ls, cd, deleting files), wants to go deeper
- Has built small personal web/app projects before (an anniversary website, a date-rating app, 3D-printed designs) mostly AI-assisted
- Outside interests: hiking, running, working out, gaming online

## The idea
A website that helps users prepare for the California DMV driving test through interactive 3D scenarios (built with Three.js), flashcards, and quizzes, with login accounts and progress tracking showing what they still need to improve. Motivated by the learner's own experience that the DMV handbook alone didn't prepare him for his test.

## MVP
### In
- Login/password (user accounts)
- 3–5 Three.js 3D scenarios covering high-value DMV concepts (e.g. stop signs, right-of-way, parking, signals)
- Quiz section on the covered topics
- Flashcards for the same topics
- Basic progress tracking (what's been attempted, what needs work)
- Scope: California DMV rules only

### Parking lot (v2)
- Multi-state DMV support
- DMV handbook access + AI-highlighted sections for missed questions
- $5 one-time payment / paywall
- Additional scenarios beyond the initial set

## The trunk — core components
### Source control (Git)
The save-and-undo system professionals use to track every change to the code over time and roll back if something breaks. In from day one.

### Frontend (the website itself)
What runs in the user's browser: pages, navigation, the quiz and flashcard UI, the progress dashboard — what the user actually sees and clicks.

### 3D rendering (Three.js)
The layer that draws and animates the driving scenarios in 3D inside the browser. Called out separately from the rest of the frontend because it's its own discipline (3D math, cameras, models, scene setup) — the core new skill this project is built around learning.

### Backend (the server)
The program running behind the scenes that makes decisions and enforces rules the browser can't be trusted with: checking login credentials, grading quiz answers, calculating progress. The logic layer.

### Database
Where data is permanently stored between visits: user accounts, quiz/flashcard content, each user's progress. The memory layer — without it, everything resets on tab close.

### API (how frontend and backend talk)
The agreed-upon way the browser asks the server for things ("log this user in," "save this quiz score") and gets answers back.

### Deployment
The process and place that turns code running only on a laptop into a real website live at a URL anyone can visit.
