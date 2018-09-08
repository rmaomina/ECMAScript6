"use strict";
debugger;

const newMap = new Map();
newMap.set("one", 100);
newMap.set("one", 123);

let sportsObj = {sports: "스포츠"};
newMap.set(sportsObj, "Sports Object");
newMap.set(sportsObj, "Sports Object-변경");

newMap.set({}, "Object-1");
newMap.set({}, "Object-2");


let dummy;
