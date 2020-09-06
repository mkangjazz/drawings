Canvas.prototype.setDimensions = function(){
  var dpr = window.devicePixelRatio || 1;
  var rect = this.canvas.parentElement.getBoundingClientRect();

  this.canvas.width = rect.width * dpr;
  this.canvas.height = rect.height * dpr;

  this.context.scale(dpr, dpr);

  this.devicePixelRatio = dpr;
  
  return console.log('setDimensions', this);
};
