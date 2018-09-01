"use strict";
debugger;

let oneObj = {};
Object.assign(oneObj, "ABC", undefined, null);
console.log(oneObj);

let twoObj = {};
Object.assign(twoObj, {key1: undefined, key2: null});
console.log(twoObj);


let dummy;
