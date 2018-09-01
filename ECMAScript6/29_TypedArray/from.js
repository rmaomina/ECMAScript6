"use strict";
debugger;

console.log(Uint8Array.from([12, 34]));
console.log(Uint8Array.from("12"));

let threeObj = Uint8Array.from("56", function(value){
  console.log(value);
  return value;
}, this);

let fourObj = Uint8Array.from({length: 3}, function(value, key){
  return key;
});
console.log(fourObj);


let dummy;
