let demoMap = new Map();

let keyString = " Key Value ";
let keyobj = {};
let keyFunction = function(){}

demoMap.set(keyString,"another value with String");
demoMap.set(keyobj,"this keys object ");
demoMap.set(keyFunction, "this functions object");

console.log(demoMap.size);
console.log(demoMap);
