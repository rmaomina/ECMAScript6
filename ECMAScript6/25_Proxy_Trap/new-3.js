"use strict";
debugger;

let target = {ground: "상암구장"};
let newProxy = new Proxy(target, {});

newProxy.sports = "축구";
console.log(newProxy);

console.log(target);


let dummy;
