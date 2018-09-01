"use strict";
debugger;

try {
  let obj = Object.assign(null, {x: 1});
} catch (e) {
  console.log("null 지정 불가");
}

console.log(Object.assign(123));
console.log(Object.assign(456, 70));


let dummy;
