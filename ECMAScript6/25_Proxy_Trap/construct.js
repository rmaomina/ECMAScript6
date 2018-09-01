"use strict";
debugger;

class Sports{
  constructor(event){
    this.event = event;
  }
};

let newProxy = new Proxy(Sports, {
  construct(target, params, proxy){
    return new target(params[0]);
  }
});

let sportsObj = new newProxy("축구");
console.log(sportsObj.event);


let dummy;
