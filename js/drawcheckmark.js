Canvas.prototype.drawCheckmark = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  var size = updatedOptions.width;
  var unit = (size - updatedOptions.lineWidth) / 3;

  context.save();
  
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

  this.conditionallyApplyOptionsToContext(
    updatedOptions,
    [
      'fillStyle',
      'strokeStyle',
      'lineWidth',
      'lineCap',
      'lineJoin',
    ],
  );
  
  context.restore();
};
