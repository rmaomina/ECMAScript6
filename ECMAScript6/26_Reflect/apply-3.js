"use strict";
debugger;

function getValue(...values){
  return this.base + values.reduce(function(pre, cur){
      return pre + cur;
  });
};

let newProxy = new Proxy(getValue, {
  apply(target, thisObj, params) {
    return Reflect.apply(target, thisObj, params);
  }
});

console.log(Reflect.apply(newProxy, {base: 100}, [10, 20, 30]));


let dummy;
