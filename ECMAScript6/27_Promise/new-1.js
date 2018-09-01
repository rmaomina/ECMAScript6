"use strict";
debugger;

function create(param){
  return new Promise(function(resolve, reject){
    if (param === "ok"){
      resolve(param);
      console.log("1: resolve");
    } else {
      reject(param);
    }
  });
};
create("ok").then(function(param){
  console.log("3: 성공,", param);
}, function(param){
  console.log("3: 실패,", param);
});
console.log("2: 끝");
