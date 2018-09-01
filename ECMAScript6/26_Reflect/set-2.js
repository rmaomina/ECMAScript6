"use strict";
debugger;

let sportsObj = {
  set setGame(event){
    Reflect.set(sportsObj, event[0], this.player || event[1]);
  }
};

Reflect.set(sportsObj, "setGame", ["soccer"], {player: 11});
console.log(sportsObj);

Reflect.set(sportsObj, "setGame", ["baseball", 9]);
console.log(sportsObj);


let dummy;
