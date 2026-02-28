// Scope -> গন্ডি বা সীমানা

// 3 types of scope -> 1. Global scope, 2. Block scope , 3. Function scope or local scope

// Global scope
let name = "shahalam";
console.log(name);

if(false){
    console.log("my name is :",name)
}else{
    console.log("provide for else my name is :", name)
}

for( let i = 0; i<5; i++){
    console.log(name)
}


// Block scope
// var not maintains block scope
// let and const maintains block scope

{
    var name2 = 'abir';
    const name1 = 'mirza';
}
// console.log(name2);
// console.log(name1);



// Function or local scope
// var, let and const all are maintaining function scope

function myFunc(){
    let name3 = 'abdur rahim';
    var name4 = " abdur karim";
}
// console.log(name3)
// console.log(name4)