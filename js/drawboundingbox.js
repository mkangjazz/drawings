Canvas.prototype.drawBoundingBox = function(x, y, w, h){
  var lineWidth = 1;
  
  this.context.save();

  this.adjustOriginOffset(lineWidth, lineWidth);

  this.context.lineWidth = lineWidth,
  this.strokeStyle = 'magenta',
  this.context.setLineDash([2]);
  this.context.strokeRect(x, y, w, h);

  return this.context.restore();
};
