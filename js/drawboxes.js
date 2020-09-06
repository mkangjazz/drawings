Canvas.prototype.drawBoxes = function(){
  var canvas = this.canvas;
  var context = this.context;
  
  context.save();

  context.fillStyle = '#333';
  context.fillRect(x, y, 100, 100);

  context.fillStyle = '#777777';
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x - 25, y + 5);
  context.lineTo(x - 25, y + 100);
  context.lineTo(x, y + 100);
  context.closePath();

  context.fill();

  context.beginPath();
  context.moveTo(x, y);

  context.lineTo(x + 40, y);
  context.lineTo(x + 20, y + 40);
  context.lineTo(x - 20, y + 40);
  context.closePath();
  context.stroke();

  context.restore();
};
