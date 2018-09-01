"use strict";
debugger;

let one = 1, two = 2;
function tagFunction(text, plus, minus) {
  console.log(text[0], plus, text[1]);
  console.log(minus, text[2], text[3]);
}
tagFunction `1+2=${one + two}이고 1-2=${one - two}이다`;


let dummy;
