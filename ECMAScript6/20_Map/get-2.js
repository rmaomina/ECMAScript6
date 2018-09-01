"use strict";
debugger;

const newMap = new Map();

newMap.set({}, "Object");
console.log(newMap.get({}));

newMap.set(123, "값 123");
console.log(newMap.get(123));

console.log(newMap.get("123"));

newMap.set(NaN, "Not a Number");
console.log(newMap.get(NaN));


let dummy;
