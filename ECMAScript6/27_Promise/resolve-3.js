"use strict";
debugger;

let oneObj = Promise.resolve({
  then(resolve){
    console.log("1: then");
    resolve("thenable");
  }
});
oneObj.then((value) => console.log("2:",value));
