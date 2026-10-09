// 1. What is Express.js?
// Express.js is a fast, minimal, and flexible web application framework for Node.js. 
// It provides features for building web servers and REST APIs, 
// such as routing, middleware, request/response handling, and error handling.

// 2. Why do we use Express.js instead of plain Node.js?
// Node.js provides low-level APIs to create HTTP servers, but handling routing,
//  middleware, validation, errors, authentication, etc. manually can become repetitive.
// Express.js provides abstractions that make these tasks much easier.


// 3. How do you create an Express server?
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// 5. What is routing in Express?
// Routing determines how an application responds to requests for different URLs and HTTP methods.
// Kis URL aur HTTP method par kaunsa code execute hoga.
// Example:
// GET    /users  → Users fetch
// POST   /users  → User create
// GET    /users/1 → Specific user
// DELETE /users/1 → User delete

// 7. What is middleware?
// Middleware is a function that has access to the request object, response object, and the next() function. 
// It can execute code, modify the request/response, terminate the request, or pass control to the next middleware.

// app.use((req, res, next) => {
//     console.log("Middleware executed");
//     next();
// });
// Middleware ek function hota hai jo request aur response ke beech execute hota hai.

// 8. Why do we use middleware?
// Middleware ka use hota hai:
// Authentication
// Authorization
// Logging
// Validation
// Error handling
// CORS
// Parsing request body
// Rate limiting

// 9. What happens if we don't call next()?
// If middleware neither sends a response nor calls next() (or otherwise transfers control),
//  the request-response cycle can hang.

// 10. What is req and res?
// req
// Request object.
// Contains information coming from client:
// req.params      Route parameters are dynamic values in the URL path.  GET /users/101
// req.query       Query parameters URL ke ? ke baad aate hain.   /users?page=2&limit=10
// req.body        Client request body mein data bhejta hai.  POST /users
// req.headers
// req.method
// req.url
// res

// Response object.
// Used to send response to client:
// res.send()   Can send strings, buffers, objects, etc.; Express determines an appropriate response representation.
// res.json()  Used to send JSON response.
// res.status()  Used to set HTTP status code.
// res.end()

// 14. Why do we use express.json()?
// express.json() is built-in middleware 
// that parses incoming requests containing JSON payloads and makes the parsed data available through req.body.

// 18. Important HTTP status codes
// 2xx — Success
// 200 → OK
// 201 → Created
// 204 → No Content
// 4xx — Client error
// 400 → Bad Request
// 401 → Unauthorized   Authentication missing/invalid.   User is not logged in.
// 403 → Forbidden      User is authenticated but doesn't have permission.  Normal user trying to access admin-only API.
// 404 → Not Found
// 409 → Conflict
// 422 → Unprocessable Content
// 429 → Too Many Requests
// 5xx — Server error
// 500 → Internal Server Error
// 502 → Bad Gateway
// 503 → Service Unavailable

// 20. What is express.Router()?
// express.Router() helps create modular routes.
// Large application mein routes ko separate files/modules mein organize karne ke liye Router use karte hain.

// 21. Why use Express Router?
// Without Router:
// server.js
//  ├── users
//  ├── products
//  ├── orders
//  ├── payments
//  └── authentication
// File bahut large ho sakti hai.
// Router:
// routes/
//  ├── user.routes.js
//  ├── product.routes.js
//  ├── order.routes.js
//  └── auth.routes.js

// 22. What is error-handling middleware?
// Express error middleware generally has four parameters:
// app.use((err, req, res, next) => {
//     console.error(err);

//     res.status(500).json({
//         message: "Internal Server Error"
//     });
// });
// Important:
// err
// req
// res
// next
// Interviewer:
// How does Express recognize error-handling middleware?
// Answer:
// It recognizes middleware with four parameters: (err, req, res, next).

// 24. What is app.use()?
// app.use() is mainly used to mount middleware and routers.

// 27. What is route chaining?
// Example:
// app.route("/users")
//     .get((req, res) => {
//         res.send("Get users");
//     })
//     .post((req, res) => {
//         res.send("Create user");
//     });
// This groups multiple HTTP methods for the same route.

// 30. Authentication vs Authorization in Express
// Authentication
// JWT verify
// Session verify
// Login
// Authorization
// Admin?
// Manager?
// User?

// 35. How do you validate request data?
// You can use validation libraries such as:
// Joi
// Zod
// express-validator

// 36. What is rate limiting?
// Rate limiting restricts how many requests a client can make in a certain time.

// 37. What is Helmet?
// Helmet is commonly used with Express to set various HTTP security-related headers.

// 38. How do you secure an Express application?
// I would use HTTPS, input validation, secure authentication and authorization, proper CORS configuration, 
// rate limiting, secure HTTP headers, password hashing, safe secret management, dependency updates, and protection against injection attacks.

// 41. What is next()?
// next() passes control to the next middleware in the chain.
// app.use((req, res, next) => {
//     console.log("First");
//     next();
// });
// Without next() or a response, request may remain pending.

// 42. What is next(error)?
// It passes an error to Express's error-handling middleware.

// 43. What is static middleware?
// Used to serve static files.
// app.use(express.static("public"));
// Suppose:
// public/
//    image.jpg
//    style.css
// Then Express can serve those files.

// 44. What is app.listen()?
// app.listen(3000, () => {
//     console.log("Server started");
// });
// It starts the HTTP server and listens for incoming connections on the specified port.

// 46. What is graceful shutdown?
// When server receives termination signal:
// SIGTERM
// SIGINT
// you should ideally stop accepting new requests and allow ongoing work to finish before closing resources.
// process.on("SIGTERM", async () => {

//     server.close(() => {
//         console.log("Server closed");
//     });
// });
// Useful for:
// Docker
// Kubernetes
// Cloud deployment
// Zero/minimal-downtime deployments

