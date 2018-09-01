"use strict";
debugger;

let promiseObj = Promise.resolve(
  {sports: "스포츠", music: "음악"}
);
promiseObj.then((param) =>{
  for (let name in param){
    console.log(name, param[name]);
  }
});

Promise.resolve(
  ["sports", "music"]
).then((param) => console.log(param));
