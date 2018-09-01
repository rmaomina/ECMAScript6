"use strict";
debugger;

let bufferObj = new ArrayBuffer(6);
let uint8Obj = new Uint8Array(bufferObj);

uint8Obj.set([10, 20, 30], 2);
console.log(uint8Obj);

let oneObj = new ArrayBuffer(7);
let twoObj = new Uint8Array(oneObj);

twoObj.set(uint8Obj, 1);
console.log(twoObj);


let dummy;
