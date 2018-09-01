// "use strict";
debugger;

one = 100;
function get(){
  one = 300;
  console.log("함수:", one);
}
get();
console.log("글로벌:", one);


let dummy;