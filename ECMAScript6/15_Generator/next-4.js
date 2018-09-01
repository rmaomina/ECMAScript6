"use strict";
debugger;

let one, two;
let gen = function*(){
  one = yield;
  two = yield one + 10;
}
let genObj = gen();

console.log(genObj.next());
console.log(genObj.next(12));
console.log(genObj.next(34));


let dummy;
