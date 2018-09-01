"use strict";
debugger;

let sports = {soccer: "축구"};
let newProxy = new Proxy(sports, {
  get(target, key, receiver){
    return Reflect.get(target, key) + ":11명";
  }
});

console.log(Reflect.get(newProxy, "soccer"));


let dummy;
