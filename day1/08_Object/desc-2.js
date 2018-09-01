"use strict";
debugger;

var obj = {};
Object.defineProperty(obj, "item", {
  set: function(param){
    this.sports = param;
  }
});

obj.item = "야구";
console.log(obj.sports);


let dummy;
