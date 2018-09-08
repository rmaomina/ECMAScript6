"use strict";
debugger;

class Sports {
  static setGround(ground){
    this.ground = ground;
  }
  static getGround(){
    return this.ground;
  }
};
Sports.setGround("상암구장");
console.log(Sports.getGround());


let dummy;
