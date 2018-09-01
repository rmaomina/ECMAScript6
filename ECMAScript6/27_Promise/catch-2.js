"use strict";
debugger;

function create(param){
  return new Promise((resolve, reject) =>{
    resolve("resolve");
  });
};

create().then((param) => {
  console.log("1:then,", param);
  throw "에러 발생 시킴";
}).catch((param) => {
  console.log("2:catch,", param);
}).then((param) => {
  console.log("3:then,", param);
}).catch((param) => {
  console.log("4:catch,", param);
});
