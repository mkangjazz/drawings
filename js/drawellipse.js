Canvas.prototype.drawEllipse = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var width = updatedOptions.width / 2;
  var height = updatedOptions.height / 2;
  
  this.drawBoundingBox(
    updatedOptions.x,
    updatedOptions.y,
    width * 2 + updatedOptions.lineWidth,
    height * 2 + updatedOptions.lineWidth,
  );

  this.adjustOriginOffset(
    updatedOptions.lineWidth / 2,
    updatedOptions.lineWidth / 2,
  );
  
  context.translate(
    updatedOptions.x + width,
    updatedOptions.y + height,
  );

  context.moveTo(0,0);
  context.beginPath();

  if (width > height) {
    context.scale(1, height / width);
    context.arc(0, 0, width, 0, 2 * Math.PI, false);
  }
  
  if (height > width) {
    context.scale(width / height, 1);
    context.arc(0, 0, height, 0, 2 * Math.PI, false);
  }

  if (width === height) {
    context.arc(0, 0, width, 0, 2 * Math.PI, false);
  }
  
  // reset scaling stroke
  context.restore();
  
  context.save();
  
  this.conditionallyApplyOptionsToContext(
    updatedOptions,
    [
      'fillStyle',
      'strokeStyle',
      'lineWidth',
    ],
  );
  
  context.restore();
};
