"use strict";
debugger;

let {one, two} = {one: 1, nine: 9};
console.log(one, two);

let three, four;
({three, four} = {three: 3, four: 4});
console.log(three, four);


let dummy;
