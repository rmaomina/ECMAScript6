"use strict";
debugger;

let bookObj = {book: 123};
bookObj[Symbol("one")] = 10;
bookObj[Symbol.for("two")] = 20;

let names = Object.getOwnPropertyNames(bookObj);
console.log("1:", names);

let symbolList = Object.getOwnPropertySymbols(bookObj);
console.log("2:", symbolList);

for (let sym of symbolList){
  console.log(sym.toString(), bookObj[sym]);
}

let emptyList = Object.getOwnPropertySymbols({});
console.log("5:", emptyList.length);


let dummy;
