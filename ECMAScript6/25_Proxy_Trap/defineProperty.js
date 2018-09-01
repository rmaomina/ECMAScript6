"use strict";
debugger;

let target = {};
let newProxy = new Proxy(target, {
  defineProperty(target, key, descriptor) {
    descriptor.value = descriptor.value + ":축구";
    Object.defineProperty(target, key, descriptor);
    return true;
  }
});

Object.defineProperty(newProxy, "sports", {
  value: "스포츠", writable: true, configurable: true
});

console.log(target);


let dummy;
