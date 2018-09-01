"use strict";
debugger;

class Sports {
  constructor(){
    console.log("Sports:", new.target.name);
  }
};
class Soccer extends Sports {
  constructor(){
    super();
      console.log("Soccer:", new.target.name);
  }
};
let sportsObj = new Sports();
let soccerObj = new Soccer();


let dummy;
