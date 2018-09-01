"use strict";
debugger;

class Sports {
  constructor(member){
    this.member = member;
    console.log(this.member);
  }
};
class Soccer extends Sports {
  constructor(member){
    super(member);
    this.member = 456;
    console.log(this.member);
  }
};
let obj = new Soccer(123);


let dummy;
