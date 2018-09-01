"use strict";
debugger;

let uint8Obj = new Uint8Array([10, 20]);
let iteratorObj = uint8Obj[Symbol.iterator]();

console.log(iteratorObj.next());

console.log(iteratorObj.next());

for (let value of uint8Obj) {
  console.log(value);
};


let dummy;
