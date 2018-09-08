"use strict";
debugger;

// 이하 true
console.log("1:", Number.isInteger(0));
console.log("2:", Number.isInteger(1.0));
console.log("3:", Number.isInteger(-123));

// 이하 false
console.log("4:", Number.isInteger("12"));
console.log("5:", Number.isInteger(1.02));
console.log("6:", Number.isInteger(NaN));
console.log("7:", Number.isInteger(true));


let dummy;

