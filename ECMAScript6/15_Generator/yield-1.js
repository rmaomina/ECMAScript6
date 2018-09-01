"use strict";
debugger;

function* sports(one){
  let two = yield one;
  let param = yield two + one;
  yield param + one;
}
let generatorObj = sports(10);

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next(20));


let dummy;
