"use strict";
debugger;

try {
  let result = Member;
} catch (e) {
  console.log("호이스팅 불가");
};

class Member {
  static getMember() {
    return "member";
  }
};


let dummy;
