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
// for (var num = 1; num <= 10; num++) {
//     var table = 2
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

//  *Question

// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];

// find intersection that means common value both array
// output 3,4,5

// const intersectionArr = arr1.filter((ele)=>{
//     console.log(ele)
//     return arr2.includes(ele)
// })

// console.log(intersectionArr)

// find the union number that means no duplicate value print
// output 1,2,3,4,5,6,7

// const unionArr = [... new Set([...arr1 , ...arr2])]
// console.log(unionArr)


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


// second largest value in array without predefined function

// const array = [32, 523, 5632, 920, 6000];

// let largestNum = array[0];
// let secondLargestNum = 0;

// for (let i = 1; i < array.length; i++) {
//     if (array[i] > largestNum) {
//         secondLargestNum = largestNum;
//         largestNum = array[i];
//     }
//     else if (array[i] !== largestNum && array[i] > secondLargestNum) {
//         secondLargestNum = array[i];
//     }
// };
// console.log("Largest Number in the array is " + largestNum);
// console.log("Second Largest Number in the array is " + secondLargestNum);


// * pattern print
// *
// **
// ***
// ****
// *****

// var i, j;
// //outer loop
// for (i = 1; i <= 5; i++) {
//     //inner loop
//     for (j = 1; j <= i; j++) {
//         console.log('*');
//     }
//     console.log('<br/>');
// }

// var i, j;
// //outer loop
// for (i = 5; i >= 1; i--) {
//     //inner loop
//     for (j = 1; j <= i; j++) {
//         console.log('*');
//     }
//     console.log('<br/>');
// }


// output: -[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, [9, 10], 11],
// ];
// let flatarr = arr.reduce((accum, ele) => {
//     return accum.concat(ele)
// })
// console.log(flatarr)
// let flatArray = [].concat.apply([], arr);
// console.log(flatarr)
// let flatArray = [].concat(...arr);
// console.log(flatarr)
// console.log(arr.flat(0));
// console.log(arr.flat(2));



//  remove vowels and first letter capitel

// var strings = ["my name is harish parashar"];

// let string = strings.map(string => string.replace(/[aeiou]/g, ''));

// let str = string.toString()
// console.log(str)

// const toTitleCase = (phrase) => {
//     return phrase
//         .toLowerCase()
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// };

// let result = toTitleCase(str);
// console.log(result);

