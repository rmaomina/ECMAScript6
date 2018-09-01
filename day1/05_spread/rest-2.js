"use strict";
debugger;


let get = (...rest) => {
  console.log(rest);
  console.log(Array.isArray(rest));
}
get(...[1, 2, 3]);




let dummy;
