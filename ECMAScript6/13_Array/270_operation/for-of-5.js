"use strict";
debugger;

let values = [10, 20, 30];
Array.prototype.music = function(){return "음악"};
Object.prototype.sports = function(){ return "스포츠"};

for (let key in values) {
  console.log(key, ':', values[key]);
}
for (let value of values) {
  console.log(value);
}


let dummy;
