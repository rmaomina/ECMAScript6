"use strict";
debugger;

class Member{
  *gen() {
    yield 10;
    yield 20;
  }
};
let obj = new Member();
let genObj = obj.gen();

console.log(genObj.next());
console.log(genObj.next());


let dummy;
