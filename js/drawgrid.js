Canvas.prototype.drawGrid = function(){
  var canvas = this.canvas;
  var ctx = this.context;

  function drawLine(){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width * 2, 0);
    ctx.stroke();
  }

  function drawHorizontalLines(){
    ctx.save();
    ctx.strokeStyle = '#dddddd';
    ctx.strokeWidth = 1;

    var horizontalLineCount = Math.ceil(canvas.height / gridSpacer);

    for(var i = 0; i < horizontalLineCount; i++){
      ctx.translate(0, gridSpacer);
      drawLine();
    }

    ctx.restore();
  }

  function drawVerticalLines(){
    ctx.save();
    ctx.strokeStyle = '#dddddd';
    ctx.strokeWidth = 1;
    ctx.translate(canvas.width, 0);
    ctx.rotate(90 * Math.PI/180);

    var verticalLineCount = Math.ceil(canvas.width / gridSpacer);

    for(var i = 0; i < verticalLineCount; i++){
      ctx.translate(0, gridSpacer);
      drawLine();
    }

    ctx.restore();
  }

  var gridSpacer = 10;

  drawHorizontalLines();
  drawVerticalLines();
};
