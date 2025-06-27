// Q.1 find duplicateValue
// const arry = [1, 2, 1, 3, 4, 3, 5, -1];

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);
// let set = new Set(arry);
// console.log(set)


// Q.2  missing odd number given array
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

// Example usage:
// const inputArray = [2, 7, 11, 4, -2];
// const resultArray = createSumArray(inputArray);
// console.log(resultArray);  // [20, 15, 11, 18, 24]


// Q.4  rotate array by 2 places like this:
// function rotateArrayByTwo(input) {
//   const rotatedArray = input.slice(2).concat(input.slice(0, 2));
//   return rotatedArray;
// }

// // Example usage:
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

        
// Q.7 sum of array
        //    let data = [1,2,23,55,1,4,4,8,8];
    // const sum = data.reduce((accum,curr)=>{
    //     return accum+curr
    // });
    // console.log(sum);


//Q.8 second largest value in array without predefined function

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


//Q.9 find intersection that means common value both array
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// // output 3,4,5

// const intersectionArr = arr1.filter((ele)=>{
//     console.log(ele)
//     return arr2.includes(ele)
// })

// console.log(intersectionArr)

//Q.10 find the union number that means no duplicate value print
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// output 1,2,3,4,5,6,7

// const unionArr = [... new Set([...arr1 , ...arr2])]
// console.log(unionArr)

//Q. 11 flat a array
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, [9,[8], 10], 11],
// ];
// console.log(arr.flat(0));
// console.log(arr.flat(3));

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
