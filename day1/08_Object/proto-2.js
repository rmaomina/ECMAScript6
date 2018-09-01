"use strict";
debugger;

let Sports = function(){};
Sports.prototype.get = function(){};
let sportsObj = new Sports();

sportsObj.__proto__["set"] = function(){};
sportsObj.set();

let result = Sports.prototype.set;
console.log(result);


let dummy;
