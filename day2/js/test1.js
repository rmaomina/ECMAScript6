// use strict
// debugger 필히 사용

'use strict'
debugger; //브라우저 디버깅을 쉽게 하기 위해 

// 동일한 코드에 var변수와 let변수의 차이 
var node = document.querySelector("#let");

for (let k = 0; k < node.children.length; k++) {
    var el = node.children[k];
    el.onclick = function(e) {
        e.target.style.backgroundColor = 'red';
        console.log(k);
    }
}

var node = document.querySelector("#var");

for (var k = 0; k < node.children.length; k++) {
    var el = node.children[k];
    el.onclick = function(e) {
        e.target.style.backgroundColor = 'red';
        console.log(k);
    }
}
