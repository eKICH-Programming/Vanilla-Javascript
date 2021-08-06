// Creating JavaScript Object - Object literal
const person = {firtName:'James', lastName:'West', age:40, bank:'Citi'};

const persons = {
    firstName:'Chris',
    lastName:'Mutuma',
    age:34
};

console.log(person);
console.log(persons);

// Creating empty object
const empty = {};

empty.firstName = 'Martin';
empty.lastName = 'James';
empty.age = 50;

console.log(empty);

// Accessing object properties
console.log(person.bank);
console.log(person['bank']);

// Adding new Property
persons.nationality = 'canadian';
console.log(persons);

// Deleting Properties
delete empty.age;
console.log(empty);

delete person['bank'];
console.log(person);

let typ = typeof person;

console.log(typ); // Result = Object