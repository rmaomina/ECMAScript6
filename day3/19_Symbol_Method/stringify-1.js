"use strict";
debugger;

let result = JSON.stringify({[Symbol("one")]: "1"});
console.log(result);
console.log(typeof result);

console.log(JSON.stringify({[Symbol.for("two")]: "2"}));


let dummy;
