"use strict";
debugger;

let sports = function*(one, two){
  console.log("함수 블록");
  yield one + two;
};
let genObj = sports(10, 20);

console.log(genObj.next());


let dummy;
