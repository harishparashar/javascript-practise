// 1. What is Node.js?
// Node.js is an open-source, cross-platform JavaScript runtime environment that allows us to execute JavaScript outside the browser. 
// It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, 
// which makes it suitable for building scalable and high-performance server-side applications.

// Runtime Environment
// A runtime environment provides everything required to execute a programming language.
// JavaScript normally runs inside a browser.
// Browser provides JavaScript runtime.
// Node.js provides another runtime environment where JavaScript can execute outside the browser.

// What does "JavaScript outside browser" mean?
// Browser mein JavaScript se hum generally:
// document.getElementById()
// window.alert()
// use kar sakte hain.
// Lekin Node.js mein browser APIs available nahi hoti.
// Instead Node.js hume server-side APIs deta hai.
// const fs = require("fs");
// fs.readFile("test.txt", "utf8", (err, data) => {
//     console.log(data);
// });
// Yahan Node.js filesystem access kar raha hai.
// Browser normally direct server filesystem ko access nahi kar sakta.

// 5. What is V8?
// V8 is Google's open-source JavaScript engine written primarily in C++. 
// It was originally developed for Google Chrome and is responsible for executing JavaScript code.
// Node.js uses V8 to execute JavaScript.

// Is Node.js single-threaded?
// JavaScript execution in Node.js is primarily single-threaded, 
// but Node.js can perform asynchronous operations using the event loop, OS facilities, and libuv's thread pool.

// 9. What is Non-Blocking I/O?
// I/O means Input/Output.

// Examples:
// Reading file
// Writing file
// Database query
// API request
// Network request

// Blocking example
// const data = fs.readFileSync("large.txt");
// console.log("Hello");
// If reading the file takes 5 seconds, execution waits.
// Read file
//    ↓
// WAIT 5 seconds
//    ↓
// Hello

// Non-blocking example
// fs.readFile("large.txt", (err, data) => {
//     console.log(data);
// });
// console.log("Hello");
// Hello
// file data
// Node.js can continue doing other work while the I/O operation completes.

// 10. Why is Node.js good for scalable applications?
// Because Node.js uses an event-driven, non-blocking architecture.
// Imagine 10,000 users send requests.
// Traditional blocking approach:
// Request 1 → Wait
// Request 2 → Wait
// Request 3 → Wait
// ...

// Node.js can handle I/O asynchronously:
// Request
//    ↓
// Start I/O
//    ↓
// Don't wait
//    ↓
// Handle another request
//    ↓
// I/O completes
//    ↓
// Callback

// This makes Node.js particularly useful for:
// REST APIs
// Real-time applications
// Chat applications
// Streaming
// WebSockets
// Microservices
// API gateways

// 12. What is libuv?
// libuv is a cross-platform asynchronous I/O library used by Node.js. It provides the event loop and handles asynchronous operations, 
// including certain filesystem, DNS, cryptographic, and other operations through its thread pool.

// 18. What is Express.js?
// Node.js itself web framework nahi hai.
// Express.js is a popular web framework for Node.js.

// 20. What is a module?
// A module is a reusable piece of code.
// // math.js
// function add(a, b) {
//     return a + b;
// }
// module.exports = add;
// Then:
// const add = require("./math");
// console.log(add(10, 20));

// 24. What is process in Node.js?
// process is a global object that provides information and control over the current Node.js process.
// Example:
// console.log(process.version);
// Arguments:
// console.log(process.argv);
// Environment variables:
// console.log(process.env.NODE_ENV);
// Exit:
// process.exit(1);

// 26. What is middleware?
// Middleware is a function that has access to the request, response, and next() function 
// and can execute logic during the HTTP request-response cycle.
// Middleware is a function that runs during the request-response cycle.
// Example:
// app.use((req, res, next) => {
//     console.log(req.method);
//     next();
// });
// Flow:
// Request
//    ↓
// Middleware
//    ↓
// next()
//    ↓
// Route
//    ↓
// Response

// 27. What is REST API?
// REST API allows clients and servers to communicate through HTTP.

// 32. What is EventEmitter?
// EventEmitter is a Node.js mechanism for implementing event-driven behavior through methods such as on() and emit().
// Node.js has an EventEmitter class.
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("login", (username) => {
//     console.log(`${username} logged in`);
// });
// emitter.emit("login", "Harish");
// Output:
// Harish logged in

// Important methods:
// on()
// once()
// emit()
// off()
// removeListener()

// 33. What is Buffer?
// Buffer is used to work with raw binary data.
// Example:
// const buffer = Buffer.from("Hello");
// console.log(buffer);
// Buffers are commonly used with:
// Files
// Streams
// Network communication
// Binary data

// 34. What are Streams?
// Streams allow data to be processed incrementally rather than loading the entire data set into memory.
// Streams allow us to process data piece-by-piece instead of loading everything into memory.
// Types:
// Readable
// Writable
// Duplex
// Transform

// Example:
// const fs = require("fs");
// const stream = fs.createReadStream("large-file.txt");
// stream.on("data", (chunk) => {
//     console.log(chunk);
// });
// Very useful for large files.

// 35. What is clustering?
// Node.js JavaScript execution is primarily single-threaded.
// Modern servers often have multiple CPU cores.
// Cluster-related techniques allow multiple Node.js processes to run and share server traffic.

// Conceptually:
//              Server
//                 |
//        ┌────────┼────────┐
//        ↓        ↓        ↓
//     Worker   Worker   Worker
//        1        2        3
// This can improve CPU utilization.

// Q28. What is CORS?
// CORS = Cross-Origin Resource Sharing.
// It controls whether a browser can allow web pages from one origin to access resources from another origin.

// Q29. How does Node.js handle 10,000 requests?
// Node.js can efficiently handle many concurrent I/O-bound requests because it uses an event-driven, non-blocking architecture. 
// Instead of dedicating a JavaScript thread to wait for each I/O operation, Node.js starts the operation and continues processing other work. 
// When the operation completes, its callback or Promise continuation is scheduled for execution.

// 40. CPU-bound vs I/O-bound
// This is extremely important for a senior developer interview.
// I/O-bound
// Examples:
// Database query
// HTTP request
// File read
// Network request
// Node.js performs well here.
// CPU-bound
// Examples:
// Large mathematical calculation
// Video encoding
// Image processing
// Huge data transformation
// These can block the JavaScript thread.
// Possible solutions:
// Worker Threads
// Child Processes
// Separate services
// Queues
// Horizontal scaling