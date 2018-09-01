"use strict";
debugger;

class Sports{
  getSports(){
    return "스포츠";
  };
};
class Music{
  getMusic(){
    return "음악";
  };
};
let newMusic = new Music("클래식");

let newProxy = new Proxy(newMusic, {
  setPrototypeOf(target, proto){
    Object.setPrototypeOf(target, proto);
    return true;
  }
});
Object.setPrototypeOf(newProxy, Sports.prototype);

console.log(newMusic.getSports());
console.log(newMusic.getMusic);


let dummy;
