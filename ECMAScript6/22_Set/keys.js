"use strict";
debugger;

const newSet = new Set(["one", () => {}]);
let iteratorObj = newSet.keys();

console.log(iteratorObj.next());
console.log(iteratorObj.next());


let dummy;
