"use strict";
debugger;

let getTotal = ([one, two] = [10, 20]) => one + two;
console.log(getTotal());

let getValue = ({two: value} = {two: 20}) => value;
console.log(getValue());


let dummy;
