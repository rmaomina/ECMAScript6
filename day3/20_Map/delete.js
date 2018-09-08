"use strict";
debugger;

const newMap = new Map([
  ["key1", "value1"],
  [{}, "오브젝트"]
]);
let sportsObj = {};
newMap.set(sportsObj, "추가");

console.log(newMap.delete("key1"));
console.log(newMap.delete({}));
console.log(newMap.delete(sportsObj));


let dummy;
