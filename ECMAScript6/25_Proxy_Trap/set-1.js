"use strict";
debugger;

let target = {event: "축구"};
let sportsProxy = new Proxy(target, {});

sportsProxy.sports = "스포츠";


let dummy;
