import React from 'react';
import './App.css';
import { PRACTICE_MIDTERM_QUESTIONS } from './practiceMidtermData';

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

const READ_ALOUD_HIGHLIGHT_NAME = 'study-goblin-read-aloud';

/** Get start/end character offsets for the word containing charIndex (so we highlight full words). */
function getWordBoundaries(text, charIndex) {
  if (!text || charIndex < 0) return { start: 0, end: 0 };
  const len = text.length;
  if (charIndex >= len) return { start: len, end: len };
  const isSpace = (i) => i >= 0 && i < len && /\s/.test(text[i]);
  const isUpper = (i) => i >= 0 && i < len && /[A-Z]/.test(text[i]);
  const isLower = (i) => i >= 0 && i < len && /[a-z]/.test(text[i]);
  let start = charIndex;
  while (start > 0) {
    const prev = start - 1;
    if (isSpace(prev)) break;
    if (isUpper(prev) && start < len && isLower(start)) break;
    start = prev;
  }
  let end = charIndex;
  while (end < len) {
    if (isSpace(end)) break;
    if (end > 0 && isUpper(end) && isLower(end - 1)) break;
    end += 1;
  }
  return { start, end };
}

function getRangeByCharOffset(root, startOffset, endOffset) {
  if (!root) return null;
  const range = document.createRange();
  let current = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  let startNode, startOffsetInNode, endNode, endOffsetInNode;
  while ((node = walker.nextNode())) {
    const len = node.textContent.length;
    if (startNode === undefined && current + len > startOffset) {
      startNode = node;
      startOffsetInNode = Math.min(startOffset - current, len);
    }
    if (endNode === undefined && current + len >= endOffset) {
      endNode = node;
      endOffsetInNode = Math.min(endOffset - current, len);
      break;
    }
    current += len;
  }
  if (!startNode || !endNode) return null;
  range.setStart(startNode, startOffsetInNode);
  range.setEnd(endNode, endOffsetInNode);
  return range;
}

function clearReadAloudHighlight() {
  if (typeof CSS !== 'undefined' && CSS.highlights) {
    CSS.highlights.delete(READ_ALOUD_HIGHLIGHT_NAME);
  }
}

function UnitSummary({ unit, title, concepts }) {
  const contentRef = React.useRef(null);
  const highlightRef = React.useRef(null);
  const [speechState, setSpeechState] = React.useState('idle'); // 'idle' | 'speaking' | 'paused'

  const handleReadAloud = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    if (speechState === 'speaking') {
      synth.pause();
      setSpeechState('paused');
      return;
    }
    if (speechState === 'paused') {
      synth.resume();
      setSpeechState('speaking');
      return;
    }
    const el = contentRef.current;
    if (!el) return;
    const text = el.textContent || '';
    if (!text.trim()) return;
    synth.cancel();
    clearReadAloudHighlight();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      clearReadAloudHighlight();
      setSpeechState('idle');
    };
    utterance.onerror = () => {
      clearReadAloudHighlight();
      setSpeechState('idle');
    };
    utterance.onboundary = (e) => {
      const root = contentRef.current;
      if (!root || typeof CSS === 'undefined' || !CSS.highlights) return;
      const { start, end } = getWordBoundaries(text, e.charIndex);
      if (start >= end) return;
      const range = getRangeByCharOffset(root, start, end);
      if (!range) return;
      if (!highlightRef.current) highlightRef.current = new (window['Highlight'])();
      highlightRef.current.clear();
      highlightRef.current.add(range);
      CSS.highlights.set(READ_ALOUD_HIGHLIGHT_NAME, highlightRef.current);
    };
    synth.speak(utterance);
    setSpeechState('speaking');
  };

  React.useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel();
      clearReadAloudHighlight();
    };
  }, []);

  return (
    <article className="unit-summary">
      <div className="unit-summary-header">
        <div ref={contentRef} className="unit-summary-content">
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
        </div>
        <button
          type="button"
          className="read-aloud-btn"
          onClick={handleReadAloud}
          aria-label={speechState === 'speaking' ? 'Pause' : speechState === 'paused' ? 'Resume' : 'Read this unit aloud'}
        >
          {speechState === 'speaking' ? 'Pause' : speechState === 'paused' ? 'Resume' : 'Read aloud'}
        </button>
      </div>
    </article>
  );
}

