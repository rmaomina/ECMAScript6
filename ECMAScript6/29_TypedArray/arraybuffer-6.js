"use strict";
debugger;

let bufferObj = new ArrayBuffer(1);

let clampedObj = new Uint8ClampedArray(bufferObj);
[255, 256, 257].forEach(function(value){
  clampedObj[0] = value;
  console.log(value, ":", clampedObj[0]);
});


let dummy;
