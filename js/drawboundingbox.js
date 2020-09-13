Canvas.prototype.drawBoundingBox = function(x, y, w, h){
  var lineWidth = 1;
  
  this.context.save();

  this.adjustOriginOffset(
    lineWidth / 2,
    lineWidth / 2,
  );

  this.strokeStyle = 'magenta',

  this.context.lineWidth = lineWidth,
  this.context.setLineDash([2]);
  this.context.strokeRect(x, y, w, h);
  this.context.restore();

  return;
};
