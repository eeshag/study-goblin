import React from 'react';
import './App.css';

function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to Study Goblin 🧌</h1>
        <p className="hero-subtitle">
          A simple, fast way to review for UC Scout courses.
        </p>
      </section>

      <section className="courses">
        <div className="course-grid">
          <a className="course-card" href="/ap-csp">
            <h2>AP Computer Science Principles (AP CSP)</h2>
            <p>Exam-focused unit summaries for UC Scout</p>
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
    </>
  );
}

const AP_CSP_UNITS = [
  {
    unit: 2,
    title: 'Algorithms',
    concepts: [
      {
        name: 'Computational Thinking',
        points: [
          'Decomposition: breaking large problems into smaller, manageable pieces',
          'Pattern recognition: finding similarities and trends in problems or data',
          'Abstraction: hiding unnecessary details to focus on the important parts',
          'Algorithm design: creating clear, step-by-step instructions to solve a problem',
        ],
      },
      {
        name: 'Algorithms',
        points: [
          'A clear set of instructions to solve a problem',
          'Must be ordered, specific, and finite',
        ],
      },
      {
        name: 'Pseudocode',
        points: [
          'Writing code logic using plain English',
          'Helps plan programs without worrying about syntax',
        ],
      },
      {
        name: 'Flowcharting',
        points: [
          'Visual diagrams that show the steps of an algorithm',
          'Use shapes to represent actions and decisions',
        ],
      },
      {
        name: 'What is Abstraction?',
        points: [
          'Removing unnecessary details to focus on the main idea',
          'Makes complex systems easier to understand',
        ],
      },
    ],
  },
  {
    unit: 3,
    title: 'Data',
    concepts: [
      { name: 'Data Overview', points: ['Data is information collected for analysis or decision-making', 'Can be numbers, text, images, or sound'] },
      { name: 'Data Systems', points: ['Tools used to store and manage data', 'Examples include databases and spreadsheets'] },
      { name: 'Data Abstraction', points: ['Simplifying data to highlight important patterns', 'Helps manage large data sets'] },
      { name: 'Digital Data Representation', points: ['All data is stored using binary (0s and 1s)', 'Different formats represent different types of data'] },
      { name: 'Binary Number System', points: ['Base-2 number system using only 0 and 1', 'Each digit represents a power of 2'] },
      {
        name: 'Binary Search vs Linear Search',
        points: [
          'Linear search: checks each item one by one; does NOT require a sorted list; slower for large data sets.',
          'Binary search: repeatedly splits a sorted list in half; REQUIRES the data to be sorted; faster for large data sets.',
        ],
      },
      { name: 'Searching & Sorting', points: ['Searching finds data', 'Sorting organizes data to make searching faster'] },
      { name: 'ASCII', points: ['A system that assigns numbers to letters and symbols', 'Allows text to be stored digitally'] },
      {
        name: 'Data Compression',
        points: [
          'Reduces file size.',
          'Can be lossless or lossy.',
        ],
      },
      { name: 'Data Compression and Storage', points: ['Smaller files save space and transmit faster', 'Tradeoffs exist between quality and size'] },
    ],
  },
  {
    unit: 4,
    title: 'Programming with Scratch',
    concepts: [
      {
        name: 'Loops in Scratch',
        points: [
          'Loops repeat actions automatically so you do not have to copy the same blocks over and over.',
          'repeat (n) loop: runs the inside blocks a specific number of times, then stops.',
          'forever loop: keeps running the inside blocks without stopping until the program is stopped.',
          'repeat until loop: keeps running the inside blocks until a condition becomes true (for example, until a sprite touches a color).',
        ],
      },
    ],
  },
  {
    unit: 5,
    title: 'Programming with App Lab',
    concepts: [
      { name: 'Boolean Logic', points: ['Uses true and false values', 'Includes AND, OR, and NOT', 'Controls program decision-making'] },
    ],
  },
  {
    unit: 6,
    title: 'Software Development',
    concepts: [
      { name: 'Software Development Cycle', points: ['The process of planning, building, and maintaining software', 'Includes design, coding, testing, and updates'] },
      { name: 'Stages of Development', points: ['Each stage has a specific purpose', 'Skipping stages often leads to bugs'] },
      { name: 'Development Cycle Methods', points: ['Different ways to plan and build software; compare them to choose the right approach.'] },
      { name: 'Ethical Issues', points: ['Questions about how technology should be used', 'Includes fairness, privacy, and accessibility'] },
      { name: 'Ethical Use and Responsibility', points: ['Developers are responsible for the impact of their software', 'Technology should benefit society'] },
    ],
  },
  {
    unit: 9,
    title: 'Lists and More in Python',
    concepts: [
      { name: 'Strings in Python', points: ['Sequences of characters (text)', 'Used to store and manipulate words'] },
      { name: 'Lists in Python', points: ['Collections of multiple values', 'Allow data to be stored and modified easily'] },
      { name: 'Reading Pseudocode', points: ['Understanding logic without full syntax', 'Helps convert ideas into real code'] },
    ],
  },
  {
    unit: 10,
    title: 'The Internet',
    concepts: [
      { name: 'The Internet Overview', points: ['A global network of connected computers', 'Allows information to be shared worldwide'] },
      { name: 'History of the Internet', points: ['Started as a research project', 'Expanded into a global system'] },
      { name: 'Internet Systems', points: ['Includes servers, clients, and routers', 'Work together to transmit data'] },
      { name: 'Using HTML to Create a Webpage', points: ['HTML structures content on the web', 'Uses tags for text, images, and links'] },
      { name: 'What is the Internet?', points: ['A network of networks', 'Uses protocols to communicate'] },
      { name: 'Building a Network', points: ['Devices connected to share data', 'Can be wired or wireless'] },
      { name: 'The Need for Addressing', points: ['Devices need unique addresses (IP)', 'Ensures data reaches the right location'] },
      { name: 'Routing & Redundancy', points: ['Routing determines data paths', 'Redundancy prevents system failure'] },
      { name: 'Packets', points: ['Data is split into small pieces', 'Reassembled at the destination'] },
      { name: 'HTTPS & DNS', points: ['HTTPS secures web communication', 'DNS converts domain names to IPs'] },
      { name: 'Fault Tolerance', points: ['Systems continue working despite failures', 'Important for reliability'] },
      { name: 'Parallel and Distributed Computing', points: ['Parallel: tasks run at the same time', 'Distributed: tasks spread across computers'] },
    ],
  },
  {
    unit: 11,
    title: 'Cybersecurity',
    concepts: [
      { name: 'Cybersecurity Overview', points: ['Protecting systems and data', 'Prevents attacks and data theft'] },
      { name: 'PIIs & Cookies', points: ['PII: Personally Identifiable Information', 'Cookies store small user data'] },
      { name: 'Internet Privacy', points: ['Concerns about how data is collected and used', 'Users should be aware of tracking'] },
      { name: 'Digital Footprint', points: ['The data you leave online', 'Can be permanent'] },
      { name: 'Passwords', points: ['Protect accounts from unauthorized access', 'Strong passwords are long and unique'] },
      { name: 'Cybersecurity & Cryptography', points: ['Cryptography secures information', 'Uses math to protect data'] },
      { name: 'Cryptography', points: ['Encoding information to keep it secret', 'Only authorized users can read it'] },
      { name: 'Encryption', points: ['Converts readable data into unreadable form', 'Requires a key to decrypt'] },
    ],
  },
  {
    unit: 12,
    title: 'Impact of Computing',
    concepts: [
      { name: 'Impact of Computing Overview', points: ['Computing affects society and culture', 'Can be both positive and negative'] },
      { name: 'Machine Learning', points: ['Computers learn patterns from data', 'Used in recommendations and predictions'] },
      { name: 'Training Data & Bias', points: ['Models learn from provided data', 'Biased data creates biased outcomes'] },
      { name: 'Algorithmic Bias', points: ['Algorithms may unfairly favor groups', 'Important ethical concern'] },
    ],
  },
];

