// Hi, In this video we will look at Javascript string properties and methods. My name is Chris Mutuma from eKICH programming . Let's begin.

// As noted in the introduction of this tutorial, we will look at string length, replacing string content, converting to upper and lower case, and joining strings.

// JavaScript methods are actions that can be performed on objects.
// Note Strings are not objects.
// JavaScript treats primitive values as objects when executing methods and properties.

// String length
// The length property returns the length of the string

let text = 'Javascript';
let l = text.length;
console.log(l);


// Replacing String Content
// The replace() method - The method replaces a specified value with another value in a string
let txt = 'Like, share and subscribe to eKICH Channel';
let newTxt = txt.replace('Channel', 'Proramming');
console.log(newTxt);
// By default the replace() method replaces only the first match
let rep = 'Javascript Methods and Javascript Properties';
let newRep = rep.replace('Javascript', 'Vanilla Script');
console.log(newRep);
// replace() method is case sensitive

// Converting to Upper and Lower Case
// 1. toUpperCase()
let upper = 'Javascript';
let newUpper = upper.toUpperCase();
console.log(newUpper);

// 2. toLowerCase()
let lower = 'JAVASCRIPT';
let newLower = lower.toLowerCase();
console.log(newLower);

// The concat() method
// The method joins two or more strings.
// Method 1. concat() instead of + operator
let firstName = 'Joshua';
let lastName = 'Watkins';
let fullName = firstName.concat(' ', lastName);
console.log(fullName);

// Method 2. plus operator
let fname = 'Chris';
let otherName = 'Mutuma';
let bothNames = fname + ' ' + otherName;
console.log(bothNames);

// Note strings are immutable meaning they cannot be changed, they can only be replaced