"use strict";
debugger;

let values = [
  {item: "선물1", amount: {apple: 10, candy: 20}},
  {item: "선물2", amount: {apple: 30, candy: 40}}
];

for (var {item: one, amount: {apple: two, candy: five}} of values){
  console.log(one, two, five);
};


let dummy;