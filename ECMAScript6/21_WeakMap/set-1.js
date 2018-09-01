"use strict";
debugger;

const newWeakMap = new WeakMap();

(function(){
  var obj = {item: "weakmap"};
  newWeakMap.set(obj, "GC");
}());

const newMap = new Map();
(function(){
  var obj = {item: "map"};
  newMap.set(obj, "Keep");
}());


setTimeout(function() {
  console.log("1:", newWeakMap);
  console.log("2:", newMap);
}, 1000);


let dummy;
