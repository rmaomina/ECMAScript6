"use strict";
debugger;

class Book {};
let bookObj = new Book();
console.log(bookObj.toString());

class Sports {
  get [Symbol.toStringTag]() {
    return "Sports-class";
  }
};
let sportsObj = new Sports();
console.log(sportsObj.toString());
console.log(Map.prototype[Symbol.toStringTag]);


let dummy;
