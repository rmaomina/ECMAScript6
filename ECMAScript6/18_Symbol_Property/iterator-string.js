"use strict";
debugger;

let stringValue = "1A";
for (let value of stringValue) {
  console.log(value);
}
let iterObj = stringValue[Symbol.iterator]();

console.log(iterObj.next());
console.log(iterObj.next());
console.log(iterObj.next());


let dummy;
