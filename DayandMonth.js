//Program that prints True if the input is between March 20 and June 20 else false
const input = require("readline-sync");

let day = input.question("Enter the Day: ");
let month = input.question("Enter the Month: ");

if((day<20 && month == "march") || (day>20 && month== "june"))
{
    console.log("false");
}
else if(day>=20 && month == "april")
{
    console.log("True");
}
else if(day>=20 && month == "may")
{
    console.log("True");
}
else if(day<=20 && month == "june")
{
    console.log("True");
}
else
console.log("invalid");