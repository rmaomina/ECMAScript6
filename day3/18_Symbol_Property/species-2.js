"use strict";
debugger;

class ExtendArray extends Array {
  getValue(){}
}
let newArray = new ExtendArray(1, 2, 3);

let newInst = newArray.slice(1, 2);
console.log(newInst instanceof ExtendArray);


let dummy;

