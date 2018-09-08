"use strict";
debugger;

let sym = Symbol("123");
let obj = {[sym]: "456"};
console.log(obj);

console.log(obj[sym]);
console.log(obj.sym);


let dummy;
