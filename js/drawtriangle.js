Canvas.prototype.drawTriangle = function (options) {
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  var height = updatedOptions.height;
  var angle = updatedOptions.angle;
  var base = updatedOptions.base; 

  var widthLeft;

  if (!height && !angle && !base) {
    return console.log('drawTriangle failed');
  }

  context.save();

//  this.drawBoundingBox(
//    updatedOptions.x,
//    updatedOptions.y,
//    width + updatedOptions.lineWidth / 2,
//    height + updatedOptions.lineWidth / 2,
//  );

  this.adjustOriginOffset(
    updatedOptions.lineWidth / 2,
    updatedOptions.lineWidth / 2,
  );

  context.beginPath();

  context.moveTo(
    updatedOptions.x,
    updatedOptions.y,
  );
  
  if (angle === 90) {
    context.lineTo(
      updatedOptions.x,
      updatedOptions.y + height,
    );

    context.lineTo(
      updatedOptions.x + base,
      updatedOptions.y + height,
    );
  } else {
    widthLeft = height / Math.tan(angle * Math.PI / 180);
    
    context.lineTo(
      updatedOptions.x - widthLeft,
      updatedOptions.y + height,
    );

    context.lineTo(
      updatedOptions.x - widthLeft + base,
      updatedOptions.y + height,
    );
  }
  
  context.closePath();

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
}