"use strict";
debugger;

let Sports = function(){};
Sports.prototype.getCount = function(){
  return 123;
};

let protoObj = Object.setPrototypeOf({}, Sports.prototype);

console.log(protoObj.getCount());


let dummy;
