"use strict";
debugger;

let sports = {
  event: "축구",
  player: 11
}

let dup = {};
for (var key in sports){
  dup[key] = sports[key];
}
sports.player = 33;
console.log(dup.player);


let dummy;
