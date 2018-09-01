"use strict";
debugger;

let buffer64Obj = new ArrayBuffer(8);

let float64Obj = new Float64Array(buffer64Obj);

buffer64Obj[0] = Number.MAX_VALUE;
console.log(buffer64Obj[0] == Number.MAX_VALUE);


let dummy;
