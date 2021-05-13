const input = require("readline-sync");

let num = input.question("Enter a single digit number: ");

if(num == 1)
{
    console.log("One");
}
else if(num == 2)
{
    console.log("Two");
}
if(num == 3)
{
    console.log("Three");
}
else if(num == 4)
{
    console.log("Four");
}
if(num == 5)
{
    console.log("Five");
}
else if(num == 6)
{
    console.log("Six");
}
if(num == 7)
{
    console.log("Seven");
}
else if(num == 8)
{
    console.log("Eight");
}
if(num == 9)
{
    console.log("Nine");
}
else if(num == 0)
{
    console.log("Zero");
}
else
    console.log("Invalid input ");