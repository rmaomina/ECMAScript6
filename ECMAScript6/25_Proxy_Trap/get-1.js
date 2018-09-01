"use strict";
debugger;

let sports = {soccer: "축구"};
let handler = {
  get(target, key, receiver){
    return target[key] + ",11명";
  }
}
let sportsProxy = new Proxy(sports, handler);
console.log(sportsProxy.soccer);

let desc = Object.getOwnPropertyDescriptor(sports, "soccer");
console.log(desc);


let dummy;
