"use strict";
debugger;

let oneObj = Promise.resolve(
  {sports: "스포츠"}
);
Promise.resolve(oneObj).then((param) =>{
  console.log(param);
});
