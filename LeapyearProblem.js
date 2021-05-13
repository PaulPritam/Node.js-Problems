const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

let year = readline.question("Enter the year (4 digits): ");
let isLeap;

if(year%4 == 0){
    if(year%100 == 0){
        if(year%4 == 0)
            isLeap = true;
        else 
            isLeap = false;
    }
    else 
        isLeap = true;
}
else 
    isLeap = false;

let filler = (isLeap) ? "" : " not a";
console.log("This " + 2000 + " is" + filler + " leap year");