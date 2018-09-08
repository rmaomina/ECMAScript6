"use strict";
debugger;

let newMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);

for (var element of newMap){
  element.forEach((keyValue, index) => {
    console.log(index, keyValue);
  });
};

for (var [key, value] of newMap){
  console.log(key, value);
};


let dummy;
