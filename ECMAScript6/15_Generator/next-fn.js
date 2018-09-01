"use strict";
debugger;

let getAmount = function*(qty, price){
  let amount = Math.floor(qty * price);
  let discount = yield amount;
  return amount - discount;
};
let getDiscount = function(amount){
  return amount > 1000 ? amount * 0.2 : amount * 0.1;
};
let amountObj = getAmount(10, 60);

let result = amountObj.next();
console.log(result);

let dcAmount = getDiscount(result.value);
console.log(dcAmount);

console.log(amountObj.next(dcAmount));


let dummy;
