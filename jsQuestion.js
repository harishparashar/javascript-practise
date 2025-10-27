// 1 -  difference beetween undefine and null

// var data = null;
// console.log(data);
// console.log(typeof (data));

// var unData;
// console.log(unData);
// console.log(typeof (unData));

// 2 what is NaN

// NaN is a property of the global object
// In other word, it is a variable in global scope
// The initial value of NAN is not a Number

// var number = 84309520348092;
// var name = "harish"
// console.log(isNaN(number))
// console.log(isNaN(name))

// console.log("harish" - "manish")

// NaN practise 
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// 5 + 5 
// (5=oprand)+(+ = operator) = expression

// increment and decrement operator
// x++ = postfix
// ++X = prefix

// var num = 15;
// var newnum = num++;
// console.log(num);
// console.log(newnum);

// var num = 15;
// var newnum = ++num;
// console.log(num);
// console.log(newnum);

// what will the output of 3**3?   // exponentiation operator
// that means 3*3*3 = 27    if 3**2 that means 3*3 = 9

// falsy value in js = 0 , "" , null , NaN, undefined,false
// if (0) {
//     console.log(ture)
// } else {
//     console.log(false)
// }

// * tabel print
// for (let num = 1; num <= 10; num++) {
//     let table = 2
//     console.log(table * num)
// }

// function expression
// create a function and put it into another variable

// function sum(a, b) {
//     return total = a + b;
// }

// const funExp = sum(5, 5);
// console.log(funExp) 

// annonyms function expression

// const funExp = function (a, b) {
//     return total = a + b;
// }
// console.log(funExp(5, 4))




// print 1 to 10 and show each value after 1 second

// const printNumbers = (from, to) => {
//     let current = from;
//     let timerId = setInterval(() => {
//         console.log(current)
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(5, 10);

// isArray - method determines whether an object is an array . return true if array otherwise return false

// function is first class citizen
// A programming language is said to have first class function when function in that language are treated like any other variables.

// any function that is passed as an argument that is called callback function.
// a callback is a function that is to be executed after another function has finished excecuteing. 

// A Promise in JavaScript is an object that represents the future result of an asynchronous operation — either success (resolve) or failure (reject)

// HOF are functions that take other function as an argument or return function as their result . 

// An IIFE is a js function that runs as soon as it is defined.

// closer is an action that is inner function can have access to the outer function variables as well as  all the globlal variables.

// call method - is a predefined js method. with call() an object can use a method beloging to another object. 
// call methods takes argument seprately 
// apply methods takes argument in an Array.
// bind method - we can bind a object to a common function, so thats the function give different result when we need . 

// for of loop - working on iterable objects (array and string)
// for in loop - allows us to loops through the properties of an object . 
// enmuration =that's means object properties show

// what is event loop. 
// the event loop is js macanisam to manage asyncnorus Task . it check the call stack (where syncronus code executed)
// and the task queue (whaer asyncronus callbacks wait) to decide what to run next .
// - js runs all syncronus code .
// - when asyncnorus code (Timer , network response ) is ready , its callback is added to the task queue . 
// - onces the syncronus code finished . the event loop take task from queue and runs them . 

// ✅ 2. Event Delegation
// Event Delegation is a technique where you attach a single event listener to a parent element instead of each child.

// ✅ What is Function Currying in JavaScript?
// Function Currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, 
// each taking one argument at a time.
// Currying is a way to call a function step by step — one argument at a time — instead of all at once.
// const curriedSum = a => b => c => a + b + c;
// console.log(curriedSum(1)(2)(3)); // ➝ 6

// 🔸 Shallow Copy:
// A shallow copy copies only the first level of an object or array.
// If the object has nested objects, the inner objects are not cloned, they are just referenced.

// const original = {
//   name: "Harish",
//   address: { city: "Delhi" }
// };
// const shallow = { ...original }; // shallow copy
// shallow.name = "Raj"; // ✅ changes only shallow.name
// shallow.address.city = "Mumbai"; // ❌ also changes original.address.city
// console.log(original.address.city); // "Mumbai"
// 💡 Why? Because address is still the same object (reference) in both.

// 🔸 Deep Copy:
// A deep copy copies everything, including all nested objects.
// So the new object is completely separate from the original.
// const original = {
//   name: "Harish",
//   address: { city: "Delhi" }
// };
// const deep = JSON.parse(JSON.stringify(original)); // deep copy
// deep.address.city = "Mumbai";
// console.log(original.address.city); // "Delhi"
// 💡 Here, nested address is fully cloned, not just referenced.

