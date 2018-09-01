"use strict";
debugger;

let plus = (one, two = 2) => one + two;
let result = plus(1);
console.log(result);

result = plus(1, undefined);
console.log(result);

result = plus(1, 70);
console.log(result);


let dummy;
