"use strict";
debugger;

// #$%&
console.log("1:", String.fromCodePoint(35, 36, 37));

// 16진수로 지정, 49, 50, 51로 지정한 것과 같음
console.log("2:", String.fromCodePoint(0x31, 0x32, 0x33));

// 가각
console.log("3:", String.fromCodePoint(44032, 44033));

// 코끼리
//http://unicode-table.com/en/1F418/
console.log("4:", String.fromCodePoint(0x1F418));

console.log("5:", String.fromCharCode(0x1f418));

console.log("6:", String.fromCharCode(0xD83D, 0xDC18));


let dummy;
