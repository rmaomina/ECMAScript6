"use strict";
debugger;

let values = {0: "zero", 1: "one", 2: "two", length: 3};

for (var key in values){
  console.log(key, ':', values[key]);
};

for (var k = 0; k < values.length; k++){
  console.log(values[k]);
};


let dummy;
