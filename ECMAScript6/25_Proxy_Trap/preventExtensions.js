"use strict";
debugger;

let sportsObj = {sports: "스포츠"};
let newProxy = new Proxy(sportsObj, {
  preventExtensions(target){
    Object.preventExtensions(target);
    return true;
  }
});

Object.preventExtensions(newProxy);
console.log(Object.isExtensible(sportsObj));


let dummy;
