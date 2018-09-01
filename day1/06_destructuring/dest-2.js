"use strict";
debugger;

let one, two, three, four, other;
[one, , ,four] = [1, 2, 3, 4];
console.log(one, four);

[one, ...other] = [1, 2, 3, 4];
console.log(other);


let dummy;
