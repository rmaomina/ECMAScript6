"use strict";
debugger;

let bookObj = {};
bookObj[Symbol("one")] = 10;
bookObj[Symbol.for("two")] = 20;

let symbolList = Object.getOwnPropertySymbols(bookObj);
console.log(symbolList);

let first, second, key, keyValue = {};
for (let sym of symbolList){
  key = Symbol.keyFor(sym);
  if (key){
    keyValue[key] = bookObj[sym];
  } else {
    //Symbol(one)
    first = /^Symbol[(]/[Symbol.replace](sym.toString(), "");
    second = /[)]$/[Symbol.replace](first, "");
    keyValue[second] = bookObj[sym];
  }
};
console.log(JSON.stringify(keyValue));


let dummy;
