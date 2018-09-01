"use strict";
debugger;

class ExtendOne extends Array{
  static get [Symbol.species]() {
    return null;
  }
};
let oneInst = new ExtendOne(10, 20, 30);
let arrayInst = oneInst.filter(value => value > 10);

console.log(arrayInst instanceof Array);
console.log(arrayInst instanceof ExtendOne);


let dummy;
