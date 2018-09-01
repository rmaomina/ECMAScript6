"use strict";
debugger;

let oneObj = {one: 1},
    twoObj = {two: 2};
let mergeObj = Object.assign(oneObj, twoObj);

console.log(Object.is(oneObj, mergeObj));

mergeObj.one = 456;
console.log(Object.is(oneObj, mergeObj));


let dummy;
