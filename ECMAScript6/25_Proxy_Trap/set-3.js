"use strict";
debugger;

let target = {};
let musicProxy = new Proxy(target, {
  set(target, key, value, receiver){
    target[key] = value;
    return true;
  }
});
musicProxy.music = "음악";
console.log(musicProxy.music);


let dummy;
