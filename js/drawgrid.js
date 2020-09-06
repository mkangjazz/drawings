Canvas.prototype.drawGrid = function(options){
  var canvas = this.canvas;
  var ctx = this.context;
  var updatedOptions = this.updateOptions(options);
  
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

    ctx.translate(0, updatedOptions.lineWidth);
    
    for(var i = 0; i < lineCount; i++){
      drawLine();
      ctx.translate(0, gridSpacer);
    }

    ctx.restore();
  }

  function drawVerticalLines(){
    ctx.save();

    var verticalLineCount = Math.ceil(canvas.width / gridSpacer);

    ctx.translate(verticalLineCount * gridSpacer - gridSpacer + updatedOptions.lineWidth, 0);
    
    ctx.rotate(90 * Math.PI/180);
    
    for(var i = 0; i < verticalLineCount; i++){
      drawLine();
      ctx.translate(0, gridSpacer);
    }
    
    ctx.restore();
  }

  var gridSpacer = 50;

  drawHorizontalLines();
  drawVerticalLines();
};
