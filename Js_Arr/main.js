// JavaScript Arrays
// Creating JavaScript Arrays - Array literal
const car = ['Mercedes', 'BMW', 'Ford', 'Jaquar'];
const cars = [
    'Mercedes',
    'BMW',
    'Ford',
    'Jaquar'
];

const carz = [];
car[0] = 'Mercedes';
car[1] = 'BMW';
car[2] = 'Ford';
car[3] = 'Jaquar';

// new keyword
const newCar = new Array('Mercedes', 'BMW', 'Ford', 'Jaquar', 'Mitsubushi');

// Accessing Array elements
let arrCar = car[0];
// console.log(arrCar);

// Changing an Array element
car[0] = 'Toyota'
console.log(car);
console.log(car[0]);

// // array length property
let j = newCar.length;
console.log(j);

// // Accessing the first Array element
console.log(car[0]);

// // Accessing the last array element
let v = newCar[newCar.length - 1];
console.log(v);

// // Looping Array elements - for loop
let counter = newCar.length;
for (let i = 0; i < counter; i++) {
    console.log(newCar[i]);
}

// Array.forEach() function
newCar.forEach(myArray);

function myArray(i) {
    console.log(i);
}

// Adding new array elements
const fruits = [
    'Banana',
    'Mangoe',
    'Orange',
    'Melon'
];

// Using push() method 
fruits.push('Pineapple');
console.log(fruits);

// Using length property
fruits[fruits.length] = 'Apple';
console.log(fruits); 

// How to recognize an array
// Array.isArray() method
let is = Array.isArray(fruits);
console.log(is);

let ca = Array.isArray(carz);
console.log(ca);

// instanceof operator
let g = fruits instanceof Array;
console.log(g);