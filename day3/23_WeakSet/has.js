"use strict";
debugger;

let newString = new String("문자열");
const newWeakSet = new WeakSet([newString]);

console.log(newWeakSet.has(newString));


let dummy;
