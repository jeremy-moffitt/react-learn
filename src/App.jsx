import { useState } from "react";
import { lessons } from "./lessons.js";

function CodeBlock({ label, language, code }) {
  return (
    <figure className="code-card">
      <figcaption className="code-card-header">
        <span className="code-file">
          <span className="file-dot" aria-hidden="true" />
          {label}
        </span>
        <span className="code-language">{language}</span>
      </figcaption>
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  );
}

function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-card">
      <div>
        <span className="demo-kicker">Try it yourself</span>
        <h3>State changes the screen</h3>
        <p>Each click updates the count using React state.</p>
      </div>
      <div className="demo-controls">
        <output className="demo-count" aria-live="polite">
          {count}
        </output>
        <button
          className="button button-demo"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Add one
          <span aria-hidden="true"> +</span>
        </button>
      </div>
    </div>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const lesson = lessons[activeIndex];
  const progress = Math.round((completedLessons.length / lessons.length) * 100);
  const isComplete = completedLessons.includes(lesson.id);

  function markComplete() {
    setCompletedLessons((current) =>
      current.includes(lesson.id) ? current : [...current, lesson.id],
    );
    if (activeIndex < lessons.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#lesson-content"
          aria-label="React Foundations home"
          onClick={() => setActiveIndex(0)}
        >
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>React Foundations</span>
        </a>
        <div className="topbar-note">
          <span className="live-dot" aria-hidden="true" />
          <span>Interactive learning path</span>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar" aria-label="Course lessons">
          <div className="course-heading">
            <p className="eyebrow">YOUR COURSE</p>
            <h1>React basics</h1>
            <p>Everything you need to build your first interface.</p>
          </div>

          <div className="progress-card">
            <div className="progress-copy">
              <span>YOUR PROGRESS</span>
              <strong>{progress}%</strong>
            </div>
            <div
              className="progress-track"
              role="progressbar"
              aria-label="Course progress"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span style={{ width: `${progress}%` }} />
            </div>
            <p>
              {completedLessons.length} of {lessons.length} lessons complete
            </p>
          </div>

          <nav className="lesson-nav" aria-label="Lessons">
            <p className="eyebrow nav-label">LEARNING PATH</p>
            <ol>
              {lessons.map((item, index) => {
                const active = index === activeIndex;
                const complete = completedLessons.includes(item.id);
                return (
                  <li key={item.id}>
                    <button
                      className={`lesson-link${active ? " is-active" : ""}`}
                      aria-current={active ? "step" : undefined}
                      onClick={() => setActiveIndex(index)}
                    >
                      <span className={`lesson-number${complete ? " is-complete" : ""}`}>
                        {complete ? "✓" : String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="lesson-link-copy">
                        <strong>{item.shortTitle}</strong>
                        <small>{item.duration}</small>
                      </span>
                      {active && <span className="active-indicator" aria-hidden="true" />}
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="sidebar-footer">
            <span className="footer-spark" aria-hidden="true">
              ✳
            </span>
            <p>
              Small steps,
              <br />
              real React skills.
            </p>
          </div>
        </aside>

        <main className="lesson-area" id="lesson-content">
          <div className="lesson-column">
            <div className="breadcrumb">
              <span>React basics</span>
              <span aria-hidden="true">/</span>
              <span>Lesson {String(activeIndex + 1).padStart(2, "0")}</span>
            </div>

            <section className="lesson-header">
              <div className="lesson-meta">
                <span className="lesson-tag">
                  LESSON {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="meta-divider" aria-hidden="true" />
                <span>{lesson.duration} read</span>
              </div>
              <h2>{lesson.title}</h2>
              <p className="lesson-summary">{lesson.summary}</p>
            </section>

            <section className="lesson-intro">
              <span className="intro-icon" aria-hidden="true">
                ✦
              </span>
              <p>{lesson.intro}</p>
            </section>

            <div className="lesson-sections">
              {lesson.sections.map((section, index) => (
                <section className="content-section" key={section.heading}>
                  <div className="section-heading">
                    <span className="section-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{section.heading}</h3>
                  </div>
                  <p className="section-body">{section.body}</p>
                  <CodeBlock
                    label={section.codeLabel}
                    language={section.language}
                    code={section.code}
                  />
                </section>
              ))}
            </div>

            {lesson.demo === "counter" && <CounterDemo />}

            <section className="takeaways">
              <div className="takeaways-title">
                <span aria-hidden="true">✦</span>
                <h3>Key takeaways</h3>
              </div>
              <ul>
                {lesson.takeaways.map((takeaway) => (
                  <li key={takeaway}>
                    <span aria-hidden="true">↗</span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>

            <footer className="lesson-footer">
              <button
                className="button button-previous"
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
              >
                <span aria-hidden="true">←</span> Previous
              </button>
              <span className="footer-step">
                {activeIndex + 1} <span>/</span> {lessons.length}
              </span>
              <button
                className="button button-next"
                onClick={markComplete}
                disabled={activeIndex === lessons.length - 1 && isComplete}
              >
                {activeIndex === lessons.length - 1
                  ? isComplete
                    ? "Completed"
                    : "Complete lesson"
                  : isComplete
                    ? "Next lesson"
                    : "Mark complete"}
                <span aria-hidden="true">→</span>
              </button>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
