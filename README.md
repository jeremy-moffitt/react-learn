# React Learning Path

A browser-based tutorial for learning React fundamentals and intermediate patterns. It includes ten short lessons, formatted code examples, course navigation, completion progress, and a working counter demo.

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite 7)
- npm

## Install and run

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`) in a browser. Stop the server with `Ctrl+C`.

## Build and preview

Create and locally preview a production build:

```bash
npm run build
npm run preview
```

The generated site is written to `dist/`. Deploy the contents of that folder to a static web host.

## Add a lesson

Lessons are defined as objects in `src/lessons.js`. Add another object to the `lessons` array with a unique `id`, title, summary, intro, takeaways, and one or more sections. Each section supplies a heading, explanation, code label, language, and code string; the lesson navigation and progress count update from the array automatically. A lesson can optionally set `demo: "counter"` to show the interactive counter.
