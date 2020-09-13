Canvas.prototype.drawRoundedRectangle = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);
  
  function getLength(length){
    return length - (updatedOptions.radius * 2);
  }
  
  function drawTopLine(){
    context.lineTo(
      updatedOptions.x + getLength(updatedOptions.width),
      updatedOptions.y,
    );
  }
  
  function drawTopRightCorner(){
    context.quadraticCurveTo(
      updatedOptions.x + getLength(updatedOptions.width) + updatedOptions.radius,
      updatedOptions.y,
      updatedOptions.x + getLength(updatedOptions.width) + updatedOptions.radius,
      updatedOptions.y + updatedOptions.radius,
      updatedOptions.radius,
    );
  }
  
  function drawRightLine(){
    context.lineTo(
      updatedOptions.x + getLength(updatedOptions.width) + updatedOptions.radius,
      updatedOptions.y + updatedOptions.radius + getLength(updatedOptions.height),
    );
  }
  
  function drawBottomRightCorner(){
    context.arcTo(
      updatedOptions.x + getLength(updatedOptions.width) + updatedOptions.radius,
      updatedOptions.y + updatedOptions.radius + getLength(updatedOptions.height) + updatedOptions.radius,
      updatedOptions.x + getLength(updatedOptions.width),
      updatedOptions.y + updatedOptions.radius + getLength(updatedOptions.height) + updatedOptions.radius,
      updatedOptions.radius,
    );
  }
  
  function drawBottomLine(){
    context.lineTo(
      updatedOptions.x,
      updatedOptions.y + updatedOptions.radius + getLength(updatedOptions.height) + updatedOptions.radius,
    );
  }
  
  function drawBottomLeftCorner(){
    context.arcTo(
      updatedOptions.x - updatedOptions.radius,
      updatedOptions.y + updatedOptions.radius + getLength(updatedOptions.height) + updatedOptions.radius,
      updatedOptions.x - updatedOptions.radius,
      updatedOptions.y + updatedOptions.radius + getLength(updatedOptions.height),
      updatedOptions.radius,
    );
  }
  
  function drawLeftLine(){
    context.lineTo(
      updatedOptions.x - updatedOptions.radius,
      updatedOptions.y + updatedOptions.radius,
    );
  }
  
  function drawUpperLeftCorner(){
    context.arcTo(
      updatedOptions.x - updatedOptions.radius,
      updatedOptions.y,
      updatedOptions.x,
      updatedOptions.y,
      updatedOptions.radius,
    );
  }
  
  context.save();

  this.drawBoundingBox(
    updatedOptions.x,
    updatedOptions.y,
    updatedOptions.width + updatedOptions.lineWidth,
    updatedOptions.height + updatedOptions.lineWidth,
  );

  this.adjustOriginOffset(
    updatedOptions.radius +  updatedOptions.lineWidth / 2,
    updatedOptions.lineWidth / 2,
  );

  context.beginPath();
  context.moveTo(updatedOptions.x, updatedOptions.y);

  drawTopLine();
  drawTopRightCorner();
  drawRightLine();
  drawBottomRightCorner(); 
  drawBottomLine();
  drawBottomLeftCorner();
  drawLeftLine();
  drawUpperLeftCorner();
  
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
