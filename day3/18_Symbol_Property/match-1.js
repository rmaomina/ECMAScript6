"use strict";
debugger;

console.log("1", "Sports".match(/s/));

class MatchCheck {
  constructor(base) {
    this.base = base;
  }
  [Symbol.match](target) {
    return this.base.indexOf(target) >= 0;
  }
}
let instMatch = new MatchCheck("sports");
console.log("2:", "po".match(instMatch));


let dummy;
