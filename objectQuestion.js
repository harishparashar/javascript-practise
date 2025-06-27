// Q.1 object common key value get
// const input1 = {a:1,b:2,c:9,d:4}
// const input2 = {z:1,b:2,c:5,d:4}
// const commonKeyValue = {};

// for (const key in input1) {
//     // console.log(key)
//     console.log(input2.hasOwnProperty(key))
//     // console.log(input2[key])
//   if (input2.hasOwnProperty(key) && input1[key] === input2[key]) {
//     commonKeyValue[key] = input1[key];
//   }
// }
// console.log(commonKeyValue);


// another way to solve
// for (const key1 in input1) {
//   const value1 = input1[key1];
//   for (const key2 in input2) {
//     if (key1 === key2 && value1 === input2[key2]) {
//       commonKeyValue[key1] = value1;
//     }
//   }
// }
// console.log(commonKeyValue)

// Q.2 
// var bar = null;
// console.log(typeof bar === "object");