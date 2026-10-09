// 1- What is CI/CD in React.js? —
// 🔧 CI/CD Meaning (in general)
// CI (Continuous Integration) and CD (Continuous Delivery/Deployment) are DevOps practices used to automate the process of software development 
// — from writing code to testing, building, and finally deploying it to production.

// CI is the practice of automatically testing and building your application whenever code is pushed to the repository (e.g., GitHub). 
// This helps detect bugs early, ensures code quality, and keeps the application always ready for deployment.

// Continuous Delivery: Automatically prepares your code for deployment but requires manual approval to go live.
// Continuous Deployment: Code changes are automatically deployed to production after passing all tests.


// 2-  What is Webpack? 
// Webpack is a module bundler for JavaScript applications. It takes all your files (JavaScript, CSS, images, etc.), processes them, 
// and bundles them into one or more output files (usually bundle.js) that can run in the browser.
// Combines all modules into a few optimized files.
// Converts modern JS (ES6/ES7) using Babel
// Loads CSS, images, fonts, etc.
// Supports lazy loading and code splitting
// Reduces loading time of the website


// 3 -What are Vite and Parcel?
// Vite (pronounced like “vite” = "veet", means "fast" in French) is a next-generation 
// frontend build tool created by the author of Vue.js. It is extremely fast, especially for development.

// Fast startup	- Uses native ES modules and no bundling during dev	 - शुरू में बिना bundle किए फ़ाइलें load करता है
// Hot Module Replacement (HMR)	- Instantly updates browser during coding	- Code बदलते ही browser में तुरन्त update दिखाता है
// Simple config	- Easier to configure than Webpack	- Webpack से आसान configuration
// Modern by default	- Uses latest JS features and tools	- Latest JS features का support देता है


// 4 - what is Parcel . 
// Parcel is another zero-configuration bundler that supports modern JavaScript out of the box. 
// It automatically detects file types and handles them intelligently.

// When to Use:
// ✅ Use Vite:
// For modern projects
// If you want fast dev environment
// When using React, Vue, Svelte

// ✅ Use Parcel:
// For small to medium apps
// When you want zero config
// For quick POCs or simpler builds

// 5-  What is React Fiber?
// React Fiber is the reconciliation engine of React (since version 16). It is a complete rewrite of the core algorithm behind React.
// Its main goal is to enable incremental rendering, better performance, and smoother UI updates.

// 6 -  What is Derived State in React?
// Derived state is state that depends on props or other state. Instead of directly storing it in useState, it's calculated based on other values.
// Sometimes developers copy props into state, which can lead to bugs or inconsistencies if not handled carefully.

// 7- What is Lifting State Up in React?
// Lifting state up is a React pattern where you move state from a child component to a common parent component 
// so that multiple child components can share and manage the same data.
// It’s necessary when:
// Two or more components need to communicate or share data
// A parent needs to control the data flow or logic between children

// 7- What is React.memo in React?
// React.memo is a higher-order component that helps optimize performance by preventing unnecessary re-renders of functional components.
// It works by shallow comparing props — if the props haven't changed, it skips the re-render of that component.
// const MemoizedComponent = React.memo(MyComponent);

// useCallback  - is used to memoize a function — it returns the same function reference unless its dependencies change.
// This is useful when passing functions to child components that are memoized using React.memo, to avoid unnecessary re-renders.

// useMemo - is used to memoize a computed value — like the result of an expensive calculation. 
// It recalculates only when its dependencies change.

// ✅ Spread Operator (...)
// 📦 Used to expand (spread out) array or object values. 
// Use Cases:
// Copying arrays/objects
// Merging arrays or objects
// Passing array elements as function arguments

// function sum(a, b, c) {
//     return a + b + c;
//   }  
//   const nums = [1, 2, 3];
//   console.log(sum(...nums)); // 6

//  -- Rest Operator (...)
// 📥 Used to collect multiple values into an array or object

// function sum(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total;
//   }  
//   console.log(sum(1, 2, 3)); // 6


// -- ✅ What are Core Web Vitals?
// Core Web Vitals are a set of specific performance metrics defined by Google that measure real-world user experience on web pages.
// These metrics focus on three main aspects of page experience:
// Loading Performance (speed)
// Interactivity (responsiveness)
// Visual Stability (layout consistency)

// 🔍 The 3 Core Web Vitals:
// Metric	Description	Good Threshold
// LCP (Largest Contentful Paint)	Measures loading speed — the time it takes for the main content to load	≤ 2.5 seconds
// FID (First Input Delay)	Measures interactivity — how long it takes the site to respond to the first user action like a click	≤ 100 ms
// CLS (Cumulative Layout Shift)	Measures visual stability — how much layout shifts during load (like buttons jumping around)	≤ 0.1
// Note: FID is being replaced by INP (Interaction to Next Paint) from March 2024 onward.
// Why are Core Web Vitals important?
// Google uses these metrics for ranking websites in search results.
// Better Core Web Vitals = Better user experience + Better SEO ranking.



