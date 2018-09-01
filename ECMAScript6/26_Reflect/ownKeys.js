"use strict";
debugger;

let sportsObj = {
    soccer: "축구",
    baseball: "야구",
    [Symbol.for("one")]: 10
};
console.log(Reflect.ownKeys(sportsObj));


let dummy;
