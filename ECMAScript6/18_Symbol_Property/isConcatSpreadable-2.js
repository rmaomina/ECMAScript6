"use strict";
debugger;

let one = [11, 12];
let fiveSix = {
  0: "five",
  1: "six",
  length: 2
};
let result = one.concat(fiveSix);
console.log(result, result.length);

let arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  0: "five",
  1: "six",
  length: 2
};
result = one.concat(arrayLike);
console.log(result, result.length);



let dummy;
