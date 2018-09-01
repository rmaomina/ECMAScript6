"use strict";
debugger;

let sportsObj = Object.defineProperty({}, "sports", {
  set(){
    this.value = 123;
  },
  configurable: false
});

let newProxy = new Proxy(sportsObj, {
  get(target, key){
    return target[key] || 123;
  }
});

try {
  newProxy.sports;
} catch (e) {
  console.log("에러");
};


let dummy;
