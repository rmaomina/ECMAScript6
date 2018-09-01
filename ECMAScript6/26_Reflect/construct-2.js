"use strict";
debugger;

class Sports{
  constructor(ground){
    this.ground = ground;
  }
  getGround(){
    return this.ground;
  }
};

class Soccer{
  getGround(){
    return "Soccer.getGround() 사용";
  }
};

let obj = Reflect.construct(Sports, ["상암구장"], Soccer);
console.log(obj.getGround());


let dummy;
