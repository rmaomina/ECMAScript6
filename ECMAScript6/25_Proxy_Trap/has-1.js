"use strict";
debugger;

let newProxy = new Proxy({sports: "스포츠"}, {
  has(target, key){
    return key in target ? true : false;
  }
});

console.log("sports" in newProxy);
console.log("music" in newProxy);


let dummy;