// --- What is Lighthouse?
// Lighthouse is an open-source tool from Google that audits web pages for performance, accessibility, best practices, SEO, 
// and progressive web apps (PWA).
// It can be run from:
// Chrome DevTools (built-in)
// Command Line
// Lighthouse CI
// PageSpeed Insights (Google)

// 📊 What does Lighthouse measure?
// Category	Description
// Performance	---Load speed, runtime performance, CWV
// Accessibility---	Whether the site is usable for all users
// Best Practices---	Security, coding practices, errors
// SEO	---Basic checks to ensure search discoverability
// Progressive Web App----	PWA readiness and service worker checks
// ⚙️ Example Lighthouse Report Includes:
// Performance Score (0–100)
// Metrics like:
// First Contentful Paint (FCP)
// Speed Index
// Time to Interactive (TTI)
// Total Blocking Time (TBT)
// LCP and CLS (from Core Web Vitals)
// Opportunities & Diagnostics to improve performance


// 💣 What is XSS?
// XSS (Cross-Site Scripting) is a security vulnerability where an attacker injects malicious scripts (like JavaScript) into your web application, 
// which then runs in another user's browser.

// Where XSS Happens in JS or React?
// ❌ Dangerous: Directly injecting user input in HTML or JSX
// <div dangerouslySetInnerHTML={{ __html: userInput }} />
// const userInput = "<img src='x' onerror='alert(1)' />";
// Then the attack will execute when React renders it.

// How to Prevent XSS in React
// 1. Avoid dangerouslySetInnerHTML
// Only use it when absolutely required, and sanitize input before rendering.
// 2. Sanitize HTML Input
// Use libraries like:
// npm install dompurify
// import DOMPurify from 'dompurify';

// const SafeContent = ({ content }) => {
//   const clean = DOMPurify.sanitize(content);
//   return <div dangerouslySetInnerHTML={{ __html: clean }} />;
// };
// 3. Escape User Input
// React automatically escapes output in JSX:
// const userInput = "<script>alert('xss')</script>";
// <p>{userInput}</p> // ✅ React will render this as plain text, not execute it
// 4. Set Security Headers (Server Side)
// In Node.js / Express / Next.js:
// npm install helmet
// import helmet from 'helmet';
// app.use(helmet());
// This helps set headers like:
// Content-Security-Policy
// X-XSS-Protection
// X-Content-Type-Options

// 5. Use Trusted Sources Only
// Never render HTML or scripts from untrusted APIs or user-generated content without sanitizing.


// ✅ What is Micro Frontend?
// Micro Frontend is an architectural style where a frontend app is divided into smaller, independent pieces (called micro frontends), 
// which can be developed, tested, and deployed independently by different teams.
// Each micro frontend represents a self-contained part of the UI (like Header, Dashboard, Cart, etc.), 
// and can be built using different frameworks or versions of React, Angular, Vue, etc.

// ✅ What is Webpack 5? 
// Webpack 5 is the latest major version of Webpack, which is a module bundler.
// It takes your JavaScript, CSS, images, and other files, bundles them together, and optimizes the output for faster and efficient web performance.
// It is used to prepare your code for production deployment.

// ✅ What is Portal in React.js? 
// Portal in React allows you to render a component outside the main DOM tree — i.e., 
// outside the root <div id="root"></div> — while still maintaining React’s context and event bubbling.
// 🔸 In simple terms:
// It lets you render a React component into a different place in the HTML (like a modal, tooltip, or dialog) without breaking the React hierarchy.


// 🔸 Controlled Component
// A controlled component is a component where React controls the form data using state (useState).

// 🔸 Uncontrolled Component
// An uncontrolled component manages its own state internally using the DOM, not React state.


// ✅ What is System Design?
// “System Design is about planning the architecture of a software system to ensure it’s scalable, maintainable, and performs well.
//  In frontend development, I focus on designing modular React components, optimizing performance (via lazy loading, code splitting), 
// state management strategies, and integration with scalable APIs. At a broader level, I consider caching, data flow, 
// and deployment as part of the full system.”

// 🧱 Types of System Design
// High-Level Design (HLD):
// Focuses on components, data flow, and communication between services.
// Example: frontend app ↔ backend ↔ database ↔ external APIs.

// Low-Level Design (LLD):
// Detailed design of each module/component.
// Includes data models, APIs, class diagrams, etc.


// ✅ What is Storybook in React.js? 
// "Storybook is a UI development environment where I can build, test, and document React components in isolation.
//  It's very useful for creating reusable components, developing design systems, and improving collaboration with designers and testers. 
// I’ve used it to showcase all component variations and visually test edge cases without launching the full app."

// 1. React Forget (React Compiler / React Concent)
// React Forget is the upcoming React Compiler by Meta. Its main goal is to automatically optimize React code by tracking dependencies 
// and re-renders at compile-time. 
// Currently, developers use useMemo, useCallback to prevent unnecessary renders, but Forget can do this automatically.

