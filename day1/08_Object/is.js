"use strict";
debugger;

console.log("1:", Object.is(1, "1"));
console.log("2:", Object.is(NaN, NaN), NaN === NaN);

console.log("3:", Object.is(0, -0), 0 === -0);
console.log("4:", Object.is(-0, 0), -0 === 0);

console.log("5:", Object.is(-0, -0), -0 === -0);
console.log("6:", Object.is(NaN, 0/0), NaN === 0/0);

console.log("7:", Object.is(null, null), null === null);
console.log("8:", Object.is(undefined, null), undefined === null);


let dummy;
