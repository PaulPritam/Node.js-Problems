//Program to store numbers in an array which is divisible by 11
const read = require("readline-sync");

var arr = new Array()
let loweLimit;
let upperLimit;

function inputRange()
{
    loweLimit = read.question("Enter lower Limit:  ");
    upperLimit = read.question("Enter upper Limit:  ");
}

function calculation()
{
    for(let i =loweLimit; i<=upperLimit; i++)
    {
        if( i % 11 == 0){
            arr.push(i);
        }
    }
    console.log("the required output: "+arr);
}

inputRange();
calculation();