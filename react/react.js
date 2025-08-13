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


// ✅ "What is the SOLID principle and how do you apply it in React?"
// The SOLID principles are five design principles aimed at writing clean, scalable, and maintainable code. 
// Even though React is not a classical object-oriented framework, 
// these principles apply well to component and hook design.

// 🔹 S — Single Responsibility Principle (SRP)
// Each component or module should have only one responsibility.
// In React, I separate concerns by splitting components into presentational and container components.
// For example, a UserProfile component only renders UI, while a separate useUser hook handles data fetching.

// 🔹 O — Open/Closed Principle
// Code should be open for extension but closed for modification.
// In React, I write reusable components that accept props for flexibility.
// For example, a Button component can accept a variant prop instead of rewriting it every time.
// <Button variant="danger">Delete</Button>

// 🔹 L — Liskov Substitution Principle
// Subtypes should be replaceable for their base types.
// In React, this means a custom component that extends a base one should behave the same way.
// If I replace a Button with CustomButton, it should work without breaking the parent component.

// 🔹 I — Interface Segregation Principle
// Don’t force components to depend on props they don’t need.
// I keep components lean by passing only the necessary props.
// For example, a ProductCard only gets name and price, not unrelated flags like showTimer or cartItemCount.

// 🔹 D — Dependency Inversion Principle
// High-level modules shouldn’t depend on low-level details.

// In React, I apply this by using custom hooks or context instead of hardcoding logic in UI.
// For example, instead of fetching user data inside a header component, I use a useAuth() hook to abstract that logic.

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