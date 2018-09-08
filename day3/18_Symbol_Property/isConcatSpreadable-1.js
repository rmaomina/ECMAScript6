"use strict";
debugger;

let one = [11, 12], two = [21, 22];
let result = one.concat(two);
console.log(result, result.length);

two[Symbol.isConcatSpreadable] = false;
result = one.concat(two);
console.log(result, result.length);

two[Symbol.isConcatSpreadable] = true;
result = one.concat(two);
console.log(result, result.length);


let dummy;
