Canvas.prototype.drawGrid = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);
  
  function labelAxes(){
    context.save();

    var verticalLineCount = Math.ceil(canvas.width / gridSpacer);
    var measureText = context.measureText('M');

    context.translate(measureText.width / 2, measureText.width * 1.5);
    context.font = updatedOptions.font;
    context.save();
    
    for (var i = 0; i < verticalLineCount; i++){
      context.fillText(i * gridSpacer, 0, 0);
      context.translate(gridSpacer, 0);
    }
    
    context.restore();

    var horizontalLineCount = Math.ceil(canvas.height / gridSpacer);

    for (var i = 0; i < horizontalLineCount; i++){
      context.fillText(i * gridSpacer, 0, 0);
      context.translate(0, gridSpacer);
    }

    context.restore();
  }  
  
  function drawLine(){
    context.strokeStyle = updatedOptions.strokeStyle;
    context.lineWidth = updatedOptions.lineWidth;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(9999, 0);
    context.stroke();
  }

  function drawHorizontalLines(){
    context.save();

    var lineCount = Math.ceil(canvas.height / gridSpacer);

    context.translate(0, updatedOptions.lineWidth);
    
    for(var i = 0; i < lineCount; i++){
      drawLine();
      context.translate(0, gridSpacer);
    }

    context.restore();
  }

  function drawVerticalLines(){
    context.save();

    var verticalLineCount = Math.ceil(canvas.width / gridSpacer);

    context.translate(verticalLineCount * gridSpacer - gridSpacer + updatedOptions.lineWidth, 0);
    
    context.rotate(90 * Math.PI/180);
    
    for(var i = 0; i < verticalLineCount; i++){
      drawLine();
      context.translate(0, gridSpacer);
    }
    
    context.restore();
  }

  var gridSpacer = 50;
  
  drawHorizontalLines();
  drawVerticalLines();
  labelAxes();
  
  context.restore();
};
