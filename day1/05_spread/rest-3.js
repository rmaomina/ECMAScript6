"use strict";
debugger;

let get = (one, ...rest) => {
  console.log(one);
  console.log(rest);
}
get(...[1, 2, 3]);


let dummy;
