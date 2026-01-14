let score = "100abc";
console.log(typeof score); //string
console.log(typeof (score));//string
let valueInNumber = Number(score); //conversion to number
console.log(typeof valueInNumber); //number
console.log(score); //100abc
console.log(valueInNumber); //NaN
// ## boolean conversion ##
let isloggedIn = undefined;// console.log(typeof isloggedIn);
let booleanInString = String(isloggedIn); //conversion to string
let booleanLoggedIn = Boolean(isloggedIn); //conversion to boolean
console.log(typeof booleanInString);
console.log(booleanInString);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn)
let valueInboolean = Boolean(isloggedIn); //false
console.log(typeof valueInboolean);
console.log(valueInboolean);
// ## string conversion ##
let num = 12;
console.log(typeof num);
let stringNumber = String(num); //conversion to string
console.log(typeof stringNumber);
console.log(stringNumber);


operations
console.log(2 % 3)     // addition
console.log(2 + 3)     // addition
console.log(2 - 3)     // subtraction
console.log(2 * 3)     // multiplication
console.log(2 / 3)     // division
console.log(2 ** 3)    // exponentiation

let str1 = "hello"
let str2 = "world"
console.log(str1 + " " + str2) // string concatenation

let num1 = 10
let num2 = 20
console.log(num / + num2) // addition    

console.log("1" + 2) // "12" string concatenation
console.log(1 + "2") // "12" string concatenation
console.log("1" + 2 + 3) // "123" string concatenation
console.log(1 + 2 + "3") // "33" addition then string concatenation
console.log("hello" + "world") // "helloworld" string concatenation
console.log("hello" + 2) // "hello2" string concatenation
console.log(2 + "hello") // "2hello" string concatenation
console.log("hello" - "world") // NaN not a number
console.log("hello" * 2) // NaN not a number
console.log("hello" / 2) // NaN not a number

console.log((3 + 4) * 5 % 3); // 35
console.log(true);
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
console.log(+"hello"); // NaN
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

let gamecounter = 100
++gamecounter; // pre-increment
gamecounter++; // post-increment

console.log(gamecounter);

