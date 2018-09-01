"use strict";
debugger;

let bufferObj = new ArrayBuffer(10);
let oneObj = new Int16Array(bufferObj, 4);

console.log(oneObj.buffer);
console.log(oneObj.buffer.byteLength);


let dummy;
