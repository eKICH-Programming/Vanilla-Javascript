// JavaScript conditional statements
//1. if statement
// if(//condition) {
//     //block of code to be executed
// }

const a = 20;
const b = 10;

if(a > b) {
    console.log('a is indeed greater than b!');
}

//2. // else
if(b == a) {
    console.log('b is equal to a!');
} else {
    console.log('b = 10 and a = 20!');
}

//3. else if

if(a <= b) {
    console.log('a is less than or equal to b!');
} else if(a == b) {
    console.log('a is greater than or equal to b!');
} else if(a >= b) {
    console.log('a is greater than or equal to b!');
} else {
    console.log('Condition 1 nor condition 2 are true!');
}