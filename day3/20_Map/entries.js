"use strict";
debugger;

const newMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);

let iteratorObj = newMap.entries();

let result = iteratorObj.next();
console.log(result);

console.log(iteratorObj.next());
console.log(iteratorObj.next());


let dummy;
