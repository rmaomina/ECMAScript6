"use strict";
debugger;

let Sports = {
  getTitle(){
    console.log("Sports");
  }
};
let Soccer = {
  getTitle(){
    super.getTitle();
    console.log("Soccer");
  }
};
Object.setPrototypeOf(Soccer, Sports);
Soccer.getTitle();


let dummy;
