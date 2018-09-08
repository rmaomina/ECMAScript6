"use strict";
debugger;

let result = /\u{31}\u{32}/u.test("12");
console.log(result);

result = /\u{31}\u{32}/.test("12");
console.log(result);


let dummy;
