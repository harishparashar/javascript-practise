//  Array index value start 0
//  Array length value start 1

// const Name = ['harish', 'ashish', 'nitin', 'mainis'];
// console.log(Name[Name.length-1])
// console.log(Name[3]);

// for (let i = 0; i < Name.length; i++) {
//     console.log(Name[i])
//     // console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i * 2)
// }

//**  after es6 we have For..in and For..Of loop
//* For...In gives index number
//* For...Of gives data

// const Name = ['harish','ashish','nitin','manish'];
// const names = "hy my name is harish"

// for (let ele in Name){
//     console.log(ele)
// }
// for (let ele of Name){
//     console.log(ele)
// }


//* Array.ForEach loop  
//  call a function for each element in the array, return undefined

// const Name = ['harish','ashish','nitin','mainis'];

// const newname = Name.forEach((ele,ind)=>{
//     console.log(ele)
// })
// console.log(newname)

//*** Searching and filter in an Array
//* Array.indexOf() method
// return the first index of an element within the array equal to an element ,or -1 in none is 
// found, it search the element form the 0th index Number.

// const Name = ['harish', 'ashish', 'nitin', 'mainis'];
// console.log(Name.indexOf('ashish'))

//* Array.lastIndexOf() method
// return the last index of an element within the array equal to an element ,or -1 in none is 
// found it search the element last to first.

// const Name = ['harish','ashish','nitin','manish','manish'];
// console.log(Name.lastIndexOf('manish'))

//* Array.includes()
// Determine wheather the array contain a value,
// returning true or false 
// const Name = ['harish','ashish','nitin','manish','manish'];
// console.log(Name.includes('manish'))

//* Array.find()
// arr.find(callback(element)[,index][,array][,thisArg])
// return the found element in the array,if some element in the array
// satisfies the testing function,or undefinded if no found.
// it return only one element.

// const prices = [222,333,444,555,666,777,888,999];
// prices < 555
// console.log(prices.find((ele)=> ele < 555 ))
// output= 222


//* Array.findIndex()
// return the found index in the array,if an element in the array
// satisfies the testing function,or -1 if no found.

// const prices = [222, 333, 444, 555, 666, 777, 888, 999];
//  prices < 555
// console.log(prices.findIndex((ele) => ele < 555))
// output = 0

//* Array.filter()
// return a new array containg all element of the calling array
// for which the provide filtering function returns true.
// if no satisfyied that return empty array.

//   const prices = [222,333,444,555,666,777,888,999];
//   prices < 555
//   console.log(prices.filter((ele)=> ele < 555 ))
//   const filtarr = prices.filter((ele)=>ele>5555)
//   console.log(filtarr)
//   output = [222,333,444];


//***  How to sort an Array
//* Array.sort()
// The sort() method sorts the element of an array in place and 
// return the sorted array. The default sort order is assending, built
// upon converting the element into string,
// the comparing their sequence of UTF-16 code unit values.
// work only string, incorrect result when use numbers

// const months = ['jan','feb','march','apr','may']
// console.log(months.sort());

// const arr = [1, 11, 2, 33, 44, 111, 222, 66]
// console.log(arr.sort());

//*** Array curd operation
//* Array.push()
// The push mathod adds one or more element to the end of an array
// and return the new length of an array.

// const animals = ['pig','dog','tiger'];
// const count = animals.push('lion');
// console.log(count)
// console.log(animals)

//* Array.unshift()
// The unshift mathod adds one or more element to the begining of an array
// and return the new length of an array.

// const animals = ['pig','dog','tiger'];
// const count = animals.unshift('lion');
// console.log(count)
// console.log(animals)

//* Array.pop()
// The pop mathod remove the last element from an array and returns that removed element.
// this method change the length of the array.

// const animals = ['pig','dog','tiger','lion'];
// const count = animals.pop();
// console.log(count)
// console.log(animals)

//* Array.shift()
// The shift mathod remove the first element from an array and returns that removed element.
// this method change the length of the array.

// const animals = ['pig','dog','tiger','lion'];
// const count = animals.shift();
// console.log(count)
// console.log(animals)


//* Array.map()
// return a new array containing the result of calling a
// function on every element in this array.
// it returns new array without mutating the original array

// const arrr = [1, 2, 4, 6, 7, 9];
// // num >7
// const newArr = arrr.map((ele) => {
//     return ele > 7
// })
// console.log(arrr);
// console.log(newArr)

// Quet 1:- Find the square root of each element of an array.
// Quest 2:- multiply each element by 2 and return only those
//         element which are greater then 10?

// const arr = [4,9,16,25,36];
// const square = arr.map((ele)=> Math.sqrt(ele));
// console.log(square);

// const arr = [ 2,3,4,5,6,7];
//  const newArr = arr.map((ele)=>ele *2).filter((ele)=> ele >10)
//  console.log(newArr)


//* Array.Reduce()
// flatten an array means to convert 2d and 3d array in to a 
// single dimensional array.

//sum value of array
// const arr = [2, 3, 4, 5, 6, 7];
// const sum = arr.reduce((accum, ele) => {
//     console.log(accum)
//     return accum += ele
// })
// console.log(sum)

// flatten an array
// converting 2d and 3d array into one dimensional array

// let arr = [[1, 2, 3], [4, 5, 6]]
// let flatarr = arr.reduce((accum, ele) => {
//     return accum.concat(ele)
// })
// console.log(flatarr)

//* Array.splice()
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// adds and remove element from an array.
// The splice() method returns the removed items in an array.
// The splice() method changes the original array 

// 1- Adds Dec at the end of the array.
// 2- what is the return value of splice method?
// 3- update march to March(update);
// 4- Delet june from array.

// const months = ['jan','feb','march','june','july']
// 1
// const newmonths = months.splice(months.length,0,'dec');
// console.log(months);
// 2
// jo bhi delete krte hai usko return krta hai array me

// 3 
// const getindex = months.indexOf('march');
// const newmonths = months.splice(getindex,1,'March');
// console.log(getindex);
// console.log(months);

// 4 
// const getindex = months.indexOf('june');
// const newmonths = months.splice(getindex,1);
// console.log(months);
// console.log(newmonths)


//* Array.slice
// The slice() method does not change the original array.
//  The slice() method returns the selected element(s) in an array, as a new array object.

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 2);
// console.log(citrus)

//* Array.join
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
// join() method is an array method and it can be used with the arrays.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// console.log(text)

//* toString
// The toString() method returns a string with array values separated by commas.
// The toString() method does not change the original array.
// toString() method is not only for the arrays, but it can be used other types of objects also, 
// it is used to convert an object’s value to the string. The values are separated by the commas.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text)

// Quest. =  2nd largest value in array

// const points = [40, 100, 1, 5, 25, 10];
// const point = points.sort((a, b) => b - a);
// console.log(point[0]);

// let secondMax = (arr) => {
//     var max = Math.max.apply(null, arr); // get the max of the array
//     console.log(max)
//     arr.splice(arr.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, arr); // get the 2nd max
// };

// let arr = [20, 120, 111, 215, 54, 78];
// console.log(secondMax(arr));

// let arr = [];
// arr[5] = 25
// console.log(arr.length)





