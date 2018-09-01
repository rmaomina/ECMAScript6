"use strict";
debugger;

let bufferObj = new ArrayBuffer(6);
let viewObj = new DataView(bufferObj);

viewObj.setInt8(2, 127);
console.log(viewObj.getInt8(2));


let dummy;
