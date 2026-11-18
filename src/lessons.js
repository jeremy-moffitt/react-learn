export const lessons = [
  {
    id: "setup",
    title: "Set up a new React app",
    shortTitle: "Set up an app",
    duration: "5 min",
    summary: "Create a modern React project and know what its starter files do.",
    intro:
      "A React app is JavaScript and UI code that a development tool bundles for the browser. Vite gives you a quick project setup, a local development server, and a production build.",
    takeaways: [
      "Use a supported Node.js version before creating a project.",
      "Vite scaffolds the app and installs its development tools.",
      "The src folder is where your application code lives.",
    ],
    sections: [
      {
        heading: "Create the project",
        body: "Run these commands in a terminal. The template option creates a JavaScript React starter; choose a different folder name if you like.",
        codeLabel: "Terminal",
        language: "bash",
        code: "npm create vite@latest my-react-app -- --template react\ncd my-react-app\nnpm install",
      },
      {
        heading: "Know the important files",
        body: "Vite starts at index.html, which loads the JavaScript entry point. The entry point mounts your React component into the page.",
        codeLabel: "Project structure",
        language: "text",
        code: "my-react-app/\n├── index.html       # Browser page and app mount point\n├── package.json     # Scripts and dependencies\n├── vite.config.js   # Vite configuration\n└── src/\n    ├── main.jsx     # Starts the React app\n    └── App.jsx      # Top-level UI component",
      },
    ],
  },
  {
    id: "components",
    title: "The building blocks: components",
    shortTitle: "Components",
    duration: "6 min",
    summary: "See how components compose into a React application.",
    intro:
      "React interfaces are built from components: small, reusable functions that return the elements for part of a page. You can combine components to build larger interfaces, with App often acting as the root of the component tree.",
    takeaways: [
      "A component is a JavaScript function that returns JSX.",
      "Component names start with a capital letter.",
      "Render child components with JSX tags and export components to reuse them.",
    ],
    sections: [
      {
        heading: "Write a component",
        body: "This function is a component because it starts with a capital letter and returns a the content to be rendered.",
        codeLabel: "src/components/Greeting.jsx",
        language: "jsx",
        code: "function Greeting() {\n  return <h2>Hello, React!</h2>;\n}\n\nexport default Greeting;",
      },
      {
        heading: "Compose the app",
        body: "Import a component and use it like a tag. App can arrange smaller components into a larger screen.",
        codeLabel: "src/App.jsx",
        language: "jsx",
        code: "import Greeting from \"./components/Greeting.jsx\";\n\nfunction App() {\n  return (\n    <main>\n      <h1>My first app</h1>\n      <Greeting />\n    </main>\n  );\n}\n\nexport default App;",
      },
      {
        heading: "How the app reaches the page",
        body: "The entry point finds the root element from index.html, then asks React to render App inside it.",
        codeLabel: "src/main.jsx",
        language: "jsx",
        code: "import { createRoot } from \"react-dom/client\";\nimport App from \"./App.jsx\";\n\ncreateRoot(document.getElementById(\"root\")).render(<App />);",
      },
    ],
  },
  {
    id: "run",
    title: "Run your new React app",
    shortTitle: "Run the app",
    duration: "4 min",
    summary: "Start the development server and prepare a production build.",
    intro:
      "The development server serves your app locally and refreshes the browser as you edit files. When you are ready to publish, build the app into static files.",
    takeaways: [
      "npm run dev starts the local development server.",
      "Open the local URL printed by Vite in your browser.",
      "npm run build creates the optimized production files in dist/.",
    ],
    sections: [
      {
        heading: "Start the development server",
        body: "From the project directory, start Vite. Keep this terminal open while you work; it will print a local address, usually http://localhost:5173.",
        codeLabel: "Terminal",
        language: "bash",
        code: "npm run dev",
      },
      {
        heading: "Make a change",
        body: "With the development server still running, edit the heading in App.jsx and save. Vite updates the page, so you can see your change without manually refreshing.",
        codeLabel: "src/App.jsx",
        language: "jsx",
        code: "function App() {\n  return <h1>Welcome to my React app</h1>;\n}",
      },
      {
        heading: "Build for production",
        body: "When you want to check the deployable version, create a production build and serve it locally for a final check.",
        codeLabel: "Terminal",
        language: "bash",
        code: "npm run build\nnpm run preview",
      },
    ],
  },
  {
    id: "jsx-props",
    title: "Describe UI with JSX and props",
    shortTitle: "JSX & props",
    duration: "6 min",
    summary: "Use JSX to describe markup and props to pass data between components.",
    intro:
      "JSX lets you write markup-like syntax in JavaScript. Props are the inputs a parent gives a component, which makes the same component useful with different data.",
    takeaways: [
      "Return one parent element (or a Fragment) from a component.",
      "Use className for CSS classes and curly braces for JavaScript expressions.",
      "Pass props as attributes and read them from the component's props parameter.",
    ],
    sections: [
      {
        heading: "Use JavaScript inside JSX",
        body: "Curly braces insert an expression into JSX. JSX uses className because class is a JavaScript keyword.",
        codeLabel: "JSX",
        language: "jsx",
        code: "const name = \"Ada\";\n\nfunction Welcome() {\n  return <p className=\"greeting\">Hello, {name}!</p>;\n}",
      },
      {
        heading: "Pass props to a component",
        body: "Give Greeting a name prop when you render it. The component receives that value and can use it in its output.",
        codeLabel: "src/App.jsx",
        language: "jsx",
        code: "function Greeting({ name }) {\n  return <h2>Welcome, {name}!</h2>;\n}\n\nfunction App() {\n  return <Greeting name=\"Ada\" />;\n}",
      },
    ],
  },
  {
    id: "state-events",
    title: "Make UI interactive with state",
    shortTitle: "State & events",
    duration: "7 min",
    summary: "Store changing data with state and respond to user events.",
    intro:
      "State is data that belongs to a component and can change over time. When state changes, React renders the component again so the screen stays in sync with the data.",
    takeaways: [
      "Call useState at the top level of a component.",
      "Use the setter function to request an update; do not mutate state directly.",
      "Connect event handlers with JSX props such as onClick.",
    ],
    sections: [
      {
        heading: "Create a counter",
        body: "useState returns the current value and a setter. Calling the setter updates the value and re-renders the component.",
        codeLabel: "src/Counter.jsx",
        language: "jsx",
        code: "import { useState } from \"react\";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Clicked {count} times\n    </button>\n  );\n}\n\nexport default Counter;",
      },
    ],
    demo: "counter",
  },
];
