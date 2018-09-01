"use strict";
debugger;

class Sports{
  constructor(ground){
    this.ground = ground;
  }
};
let obj = Reflect.construct(Sports, ["상암구장"]);
console.log(obj.ground);


let dummy;
