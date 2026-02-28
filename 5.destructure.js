let arr = [10, 20, 30, 40, 50, 60, 70];

// let thirty =  arr[2];
// let fourty = arr[3]
let [ten, twenty, , , fifty] = arr;
// console.log(thirty, fourty)
console.log(ten, twenty, fifty);

// object 
let person = {
    name: "shahalam",
    age: 25,
    address: {
        city: "dhaka",
        country: "bangladesh"
    }
}

let {name: myName, age, address: {city:sohor}} = person;
console.log(myName, age, sohor);