"use strict";
debugger;

let sportsArray = ["농구"];

Reflect.set(sportsArray, 1, "축구");
console.log(sportsArray);

Reflect.set(sportsArray, 0, "아이스하키");
console.log(sportsArray);


let dummy;