const AP_CSP_NOTICE_KEY = 'study-goblin-ap-csp-notice-dismissed';

function ApCspPage() {
  const semester1 = AP_CSP_UNITS.filter((u) => u.unit >= 2 && u.unit <= 6);
  const semester2 = AP_CSP_UNITS.filter((u) => u.unit >= 9 && u.unit <= 12);
  const fullPageContentRef = React.useRef(null);
  const fullPageHighlightRef = React.useRef(null);
  const [fullPageSpeechState, setFullPageSpeechState] = React.useState('idle');
  const [noticeDismissed, setNoticeDismissed] = React.useState(() => {
    try {
      return localStorage.getItem(AP_CSP_NOTICE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const dismissNotice = () => {
    setNoticeDismissed(true);
    try {
      localStorage.setItem(AP_CSP_NOTICE_KEY, 'true');
    } catch (_) {}
  };

  const handleFullPageReadAloud = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    if (fullPageSpeechState === 'speaking') {
      synth.pause();
      setFullPageSpeechState('paused');
      return;
    }
    if (fullPageSpeechState === 'paused') {
      synth.resume();
      setFullPageSpeechState('speaking');
      return;
    }
    const el = fullPageContentRef.current;
    if (!el) return;
    const text = el.textContent || '';
    if (!text.trim()) return;
    synth.cancel();
    clearReadAloudHighlight();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      clearReadAloudHighlight();
      setFullPageSpeechState('idle');
    };
    utterance.onerror = () => {
      clearReadAloudHighlight();
      setFullPageSpeechState('idle');
    };
    utterance.onboundary = (e) => {
      const root = fullPageContentRef.current;
      if (!root || typeof CSS === 'undefined' || !CSS.highlights) return;
      const { start, end } = getWordBoundaries(text, e.charIndex);
      if (start >= end) return;
      const range = getRangeByCharOffset(root, start, end);
      if (!range) return;
      if (!fullPageHighlightRef.current) fullPageHighlightRef.current = new (window['Highlight'])();
      fullPageHighlightRef.current.clear();
      fullPageHighlightRef.current.add(range);
      CSS.highlights.set(READ_ALOUD_HIGHLIGHT_NAME, fullPageHighlightRef.current);
    };
    synth.speak(utterance);
    setFullPageSpeechState('speaking');
  };

  return (
    <main className="main-content main-content--ap-csp">
      <div className="ap-csp-top-actions">
        <a href="/ap-csp/practice-midterm" className="read-aloud-btn practice-midterm-link">
          Take Practice Midterm (Units 2 & 3)
        </a>
        <button
          type="button"
          className="read-aloud-btn read-aloud-btn--full-page"
          onClick={handleFullPageReadAloud}
          aria-label={fullPageSpeechState === 'speaking' ? 'Pause' : fullPageSpeechState === 'paused' ? 'Resume' : 'Read entire page aloud'}
        >
          {fullPageSpeechState === 'speaking' ? 'Pause' : fullPageSpeechState === 'paused' ? 'Resume' : 'Read aloud entire page'}
        </button>
      </div>

      {!noticeDismissed && (
        <div className="ap-csp-notice" role="status">
          <p className="ap-csp-notice-text">
            Units that will not be on the midterm or final have been removed to make it easier for you.
          </p>
          <button
            type="button"
            className="ap-csp-notice-dismiss"
            onClick={dismissNotice}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      <div ref={fullPageContentRef} className="ap-csp-page-content">
      <section className="hero">
        <h1>AP Computer Science Principles (AP CSP)</h1>
        <p className="hero-subtitle">
          Exam-focused concept summaries for UC Scout midterms and finals. Review only—not a replacement for class.
        </p>
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
      </div>
    </main>
  );
}

const HOUR_SECONDS = 60 * 60;
const TIMER_RING_RADIUS = 45;
const TIMER_RING_STROKE = 8;
const TIMER_RING_CIRCUMFERENCE = 2 * Math.PI * TIMER_RING_RADIUS;

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function PracticeMidtermTimer() {
  const [timerSeconds, setTimerSeconds] = React.useState(HOUR_SECONDS);
  const [timerPaused, setTimerPaused] = React.useState(false);
  const [timerDismissed, setTimerDismissed] = React.useState(false);

  React.useEffect(() => {
    if (timerPaused || timerDismissed || timerSeconds <= 0) return;
    const id = setInterval(() => setTimerSeconds((s) => (s <= 0 ? 0 : s - 1)), 1000);
    return () => clearInterval(id);
  }, [timerPaused, timerDismissed, timerSeconds]);

  if (timerDismissed) return null;

  const progressFraction = timerSeconds / HOUR_SECONDS;
  const ringOffset = TIMER_RING_CIRCUMFERENCE * (1 - progressFraction);

  return (
    <div className="practice-midterm-timer" role="timer" aria-label={`Time remaining: ${formatTime(timerSeconds)}`}>
      <div className="practice-midterm-timer-ring-wrap">
        <svg className="practice-midterm-timer-ring" viewBox={`0 0 ${(TIMER_RING_RADIUS + TIMER_RING_STROKE) * 2} ${(TIMER_RING_RADIUS + TIMER_RING_STROKE) * 2}`}>
          <circle
            className="practice-midterm-timer-ring-bg"
            cx={TIMER_RING_RADIUS + TIMER_RING_STROKE}
            cy={TIMER_RING_RADIUS + TIMER_RING_STROKE}
            r={TIMER_RING_RADIUS}
            fill="none"
            strokeWidth={TIMER_RING_STROKE}
          />
          <circle
            className="practice-midterm-timer-ring-progress"
            cx={TIMER_RING_RADIUS + TIMER_RING_STROKE}
            cy={TIMER_RING_RADIUS + TIMER_RING_STROKE}
            r={TIMER_RING_RADIUS}
            fill="none"
            strokeWidth={TIMER_RING_STROKE}
            strokeDasharray={TIMER_RING_CIRCUMFERENCE}
            strokeDashoffset={ringOffset}
            transform={`rotate(-90 ${TIMER_RING_RADIUS + TIMER_RING_STROKE} ${TIMER_RING_RADIUS + TIMER_RING_STROKE})`}
          />
        </svg>
        <span className="practice-midterm-timer-display">{formatTime(timerSeconds)}</span>
      </div>
      <div className="practice-midterm-timer-actions">
        <button
          type="button"
          className="practice-midterm-timer-btn practice-midterm-timer-btn--play"
          onClick={() => setTimerPaused((p) => !p)}
          aria-label={timerPaused ? 'Resume timer' : 'Pause timer'}
        >
          {timerPaused ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          className="practice-midterm-timer-btn practice-midterm-timer-btn--reset"
          onClick={() => setTimerDismissed(true)}
          aria-label="Dismiss timer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function PracticeMidtermPage({ onRedo }) {
  const [answers, setAnswers] = React.useState(() => ({}));
  const [submitted, setSubmitted] = React.useState(false);
  const [expandedExplanation, setExpandedExplanation] = React.useState(null);

  const handleChange = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleExplanation = (questionId) => {
    setExpandedExplanation((prev) => (prev === questionId ? null : questionId));
  };

  const correctCount = PRACTICE_MIDTERM_QUESTIONS.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;
  const total = PRACTICE_MIDTERM_QUESTIONS.length;

  return (
    <main className="main-content main-content--ap-csp practice-midterm">
      <div className="practice-midterm-header">
        <h1 className="practice-midterm-title">Practice Midterm (Units 2 & 3)</h1>
        <p className="practice-midterm-subtitle">
          30 multiple choice questions · Units 2 (Algorithms) and 3 (Data) · 60 minute test (optional timer)
        </p>
      </div>

      {submitted && (
        <div className="practice-midterm-score" role="status">
          <strong>Score: {correctCount} / {total}</strong>
          {correctCount === total ? (
            <p>Great job!</p>
          ) : (
            <p>Review the questions marked below and check the unit summaries.</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="practice-midterm-form">
        <div className="practice-midterm-form-actions">
          <button type="submit" className="read-aloud-btn practice-midterm-submit-btn">
            Submit answers
          </button>
          <button
            type="button"
            className="read-aloud-btn practice-midterm-redo-btn--secondary"
            onClick={onRedo}
          >
            Redo
          </button>
        </div>

        <ol className="practice-midterm-list">
          {PRACTICE_MIDTERM_QUESTIONS.map((q) => {
            const isCorrect = answers[q.id] === q.correctIndex;
            const showWrong = submitted && answers[q.id] !== undefined && !isCorrect;
            return (
              <li
                key={q.id}
                className={`practice-midterm-item ${showWrong ? 'practice-midterm-item--wrong' : ''}`}
              >
                <span className="practice-midterm-q-text">{q.question}</span>
                <div className="practice-midterm-options" role="group" aria-label={`Question ${q.id} options`}>
                  {q.options.map((opt, idx) => (
                    <label key={idx} className="practice-midterm-option">
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        checked={answers[q.id] === idx}
                        onChange={() => handleChange(q.id, idx)}
                        disabled={submitted}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {showWrong && (
                  <div className="practice-midterm-wrong-footer">
                    <p className="practice-midterm-correct-answer">
                      Correct: {q.options[q.correctIndex]}
                    </p>
                    {q.explanation && (
                      <>
                        <button
                          type="button"
                          className="practice-midterm-explain-btn"
                          onClick={() => toggleExplanation(q.id)}
                          aria-expanded={expandedExplanation === q.id}
                        >
                          {expandedExplanation === q.id ? 'Hide explanation' : 'Why is this correct?'}
                        </button>
                        {expandedExplanation === q.id && (
                          <p className="practice-midterm-explanation">{q.explanation}</p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <button type="submit" className="read-aloud-btn practice-midterm-submit-btn practice-midterm-submit-btn--bottom">
          Submit answers
        </button>
      </form>
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
  const isPracticeMidterm = path === '/ap-csp/practice-midterm';
  const [practiceMidtermKey, setPracticeMidtermKey] = React.useState(0);

  const handlePracticeMidtermRedo = () => {
    setPracticeMidtermKey((k) => k + 1);
  };

  return (
    <div className={`page${isPracticeMidterm ? ' page--practice-midterm' : ''}`}>
      <header className="top-nav">
        <div className="top-nav-left">
          <a className="brand" href="/">Study Goblin🧌</a>
          {isPracticeMidterm && (
            <a className="practice-midterm-back" href="/ap-csp">← Back to AP CSP</a>
          )}
        </div>
        <div className="top-nav-right">
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
          {isPracticeMidterm && <PracticeMidtermTimer key={practiceMidtermKey} />}
        </div>
      </header>

      <main className="main-content">
        {isPracticeMidterm ? (
          <PracticeMidtermPage key={practiceMidtermKey} onRedo={handlePracticeMidtermRedo} />
        ) : isApCsp ? (
          <ApCspPage />
        ) : (
          <HomePage />
        )}
      </main>
    </div>
  );
}

export default App;
