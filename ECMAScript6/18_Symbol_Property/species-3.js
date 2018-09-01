"use strict";
debugger;

class ExtendArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
};
let oneInstance = new ExtendArray(1, 2, 3);

let twoInstance = oneInstance.slice(1, 2);
console.log(oneInstance instanceof ExtendArray);

console.log(twoInstance instanceof Array);

console.log(twoInstance instanceof ExtendArray);


let dummy;
