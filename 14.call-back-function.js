let greet = (name, message, cb)=>{
    console.log(name)
    cb(message);
};

let sayGreetings = (message)=>{
    console.log(message)
}

greet('shahalam', "hello", sayGreetings)