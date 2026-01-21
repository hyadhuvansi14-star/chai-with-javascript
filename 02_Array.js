const marvel_heros = ["thor", "spiderman", "ironman", "hulk"];
const dc_heros = ["superman", "batman", "flash", "aquaman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// spread operator use two merge to or more arrays in one array

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat method use to flatten the array 
// const real_another_array = another_array.flat(3);

// console.log(real_another_array);

console.log(Array.isArray("hello world")); // false

console.log(Array.from("hello world")); // ['h','e','l','l','o',' ','w','o','r','l','d']

console.log(Array.from({ name: "hariom" }));  // [] //interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100,200,300]

