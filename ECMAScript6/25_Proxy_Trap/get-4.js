"use strict";
debugger;

let newProxy = new Proxy([10, 20], {
  get(target, key, receiver){
    return target[0] + target[1];
  }
});

console.log(newProxy.listArray);


let dummy;
