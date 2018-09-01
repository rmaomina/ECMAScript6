"use strict";
debugger;

function getValue(...values){
  return values.reduce(function(previous, current){
    return previous + current;
  });
};

let newProxy = new Proxy(getValue, {
  apply(target, thisObj, args) {
    return target.apply(thisObj, args);
  }
});

console.log(newProxy(10, 20, 30));
console.log(newProxy.apply("", [10, 20, 30]));
console.log(newProxy.call({add: 100}, 10, 20, 30));


let dummy;
