"use strict";
debugger;

let symOne = Symbol.for("123");
console.log(Symbol.keyFor(symOne));

let symTwo = Symbol("222");
console.log(Symbol.keyFor(symTwo));


let dummy;
