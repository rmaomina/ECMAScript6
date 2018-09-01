"use strict";
debugger;

function create(){
  return new Promise(function(resolve, reject){
    resolve();
    console.log("1: resolve");
  });
};

create().then(function(){
  console.log("3: 성공");
}, function(){
  console.log("3: 실패");
});
console.log("2: 끝");
