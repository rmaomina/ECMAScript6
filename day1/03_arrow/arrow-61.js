"use strict";
debugger;

let Sports = function(){
  this.count = 20;
};
Sports.prototype = {
  plus: function(){
    this.count += 1;
  },
  get: function() {
    setTimeout(() => {
      this.plus();
      console.log(this.count);
    }, 1000);
  }
};
let newSports = new Sports();
newSports.get();


let dummy;
