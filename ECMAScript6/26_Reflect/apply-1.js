"use strict";
debugger;

function getValue(...values){
  return this.base + values.reduce(function(pre, cur){
    return pre + cur;
  });
}

console.log(Reflect.apply(getValue, {base: 100}, [10, 20, 30]));


let dummy;
