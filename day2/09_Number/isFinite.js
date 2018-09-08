"use strict";
debugger;

console.log("1:", Number.isFinite(Infinity), isFinite(Infinity));
console.log("2:", Number.isFinite(-Infinity), isFinite(-Infinity));

console.log("3:", Number.isFinite(0), isFinite(0));
console.log("4:", Number.isFinite("0"), isFinite("0"));

console.log("5:", Number.isFinite(null), isFinite(null));
console.log("6:", Number.isFinite(NaN), isFinite(NaN));

console.log("7:", Number.isFinite(undefined), isFinite(undefined));
console.log("8:", Number.isFinite(true), isFinite(true));


let dummy;

