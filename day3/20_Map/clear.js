"use strict";
debugger;

const newMap = new Map([
  ["key1", "value1"],
  [{}, "오브젝트"]
]);

console.log(newMap.size);

newMap.clear();
console.log(newMap.size);


let dummy;
