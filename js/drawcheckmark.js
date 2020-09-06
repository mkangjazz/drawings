Canvas.prototype.drawCheckmark = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var size = this.getSizes(updatedOptions.size);
  var unit = (size - updatedOptions.lineWidth) / 3;

  this.drawBoundingBox(
    updatedOptions.x,
    updatedOptions.y,
    size,
    size * .75 - updatedOptions.lineWidth/2,
  );

  this.adjustOriginOffset(updatedOptions.lineWidth/2, unit + updatedOptions.lineWidth/2);

  context.beginPath();
  context.moveTo(updatedOptions.x, updatedOptions.y);
  context.lineTo(updatedOptions.x + unit, updatedOptions.y + unit);
  context.lineTo(updatedOptions.x + unit * 3, updatedOptions.y - unit);

  context.strokeStyle = updatedOptions.strokeStyle;
  context.lineCap = updatedOptions.lineCap;
  context.lineJoin = updatedOptions.lineJoin;
  context.lineWidth = updatedOptions.lineWidth ? updatedOptions.lineWidth : size / 10;

  context.stroke();
  
  context.restore();
};
