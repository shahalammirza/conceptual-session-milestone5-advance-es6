// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope

function lifeCountDeduction(studentName){
    let life = 3;

    let lifeCountFunc = () => {
        if(life > 0){
            life --;
            console.log(`${studentName} you lost a life. your life remaining ${life} `)
        }else{
            console.log(`${studentName} your life is over. no life is reaming`)
        }
    }
    return lifeCountFunc;
}

let shahalam = lifeCountDeduction('shahalam');
let mirza = lifeCountDeduction('mirza');
shahalam();
mirza();
shahalam();
shahalam();
shahalam();
mirza();
mirza();