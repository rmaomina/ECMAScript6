"use strict";
debugger;

let gen = function*(value) {
  let count = 0;
  while (value){
    yield ++count;
  }
};
let genObj = gen(true);

console.log(genObj.next());
console.log(genObj.next());


let dummy;
