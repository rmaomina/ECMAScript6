"use strict";
debugger;

let bufferObj = new ArrayBuffer(1);

let int8Obj = new Int8Array(bufferObj);

[127, 128, 129].forEach(function(value){
  int8Obj[0] = value;
  console.log(value, ":", int8Obj[0]);
});


let dummy;
