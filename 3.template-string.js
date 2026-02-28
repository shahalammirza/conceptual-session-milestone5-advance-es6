let name = "shahalam mirza";
let age = 28;

let name2 = `my name is ${name}. i am a professional web developer

I am ${age} years old,
${age > 18 ? "i am adult" : "i am not adult"}
${age > 28 ? "i am adult" : "i am not adult"}
${age || 100} 
`
console.log(name);
console.log(name2)