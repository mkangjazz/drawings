Canvas.prototype.drawBoxes = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);
  
  var size = this.getSizes(updatedOptions.size);
  var mediumSize = size * 2;
  var largeSize = size * 4;

  function drawTopBox(){
    function drawLeftSide(){
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0 - size/12 * 3, 0 + size/12);
      context.lineTo(0 - size/12 * 3, 0 + size);
      context.lineTo(0, 0 + size);
      context.closePath();
      context.fill();
    }

    function drawRightSide(){
       context.fillRect(0, 0, size, size); 
    }

    context.save();
    context.translate(updatedOptions.x, updatedOptions.y);
    context.fillStyle = updatedOptions.fillStyle;
    
    drawRightSide();
    drawLeftSide();

    context.fillStyle = 'rgba(255, 255, 255, .25)';

    drawLeftSide();

    context.restore();
  }
  
  function drawMiddleBox(){
    function drawRightSide(){
      context.fillRect(0, 0, mediumSize, mediumSize);
    }

    function drawLeftSide(){
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0 - mediumSize / 4, mediumSize / 4);
      context.lineTo(0 - mediumSize / 4, mediumSize);
      context.lineTo(0, mediumSize);
      context.closePath();
      context.fill();
    }
    
    function drawLeftTop(){
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(0 - mediumSize / 12 * 3, 0);
      context.lineTo(0 - mediumSize / 12 * 4, mediumSize / 4);
      context.lineTo(0 - mediumSize / 12 * 1, mediumSize / 4);
      context.fill();  
    }
    
    function drawRightTop(){
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(0 + mediumSize, 0);
      context.lineTo(0 + mediumSize + mediumSize / 12, mediumSize / 4);
      context.lineTo(0 + mediumSize / 12 * 1, mediumSize / 4);
      context.closePath();
      context.fill();
    }

    context.save();
    context.translate(updatedOptions.x - 2 * size / 3, updatedOptions.y + size);

    context.fillStyle = updatedOptions.fillStyle;

    drawLeftSide();
    drawRightSide();

    context.fillStyle = 'rgba(255, 255, 255, .5)';
    drawRightSide();
    
    context.fillStyle = 'rgba(255, 255, 255, .75)';
    drawLeftSide();
    
    context.fillStyle = updatedOptions.fillStyle;
    drawLeftTop();
    drawRightTop();
    
    context.fillStyle = 'rgba(255,255,255,.75)';
    drawRightTop();
    
    context.fillStyle = 'rgba(255, 255, 255, .5)';
    drawLeftTop();
    
    context.restore();
  }
  
  function drawBottomBox() {
    context.save();

    context.translate(
      updatedOptions.x - largeSize / 2,
      updatedOptions.y + size + mediumSize
    );

    function drawBigBox(){
      context.fillRect(0, 0, largeSize, largeSize);      
    }

    function drawSmallBoxes(){
      context.fillRect(largeSize / 2 - mediumSize / 4, 0, mediumSize / 2, mediumSize / 3);
      context.fillRect(largeSize / 2 - mediumSize / 4, largeSize - mediumSize / 3, mediumSize / 2, mediumSize / 3);
    }
    
    context.fillStyle = updatedOptions.fillStyle;
    drawBigBox();
    drawSmallBoxes();

    context.fillStyle = 'rgba(255, 255, 255, .75)';
    drawSmallBoxes();
    
    context.restore();
  }

  drawTopBox.call(this);

  drawMiddleBox();

  drawBottomBox();
};