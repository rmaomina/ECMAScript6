"use strict";
debugger;

let sports = function(){
  console.log(new.target);
}
sports();
new sports();


let dummy;
