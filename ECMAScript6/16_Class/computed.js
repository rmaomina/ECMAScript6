"use strict";
debugger;

let type = "Type";
class Sports {
  static ["get" + type](kind){
    return kind ? "스포츠" : "음악";
  }
}
console.log(Sports["get" + type](1));


let dummy;
