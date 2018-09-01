"use strict";
debugger;

let gen = function*(param){
  let one = param + 1;
  yield one;
  var two = 2;
  yield one + two;
};
let genObj = gen(10);

console.log(genObj.next());
console.log(genObj.next());


let dummy;
