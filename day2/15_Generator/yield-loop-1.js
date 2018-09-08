"use strict";
debugger;

function* gen() {
  yield* [10, 20];
}
let genObj = gen();

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next(77));


let dummy;
