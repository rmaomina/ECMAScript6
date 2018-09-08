"use strict";
debugger;

let gen = function*(start){
  let count = start;
  while(true){
    yield ++count;
  }
}
let genObj = gen(10);

console.log(genObj.next());
console.log(genObj.return(77));
console.log(genObj.next(55));


let dummy;