function UnitSummary({ unit, title, concepts }) {
  return (
    <article className="unit-summary">
      <h3 className="unit-summary-title">Unit {unit}: {title}</h3>
      <div className="unit-concepts">
        {concepts.map((concept, i) => {
          const isSearchComparison = concept.name === 'Binary Search vs Linear Search';
          const isAscii = concept.name === 'ASCII';
          const isDataCompression = concept.name === 'Data Compression';
          const isLoopsInScratch = title === 'Programming with Scratch' && concept.name === 'Loops in Scratch';
          const isBooleanLogic = title === 'Programming with App Lab' && concept.name === 'Boolean Logic';
          const isStagesOfDevelopment = title === 'Software Development' && concept.name === 'Stages of Development';
          const isDevelopmentCycleMethods = title === 'Software Development' && concept.name === 'Development Cycle Methods';

          return (
            <div key={i} className="concept">
              <h4 className="concept-name">{concept.name}</h4>

              {isSearchComparison ? (
                <div className="concept-table-wrapper">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th scope="col">Linear Search</th>
                        <th scope="col">Binary Search</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Checks each item one by one.</td>
                        <td>Repeatedly splits the list in half.</td>
                      </tr>
                      <tr>
                        <td>Does NOT require the data to be sorted.</td>
                        <td>REQUIRES the data to be sorted.</td>
                      </tr>
                      <tr>
                        <td>Slower on large data sets.</td>
                        <td>Faster on large data sets.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : isDataCompression ? (
                <ul className="concept-points">
                  <li>Reduces file size.</li>
                  <li>Can be lossless or lossy.</li>
                  <li>
                    Lossless compression
                    <ul>
                      <li>When you decompress you get exactly the original data back, bit-for-bit.</li>
                      <li>Good for text, code, and some images (like PNG) where every detail matters.</li>
                    </ul>
                  </li>
                  <li>
                    Lossy compression
                    <ul>
                      <li>Some data is thrown away on purpose to make the file smaller.</li>
                      <li>When you decompress you get almost the original, but not perfectly (quality is slightly reduced).</li>
                      <li>Good for photos, music, and video (like JPEG, MP3, YouTube) where small quality loss is OK for big size savings.</li>
                    </ul>
                  </li>
                </ul>
              ) : isLoopsInScratch ? (
                <ul className="concept-points">
                  <li>Loops repeat actions automatically so you do not have to copy the same blocks over and over.</li>
                  <li>
                    <strong>repeat (n) loop</strong>
                    <ul>
                      <li>Runs the inside blocks a specific number of times, then stops.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>forever loop</strong>
                    <ul>
                      <li>Keeps running the inside blocks without stopping until the program is stopped.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>repeat until loop</strong>
                    <ul>
                      <li>Keeps running the inside blocks until a condition becomes true (for example, until a sprite touches a color).</li>
                    </ul>
                  </li>
                </ul>
              ) : isBooleanLogic ? (
                <ul className="concept-points">
                  <li>Boolean logic uses only two values: true and false.</li>
                  <li>
                    <strong>AND</strong>
                    <ul>
                      <li>The result is true only if <em>both</em> conditions are true.</li>
                      <li>Example: a game only starts if you clicked \"Start\" AND you have lives left.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>OR</strong>
                    <ul>
                      <li>The result is true if <em>at least one</em> condition is true.</li>
                      <li>Example: show a warning if you are on mobile OR on a slow connection.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>NOT</strong>
                    <ul>
                      <li>Flips a Boolean value: true becomes false, and false becomes true.</li>
                      <li>Example: move a character while NOT paused (only move when the game is not paused).</li>
                    </ul>
                  </li>
                </ul>
              ) : isDevelopmentCycleMethods ? (
                <div className="concept-table-wrapper">
                  <table className="comparison-table comparison-table--methods">
                    <thead>
                      <tr>
                        <th scope="col" className="comparison-table--methods-label"></th>
                        <th scope="col">Waterfall</th>
                        <th scope="col">Agile</th>
                        <th scope="col">Spiral</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="comparison-table--methods-label"><strong>Approach</strong></th>
                        <td>Sequential: one phase after another (requirements → design → build → test → deploy).</td>
                        <td>Iterative: short sprints; plan, build, test, and get feedback in repeated cycles.</td>
                        <td>Risk-driven: repeated cycles of plan, risk analysis, build, and evaluate.</td>
                      </tr>
                      <tr>
                        <th scope="row" className="comparison-table--methods-label"><strong>Flexibility</strong></th>
                        <td>Low; difficult to go back to an earlier phase.</td>
                        <td>High; change is expected and built in.</td>
                        <td>Medium; can adapt after each cycle based on risks.</td>
                      </tr>
                      <tr>
                        <th scope="row" className="comparison-table--methods-label"><strong>Handling change</strong></th>
                        <td>Poor; late changes are costly and disruptive.</td>
                        <td>Good; requirements and priorities can shift each sprint.</td>
                        <td>Good; reassess risks and scope at the start of each cycle.</td>
                      </tr>
                      <tr>
                        <th scope="row" className="comparison-table--methods-label"><strong>Best for</strong></th>
                        <td>Projects with clear, fixed requirements (e.g. contracts, regulated systems).</td>
                        <td>Changing requirements, fast feedback, and close collaboration with users.</td>
                        <td>Large or risky projects where you need to manage uncertainty early.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : isStagesOfDevelopment ? (
                <ul className="concept-points">
                  <li>Each stage has a specific purpose. Skipping stages often leads to bugs.</li>
                  <li>
                    <strong>Requirements</strong>
                    <ul>
                      <li>Define what the software must do: features, who uses it, and any constraints.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Design</strong>
                    <ul>
                      <li>Plan the structure: user interface, data flow, and how parts of the system work together.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Implementation</strong>
                    <ul>
                      <li>Write the actual code (or build the product) based on the design.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Testing</strong>
                    <ul>
                      <li>Check that the software works correctly and fix bugs before release.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Deployment</strong>
                    <ul>
                      <li>Release the software to users (e.g., ship the app or go live on a server).</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Maintenance</strong>
                    <ul>
                      <li>Fix issues, add updates, and improve the software after it is in use.</li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <>
                  <ul className="concept-points">
                    {concept.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  {isAscii && (
                    <div className="concept-image-wrapper">
                      <img
                        src="/ascii.webp"
                        alt="ASCII table mapping characters to numeric codes"
                        className="concept-image"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}

function ApCspPage() {
  const semester1 = AP_CSP_UNITS.filter((u) => u.unit >= 2 && u.unit <= 6);
  const semester2 = AP_CSP_UNITS.filter((u) => u.unit >= 9 && u.unit <= 12);

  return (
    <main className="main-content main-content--ap-csp">
      <section className="hero">
        <h1>AP Computer Science Principles (AP CSP)</h1>
        <p className="hero-subtitle">
          Exam-focused concept summaries for UC Scout midterms and finals. Review only—not a replacement for class.
        </p>
      </section>

      <section className="courses">
        <div className="course-grid">
          <a className="course-card" href="/">
            <h2>← Back to all courses</h2>
            <p>Pick a different class to study.</p>
          </a>
        </div>
      </section>

      <section className="units-section">
        <h2 className="units-section-title">Semester 1 · Units 2–6</h2>
        <p className="units-section-note">Midterm: 2, 3, 4 · Final: 2, 3, 4, 5, 6</p>
        {semester1.map((u) => (
          <UnitSummary key={u.unit} unit={u.unit} title={u.title} concepts={u.concepts} />
        ))}
      </section>

      <section className="units-section">
        <h2 className="units-section-title">Semester 2 · Units 9–12</h2>
        <p className="units-section-note">Midterm: 9, 10, 11 · Final: 9, 10, 11, 12</p>
        {semester2.map((u) => (
          <UnitSummary key={u.unit} unit={u.unit} title={u.title} concepts={u.concepts} />
        ))}
      </section>
    </main>
  );
}

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

  const path = window.location.pathname;
  const isApCsp = path === '/ap-csp';

  return (
    <div className="page">
      <header className="top-nav">
        <div className="brand">Study Goblin</div>
        <label className="theme-toggle">
          <span className="theme-label">Theme</span>
          <span className="theme-icons" aria-hidden="true">
            <span>🌙</span>
            <span>☀️</span>
          </span>
          <input
            className="theme-toggle-input"
            type="checkbox"
            checked={theme === 'light'}
            onChange={toggleTheme}
            aria-label="Toggle light mode"
          />
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-thumb" />
          </span>
        </label>
      </header>

      <main className="main-content">
        {isApCsp ? <ApCspPage /> : <HomePage />}
      </main>
    </div>
  );
}

export default App;
