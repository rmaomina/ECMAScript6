"use strict";
debugger;

let bufferObj = new ArrayBuffer(6);
let viewObj = new DataView(bufferObj);

viewObj.setInt16(2, 32767);
console.log(viewObj.getInt16(2));

viewObj.setInt16(2, 32767, true);
console.log(viewObj.getInt16(2, true));

console.log(viewObj.getInt16(2));


let dummy;
