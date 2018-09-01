"use strict";
debugger;

let promiseObj = Promise.reject("reject 처리");
promiseObj.then(
  (param) => console.log(param),
  (param) => console.log("에러:", param));
