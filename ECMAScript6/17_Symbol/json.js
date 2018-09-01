"use strict";
debugger;

let sym = Symbol("key");
let result = JSON.stringify({[sym]: "값"});

console.log(result);


let dummy;
