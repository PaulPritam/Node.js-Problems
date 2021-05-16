//Array program to show sum of three integers is zero

const input = require("readline-sync");

var arr = [1, 1, -2];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

if (sum == 0) {
    console.log("The sum is zero")
}
else {
    console.log("non-zero")
}
