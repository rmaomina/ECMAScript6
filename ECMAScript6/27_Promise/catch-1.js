"use strict";
debugger;

function create(param){
  return new Promise((resolve, reject) =>{
    param === "ok" ? resolve(param) : reject(param);
  });
};

create("fail").then((param) => {
  console.log("성공:", param);
}).catch((param) => {
  console.log("실패:", param);
});
