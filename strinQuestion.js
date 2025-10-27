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



// 1. Reverse Words in a Sentence
// Q: Given a string "Hello World from React", reverse each word but keep word order.
// function reverseWords(str) {
//   return str
//     .split(" ")              // ["Hello","World","from","React"]
//     .map(word => word.split("").reverse().join("")) 
//     .join(" ");              // "olleH dlroW morf tcaeR"
// }
// console.log(reverseWords("Hello World from React"));

// 2. Check if a String is Anagram
// Q: Write a function to check if two strings are anagrams.
// function isAnagram(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false

// 3. Find First Non-Repeated Character
// Q: In "swiss", the first non-repeated character is "w".
// function firstNonRepeated(str) {
//   for (let char of str) {
//     if (str.indexOf(char) === str.lastIndexOf(char)) {
//       return char;
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeated("swiss")); // "w"

// 4. Check for Palindrome
// Q: Write a function to check if a string is palindrome.
// Example: "racecar" → true.
// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false

// 5. Count Character Frequency
// Q: Count frequency of each character in "banana".
// function charFrequency(str) {
//   return str.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
// }
// console.log(charFrequency("banana"));// { b: 1, a: 3, n: 2 }

// 6. Remove Duplicates from String
// Q: "programming" → "progamin".
// function removeDuplicates(str) {
//   return [...new Set(str)].join("");
// }
// console.log(removeDuplicates("programming")); // "progamin"

// function removeDuplicates(str) {
//     return str
//       .split("")
//       .filter((char, index, arr) => arr.indexOf(char) === index)
//       .join("");
//   }  
//   console.log(removeDuplicates("programming")); // "progamin"

//   function removeDuplicates(str) {
//     return str.split("").reduce((acc, char) => {
//       return acc.includes(char) ? acc : acc + char;
//     }, "");
//   }  
//   console.log(removeDuplicates("programming")); // "progamin"

// 7. Capitalize Each Word
// Q: "my name is harish" → "My Name Is Harish".
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(capitalizeWords("my name is harish"));// "My Name Is Harish"

// 8. Longest Word in a Sentence
// Q: " " → "frontend".
// function longestWord(str) {
//   return str
//     .split(" ")
//     .reduce((longest, word) => word.length > longest.length ? word : longest, "");
// }
// console.log(longestWord("React makes frontend easier")); // "frontend"

