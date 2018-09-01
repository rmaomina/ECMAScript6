"use strict";
debugger;

let plusGen = function*(value) {
  yield value + 5;
  yield value + 10;
};
let gen = function*(value) {
  yield* plusGen(value);
  yield value + 20;
};
let genObj = gen(10);

console.log("1:", genObj.next());
console.log("2:", genObj.next());
console.log("3:", genObj.next());


let dummy;
