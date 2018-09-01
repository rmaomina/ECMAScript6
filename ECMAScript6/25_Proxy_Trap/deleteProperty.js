"use strict";
debugger;

let target = {sports: "스포츠", music: "음악"};
let newProxy = new Proxy(target, {
  deleteProperty(target, key) {
    return delete target[key];
  }
});

console.log(delete newProxy.sports);
console.log(delete newProxy.dummy);

Object.seal(target);
let desc = Object.getOwnPropertyDescriptor(target, "music");
if (desc.configurable){
  console.log(delete newProxy.music);
} else {
  console.log("삭제 불가");
};


let dummy;
