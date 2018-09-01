"use strict";
debugger;

let getTotal = ([one, two] = [10, 20]) => one + two;
let result = getTotal();
console.log(result);


let getValue = ({two: value} = {two: 20}) => value;
result = getValue();
console.log(result);


let dummy;
