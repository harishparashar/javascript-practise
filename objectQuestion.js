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

// Q.2 Group array of objects by a property
// const users = [
//     { name: "Harish", role: "admin" },
//     { name: "Amit", role: "user" },
//     { name: "Sara", role: "admin" },
//     { name: "John", role: "user" }
//   ];
//   const grouped = users.reduce((acc, user) => {
//     (acc[user.role] = acc[user.role] || []).push(user);
//     return acc;
//   }, {});
  
//   console.log(grouped);
//   // {
//   //   admin: [{name:"Harish", role:"admin"}, {name:"Sara", role:"admin"}],
//   //   user:  [{name:"Amit", role:"user"}, {name:"John", role:"user"}]
//   // }


// Q.3 Find duplicate objects by property
// const users = [
//     { id: 1, name: "Harish" },
//     { id: 2, name: "Amit" },
//     { id: 3, name: "Harish" },
//     { id: 4, name: "Raj" },
//     { id: 5, name: "Amit" },
//   ];
//   const duplicates = users.filter(
//     (user, index, arr) =>
//       arr.findIndex(u => u.name === user.name) !== index
//   );
  
//   console.log(duplicates);
//   // [{ id: 3, name: "Harish" }, { id: 5, name: "Amit" }]

// Q.4 Flatten a nested object
// const obj = {
//     name: "Harish",
//     address: {
//       city: "Delhi",
//       pincode: {
//         main: 110001,
//         area: "Connaught"
//       }
//     },
//     skills: ["React", "Node"]
//   };
//   {
//     "name": "Harish",
//     "address.city": "Delhi",
//     "address.pincode.main": 110001,
//     "address.pincode.area": "Connaught",
//     "skills.0": "React",
//     "skills.1": "Node"
//   }

// function flatten(obj, parentKey = "", res = {}) {
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         const newKey = parentKey ? `${parentKey}.${key}` : key;
//         if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
//           flatten(obj[key], newKey, res);
//         } else {
//           res[newKey] = obj[key];
//         }
//       }
//     }
//     return res;
//   }  
//   console.log(flatten(obj));
  
// Q.5 Find the maximum salary from employee objects
// const employees = [
//     { name: "Harish", salary: 60000 },
//     { name: "Amit", salary: 75000 },
//     { name: "Sara", salary: 80000 }
//   ];
//   const maxSalary = employees.reduce(
//     (max, emp) => emp.salary > max.salary ? emp : max,
//     employees[0]
//   );  
//   console.log(maxSalary); 
//   // { name: "Sara", salary: 80000 }
    