"use strict";
debugger;

let arrayLike = {0: 10, 1: 30, length: 2};
let values = Array.from(arrayLike, function(value) {
  return value + this.bonus;
}, {bonus: 100});
console.log(values);


let dummy;
