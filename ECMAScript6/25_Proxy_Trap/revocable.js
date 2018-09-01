"use strict";
debugger;

let sportsObj = {sports: "스포츠"};
let revocableObj = Proxy.revocable(sportsObj, {
  get(target, key){
    return target[key];
  }
});

console.log(revocableObj.proxy.sports);

revocableObj.revoke();

try {
  revocableObj.proxy.sports;
} catch (e) {
  console.log("사용 불가");
}


let dummy;
