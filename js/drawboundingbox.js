Canvas.prototype.drawBoundingBox = function(options){
  var size = this.getSizes(options.size);

  this.context.save();  
  this.context.strokeStyle = 'magenta';
  this.context.setLineDash([6]);
  this.context.strokeRect(options.x, options.y, size, size);

  return this.context.restore();
};