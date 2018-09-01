"use strict";
debugger;

class Sports{
  getGround(){
    return "상암 구장";
  }
}
let newSports = new Sports();

let newProxy = new Proxy(newSports, {
  getPrototypeOf(target){
    return Object.getPrototypeOf(target);
  }
});

console.log(newProxy.__proto__);

console.log(Sports.prototype.isPrototypeOf(newProxy));
console.log(Object.prototype.isPrototypeOf(newProxy));


let dummy;
