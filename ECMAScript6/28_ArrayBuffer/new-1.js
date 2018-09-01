"use strict";
debugger;

let obj1 = new ArrayBuffer(20);
console.log(obj1.byteLength);

let obj2 = new ArrayBuffer();
console.log(obj2.byteLength);

let obj3 = new ArrayBuffer("12");
console.log(obj3.byteLength);


let dummy;
