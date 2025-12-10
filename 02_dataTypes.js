"use strict";//treat all JS code as newer version

// alert(3 + 3); we are using nodejs not browser 

let name="Hitesh"  //string datatype
let age =28 //number datatype
let isloggedIn = false // boolean datatype


// number => 2 to power 53
// bigInt => use for large numder
// string  =>use under single or double cotes ' ' or " "
// boolean => true or false
// null =>standalone value
// undefined => value is not asigned or not given
// symbol =>usally use for uniqueness (use mostally in react)
// object
console.log(typeof name)//string
console.log(typeof age);//number
console.log(typeof isloggedIn);//boolean
console.log(typeof 123456789012345678901234567890123456789n); //bigint
console.log(typeof null); //object
console.log(typeof undefined); //undefined  
console.log(typeof Symbol("id")); //symbol
console.log(typeof { name: "hitesh", age: 28 }); //object
console.log(typeof [1, 2, 3, 4]); //object
console.log(typeof Object);//function
console.log(typeof function () { });//function

