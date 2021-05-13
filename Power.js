//Program to print 2^n, where power n is user input
const input = require("readline-sync");

let result = 1;
let power = input.question("Enter a the power: ");
for (let i = 1; i <= power; i++)
 {  
    result = 2 * i;
    console.log(result);
}
