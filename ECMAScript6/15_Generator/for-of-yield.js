"use strict";
debugger;

let gen = function*(start){
  let value = start;
  while (true){
    yield ++value;
  }
};

for (var count of gen(10)){
  console.log(count);
  if (count > 12){
    break;
  }
};


let dummy;
