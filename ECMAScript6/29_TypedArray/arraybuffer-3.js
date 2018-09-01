"use strict";
debugger;

let bufferObj = new ArrayBuffer(10);
let oneObj = new Int16Array(bufferObj, 4, 2);

oneObj[0] = 22;
console.log(oneObj);

let twoObj = new Int16Array(bufferObj);
console.log(twoObj);


let dummy;
