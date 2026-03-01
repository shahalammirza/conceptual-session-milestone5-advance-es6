// map, filter, find, foreach, reduce 
// ai function gulor maddhome amra loop etarate korte pari


// map function art  moddhome array ar element update kora jai
let arr = [10, 20, 30, 40, 50];

const phones = [
  {
    name: "iPhone 14 pro",
    price: 90000,
  },
  {
    name: "iPhone 14 pro",
    price: 92000,
  },
  {
    name: "Google pixel 10 pro",
    price: 95000,
  },
  {
    name: "Motorola G85",
    price: 24000,
  },
  {
    name: "iPhone 16 pro",
    price: 135500,
  },
  {
    name: "Samsung S25 ultra",
    price: 112500,
  },
  {
    name: "Samsung j5",
    price: 9000,
  },
];



let updateArray = arr.map((element, index, array)=> {
    console.log(element, 'index number', index, 'array', array)
    return element * 2;
    // console.log(element)
}) 
// console.log(updateArray)


// filter method
let overEighteen = arr.filter((element) => {
    return element > 30;
})

let filterRichPhone = phones.filter((elem) => elem.price > 100000 && elem.name.includes('Samsung'));
// console.log(filterRichPhone)
// console.log(overEighteen);

// find method
let findOverThirty = arr.find((elem) => elem > 30);
let findRichPhone = phones.find((item) => item.price > 100000)
console.log(filterRichPhone)
// console.log(findOverThirty)


// for each loop as like traditional for loop
phones.forEach((item) => {
    console.log(item);
});

// Reduce method -- optional  ****
let summation = phones.reduce((accumulator, elelment) => {
    return accumulator + elelment.price;
}, 0);

console.log(summation)
