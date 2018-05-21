"use strict"

function* neverEnding(){
    let index = 0;
    while(true){
        yield index++;
    }
}

let gen = neverEnding();

console.log(gen.next());
console.log("SOme stuff");
//will not set the index object to 0
console.log(gen.next());

//Generator within generator

// function* anotherGen(i){
//     yield i+1;
//     yield i+2;
//     yield i+3;
// }

// function* newGen(i){
//     yield i+1;
//     yield* anotherGen(i);
//     yield i+10;
// }

// let g = newGen(10);
// console.log(g.next().value); //11
// console.log(g.next().value); //11
// console.log(g.next().value); //12
// console.log(g.next().value); //13
// console.log(g.next().value); //20
