Canvas.prototype.drawBoxes = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);
  
  var size = this.getSizes(updatedOptions.size);
  var mediumSize = size * 2;
  var largeSize = size * 4;

  function drawTopBox(){
    context.save();
    context.translate(updatedOptions.x, updatedOptions.y);

    context.fillStyle = updatedOptions.fillStyle;
    context.fillRect(0, 0, size, size);

    // function to calculate a shade/tint of a color?
    context.fillStyle = '#777777';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0 - size/4, 0 + size/4);
    context.lineTo(0 - size/4, 0 + size);
    context.lineTo(0, 0 + size);
    context.closePath();
    context.fill();
    
    context.restore();
  }
  
  function drawMiddleBox(){
    context.save();
    context.translate(updatedOptions.x - 2 * size / 3, updatedOptions.y + size);

    context.fillStyle = '#000';
    context.fillRect(0, 0, mediumSize, mediumSize);

    context.fillStyle = '#777777';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0 - mediumSize / 4, mediumSize / 4);
    context.lineTo(0 - mediumSize / 4, mediumSize);
    context.lineTo(0, mediumSize);
    context.closePath();
    context.fill();

    context.fillStyle = '#000';
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0 - mediumSize / 12 * 3, 0);
    context.lineTo(0 - mediumSize / 12 * 4, mediumSize / 4);
    context.lineTo(0 - mediumSize / 12 * 1, mediumSize / 4);
    context.fill();
    
    context.fillStyle = '#777';
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0 + mediumSize, 0);
    context.lineTo(0 + mediumSize + mediumSize / 12, mediumSize / 4);
    context.lineTo(0 + mediumSize / 12 * 1, mediumSize / 4);
    context.closePath();
    context.fill();
    
    context.restore();
  }
  
  function drawBottomBox() {
    context.save();

    context.translate(
      updatedOptions.x - largeSize / 2,
      updatedOptions.y + size + mediumSize
    );

    context.fillRect(0, 0, largeSize, largeSize);
    
    context.fillStyle = '#777';
    context.fillRect(largeSize / 2 - mediumSize / 4, 0, mediumSize / 2, mediumSize / 3);
    context.fillRect(largeSize / 2 - mediumSize / 4, largeSize - mediumSize / 3, mediumSize / 2, mediumSize / 3);

    context.restore();
  }

  drawTopBox();

  drawMiddleBox();

  drawBottomBox();
};