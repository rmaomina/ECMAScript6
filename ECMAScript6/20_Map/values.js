"use strict";
debugger;

const newMap = new Map([
  ["key1", "value1"]
]);
newMap.set({}, "오브젝트");

let iteratorObj = newMap.values();
console.log(iteratorObj.next());

console.log(iteratorObj.next());


let dummy;
