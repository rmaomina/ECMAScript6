"use strict";
debugger;

let five, six;
({one: five, two: six} = {one: 10, two: 20});
console.log(five, six);


let {nine, plus: {ten}} = {nine: 9, plus: {ten: 10}};
console.log(nine, ten);


let dummy;
