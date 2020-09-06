Canvas.prototype.drawAngleBracket = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var size = this.getSizes(updatedOptions.size);
  var unit = size / 4;

  this.drawBoundingBox(options);
  
  context.translate(
    updatedOptions.x + size/2,
    updatedOptions.y + size/2,
  );
  
  context.translate(-size/2 + unit/2, 0);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(unit, unit);
  context.lineTo(unit * 3, -unit);

  context.strokeStyle = updatedOptions.strokeStyle;
  context.lineCap = updatedOptions.lineCap;
  context.lineJoin = updatedOptions.lineJoin;
  context.lineWidth = updatedOptions.lineWidth;

  context.stroke();
  
  context.restore();
};
