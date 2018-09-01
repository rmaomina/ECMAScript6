"use strict";
debugger;

let bufferObj = new ArrayBuffer(1);

let uint8Obj = new Uint8Array(bufferObj);
[255, 256, 257].forEach(function(value){
  uint8Obj[0] = value;
  console.log(value, ":", uint8Obj[0]);
});


let dummy;
