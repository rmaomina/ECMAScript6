"use strict";
debugger;

class extendUint8 extends Uint8Array{
  static get [Symbol.species]() {
    return Uint8Array;
  }
}

let uint8ExtendObj = new extendUint8([10, 20, 30]);

let filterObj = uint8ExtendObj.filter(value => value > 10);
console.log(filterObj);


let dummy;
