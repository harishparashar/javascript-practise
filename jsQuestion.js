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