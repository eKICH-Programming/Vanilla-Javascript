// JavaScript Array Methods

// Converting Arrays to string
// toString() method
const fruits = ['Banana', 'Mangoe', 'Lemon', 'Grapes'];

console.log(fruits.toString());
console.log(fruits);

// // join method
console.log(fruits.join(' > '));

// // pop() method
console.log(fruits.pop());

// // push() method
console.log(fruits.push('Kiwi'));
console.log(fruits);

// // shift() method
console.log(fruits.shift());
console.log(fruits);

// unshift() method
console.log(fruits.unshift('Apple'));
console.log(fruits);

// // splice() method
const newfruits = ['Banana', 'Mangoe', 'Lemon', 'Grapes'];
newfruits.splice(2, 0, 'Grapes', 'Avocado');
console.log(newfruits);

console.log(newfruits.splice(0, 1));
console.log(newfruits);

// // concat() method
const student = ['Martin', 'James'];
const score = ['A', 'B', 'C', 'D', 'F'];

let final = student.concat(score);

console.log(student);
console.log(score);
console.log(final);

// slice() method
const newfruits = ['Banana', 'Mangoe', 'Lemon', 'Grapes'];
let s = newfruits.slice(1, 3);
console.log(newfruits);
console.log(s);