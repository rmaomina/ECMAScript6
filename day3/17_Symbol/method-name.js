"use strict";
debugger;

const symbolOne = Symbol("symbol one");
const symbolTwo = Symbol("symbol two");

class Sports {
  static [symbolOne]() {
    return "Symbol-1";
  }
  [symbolTwo](){
    return "Symbol-2";
  }
}
console.log(Sports[symbolOne]());

let obj = new Sports();
console.log(obj[symbolTwo]());


let dummy;
