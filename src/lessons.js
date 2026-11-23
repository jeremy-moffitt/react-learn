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
  {
    id: "effects",
    title: "Synchronize with the outside world",
    shortTitle: "Effects",
    duration: "8 min",
    summary: "Use effects to synchronize React components with browser APIs and external systems.",
    intro:
      "An effect runs after React commits UI changes. It is appropriate for work that is synchronized outside the component, such as subscriptions, browser APIs, timers, or network requests.",
    takeaways: [
      "Render data first; use an effect only to synchronize with an external system.",
      "Dependency arrays control when an effect re-runs.",
      "Clean up subscriptions and timers to prevent stale work.",
    ],
    sections: [
      {
        heading: "Run an effect when a value changes",
        body: "This effect updates the document title whenever the name changes. The dependency array ensures it does not run for unrelated state updates.",
        codeLabel: "src/Profile.jsx",
        language: "jsx",
        code: "import { useEffect } from \"react\";\n\nfunction Profile({ name }) {\n  useEffect(() => {\n    document.title = `Profile: ${name}`;\n  }, [name]);\n\n  return <h1>{name}</h1>;\n}",
      },
      {
        heading: "Clean up a subscription",
        body: "Return a cleanup function when an effect starts work that must be stopped or removed.",
        codeLabel: "src/ChatStatus.jsx",
        language: "jsx",
        code: "useEffect(() => {\n  const handleResize = () => {\n    console.log(window.innerWidth);\n  };\n\n  window.addEventListener(\"resize\", handleResize);\n  return () => window.removeEventListener(\"resize\", handleResize);\n}, []);",
      },
    ],
  },
  {
    id: "controlled-forms",
    title: "Build controlled forms",
    shortTitle: "Forms",
    duration: "8 min",
    summary: "Connect form fields to state, handle submissions, and validate user input.",
    intro:
      "Controlled inputs store their visible value in React state. This gives the component a single source of truth and makes submission and validation behavior predictable.",
    takeaways: [
      "Set an input's value from state and update it through onChange.",
      "Prevent the browser's default form submission behavior.",
      "Keep user-friendly error state separate from the submitted data.",
    ],
    sections: [
      {
        heading: "Control an input",
        body: "The value attribute receives the state value, while onChange updates state from the DOM event.",
        codeLabel: "src/EmailForm.jsx",
        language: "jsx",
        code: "import { useState } from \"react\";\n\nfunction EmailForm() {\n  const [email, setEmail] = useState(\"\");\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    console.log(\"Submitted:\", email);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label htmlFor=\"email\">Email</label>\n      <input\n        id=\"email\"\n        type=\"email\"\n        value={email}\n        onChange={(event) => setEmail(event.target.value)}\n      />\n      <button type=\"submit\">Subscribe</button>\n    </form>\n  );\n}",
      },
    ],
  },
  {
    id: "context",
    title: "Share data with Context",
    shortTitle: "Context",
    duration: "9 min",
    summary: "Pass shared application data through a component tree without prop drilling.",
    intro:
      "Context is useful for information that many components need, such as theme, locale, authentication, or selected account data. A provider publishes the value; consumers read the nearest provider.",
    takeaways: [
      "Create a context with a clear default or null fallback.",
      "Wrap the relevant component tree in a Provider.",
      "Read values with useContext instead of passing every value through props.",
    ],
    sections: [
      {
        heading: "Create and provide a context",
        body: "The provider owns shared state and exposes both the state and the function that changes it.",
        codeLabel: "src/ThemeContext.jsx",
        language: "jsx",
        code: "import { createContext, useContext, useState } from \"react\";\n\nconst ThemeContext = createContext(null);\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState(\"light\");\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport function useTheme() {\n  return useContext(ThemeContext);\n}",
      },
      {
        heading: "Consume the context",
        body: "Any descendant of the provider can read or update the shared value.",
        codeLabel: "src/ThemeButton.jsx",
        language: "jsx",
        code: "function ThemeButton() {\n  const { theme, setTheme } = useTheme();\n\n  return (\n    <button onClick={() => setTheme(theme === \"light\" ? \"dark\" : \"light\")}>\n      Switch to {theme === \"light\" ? \"dark\" : \"light\"}\n    </button>\n  );\n}",
      },
    ],
  },
  {
    id: "reducers",
    title: "Manage complex state with reducers",
    shortTitle: "Reducers",
    duration: "9 min",
    summary: "Organize multi-step state transitions with useReducer and actions.",
    intro:
      "A reducer separates state-transition logic from event handling. It is helpful when several actions update one related piece of state or when the next state depends on several fields.",
    takeaways: [
      "A reducer receives the current state and an action, then returns next state.",
      "Actions describe what happened rather than how to mutate state.",
      "Create new state objects and arrays instead of mutating existing ones.",
    ],
    sections: [
      {
        heading: "Reduce explicit actions",
        body: "The dispatch calls describe user actions. The reducer centralizes the rules for turning each action into the next state.",
        codeLabel: "src/TaskList.jsx",
        language: "jsx",
        code: "import { useReducer } from \"react\";\n\nfunction taskReducer(tasks, action) {\n  switch (action.type) {\n    case \"added\":\n      return [...tasks, { id: action.id, text: action.text, done: false }];\n    case \"toggled\":\n      return tasks.map((task) =>\n        task.id === action.id ? { ...task, done: !task.done } : task,\n      );\n    default:\n      return tasks;\n  }\n}\n\nfunction TaskList() {\n  const [tasks, dispatch] = useReducer(taskReducer, []);\n\n  return (\n    <button onClick={() => dispatch({ type: \"added\", id: 1, text: \"Learn reducers\" })}>\n      Add task\n    </button>\n  );\n}",
      },
    ],
  },
  {
    id: "custom-hooks-performance",
    title: "Reuse logic and improve performance",
    shortTitle: "Hooks & memo",
    duration: "10 min",
    summary: "Extract reusable stateful logic and apply memoization only where it helps.",
    intro:
      "Custom Hooks reuse stateful logic while keeping components composed. React also provides memoization tools for expensive calculations or stable callback and component values, but they should be added when profiling shows a need.",
    takeaways: [
      "Custom Hook names start with use and call other Hooks from the top level.",
      "useMemo caches a calculated value; useCallback caches a function.",
      "Start with clear code and measure performance before optimizing.",
    ],
    sections: [
      {
        heading: "Extract a custom Hook",
        body: "This Hook can be reused by any component that needs to track the window width.",
        codeLabel: "src/useWindowWidth.js",
        language: "jsx",
        code: "import { useEffect, useState } from \"react\";\n\nexport function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const updateWidth = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", updateWidth);\n    return () => window.removeEventListener(\"resize\", updateWidth);\n  }, []);\n\n  return width;\n}",
      },
      {
        heading: "Memoize a repeated calculation",
        body: "useMemo avoids repeating a calculation while dependencies are unchanged. It is not a general replacement for good component structure.",
        codeLabel: "src/SearchResults.jsx",
        language: "jsx",
        code: "import { useMemo } from \"react\";\n\nfunction SearchResults({ items, query }) {\n  const matchingItems = useMemo(\n    () => items.filter((item) => item.includes(query)),\n    [items, query],\n  );\n\n  return <p>{matchingItems.length} results</p>;\n}",
      },
    ],
  },
];
