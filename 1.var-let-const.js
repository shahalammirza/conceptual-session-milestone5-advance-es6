// Difference 1 -------
// var hoisted (Bad practice)
// let and const hoisted but in Temporal Dead Zone


// Difference 2 -------
// redeclare with same name by var

var name =  "shahalm";
var name = "shahalam mirza";
console.log(name);

// let roll = 12;
// let roll = 12;
// const dept = 'cse';
// const dept = 'cse';


// Difference 3 -------
// reassign allowed by var and let but not const

var name1 = "shahalam";
name1 = "shahalam mirza";
console.log(name1);


// Difference 4 -------
// scope
// var maintains only function scope, but not block scope or global scope
// let and const maintain all scope