"use strict";
debugger;

let bufferObj = new ArrayBuffer(5);
let uint8Obj = new Uint8Array(bufferObj);
uint8Obj.set([10], 1);

let viewObj = new DataView(bufferObj);
viewObj.setUint8(3, 30);


let dummy;
