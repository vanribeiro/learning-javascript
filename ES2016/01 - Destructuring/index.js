// ES5
var person = {
    firstName: 'Mary',
    lastName: 'Sheldon'
};

var firstName = person.firstName;
var lastName = person.lastName; 
console.log(firstName, lastName);

// ES6
const student = {
    fullName: 'Emily Watson',
    email: 'emilywatson@mail.com'
};

const { fullName, email } = student;
console.log(fullName, email);

// ----------------------------------------------------

// ES5
var fruits = ['banana', 'strawberry', 'grapes'];

var banana = fruits[0];
var strawberry = fruits[1];
var grapes = fruits[2];

console.log(banana, strawberry, grapes);

// ES6
const juice = ['orange', 'peach', 'lemon'];

const [ orange, peach, lemon ] = juice;
console.log(orange, peach, lemon);