// 🔹 JSON.stringify()
// 👉 Object ko JSON string me convert karta hai.
// const user = { name: "Harish", age: 28 };
// const str = JSON.stringify(user);
// console.log(str); // '{"name":"Harish","age":28}'
// console.log(typeof str); // "string"

// 🔹 JSON.parse()
// 👉 JSON string ko wapas JavaScript object me convert karta hai.
// const str = '{"name":"Harish","age":28}';
// const obj = JSON.parse(str);
// console.log(obj.name); // "Harish"
// console.log(typeof obj); // "object"


// ✅ Debouncing in React
// Debouncing means delaying a function call until the user has stopped performing an action for a certain time.
// It helps reduce unnecessary function calls like API requests on every keystroke.

// Throttling in React
// Throttling means limiting a function to run only once in a given time period, even if triggered multiple times.
// It’s useful for performance-heavy tasks like scroll or resize events.

// Debounce: Triggers after the user stops typing (or action) for some time.
// Throttle: Triggers the function at a fixed rate, even during continuous activity.


// Synchronous code runs step by step and blocks the next line until it finishes.

// Asynchronous means that a task is started but doesn't block the rest of the code from running —
// the program continues executing while that task finishes in the background, and its result is handled later.
// JavaScript is single-threaded, but handles async using the event loop and callback queue.


// ✅ What is Coercion in JavaScript?
// Coercion is JavaScript’s automatic or implicit conversion of a value from one data type to another.

// It usually happens when:
// Using operators like +, ==, etc.
// JS needs to evaluate expressions with different data types.

// 🧠 Types of Coercion
// 1. Implicit Coercion
// JS automatically converts values.
// '5' + 1       // '51'   → number 1 is coerced to string
// '5' - 1       // 4      → string '5' is coerced to number
// true + 1      // 2      → true is coerced to 1
// null + 1      // 1      → null is coerced to 0
// 2. Explicit Coercion
// You manually convert types.
// Number("5")   // 5
// String(100)   // "100"
// Boolean(0)    // false

// let vs const in JavaScript
// 1. Re-assignment
// let → You can reassign values.
// const → You cannot reassign (the variable reference is fixed).
// let a = 10;
// a = 20; // ✅ works
// const b = 10;
// b = 20; // ❌ TypeError: Assignment to constant variable
// 2. Initialization
// let → Can be declared without assigning a value.
// const → Must be initialized at the time of declaration.
// let x;   // ✅ allowed
// x = 5;
// const y; // ❌ Error: Missing initializer in const declaration
// 3. Scope
// Both let and const are block-scoped (only accessible inside { }).
// Unlike var, which is function-scoped.
// 4. Hoisting
// Both let and const are hoisted, but they are in the Temporal Dead Zone (TDZ) → cannot be accessed before declaration.
// console.log(a); // ❌ ReferenceError
// let a = 5;
// 5. Objects & Arrays with const
// const only prevents reassignment of the variable itself, not mutation of objects/arrays inside it.
// const person = { name: "Harish" };
// person.name = "Raj"; // ✅ allowed (mutation)
// person = {}; // ❌ Error (reassignment not allowed)
// person = { name: "Raj" };  ❌ Error (reassignment not allowed)


// JavaScript (JS) is a high-level, interpreted programming language that is mainly used to make websites interactive and dynamic.
// ✅ Key Points:
// JavaScript is a lightweight, dynamic, interpreted language that runs in the browser as well as on servers (using Node.js).
// Purpose: It adds behavior to web pages — for example, handling button clicks, form validations, animations, and API calls.
// Features: Dynamically typed (no need to define variable types explicitly)
// Single-threaded with an event loop (asynchronous behavior possible)
// Supports Object-Oriented, Functional, and Imperative programming styles.
// An interpreted language is a programming language where the code is executed line by line by an interpreter, 
// rather than being compiled into machine code first.
// Interpreter – Explanation
// An interpreter is a program that reads and executes code line by line.
// Instead of converting the whole program into machine code at once (like a compiler), it translates and runs each instruction immediately.


// 📌 What is structuredClone?
// structuredClone() is a built-in JavaScript function that creates a deep clone of a given value.
// Unlike shallow copying (Object.assign or spread operator {...obj}), structuredClone() copies everything
//  recursively, including nested objects, arrays, and many special types — and it does so safely.

// "structuredClone() is a built-in JavaScript method introduced in ES2021 that creates a deep clone of objects, arrays, and many other data types.
//  Unlike JSON.stringify() and parse(), it supports Dates, Maps, Sets, and even handles circular references. 
// It's now the recommended way to make deep copies natively without using external libraries like Lodash."