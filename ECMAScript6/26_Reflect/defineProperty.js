"use strict";
debugger;

let sportsObj = {
  event: "축구"
};

let result = Reflect.defineProperty(sportsObj, "sports", {
  get(){
    return this.event;
  }
});
console.log(result);
console.log(sportsObj.sports);


let dummy;
