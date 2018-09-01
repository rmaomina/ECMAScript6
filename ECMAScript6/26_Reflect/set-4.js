"use strict";
debugger;

let sportsObj = {};
let newProxy = new Proxy(sportsObj, {
  set(target, key, value, receiver){
    Reflect.set(target, key, value);
  }
});

Reflect.set(newProxy, "baseball", "야구");
console.log(sportsObj);


let dummy;
