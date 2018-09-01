"use strict";
debugger;

let hobby = {sports: "스포츠", music: "음악"};
let newProxy = new Proxy(hobby, {
  get(target, key, receiver){
    return target[key] + ",get()";
  }
});

let createObj = Object.create(newProxy, {
  music: {
    value: "클래식"
  }
});

console.log(createObj.music);
console.log(createObj.sports);


let dummy;
