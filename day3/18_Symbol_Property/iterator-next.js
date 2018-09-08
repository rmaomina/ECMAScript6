"use strict";
debugger;

let gen = function*() {
  yield 10;
  yield 20;
};
let genObj = gen();
console.log(genObj.next());

let iteratorObj = genObj[Symbol.iterator]();
console.log(iteratorObj.next());


let dummy;
