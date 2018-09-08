"use strict";
debugger;

let name = 'tennis';
let sports = {
  [name]: 1,
  [name + 'Game']: '윔블던',
  [name + "fn"](){
    return "참가";
  }
};

console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisfn());


let dummy;