// 3. Optimistic UI Updates
// Optimistic UI means updating the UI before the server confirms the action.
// Example: When you click "like", the UI immediately shows the new like count, and then the server response updates it. 
// If the server fails, UI rolls back.

// What is Jest:
// Jest is a JavaScript testing framework maintained by Meta.
// It’s mainly used for unit testing and integration testing.
// Key Features:
// Zero config → works out of the box with most JS/React apps.
// Provides test runner, assertion library, mocks, and snapshot testing.
// Supports async testing easily.
// 🔹 Unit Testing
// Unit testing means testing the smallest piece of code in isolation, usually a function, class, or component.
// 🔹 Integration Testing
// Integration testing checks how multiple units work together as a group.


// 🔹 RTL (React Testing Library)
// React Testing Library is a testing library built on top of DOM Testing Library.
// It focuses on testing React components in a way similar to how users interact with them.
// Key Features:
// Encourages testing components by behavior, not implementation details.
// Provides helpers like render, screen, fireEvent, userEvent.
// Works great with Jest (they’re usually used together).


// What is fetch?
// fetch() is a built-in JavaScript function used to make HTTP requests (GET, POST, PUT, DELETE, etc.).
// It is based on Promises, so it returns a Promise that resolves once the response is available.


// What is Axios?
// Axios is a third-party library for making HTTP requests.
// Works both in the browser and Node.js environment.
// It simplifies requests by automatically handling some things that fetch requires extra steps for.
// Advantages:
// Automatic JSON parsing.
// Supports request cancellation.
// Has built-in timeout support.
// Easier error handling (error messages are more descriptive).
// Interceptors (modify requests or responses globally).


// “Component is a reusable, independent piece of UI in React that can accept input (props) and manage its own data (state).
//  Applications in React are built by combining multiple components.”

// “The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state or props change, 
// React creates a new Virtual DOM tree, compares it with the previous one (diffing), and updates 
// only the parts of the real DOM that have changed, making UI updates faster and more efficient.”

// “React Fiber is the reconciliation engine introduced in React 16. It enables asynchronous rendering by breaking work into small units, 
// prioritizing tasks, and pausing or resuming rendering when needed. 
// This allows React to deliver smoother and more responsive user interfaces.”

// React Fiber is the complete internal rewrite of React’s reconciliation algorithm, introduced in React 16.
// The purpose of Fiber was to make React rendering more efficient and flexible, especially for complex UIs and animations.

// Virtual DOM → focuses on what to update.
// Fiber → focuses on how and when to update.

// “Reconciliation engine is React’s process of figuring out what has changed in the Virtual DOM 
// and applying only the necessary updates to the real DOM. React Fiber, introduced in React 16, 
// is the new reconciliation engine that makes rendering smoother by scheduling and prioritizing tasks.”

// “When we use create-react-app, two main libraries get installed: react and react-dom. 
// The react package provides the core functionality like creating components, hooks, and managing Virtual DOM. 
// But React itself doesn’t know anything about the browser DOM. 
// The react-dom package is the bridge that takes React components and renders them into the real browser DOM. 
// That’s why both are required — React defines the UI, and ReactDOM integrates it with the browser.”

// “A Single Page Application (SPA) is a web app that loads a single HTML page and dynamically updates the UI using client-side 
// JavaScript without full page reloads. 
// In React, SPA behavior is achieved using client-side routing, component-based rendering, Virtual DOM diffing, and API calls for data.”


// 2. Batching क्या है?
// Batching = multiple state updates को combine करना।
// React 18 से पहले batching सिर्फ synthetic events (जैसे onClick) में होता था।
// React 18 से batching हर जगह होता है (async, promises, timeouts etc.)।
// 👉 Example:
// function handleClick() {
//   setCount(c => c + 1);
//   setCount(c => c + 1);
//   setCount(c => c + 1);
// }
// React इन्हें एक batch में process करेगा,
// और final count +3 होगा (not re-render after each setState)।
// 👉 अगर आप setCount(count + 1) यूज़ करते:
// function handleClick() {
//   setCount(count + 1);
//   setCount(count + 1);
//   setCount(count + 1);
// }


//  ******** functional compnent and class component difference in react
// 1. Syntax
// Functional Component:  A plain JavaScript function that takes props as an argument and returns JSX.
// Class Component: A JavaScript ES6 class that extends React.Component and has a render() method that returns JSX.
// 2. State Management
// Functional Component:
// Originally stateless, but now with React Hooks (useState, useReducer) they can manage state.
// Class Component:
// State is managed using this.state and this.setState().
// 3. Lifecycle Methods
// Functional Component: Use Hooks like useEffect to replicate lifecycle methods:
// Class Component:Has built-in lifecycle methods
// 4. Performance
// Functional components are generally lighter and easier to read.
// Class components are slightly heavier because of the extra syntax and this binding.
// 5. this Keyword
// Functional Component:No this keyword, making code easier to reason about.
// Class Component:Requires this to access props, state, and methods, and often needs manual binding of event handlers.


// 1 - what is react js. 
// React js is java script library . react use to make web frontend application. with react we make spa .  