"use strict";
debugger;

let obj = {nine: 999};
obj[Symbol("one")] = 111;
obj[Symbol("two")] = "222";
console.log(obj);

for (var key in obj){
  console.log(key);
};


let dummy;
