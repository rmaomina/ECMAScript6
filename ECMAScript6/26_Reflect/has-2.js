"use strict";
debugger;

let sportsObj = {baseball: "야구"};
let newProxy = new Proxy(sportsObj, {
  has(target, key){
    Reflect.has(target, key);
  }
});

console.log(Reflect.has(newProxy, "baseball"));


let dummy;
