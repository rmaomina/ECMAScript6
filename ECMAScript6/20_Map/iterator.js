"use strict";
debugger;

let newMap = new Map([
  ["1", "music"],
  ["2", "sports"]
]);

let iteratorObj = newMap[Symbol.iterator]();

console.log(iteratorObj.next());
console.log(iteratorObj.next());


let dummy;
