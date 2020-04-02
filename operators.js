function greet(name) {
    console.log(`${name} is the best coder in the world`);
}
greet('Richard');
greet('Mary');
greet('Rohit');
greet('Prateek');

function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(6));
console.log(square(7));
console.log(square(8));

let x = 2;
let y = 5;

// console.log(x + y);
// console.log(x / y);
// console.log(x % y);
// console.log(x - y);
// console.log(x * y);
// console.log(x ** y);

// Strict equality operator
console.log(1 === '1');
console.log(1 == 1);
let points = 90;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type)
x = 10;
y = (x > 5) && (x < 15);
let a = 10;
b = ++a;
console.log(b);
let c = "red";
let d = "blue";

let e = c;
c = d;
d = e;

console.log(c);
console.log(d);
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
const person = {
    name: 'Prateek',
    age: 22
};

for (let key in person) {
    console.log(key);
}

const seasons = ['winter', 'summer', 'rainy'];

for (season of seasons) {
    console.log(season);
}

function maximum(num1, num2) {
    if (num1 > num2) console.log(num1);
    else if (num1 < num2) console.log(num2);
    else
        console.log('both are equal');
}

console.log(maximum(2, 3));
console.log(maximum(2, 2));
function isLandscape(width, height) {
    return (width > height) ? console.log('landscape') : console.log('portrait');
}
isLandscape(10, 5);
// function fizzbuzz(input) {
//     if (input % 3 === 0) console.log('fizz');
//     else if (input % 5 === 0) console.log('buzz');
//     else if (input % 3 === 0 && input % 5 === 0) console.log('fizzbuzz');
//     else if (input % 3 !== 0 && input % 5 !== 0) console.log('input');
// }
var s = 21;
var r = function () {
    console.log(s);
    var s = 20;
};
r();
