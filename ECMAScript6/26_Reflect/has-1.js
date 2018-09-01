"use strict";
debugger;

let nameObj = {name: "이름"};
console.log(Reflect.has(nameObj, "name"));

function sports(){};
console.log(Reflect.has(sports, "hasOwnProperty"));


let dummy;
