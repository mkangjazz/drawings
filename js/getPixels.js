Canvas.prototype.getPixels = function(number){
  // translating 100 pixels... to our resized canvas
  // canvas was scaled up to 2.25 times
  // then it was scaled with CSS to the size of the parentElement 
  // or the getBoundingRect() size
  // so what does this mean...
  
  // the original canvas is 400 * 2.25
  // let's say the CSS canvas is 400
  
  return number * this.devicePixelRatio;
};
