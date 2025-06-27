// Q.1 program to check if the string is palindrome or not

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


// Q.2 program to check if the string is anagram or not

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



// Q.3 reverse string word by word
// const str = "This is Javascript Code";
// // Split the string into an array of words
// const wordsArray = str.split(" ");
// // Reverse the characters of each word in the array
// const reversedWordsArray = wordsArray.map(word =>
//   word.split("").reverse().join("")
// );
// // Join the reversed words back into a string
// const reversedString = reversedWordsArray.join(" ");
// console.log(reversedString);


//Q.4  remove vowels and first letter capitel
// var strings = "my name is harish parashar";
// // Remove vowels
// var noVowels = strings.replace(/[aeiou]/gi, "");
// // Capitalize first letter
// var result = noVowels.charAt(0).toUpperCase() + noVowels.slice(1);
// console.log(result);  // Output: "My nm s hrsh prshr" -> becomes "My nm s hrsh prshr" then first letter "M"

// var strings = "my name is harish parashar";
// // Step 1: Remove vowels
// var noVowels = strings.replace(/[aeiou]/gi, "");
// // Step 2: Capitalize first letter of each word
// var capitalized = noVowels
//   .split(" ")
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");
// console.log(capitalized); // Output: "My Nm S Hrsh Prshr"

