"use strict";
debugger;

let book = function(){
  let title = "자바스크립트"
  function get(){
    try {
      console.log(this.title);
    } catch (e) {
      console.log("참조 불가");
    }

  }
  get();
}
book();


let dummy;
