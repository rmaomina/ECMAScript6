"use strict";
debugger;

let sym = Symbol("123");
const obj = Object(sym);
console.log(obj);

console.log(obj == sym);
console.log(obj === sym);


let dummy;

