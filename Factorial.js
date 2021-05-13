//Program to calculate factorial of the input number
const input = require("readline-sync");

let calculate = 1;
let number = input.question("Enter a number: ");
for (let i = number; i >= 1; i--) {
    calculate *= i;
}
console.log(calculate);