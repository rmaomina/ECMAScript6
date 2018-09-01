"use strict";
debugger;

let result = [10, 20, 30].findIndex(
  (value, index, allData) => value === 20);
console.log(result);

result = [10, 20, 30].findIndex((value, index, allData) => value === 77);
console.log(result);

result = [10, 20, 30].findIndex(function(value, index, allData){
  return value === 30 && value === this.check;
}, {check: 30});
console.log(result);


let dummy;
