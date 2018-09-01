"use strict";
debugger;

let sportsObj = Object.defineProperty({}, "sports", {
  value: "스포츠",
  configurable: true
});

let handler = {
  getOwnPropertyDescriptor(target, key){
    let desc = Object.getOwnPropertyDescriptor(target, key);
    if (desc.configurable){
      return {configurable: true, enumerable: true, value: "미술"};
    }
    return desc;
  }
};
let newProxy = new Proxy(sportsObj, handler);

console.log(Object.getOwnPropertyDescriptor(newProxy, "sports"));


let dummy;
