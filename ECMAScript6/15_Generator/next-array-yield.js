"use strict";
debugger;

let gen = function*(){
  return [yield yield];
};
let genObj = gen();

console.log(genObj.next());
console.log(genObj.next(10));
console.log(genObj.next(20));


let dummy;
