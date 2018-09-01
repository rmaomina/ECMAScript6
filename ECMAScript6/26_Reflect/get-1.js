"use strict";
debugger;

let sports = {
  event: "축구",
  ground: "상암구장",
  get getGame(){
    return this.event + ":" + this.ground;
  }
};

console.log(Reflect.get(sports, "event"));

console.log(Reflect.get(sports, "getGame"));

console.log(Reflect.get(sports, "getGame", {event: "농구"}));


let dummy;
