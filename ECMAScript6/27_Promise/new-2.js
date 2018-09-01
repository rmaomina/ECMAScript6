"use strict";
debugger;

function create(param){
  return new Promise(function(resolve, reject){
    if (param === "ok"){
      resolve(param);
    } else {
      reject(param);
      console.log("1: reject");
    }
  });
};
create("fail").then(function(param){
  console.log("3: 성공,", param);
}, function(param){
  console.log("3: 실패,", param);
});
console.log("2: 끝");
