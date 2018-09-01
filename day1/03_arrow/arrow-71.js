"use strict";
debugger;

let Sports = function(){
  this.count = 20;
};
Sports.prototype = {
  add: () => {
    this.count += 1;
  }
};
let newSports = new Sports();

newSports.add();
console.log(newSports.count);

console.log(window.count);


let dummy;
