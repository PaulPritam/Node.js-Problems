//Program to check input number is prime or not
const input = require("readline-sync");

let counter = 0;
let num = input.question("Enter a number to check ");
for(let i = 2; i <num; i ++)
{
    if(i % num == 0)
    {
        counter++;
    }
}
if (counter>0)
{
    console.log("the numeber " + num + " is NOT a" +"Prime numebr ");
}
else
{
    console.log("the numeber " + num + " is a " +"Prime numebr ");
}