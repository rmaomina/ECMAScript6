"use strict";
debugger;

let gen = function*(){
  try {
    yield 10;
  } catch (message) {
    yield message;
  }
  yield 20;
}
let genObj = gen();

console.log(genObj.next());
console.log(genObj.throw("에러 발생"));
console.log(genObj.next());


let dummy;
