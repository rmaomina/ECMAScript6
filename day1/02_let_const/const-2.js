"use strict";
debugger;

const obj = {language: "한글"};
try {
  obj = {};
} catch (e) {
  console.log("const 재할당 불가");
}
obj.language = "영어";
console.log(obj.language);


let dummy;
