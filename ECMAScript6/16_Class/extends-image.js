"use strict";
debugger;

class ExtendsImage extends Image{
  constructor() {
    super();
  }
  setProperty(image){
    this.src = image.src;
    this.alt = image.alt;
    this.title = image.title;
  }
};
let imageObj = new ExtendsImage();

let properties = {
  src: "file/rainbow.png",
  alt: "나무와 집이 있고 그 위에 무지개가 있는 모습",
  title: "무지개"
};

imageObj.setProperty(properties);
document.querySelector("body").appendChild(imageObj);


let dummy;
