"use strict";
debugger;

let newBuffer = new ArrayBuffer(20);

let oneObj = newBuffer.slice(0);
console.log(oneObj.byteLength);

let twoObj = newBuffer.slice(3, 7);
console.log(twoObj.byteLength);


let dummy;

