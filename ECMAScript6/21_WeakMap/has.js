"use strict";
debugger;

const newWeakMap = new WeakMap();

let obj = {};
newWeakMap.set(obj, "오브젝트");

console.log(newWeakMap.has(obj));


let dummy;
