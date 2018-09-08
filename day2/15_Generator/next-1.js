"use strict";
debugger;

let gen = function*(value){
  value = value + 10;
  yield ++value;
  value = value + 7;
  yield ++value;
};
let genObj = gen(1);

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());


let dummy;
