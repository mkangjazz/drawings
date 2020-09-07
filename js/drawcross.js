Canvas.prototype.drawCross = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  var width = updatedOptions.width;
  var height = updatedOptions.height;

  context.save();
  
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

    context.lineWidth = updatedOptions.lineWidth;
    
    if (updatedOptions.fillStyle) {
      context.fillStyle = updatedOptions.fillStyle;
      context.fill();
    }

    if (updatedOptions.strokeStyle) {
        context.stroke();   
    }
    
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

  context.restore();
};
