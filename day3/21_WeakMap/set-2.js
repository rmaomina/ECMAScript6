"use strict";
debugger;

const newWeakMap = new WeakMap();

let sportsObj = {};
newWeakMap.set(sportsObj, "Object-1");

sportsObj = {};
newWeakMap.set(sportsObj, "Object-2");

setTimeout(function() {
  console.log(newWeakMap);
}, 1000);


let dummy;
