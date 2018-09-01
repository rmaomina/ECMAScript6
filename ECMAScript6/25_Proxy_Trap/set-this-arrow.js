"use strict";
debugger;

let arrowProxy = new Proxy({}, {
  ground: "상암구장",
  set: (target, key, value, receiver) => {
    console.log(this == window);
    console.log(this.ground);
    return true;
  }
});
arrowProxy.sports = "스포츠";


let dummy;
