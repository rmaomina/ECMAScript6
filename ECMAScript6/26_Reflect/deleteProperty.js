"use strict";
debugger;

let obj = {member: 11, ground: "상암"};
console.log(Reflect.deleteProperty(obj, "ground"));

console.log(Reflect.deleteProperty(obj, "ground"));

Object.freeze(obj);
console.log(Reflect.deleteProperty(obj, "member"));


let dummy;
