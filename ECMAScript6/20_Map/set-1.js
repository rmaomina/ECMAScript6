"use strict";
debugger;

const newMap = new Map();
newMap.set("one", 100);
console.log(newMap.size);

newMap.set({}, "오브젝트");
newMap.set(function(){}, "Function");

newMap.set(new Number("123"), "인스턴스");
newMap.set(NaN, "Not a Number");

for (var [key, value] of newMap) {
  console.log(key, value);
};


let dummy;
