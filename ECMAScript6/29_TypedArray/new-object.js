"use strict";
debugger;

let oneObj = new Int16Array([12, 34, 56]);
console.log("1:", oneObj.length);

let twoObj = new Int16Array({0: 12, 1: 34});
console.log("2:", twoObj.length);

let threeObj = new Int16Array({0: 12, 1: 34, length:2});
console.log("3:", threeObj.length);


let dummy;
