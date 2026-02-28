// rest operator

function myFunc(a, b, c, ...restoperator){
    console.log(a, b, c, restoperator);
}
// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// spread operator***

// array
let arr = [10, 20, 30];

let arr2 = [...arr]
// console.log(arr)
// console.log(...arr2);

// console.log(Math.max(10, 20, 30, 40, 50))
console.log(Math.max(...arr));

// object

let person = {
    name: "shahalam",
    roll: 12
}
let obj2 = {...person};
// let obj2 = person;
person.name = "ahsan habib"

// console.log(obj2)
