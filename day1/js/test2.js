

'use strict'
debugger; //브라우저 디버깅을 쉽게 하기 위해 


const Sports = function() {
	this.member = 11;
}

Sports.prototype.getMember = function () {};

const sportsObj = new Sports ();

console.log(sportsObj.__proto__ === Sports.prototype);
// 결과는 true