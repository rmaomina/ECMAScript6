"use strict";
debugger;

class Sports{
  constructor(){
    console.log(Sports.getGround());
    console.log(this.constructor.getGround());
  }
  static getGround(){
    return "상암구장";
  }
};
let obj = new Sports();


let dummy;
