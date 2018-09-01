"use strict";
debugger;

let bufferObj = new ArrayBuffer(32);

let oneObj = new Int16Array(bufferObj);
console.log(oneObj.length);

console.log(oneObj.byteLength);

let twoObj = new Int32Array(bufferObj);
console.log(twoObj.length);


let dummy;
