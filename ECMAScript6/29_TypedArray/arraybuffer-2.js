"use strict";
debugger;

let bufferObj = new ArrayBuffer(10);
let oneObj = new Int16Array(bufferObj, 4);

console.log(oneObj.byteLength);
console.log(oneObj.length);

oneObj[1] = 22;
console.log(oneObj);


let dummy;
