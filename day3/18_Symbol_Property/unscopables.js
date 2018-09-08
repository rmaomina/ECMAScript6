//"use strict"를 선언하면 with에서 에러 발생
//"use strict";
debugger;

let sports = {
  soccer: "축구",
  baseball: "야구"
};
with(sports){
  console.log(soccer, baseball);
};

sports[Symbol.unscopables] = {
  baseball: true
};

try {
  with (sports) {
    console.log(soccer);
    let value = baseball;
  }
} catch (e) {
  console.log(e.message);
};


let dummy;
