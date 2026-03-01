//   dot notation, bracket notation, nested object, optional chaining, Object.keys, Object.values, Object.entries, loop through using for in and array method after Object.keys, freeze, seal, delete,

// dot notation
let person = {
    name: "shahalam",
    roll: 123,
    getInfo: ()=>{
        console.log(`my name is ${person.name}`)
    },
    address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: {
      roadNumber: "27 Ab 10",
      test: "test",
    },
  },
}

let person2 = {
    name: "abdur rahim",
    roll: 12,
    getInfo: ()=>{
        console.log(`my name is ${person2.name}`)
    },
    address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: null,
  },
}

// console.log(person.name);
// console.log(person.roll);
// console.log(person.getInfo());

// bracket notation
let name = 'name';
// console.log(person['name'])
// console.log(person[name]); //dynamic


// nested object
// console.log(person.address.street.roadNumber);
// console.log(person2.address.street.roadNumber);

// optional chaining kono value ace ki nai confused thakle optional cahining use korte hoi. aita use ar maddho me erro thekeo baca jai
// console.log(person2.address.street?.roadNumber); //optional chaining

// key values entries

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person); //ar maddho me amra array of array pai
// console.log(keys.length)
// console.log(values);
// console.log(entries);


// for in and array method after Object.keys ****

// for(let property in person){
//     console.log(property);
// }

// for(let key of keys){
//     console.log(person[key])
// }


// freeze, seal, delete, ***
let car = {
  brand: "Toyota",
  color: "Black",
  model: "ABC",
};

// delete car.color; // delete a property
// console.log(car)

// Object.freeze(car) // Prevent insert, delete and update
// car.brand = "BMW Car";
// delete car.model;
// car.test = "test";
// console.log(car);


Object.seal(car); //prevent insert or delete
car.color = "red";
delete car.model;
car.test = "test";
console.log(car);


// copy object independently
let car2 = {...car} 
