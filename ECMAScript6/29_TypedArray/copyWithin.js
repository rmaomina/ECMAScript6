"use strict";
debugger;

let bufferObj = new ArrayBuffer(5);
let uint8Obj = new Uint8Array(bufferObj);

uint8Obj.set([10, 20, 30, 40, 50]);
console.log(uint8Obj);

uint8Obj.copyWithin(3, 2);
console.log(uint8Obj);


let dummy;
