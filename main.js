// let, const

// Strings, Numbers, Boolean, Null, Undefined

//const name = 'john';
//const age = 30;
//const rating = 4.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z;

//console.log(typeof name)

// Concatenation
//console.log('My name is ' + name + ' and I am ' + age);
// Template String
//console.log(`My name is ${name} and I am ${age}`);

//const s = 'technology, computers, IT, code';

//console.log(s.length);

//console.log(s.toUpperCase());

//console.log(s.toLowerCase());

//console.log(s.substring(0, 5).toUpperCase());

//console.log(s.split(', '));

// <- Kommentar
/* <- Multi
line
kommentar -> */

// Arrays - variabeln mit mehreren werten

//const numbers = new Array(1, 2, 3, 4, 5);

//console.log(numbers);

//const fruits = ['apples', 'oranges', 'pears'];

//fruits[3] = 'grapes';
//fruits.push('mangos')
//fruits.unshift('berries')
//fruits.pop();

//console.log(fruits);
//console.log(fruits[2]);
//console.log(Array.isArray(fruits));
//console.log(fruits.indexOf('oranges'));

//const person = {
//firstName: 'john',
//lastName: 'Doe',
//age: 30,
//hobbies: ['music', 'movies', 'sports'],
//address: {
//street: '50 main street',
//city: 'Boston',
//state: 'MA'
//}
//}

//console.log(person.firstName, person.lastName);
//console.log(person.hobbies[1]);
//console.log(person.address.city);

//const { firstName, lastName, address: { city } } = person;
//console.log(city);
//person.email = 'john@gmail.com';

//console.log(person);

//const todos = [{
//id: 1,
//text: 'Take out trash',
//isCompleted: true
//},
//{
//id: 2,
//text: 'Meeting with boss',
//isCompleted: true
//},
//{
//id: 3,
//text: 'Dentist appointment',
//isCompleted: false
//},
//];

//console.log(todos[1].text);

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

// For

//for (let i = 0; i <= 10; i++) {
//console.log(i);
//}

//for (let i = 0; i <= 10; i++) {
//console.log(`For Loop Number: ${i}`);
//}

// While

//let i = 0;
//while (i < 10) {
//console.log(`While Loop Number ${i}`);
//i++;
//}

//for (let i = 0; i < todos.length; i++) {
//console.log(todos[i].text);
//}

//for (let todo of todos) {
//console.log(todo.text);
//}

// forEach, map, filter

//todos.forEach(function(todo) {
//console.log(todo.text);
//});

//const todoText = todos.map(function(todo) {
//return todo.text;
//});

//console.log(todoText);

//const todoCompleted = todos.filter(function(todo) {
//return todo.isCompleted === true;
//}).map(function(todo) {
//return todo.text;
//})

//console.log(todoCompleted);

//const k = 6;
//const l = 11;

//if (k === 10) {
//console.log('k is 10');
//} else if (k > 10) {
//console.log('k is greater than 10');
//} else {
//console.log('k is not 10');
//}

//if (k > 5 || l > 10) {
//console.log('k is more than 5 or l is more than 10')
//}

//if (k > 5 && l > 10) {
//console.log('k is more than 5 or l is more than 10!')
//}

//const p = 9;
//const color = p > 10 ? 'red' : 'blue'
//console.log(color);

//switch (color) {
//case 'red':
//console.log('color is red');
//break;
//case 'blue':
//console.log('color is blue');
//break;
//default:
//console.log('color is NOt red or blue')
//};

//const addNums = (num1 = 1, num2 = 1) => num1 + num2;

//console.log(addNums(5, 5));

// Constructor function

//function Person(firstName, lastName, dob) {
//this.firstName = firstName;
//this.lastName = lastName;
//this.dob = new Date(dob);
//}

//Person.prototype.getBirthYear = function() {
//return this.dob.getFullYear();
//}
//Person.prototype.getFullName = function() {
//return `${this.firstName} ${this.lastName}`;
//}



// Instantiate object
//const person1 = new Person('John', 'Doe', '8-28-1998');
//const person2 = new Person('Mary', 'Smith', '3-6-1970');


//console.log(person2.getFullName());
//console.log(person1);

//class

//class People {
//constructor(firstName, lastName, dob) {
//this.firstName = firstName;
//this.lastName = lastName;
//this.dob = new Date(dob);
//}
//getBirthYear() {
//return this.dob.getFullYear();
//}
//getFullName() {
//return `${this.firstName} ${this.lastName}`;
//}
//}

//const people1 = new People('John', 'Doe', '8-28-1998');
//const people2 = new People('Mary', 'Smith', '3-6-1970');

//console.log(people2.getFullName());
//console.log(people1);


// Single Element

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

// Multiple Element

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';