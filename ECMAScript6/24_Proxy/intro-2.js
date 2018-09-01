"use strict";
debugger;

let target = {food: "밥"};
let middle = new Proxy(target, {});
let left = middle.food;


let dummy;
