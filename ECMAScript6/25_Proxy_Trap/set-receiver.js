"use strict";
debugger;

let target = {event: "축구"};
let handler = {
  set(target, key, value, receiver){
    console.log(target == receiver);
    console.log(receiver.event);
    return true;
  }
}
let sportsProxy = new Proxy(target, handler);
sportsProxy.sports = "스포츠";


let dummy;
