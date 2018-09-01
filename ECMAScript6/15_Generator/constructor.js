"use strict";
debugger;

let GenConst = Object.getPrototypeOf(function*(){}).constructor;
let sports = new GenConst(
  "one", "two",
  "console.log('함수 블록'); yield one + two"
);
let genObj = sports(3, 4);

console.log(genObj.next());



let dummy;
