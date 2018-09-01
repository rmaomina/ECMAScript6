"use strict";
debugger;

let target = {event: "축구"};
let newProxy = new Proxy(target, {
  set(target, key, value, receiver){
    target[key] = value;
    console.log(receiver.time);
    console.log(target.time);
    target["time"] = receiver.time;
    return true;
  }
});

let createObj = Object.create(newProxy, {
  time: {value: 90}
});
createObj.player = 11;


let dummy;
