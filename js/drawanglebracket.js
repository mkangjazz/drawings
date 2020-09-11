Canvas.prototype.drawAngleBracket = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var size = updatedOptions.width;
  var unit = (size - updatedOptions.lineWidth) / 2;
  
  this.drawBoundingBox(
    updatedOptions.x,
    updatedOptions.y,
    size + updatedOptions.lineWidth / 2,
    size / 2 + updatedOptions.lineWidth / 2,
  );

  context.translate(
    updatedOptions.x + updatedOptions.lineWidth,
    updatedOptions.y + updatedOptions.lineWidth,
  );

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(unit, unit);
  context.lineTo(unit * 2, 0);

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
