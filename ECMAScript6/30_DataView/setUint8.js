"use strict";
debugger;

let bufferObj = new ArrayBuffer(4);
let viewObj = new DataView(bufferObj);

viewObj.setUint8(1, 255);
console.log(viewObj.getUint8(1));


let dummy;
