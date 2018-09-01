"use strict";
debugger;

let bufferObj = new ArrayBuffer(12);
let viewObj = new DataView(bufferObj);

console.log(viewObj);

console.log(viewObj.buffer);
console.log(viewObj.byteOffset);
console.log(viewObj.byteLength);


let dummy;
