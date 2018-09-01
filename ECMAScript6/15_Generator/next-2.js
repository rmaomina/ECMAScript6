"use strict";
debugger;

let gen = function*(value){
  return ++value;
}
let genObj = gen(1);
console.log(genObj.next());


let dummy;
