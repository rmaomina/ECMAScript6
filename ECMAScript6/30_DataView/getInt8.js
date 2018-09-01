"use strict";
debugger;

let bufferObj = new ArrayBuffer(4);

let int8Obj = new Int8Array(bufferObj);
int8Obj.set([10, 20, 30]);

let viewObj = new DataView(bufferObj);

for (var k = 0; k < viewObj.byteLength; k++){
  console.log(viewObj.getInt8(k));
};


let dummy;
