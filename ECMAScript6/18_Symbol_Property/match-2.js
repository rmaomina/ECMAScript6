"use strict";
debugger;

try {
  "ABC".includes(/ABC/);
} catch (e) {
  console.log("정규 표현식 작성 불가");
}

let regexpObj = /ABC/;
regexpObj[Symbol.match] = false;

console.log("/ABC/".includes(regexpObj));


let dummy;
