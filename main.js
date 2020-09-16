// let, const

// Strings, Numbers, Boolean, Null, Undefined

const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name)

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const s = 'technology, computers, IT, code';

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(', '));

// <- Kommentar
/* <- Multi
line
kommentar -> */

// Arrays - variabeln mit mehreren werten

const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';
fruits.push('mangos')
fruits.unshift('berries')
fruits.pop();

console.log(fruits);
console.log(fruits[2]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'))