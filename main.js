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
console.log(fruits.indexOf('oranges'));

const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city } } = person;
console.log(city);
person.email = 'john@gmail.com';

console.log(person);

const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While

let i = 0;
while (i < 10) {
    console.log(`While Loop Number ${i}`);
    i++;
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);