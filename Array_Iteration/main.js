// JavaScript Array Iterations
// Array Iteration methods

// 1. Array.forEach()
const numbers = [45, 9, 4, 16, 25, 32, 'Array'];

numbers.forEach(myArray);

function myArray(value, index, array) {
    console.log(value);
}


// 2. Array.map()
numbers.map(multiply);

function multiply(value) {
    console.log(value * 5);
}

// 3. Array.filter()
// console.log(numbers.filter(condition));

function condition(value) {
    return value >= 10;
}

// 4. Array.indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];

console.log(fruits.indexOf("Mango"));