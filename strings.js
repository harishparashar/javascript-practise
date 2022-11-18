//* string is immutable(string change nhi hogi return new string)

//* length
// value start 1

// let name = 'harish'
// console.log(name.length)

//* trim()
// remove white spaces in a string
// let str = "   harihs    "
// let newstr = str.trim();
// console.log(newstr.length)
// console.log(str.length)


//* Escape Character
// backslash = \"   \"

// let escChar = "harish is a \"Software\" developer"
// console.log(escChar)

// if we use single quotes then no need to use backslash.
// let escChar = 'harish is a "Software" developer'
//  console.log(escChar)


//* Find a string in string
//* indexOf()
// The indexOf method return the index of the first occurrence of 
// a specified text in a string.if no found return -1

// let bioData = "i am a good";
// console.log(bioData.indexOf('i'));

//* lastIndexOf()
// The lastIndexOf method return the index of the last occurrence of 
// a specified text in a string. if no found return -1

// let bioData = "i am a good";
// console.log(bioData.lastIndexOf('m'));


//* searching for a string in a string
//* search()
// The search method searches a string for a specified 
// value and returns the position of the mathch. if no found return -1
// search method cann't take second start position argument

// let bioData = "i am a good";
// console.log(bioData.search('m'));


//* Extraction string parts

// There are three method for extrancting string parts

// slice(start,end)
// substring(start,end)
// substr(start,length)

//* slice(start,end)
// slice extracts a part of a string and return the extracted part
// in a new string.
// doesn't include the given end argument

// let fruits = "Apple,Mango"
// let res = fruits.slice(0, 4)
// // let res = fruits.slice(6, -1)
// console.log(res)


// challange 
// Display only 280 character of a string 

// let fruits = "Display only 280 character of a string Display only 280 character of a string 
// Display only 280 character of a string Display only 280 character of a string Display only 280 character of a string 
// Display only 280 character of a string Display only 280 character of a string Display only 280 character of a string 
// Display only 280 character of a string Display only 280 character of a string Display only 
// 280 character of a string Display only 280 character of a string Display only 280 character of a string Display only 
// 280 character of a string Display only 280 character of a string "
// let res = fruits.slice(0,279)
// console.log(res)


//* substring(start,end)
// substring is similar to slice.
// difference is that substring cannot accept nagative index no, if
// we give nagative value that the character are count 0th  position

// let fruits = "Apple,Mango"
// let res = fruits.substring(0,4)
// // let res = fruits.substring(6,-1)
// console.log(res)

//* substr(start,length) deprecated
// substr is similar to slice.
// the difference is that the second parameter specifies the
// length of the extracted part.

// let fruits = "Apple,Mango"
// let res = fruits.substr(0, 4)
// // let res = fruits.substr(-5)
// console.log(res)

//* Replacing string content
//* replace(serchFor,replaceWith)
// The replace method replace a specified value 
// with another value in a string. case sensitive. Point to remember
// 1- doesn't change the string
// 2- it returns a new string .
// 3- it replace only first match 

// let naam = " my name is harish parashar harish"
// // let newNaam = naam.replaceAll('harish','Harish')
// let newNaam = naam.replace('harish','Harish')
// console.log(newNaam)

//* Extraction string Characters

// There are three method for extrancting string Characters
// charAt(position)
// charCodeAt(position)
// Property Access [ ]

//* charAt(position)
// returns the character at a specified index (position) in a string

// let str = "hello world"
// console.log(str.charAt(1))

//* charCodeAt(position)
// returns the unicode at a specified index (position) in a string.
// return a UTF-16 code (integer batween 0 and 65535);

// let str = "hello world"
// console.log(str.charCodeAt(1))

//* Property Access
// es5 allow prperty access[] on a string

// let str = "hello world"
// console.log(str[1])

//** other useful method
// let myname = "Harish Parashar"
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());

// let fname = 'harsih'
// let lname = 'parashar'
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname))

//* string.trim()
// remove whitespace from both sides of a string

// let str = "   hello world      ";
// console.log(str.trim())


// converting string to a array
//* A String can be converted to an array using split() method

// let txt = 'a,b,c | d,e';
// console.log(txt.split(","))   // split on comma
// console.log(txt.split(" "))   // split on spaces
// console.log(txt.split("|"))   // split on pipe

