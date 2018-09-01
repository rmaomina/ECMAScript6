"use strict";
debugger;

let Sports = function(){};
Sports.prototype.getGround = function(){
  return this.ground;
};

let groundObj = {ground: "상암구장"};
Reflect.setPrototypeOf(groundObj, Sports.prototype);

console.log(groundObj.getGround());


let dummy;
