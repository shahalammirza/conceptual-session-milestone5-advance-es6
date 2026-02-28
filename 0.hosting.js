
// var is hoisted, but only the declaration (var name;), not the value assignment
console.log(name);
var name = "shahalam";
console.log(name);



// let and const also hoisted, but not initialization. They are in a "Temporal Dead Zone" from the start of the block until the declaration line.

console.log(car)
let car = 'BMW';
console.log(car);



console.log(tree)
const tree = 'mango tree';