"use strict";
debugger;

let target = {food: "밥"};
let handler = {
  get(target, key){
    return target[key] + ",수저";
  },
  set(target, key){}
};

let middle = new Proxy(target, handler);
let left = middle.food;
console.log(left);


let dummy;
