"use strict";
debugger;

const newWeakMap = new WeakMap();

let fn = function(){};
newWeakMap.set(fn, "함수");

newWeakMap.set(fn, "value 변경");
console.log(newWeakMap);


let dummy;
