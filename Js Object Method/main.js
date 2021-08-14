// Creating object method
const car = {
    name : 'Ford Mustang',
    model : '2021',
    color : 'Silver',
    nameModel : function() {
        return this.name + ' ' + this.model;
    }
};

// Accessing Object Method
// objectName.methodName()
let bMeth = car.nameModel();
console.log(bMeth);

let result = car.nameModel;
console.log(result); // Gives you function definition

// Adding a method to an object
car.nameModelColor = function() {
    return this.name + ' ' + this.model + ' ' + this.color;
};

console.log(car.nameModelColor());
console.log(car); // Gives you the car object