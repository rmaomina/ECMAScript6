"use strict";
debugger;

let obj = {one: 1};
Object.assign(obj, {two: 2}, {two: 3}, {four: 4});
for (var pty in obj){
  console.log(pty, obj[pty]);
};


let dummy;
