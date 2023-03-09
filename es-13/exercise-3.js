const sum = (a, b) => a + b;


const subtract = (a, b) => a - b;


const multiply = (a, b) => a * b;


const divide = (a, b) => a / b;


let sum1 = sum(2, 4);
let sum2 = sum(5, 2);
let multiply1 = multiply(sum1, sum2);
let sub = subtract(multiply1, 2)
let value = divide(sub, 5)

console.log(value);