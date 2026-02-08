import React from 'react';
import './App.css';

function App() {
  const preferredTheme = localStorage.getItem('study-goblin-theme');
  const initialTheme = preferredTheme === 'light' ? 'light' : 'dark';
  const [theme, setTheme] = React.useState(initialTheme);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('study-goblin-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="page">
      <header className="top-nav">
        <div className="brand">Study Goblin</div>
        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          <span className="theme-icon" aria-hidden="true">
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
          <span className="theme-label">
            {theme === 'dark' ? 'Dark' : 'Light'} mode
          </span>
        </button>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Welcome to Study Goblin</h1>
          <p className="hero-subtitle">
            A simple, fast way to review for UC Scout courses.
          </p>
        </section>

        <section className="courses">
          <div className="course-grid">
            <a className="course-card" href="/ap-csp">
              <h2>AP Computer Science Principles (AP CSP)</h2>
              <p>Notes, practice questions, and finals review</p>
            </a>

            <div className="course-card disabled" aria-disabled="true">
              <h2>AP Calculus</h2>
              <p>Coming soon</p>
            </div>
            <div className="course-card disabled" aria-disabled="true">
              <h2>AP Biology</h2>
              <p>Coming soon</p>
            </div>
            <div className="course-card disabled" aria-disabled="true">
              <h2>AP Chemistry</h2>
              <p>Coming soon</p>
            </div>
            <div className="course-card disabled" aria-disabled="true">
              <h2>AP Statistics</h2>
              <p>Coming soon</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
