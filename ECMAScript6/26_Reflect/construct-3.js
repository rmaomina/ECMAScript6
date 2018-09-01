"use strict";
debugger;

class Sports{
  constructor(...values){
    this.values = values;
  }
  getValues(){
    return this.values;
  }
};

let newProxy = new Proxy(Sports, {
  construct(target, params, proxy){
    return Reflect.construct(target, params);
  }
});

let obj = Reflect.construct(newProxy, ["축구", "상암구장"]);
console.log(obj.getValues());


let dummy;
