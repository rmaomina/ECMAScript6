"use strict";
debugger;

let emptyObj = {};
Reflect.preventExtensions(emptyObj);

console.log(Reflect.isExtensible(emptyObj));


let dummy;
