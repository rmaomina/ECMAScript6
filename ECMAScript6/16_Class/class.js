"use strict";
debugger;

class Member{
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};
Member.prototype.getTitle = function(){};
console.log(typeof Member);


let dummy;
