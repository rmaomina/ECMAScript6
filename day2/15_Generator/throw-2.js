"use strict";
debugger;

let gen = function*(){
  throw "에러 발생";
  yield 20;
};
let genObj = gen();

try {
  let result = genObj.next();
} catch (error) {
  console.log(error);
}
console.log(genObj.next());


let dummy;
