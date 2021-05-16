let dogs = ["Bulldog", "Beagle", "Labarador","Husky"];
let cats = ["American Curl", "Bengal"];
let fruits = ["Mango", "Melons", "Dragon Fruit"];

let sliceDogs = dogs.slice(1,3);
console.log(sliceDogs);
let sdog = dogs.slice(0);

//Array that copy elements
let copyDogs = [...dogs];
console.log(copyDogs);

let pushDog = sdog.push("Golden Retriever ");
let popDog = sdog.pop();
sdog[sdog.length] = "Poodle"
console.log(sdog);

//Add and remove elements from the array
sdog.splice(2,1, "Pug","Boxer");
console.log(sdog);

//Add and Remove from first ele,ment of the array
let addfirst = sdog.unshift("Golden Retriever ");
let shiftDog = sdog.shift();
console.log(shiftDog);
console.log(addfirst);

// Array Function - Concatinate Spread, Slice and Sort
let animals = sdog.concat(cats,fruits);
let newAnimalList = [...sdog,...cats,...fruits].toString();
console.log(newAnimalList);
let sortDog = sdog.sort();
console.log(sortDog);

function scanArray([first , second])
{
    console.log("Scan: "+ first +" " + second);
}
scanArray(animals);

let joinAnimals = animals.join(" ");
let allAnimals = " ";
for(let animal of animals ) allAnimals += animal + " ";
console.log("Animals : " + allAnimals);