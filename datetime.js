//*  Creating Date Object
// There are four way to create date object

// new Date()
// new Date(year,month,day,hour,minute,second,milisecond)
// // it takes 7 argument
// new Date(milisecond)
// // we can't avoid month section
// new Date(date,string)

//* new Date()
// Date object are created with the new Date() constructor
// gmt = greanwich mean time
// gmt+0530 , india ka time 5hours 30minute age hai
// UTC (Universal Time Coordinated)

// let currDate = new Date();
// console.log(currDate)
// console.log(currDate.toString())
// console.log(currDate.toLocaleString())


//* Date.now()
// Returns the numeric value corresponding the current time -
// the number of milisecond elapsed since january 1,1970 00:00:00 UTC

// console.log(Date.now());


//** new Date(year,month,day,hour,minute,second,milisecond)
// Note:- js count months start 0 to 11. jan is 0 and dec is 11.

// let d = new Date(2018,11,24,01,44,55,0)
// let da = new Date(2018,11)
// console.log(da);

//* new Date(dateString)
// creates a new date object from a date string

// let d = new Date("octomber 13, 2012 11:12:11")
// console.log(d.toLocaleString())

//* new Date(milisecond)
// creates a new date object as zero time plus milisecond

// let d = new Date(1647924274645);
// console.log(d)

// *  Dates method

// let d = new Date();
// // how to get individual date
// console.log(d.toLocaleString())
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());  // Get the weekday as a number (0-6)
// console.log(d.getDate());


// let d = new Date();
// // how to set individual date
// console.log(d.toLocaleString())
// console.log(d.setFullYear(2022));
// // setFullYear method optional set month and day
// console.log(d.setFullYear(2022 ,11,5));
// console.log(d.setMonth(11));
// console.log(d.setDate(11));

//*  Time method

// let d = new Date();
// // how to get individual time
// console.log(d.getTime())
// // return the numbers of milisecond since january 1,1970
// console.log(d.getHours());
// // return the hours of a date as a number(0-23)
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// let d = new Date();
// how to set individual Time
// console.log(d.setTime(2));
// console.log(d.setHours(5))
// console.log(d.setMinutes(5));
// console.log(d.setSeconds(5));
// console.log(d.setMilliseconds(5));
// console.log(d.toLocaleTimeString())
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleString())
// console.log(d.getDay().toLocaleString())
