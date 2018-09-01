"use strict";
debugger;

function order(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mili);
      mili === 200 ? reject("reject") : resolve(mili);
    }, mili);
  });
};

Promise.all([order(300), order(200), order(100)])
        .then((milis) => console.log("then resolve"),
              (error) => console.log("then", error));
