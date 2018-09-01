"use strict";
debugger;

let sportsObj = {soccer: "축구"};
Object.preventExtensions(sportsObj);

let newProxy = new Proxy(sportsObj, {
  has(target, key){
    return target[key];
    // return false;
  }
});

console.log("baseball" in newProxy);
console.log("soccer" in newProxy);


let dummy;
