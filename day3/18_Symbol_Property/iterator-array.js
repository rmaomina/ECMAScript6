"use strict";
debugger;

let numberArray = [10, 20];
for (let value of numberArray){
  console.log(value);
};
let iteratorObj = numberArray[Symbol.iterator]();

console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());


let dummy;
