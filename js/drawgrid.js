Canvas.prototype.drawGrid = function(options){
  var canvas = this.canvas;
  var ctx = this.context;
  var updatedOptions = this.updateOptions(options);
  var getPixels = this.getPixels;
  
  function drawLine(){
    ctx.strokeStyle = updatedOptions.strokeStyle;
    ctx.lineWidth = updatedOptions.lineWidth;
    
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(9999, 0);
    ctx.stroke();
  }

  function drawHorizontalLines(){
    ctx.save();

    var lineCount = Math.ceil(canvas.height / gridSpacer);

    for(var i = 0; i < lineCount; i++){
      ctx.translate(0, gridSpacer);
      drawLine();
    }

    ctx.restore();
  }

  function drawVerticalLines(){
    ctx.save();

    var verticalLineCount = Math.ceil(canvas.width / gridSpacer);

    ctx.translate(verticalLineCount * gridSpacer + updatedOptions.lineWidth, 0);
    
    ctx.rotate(90 * Math.PI/180);
    
    for(var i = 0; i < verticalLineCount; i++){
      ctx.translate(0, gridSpacer);
      drawLine();
    }
  }

  var gridSpacer = 50;

  drawHorizontalLines();
  drawVerticalLines();
};
