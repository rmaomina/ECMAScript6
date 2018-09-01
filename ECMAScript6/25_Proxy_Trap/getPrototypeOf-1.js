"use strict";
debugger;

class Sports{
  getGround(){
    return "상암 구장";
  }
};
let newSports = new Sports();

let newProxy = new Proxy(newSports, {
  getPrototypeOf(target){
    return Object.getPrototypeOf(target);
  }
});

console.log(Object.getPrototypeOf(newProxy));


let dummy;
