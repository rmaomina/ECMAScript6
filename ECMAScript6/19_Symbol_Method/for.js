"use strict";
debugger;

console.log(Symbol.for("sports"));
console.log(Symbol.for("sports"));

console.log(Symbol.for("ABC") === Symbol.for("ABC"));
console.log(Symbol.for("DEF") === Symbol("DEF"));
console.log(Symbol.for(true));


let dummy;
