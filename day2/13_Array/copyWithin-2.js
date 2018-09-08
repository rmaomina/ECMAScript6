"use strict";
debugger;

let arrayLike = {0: "ABC", 1: "DEF", 2: "가나다", length: 3};
let one = Array.prototype.copyWithin.call(arrayLike, 0, 1);
console.log(one);

function two() {
  return Array.prototype.copyWithin.call(arguments, 3, 0, 2);
};
console.log(two(1, 2, 3, 4, 5));


let dummy;
