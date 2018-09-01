"use strict";
debugger;

let bufferObj = new ArrayBuffer(6);
let uint8Obj = new Uint8Array(bufferObj);

uint8Obj.set([10, 20, 30], 1);
console.log(uint8Obj);

console.log(uint8Obj.subarray(1, 4));


let dummy;
