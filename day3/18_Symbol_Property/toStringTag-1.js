"use strict";
debugger;

let Sports = function(){};
let sportsObj = new Sports;
console.log(sportsObj.toString());

Sports.prototype[Symbol.toStringTag] = "Sports-Function";
console.log(sportsObj.toString());


let dummy;
