Canvas.prototype.drawCross = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  var size = this.getSizes(updatedOptions.size); // size only works for square...
  var width = updatedOptions.width ? updatedOptions.width : size;
  var height = updatedOptions.height ? updatedOptions.height : size;

  this.drawBoundingBox(
    updatedOptions.x,
    updatedOptions.y,
    height + updatedOptions.lineWidth,
    width + updatedOptions.lineWidth,
  );

  this.adjustOriginOffset(
    updatedOptions.lineWidth / 2,
    height / 2 + updatedOptions.lineWidth / 2
  );
  
  function drawLine(len){
    context.save();

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(len, 0);

    context.strokeStyle = updatedOptions.strokeStyle;
    context.lineCap = updatedOptions.lineCap;
    context.lineJoin = updatedOptions.lineJoin;

    // this cascading logic is also screwy
    context.lineWidth = updatedOptions.lineWidth ? updatedOptions.lineWidth : size / 4;
    context.stroke();
    
    context.restore();
  }
  
  function drawHorizontalLine(){
    context.save();
    
    context.translate(updatedOptions.x, updatedOptions.y);
    drawLine(width);

    context.restore();
  }
  
  function drawVerticalLine(){
    context.save();

    context.translate(updatedOptions.x + width /2, updatedOptions.y - height / 2);
    context.rotate(90 * Math.PI / 180);

    drawLine(height);
    
    context.restore();
  }

  drawHorizontalLine();
  drawVerticalLine();
};
