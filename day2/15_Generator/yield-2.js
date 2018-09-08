"use strict";
debugger;

function* sports(one){
  yield one;
  let check = 10;
}
let genObj = sports(10);

console.log(genObj.next());
console.log(genObj.next());


let dummy;
