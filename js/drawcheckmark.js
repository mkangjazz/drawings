Canvas.prototype.drawCheckmark = function(options){
  var canvas = this.canvas;
  var context = this.context;
  
  context.save();

// how do i want to scale my illustrations... 100 pixel grid, scaled?
// small, medium, large
//  var unit = size / 4;

//  this.context.translate(x, y);
//
//  this.context.beginPath();
//  this.context.moveTo(0, 0);
//  this.context.lineTo(unit, unit);
//  this.context.lineTo(unit + unit + unit, - unit);
//
//  this.context.lineCap = 'round';
//  this.context.lineJoin = 'round';
//  this.context.lineWidth = size / 8;

  this.context.stroke();
  this.context.restore();
};
