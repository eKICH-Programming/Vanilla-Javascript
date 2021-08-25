// JavaScript Object Constructor Function
// Creating JavaScript Object Constructor Function
function Car(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
}

// Create Objects of the same type

const myCar = new Car('Benz', 'E250', 'White', 2018);

// Adding a property to an object constructor function
function Car1(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
    this.manufacturer = 'Mercedes';
}
console.log(Car);
// console.log(Car1);

// Adding a method to an object constructor function
function Car2(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
    this.manufacturer = 'Mercedes';
    this.nameModel = function() {
        return this.name + ' ' + this.model;
    };
}

const myCar2 = new Car2('Benz', 'E250', 'White', 2018);
console.log(myCar2.nameModel());
console.log(myCar2['year']);

// JavaScript Object Prototypes

function Student(first, last, age, year) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.year = year;
}
// Adding a property to an object constructor function
Student.prototype.score = 'B';

const myStudent = new Student('James', 'Martin', 25, 'Second');
console.log(myStudent.score);

// Adding a method to an object constructor function
Student.prototype.name = function() {
    return this.firstName + ' ' + this.score;
};

console.log(myStudent.name());
console.log(Student);