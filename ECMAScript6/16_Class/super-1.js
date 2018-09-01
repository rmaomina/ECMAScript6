"use strict";
debugger;

class Sports {
  setGround(ground){
    this.ground = ground;
  }
};
class Soccer extends Sports {
  setGround(ground){
    super.setGround();
    this.ground = ground;
  }
};
let obj = new Soccer(11);
obj.setGround("상암구장");
console.log(obj.ground);


let dummy;
