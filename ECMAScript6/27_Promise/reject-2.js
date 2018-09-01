"use strict";
debugger;

let errorObj = new Error("에러");

let promiseObj = Promise.reject(errorObj);
promiseObj.then(
  (param) => console.log(param),
  (error) => console.log("1:", error.message)
);

Promise.reject(errorObj)
       .catch((error)=> console.log("2:", error.message));

Promise.reject(errorObj)
    .then(
      (param) => console.log(param),
      (error) => console.log("3:", error.message)
    );


let dummy;
