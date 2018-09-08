"use strict";
debugger;

try {
  new Map(["one", 1]);
}catch(e){
  console.log("[one, 1]");
};

try {
  new Map({one: 1});
}catch(e){
  console.log("{one: 1}");
};

let newMap = new Map([{one: 1}]);
console.log(newMap);


let dummy;
