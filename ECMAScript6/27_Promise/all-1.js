"use strict";
debugger;

function order(mili) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("실행", mili);
      resolve(mili);
    }, mili);
  });
};

Promise.all([order(300), order(200), order(100)])
       .then((milis) => console.log("호출", milis));
