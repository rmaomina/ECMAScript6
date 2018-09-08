"use strict";
debugger;

let sym = Symbol();
try {
  +sym;
} catch (e) {
  console.log("+sym 사용 불가");
};

try {
  sym | 0;
} catch (e) {
  console.log("sym | 0 사용 불가");
};


let dummy;
