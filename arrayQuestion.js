// Q.1 find duplicateValue
// const arry = [1, 2, 1, 3, 4, 3, 5, -1];

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);
// let set = new Set(arry);
// console.log(set)

// function duplicateValues (){
//     let duplicate = [];
//     for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//     if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
//         duplicate.push(arr[i])
//     }}}
// return duplicate;
// }
// console.log(duplicateValues(arr))


// Q.2  missing odd/even number given array
// const arr = [5, 7, 9, 11, 15, 17];
// let missingNumber = null;
// for (let i = arr[0]; i <= arr[arr.length - 1]; i += 2) {
//     console.log(i)
//   if (!arr.includes(i)) {
//     missingNumber = i;
//     break;
//   }
// }
// console.log(missingNumber);


// Q.3  create an array of sum : at any index put sum of all element except that index element
// function createSumArray(input) {
//   const sumArray = [];
//   const totalSum = input.reduce((acc, curr) => acc + curr);
//   console.log(totalSum)
//   for (let i = 0; i < input.length; i++) {
//     sumArray.push(totalSum - input[i]);
//   }
//   return sumArray;
// }
// const inputArray = [2, 7, 11, 4, -2];
// const resultArray = createSumArray(inputArray);
// console.log(resultArray);  // [20, 15, 11, 18, 24]


// Q.4  rotate array by 2 places like this:
// function rotateArrayByTwo(input) {
//   const rotatedArray = input.slice(2).concat(input.slice(0, 2));
//   return rotatedArray;
// }
// const inputArray = [2, 7, 11, 4, -2];
// const rotatedArray = rotateArrayByTwo(inputArray);
// console.log(rotatedArray); //[11, 4, -2, 2, 7]


// Q.5  max and second max value array
// const arr1 = [1,5,6,8,9,9,44,55,44,66,68]
// let max = '';
// let secondMax = '';
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] > max) {
//     secondMax = max;
//     max = arr1[i];
//   } 
// }
// console.log(max)
// console.log(secondMax)

// Q.6 unique no remove in array
// const arr1 = [1,5,6,8,9,9,44,55,44,66,68]
//         let unique  = new Set(arr1);
//         console.log([...unique])

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1])); // [1, 2, 3, 4, 5]

// function removeDuplicates(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!unique.includes(arr[i])) {
//         unique.push(arr[i]);
//       }
//     }
//     return unique;
//   }  
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1]));

//Q.9 find intersection that means common value both array
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// // output 3,4,5

// const intersectionArr = arr1.filter((ele)=>{
//     console.log(ele)
//     return arr2.includes(ele)
// })
// console.log(intersectionArr)
// function intersection(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//         result.push(arr1[i]);
//       }
//     }
//     return result;
//   }  
//   console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // [3, 4]

//Q.10 find the union number that means no duplicate value print
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// output 1,2,3,4,5,6,7
// const unionArr = [... new Set([...arr1 , ...arr2])]
// console.log(unionArr)

// function union(arr1, arr2) {
//     let result = [];  
//     for (let i = 0; i < arr1.length; i++) {
//       if (!result.includes(arr1[i])) {
//         result.push(arr1[i]);
//       }
//     }  
//     for (let j = 0; j < arr2.length; j++) {
//       if (!result.includes(arr2[j])) {
//         result.push(arr2[j]);
//       }
//     }  
//     return result;
//   }  
//   console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));  // [1, 2, 3, 4, 5, 6]

// function union(arr1, arr2) {
//     let combined = arr1.concat(arr2);
//     return combined.filter((item, index) => combined.indexOf(item) === index);
//   }  
//   console.log(union([1, 2, 3, 4], [3, 4, 5, 6]));  // [1, 2, 3, 4, 5, 6]

//Q. 11 flat a array
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, [9,[8], 10], 11],
// ];
// console.log(arr.flat(0));
// console.log(arr.flat(3));

// function flatten(arr) {
//     return arr.reduce((acc, val) => 
//       Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
//   }  
//   console.log(flatten([1, [2, [3, 4]], 5])); // [1,2,3,4,5]

// function flattenDeep(arr) {
//     let result = [];  
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         result = result.concat(flattenDeep(arr[i])); // recursive call
//       } else {
//         result.push(arr[i]);
//       }
//     }  
//     return result;
//   }  
//   console.log(flattenDeep([1, [2, [3, [4]], 5], 6]));  // [1, 2, 3, 4, 5, 6]

// Quet 12:- Find the square root of each element of an array.
// const arr = [4,9,16,25,36];
// const square = arr.map((ele)=> Math.sqrt(ele));
// console.log(square);

// Quest 13:- multiply each element by 2 and return only those
//         element which are greater then 10?
// const arr = [ 2,3,4,5,6,7];
//  const newArr = arr.map((ele)=>ele *2).filter((ele)=> ele >10)
//  console.log(newArr)


// quest 14 sort number in array
// const numbers = [5, 2, 8, 1, 10];

// // Sorting the numbers in ascending order
// const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers); // Output: [1, 2, 5, 8, 10]

// // Sorting the numbers in descending order
// const reverseSortedNumbers = numbers.sort((a, b) => b - a);
// console.log(reverseSortedNumbers); // Output: [10, 8, 5, 2, 1]

// for(let i =0 ; i < arr.length;i++){
//     for(let j =0 ; j < arr.length;j++){
//  if(arr[j] > arr[j +1]){
//      let temp = arr [j];
//      arr[j] = arr[j+1];
//      arr[j+1] = temp
//  }    }
// }

// question = Move Zeroes to End
    // function moveZeroes(arr) {
    //     let j = 0; // pointer for next non-zero
    //     for (let i = 0; i < arr.length; i++) {
    //       if (arr[i] !== 0) {
    //         [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    //         j++;
    //       }
    //     }
    //     return arr;
    //   }    
    //   console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]


// question = Frequency Count of Elements
//  let arr = [1,2,5,3,6,8,9,4,5,67,6,7];
// function frequency(arr) {
//   let freq = {};
//   for (let val of arr) {
//     freq[val] = (freq[val] || 0) + 1;
//   }
//   return freq;
// }
// console.log(frequency(arr));

// function frequency(arr) {
//   return arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
// }
// console.log(frequency(arr)) output = { '1': 1, '2': 2, '3': 3, '4': 1 }


// *********   question find missing number in array
// function findMissing(arr, n) {
//     let total = (n * (n+1)) / 2;
//     let sum = arr.reduce((a,b) => a+b, 0);
//     return total - sum;
//   }  
//   console.log(findMissing([1,2,4,5], 5)); // 3

// function findMissing(arr) {
//     let n = arr.length + 1;  
//     for (let i = 1; i <= n; i++) {
//       if (!arr.includes(i)) {
//         return i;
//       }
//     }
//   }  
//   console.log(findMissing([1, 2, 4, 5]));