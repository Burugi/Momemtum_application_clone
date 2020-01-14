const nicoInfo={
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies:["Along the gods","Lotr","Oldboy"],
}

console.log(console)//console은 객체 log는 함수

function sayHello(name,age){
    //console.log("hello!"+ name+"you are"+age+"years old"); 옛날에 변수와 사용하는 방법
    //하지만 ``이게 백틱이다.
    return `Hello ${name} you are ${age} years old`
}
const greetNicolas=sayHello("nicoloas",33);
console.log(greetNicolas);

const calculaor={
plus:function(a,b){
    return a+b;
}
}
const plus=calculaor.plus(5,5);
console.log(plus)
