"use strict";
debugger;

var sports = "축구";
let music = "재즈";

function get(){
  var sports = "농구";
  let music = "클래식";

  console.log("1:", sports);
  console.log("2:", this.sports);
  console.log("3:", this.music);
};
window.get();
get();


let dummy;
