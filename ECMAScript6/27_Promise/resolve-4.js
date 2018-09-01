"use strict";
debugger;

let thenable = {
  then(resolve, reject){
    resolve("resolve");
    reject("에러");
  }
};
let oneObj = Promise.resolve(thenable);

oneObj.then(
  (value) => console.log(value),
  (value) => console.log("실행되지 않음")
);


let dummy;
