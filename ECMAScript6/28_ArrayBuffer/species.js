"use strict";
debugger;

class ExtendBuffer extends ArrayBuffer {
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
let newBuffer = new ExtendBuffer(20);

let bufferObj = newBuffer.slice(3, 7);
console.log(bufferObj.byteLength);


let dummy;

