//Basic Coin flip program, prints heads if random value is 0 else tails if the value is 1 
let toss = Math.floor(Math.random() * 2);

if (toss == 0) {
    console.log("Heads");
}
else
    console.log("Tails");
