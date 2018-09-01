"use strict";
debugger;

// 31
console.log("1:", Math.clz32(1));
// 30: 000000~0000010이 되므로
console.log("2:", Math.clz32(2));
// 32: 값이 0으로 처리되므로
console.log("3:", Math.clz32());

// 30: 소수 값은 무시되므로
console.log("4:", Math.clz32(2.5));
// 1로 변환되므로
console.log("5:", Math.clz32(true));


let dummy;

