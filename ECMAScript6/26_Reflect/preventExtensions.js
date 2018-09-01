"use strict";
debugger;

let obj = {};
console.log(Reflect.preventExtensions(obj));

console.log(Reflect.defineProperty(obj, "baseball", {value: "야구"}));


let dummy;
