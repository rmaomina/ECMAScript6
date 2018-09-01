"use strict";
debugger;

let one = 1, two = 2;
console.log("1:", String.raw`1+2=${one + two}`);

console.log("2:", `줄 바꿈-1\n줄 바꿈-2`);
console.log("3:", String.raw`줄 바꿈-1\n줄 바꿈-2`);

console.log("4:", `Unicode \u0031\u0032`);
console.log("5:", String.raw`Unicode \u0031\u0032`);


let dummy;
