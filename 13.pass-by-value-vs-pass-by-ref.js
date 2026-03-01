// pass by value (pass by primitive value)
let name = 'shahalam';
let myFunc = (value) =>{
    value = ' Shahalam mirza';
    console.log(`My name is: ${value}`)
}
myFunc(name);
console.log(name);

// pass by refarence
let person = {
    name: 'shahalam',
    roll: 12,
    age: 25
}

let myFunc2 = (param)=>{
    let param1 = param.name = "shahalam mirza and abir"
    console.log(`the person is: ${param1}`)
}

myFunc2(person)
console.log(person)