"use strict";
debugger;

class Sports {
  constructor(member){
    this.member = member;
  }
  getMember(){
    return this.member;
  }
};
class Soccer extends Sports {
  setGround(ground){
    this.ground = ground;
  }
};
let obj = new Soccer(11);

console.log(obj.getMember());


let dummy;
