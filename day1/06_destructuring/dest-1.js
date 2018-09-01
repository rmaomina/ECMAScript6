"use strict";
debugger;

let one, two, three, four, five;
const values = [1, 2, 3];

[one, two, three] = values;
console.log("A:", one, two, three);

[one, two] = values;
console.log("B:", one, two);

[one, two, three, four] = values;
console.log("C:", one, two, three, four);

[one, two, [three, four]] = [1, 2, [73, 74]];
console.log("D:", one, two, three, four);


let dummy;
