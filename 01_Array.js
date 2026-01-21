// const Arr = [1, 2, 3, 4, 5];
// const myAr = ["hariom", "kumar", "singh"];
// 
// const myArr2 = new Array(10, 20, 30, 40);
// console.log(Arr);
// console.log(myAr);
// console.log(myArr2);

// Array Methods

// push method use to add elemnet at th end of the array
// myArr2.push(6);
// console.log(myArr2);  // [10,20,30,40,6]
// myArr2.push([1, 2, 3, 4, 5, 6, 7]);
// console.log(myArr2); // [10,20,30,40,6,[1,2,3,4,5,6,7] ]

// pop method use to remove last element from the array
// myArr2.pop();
// console.log(myArr2); // [10,20,30,40]

// UNSHIFT METHOD USE TO ADD  ELEMNET AT THE BEGINNING OF THE ARRAY
// myArr2.unshift(5);
// console.log(myArr2); // [5,10,20,30,40]

// SHIFT METHOD USE TO REMOVE FIRST ELEMENT FROM THE ARRAY
// myArr2.shift();
// console.log(myArr2); // [10,20,30,40]

// includes method use to check element is present in the array or not
// console.log(myArr2.includes("kumar");
// console.log(myArr2.includes(20));

//  indexof method use to find index of element in the array
// console.log(myArr2.indexOf(30)); // 2
// console.log(myArr2.indexOf(100)); // -1 (not found)

// join method use to convert array into string
// const newArr = myArr2.join();
// console.log(newArr);  // 10,20,30,40
// console.log(typeof newArr); // string
// console.log(myArr2);


// slice or slplice method use to cut the array from the given index
// slice method use to create new array from the given index without modifying the original array


const array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const newArray = array1.slice(1, 3);
console.log(newArray);
console.log(array1);

// splice method use to add or remove element from the array without creating new array

const array2 = array1.splice(2, 3, "x", "y", "z");
console.log(array1);
console.log(array2)
