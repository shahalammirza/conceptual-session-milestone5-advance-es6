function myFunc(a , b = 1){
    console.log(a, b)
    let result = a * b;
    return result;
}

const output = myFunc(5 , 5);
const output2 = myFunc(5);
console.log(output);
console.log(output2);