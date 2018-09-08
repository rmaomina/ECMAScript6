"use strict";
debugger;

class Member {
  set setName(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
};
let memberObj = new Member();
memberObj.setName = "이름";

console.log(memberObj.getName);


let dummy;
