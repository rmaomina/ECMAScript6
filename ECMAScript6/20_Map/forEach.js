"use strict";
debugger;

const newMap = new Map([
  ["key1", "value1"],
  [{}, "오브젝트"]
]);

newMap.forEach((value, key, map) => {
  console.log(key, value);
});


let dummy;
