"use strict";
debugger;

let result = Reflect.apply(String.prototype.indexOf, "ABC", ["B"]);
console.log(result);


let dummy;
