"use strict";
debugger;

let Sports = function(){};
Sports.prototype.getCount = function(){
  return 123;
};

let fnObj = Object.setPrototypeOf({}, Sports);

console.log(fnObj.getCount);
console.log(fnObj.prototype.getCount.call(Sports));


let dummy;
