"use strict";
debugger;

function order(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mili);
      resolve(mili);
    }, mili);
  });
};

Promise.race([order(300), order(200), order(100)])
        .then((milis) => console.log("then:", milis),
              (error) => console.log(error));
