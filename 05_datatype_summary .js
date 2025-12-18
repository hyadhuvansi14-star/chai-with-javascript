// // primitive

// // 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100; // number
// const scoreValue = 100.3; // number

// const isLoggedIn = false; // boolean
// const outsideTemp = null; // object
// let userEmail;

// const id = Symbol("12345"); // symbol
// const anotherId = Symbol("12345"); // symbol
// console.log(id === anotherId); // false
// // const bigNumber = 1234567890123456789012345678901234567890n; // bigint

// // reference(non - primitive) data types - objects

// // array,functions,objects

// const heros = ["shaktiman", "naagraj", "doga"]; // array - object
// const myobject = {
//     name: "Hariom",
//     age: 19,
// };
// const myFunction = function () {
//     console.log("hello world");
// };


// console.log(typeof score);//number
// console.log(typeof scoreValue);//number
// console.log(typeof isLoggedIn);//boolean
// console.log(typeof outsideTemp);//object
// console.log(typeof userEmail);//undefined
// console.log(typeof id);//symbol
// console.log(typeof bigNumber);//undefined
// console.log(typeof heros);//object
// console.log(typeof myobject);//object
// console.log(typeof myFunction);//function

// +++++++++++++++++++++++++++++++++++++++

// Stack (primitive),Heap (non-primitive) memory

// stack memory - small size, faster access, stores primitive data types//change as copy
// heap memory - large size, slower access, stores non-primitive data types//change as original
let myYoutubeChannel = "codewithharry";

let anotherName = myYoutubeChannel;
anotherName = "codewithharry2.0";

console.log(myYoutubeChannel);
console.log(anotherName);


let userOne = {
    email: "userone@gmail.com",
    upi: "userone@oksbi"

};

let userTwo = userOne;
userTwo.email = "usertwo@gamil.com";

console.log(userOne);
console.log(userTwo);