"use strict";
debugger;

const newMap = new Map();
newMap.set("one", 100);
console.log(newMap.get("one"));

console.log(newMap.get("two"));

let sportsObj = {sports: "스포츠"};
newMap.set(sportsObj, "Sports Object");
console.log(newMap.get(sportsObj));


let dummy;
