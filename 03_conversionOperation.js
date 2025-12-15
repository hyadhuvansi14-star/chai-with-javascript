let score = false;
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