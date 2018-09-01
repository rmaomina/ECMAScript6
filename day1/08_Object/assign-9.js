"use strict";
debugger;

let count = {
  current: 1,
  get getCount() {
    return ++this.current;
  }
};
let mergeObj = {};
Object.assign(mergeObj, count);
console.log(mergeObj);


let dummy;
