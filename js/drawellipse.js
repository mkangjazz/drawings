Canvas.prototype.drawEllipse = function(options){
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
    updatedOptions.lineWidth,
    height / 2 + updatedOptions.lineWidth
  );

  function drawEllipse() {
    context.save();

    context.translate(
      updatedOptions.x + 20,
      updatedOptions.y
    );

    context.moveTo(0,0);
    
    context.beginPath();
    context.arc(0, 0, 20, 0, 2 * Math.PI, false);

    // width and height aren't equal
    if (true) {
      console.log('transform this');
    }    

    // applyContextStyles to conditionally check for attrs?
    // and then apply them
    if (updatedOptions.fillStyle) {
      context.fillStyle = updatedOptions.fillStyle;
      context.fill();
    }

    if (updatedOptions.strokeStyle) {
        context.stroke();   
    }

    context.restore();
  }

  drawEllipse();
  
  context.restore();
};
