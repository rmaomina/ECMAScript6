"use strict";
debugger;

let sportsObj = {};
let newProxy = new Proxy(sportsObj, {
  isExtensible(target){
    return Object.isExtensible(target);
  }
});

console.log(Object.isExtensible(newProxy));

Object.preventExtensions(sportsObj);
console.log(Object.isExtensible(newProxy));


let dummy;
