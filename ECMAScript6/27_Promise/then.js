"use strict";
debugger;

function create(){
  return new Promise((resolve) => resolve(100));
};
create().then(() => console.log("1:then"));


create().then((param) => {
  console.log("2:then,", param);
  return param + 50;
});


create().then((param) => {
  console.log("3:then,", param);
  return param + 70;
}).then((param) => console.log("4:then,", param));

