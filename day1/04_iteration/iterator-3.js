"use strict";
debugger;

let arrayObj = [1, 2];
let iteratorObj = arrayObj[Symbol.iterator]();

console.log("1:", typeof iteratorObj);

console.log("2:", iteratorObj.next());
console.log("3:", iteratorObj.next());
console.log("4:", iteratorObj.next());


let dummy;
