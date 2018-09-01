"use strict";
debugger;

let bufferObj = new ArrayBuffer(12);
let viewObj = new DataView(bufferObj, 1, 8);

console.log(viewObj.byteOffset);
console.log(viewObj.byteLength);


let dummy;
