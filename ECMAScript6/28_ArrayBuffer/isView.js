"use strict";
debugger;

let bufferObj = new ArrayBuffer(10);
console.log(ArrayBuffer.isView(bufferObj));

let typedObj = new Int16Array();
console.log(ArrayBuffer.isView(typedObj));

let viewObj = new DataView(bufferObj);
console.log(ArrayBuffer.isView(viewObj));


let dummy;

