"use strict";
debugger;

let gen = function*(value) {
  yield value;
  yield* gen(value + 10);
}
let genObj = gen(1);

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());


let dummy;
