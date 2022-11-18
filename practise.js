//*   Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const today = new Date();
// const day = today.getDay();
// const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log(`Today is : ${daylist[day]}.`);
// let hour = today.getHours();
// const minute = today.getMinutes();
// const second = today.getSeconds();
// let prepand = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;
// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     }
//     else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     }
//     else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }
// console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);


//*
// const day = new Date().toLocaleDateString("en", { weekday: "long" });
// console.log(`Today is: ${day}`);

// const time = new Date().toLocaleTimeString("en");
// console.log(`Current time is: ${time}`);


//* Write a JavaScript program to get the current date

// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// let d = new Date();
// let yy = d.getFullYear();
// let mm = d.getMonth()+1;
// let dd = d.getDate();
// let mmm = mm<10 ? `0${mm}` : mm
// let ddd = dd<10 ? `0${dd}` : dd
// console.log(`${mmm}-${ddd}-${yy}`)
// console.log(`${mmm}/${ddd}/${yy}`)
// console.log(`${ddd}-${mmm}-${yy}`)
// console.log(`${ddd}/${mmm}/${yy}`)

//* Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// const side1 = 5; 
// const side2 = 6; 
// const side3 = 7; 
// const perimeter = (side1 + side2 + side3)/2;
// const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

//* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

// const leapyear =(year) => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

//   console.log(leapyear(2016));
//   console.log(leapyear(2000));
//   console.log(leapyear(1700));
//   console.log(leapyear(1800));
//   console.log(leapyear(100));

//* Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

// for (let year = 2014; year <= 2050; year++) {
//     var d = new Date(year, 0, 1);
//     if (d.getDay() === 0)
//         console.log("1st January is being a Sunday  " + year);
// }

//** Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then  
//  prompted to input a guess number. If the user input matches with guess number, 
//  the program will display a message "Good Work" otherwise display a message "Not matched". 

// var num = Math.ceil(Math.random() * 10);
// console.log(num);
// var gnum = prompt('Guess the number between 1 and 10 inclusive');
// if (gnum == num) console.log('Matched'); 
// else console.log('Not matched, the number was ' + gnum);

//* Write a JavaScript program to calculate days left until next Christmas.

// let today = new Date();
// const cmas = new Date(today.getFullYear(), 11, 25);
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     cmas.setFullYear(cmas.getFullYear() + 1);
// }
// const one_day = 1000 * 60 * 60 * 24;
// console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / (one_day))} days left until Christmas!`);

//* Write a JavaScript program to get the website URL (loading page).
// console.log(document.URL);

//* Write a JavaScript exercise to get the extension of a filename.

// let filename = "system.php"
// console.log(filename.split('.').pop());
// let filenames = "abc.js"
// console.log(filename.split('.').pop());

//*  Write a JavaScript program to get the difference between a given number and 13, 
//   if the number is greater than 13 return double the absolute difference. 

// const difference = (n) => {
//     if (n <= 13)
//         return 13 - n;
//     else
//         return (n - 13) * 2;
// }
// console.log(difference(32))
// console.log(difference(11))

// const arry = [1, 2, 1, 3, 4, 3, 5, -1];

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);


// program to check if the string is anagram or not

// const checkStringsAnagram = (a, b) => {
//     if (a.length !== b.length) {
//         console.log('Invalid Input')
//     }
//     let str1 = a.split('').sort().join('');
//     console.log(str1)
//     let str2 = b.split('').sort().join('');
//     console.log(str2)
//     if (str1 === str2) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// checkStringsAnagram("indian", "ndiani")


// program to check if the string is palindrome or not

// function checkPalindrome(string) { 

//     const reverseString = string.split('').reverse().join('');

//     if (string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// checkPalindrome("abcdcba");

// Question =  var call = sum(6);  call(10) return = 16
// function sum(b){
//     // var a =  b
//     function inner(a){
//         return a+b;
//     }
//     return inner;
// }
//  var call = sum(6);
//  console.log(call(20))



// var a = 1;
// console.log(++a)

