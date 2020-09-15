Canvas.prototype.drawLucina = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var image = new Image(300, 200);

  image.src = './img/lucina.jpg';

  image.addEventListener('load', function(e){
    context.drawImage(image, 50, 50);
    
    context.beginPath();
    context.moveTo(200, 0);
    context.lineTo(200, canvas.height);
    context.closePath();
    context.strokeStyle = 'rgba(255, 255, 255, .5)';
    context.stroke();


    context.fillStyle = 'magenta';

    context.fillRect(199, 72, 2, 2);

// need a function that returns the X, Y coordinates of a pixel
// for mousehover

//    context.fillRect(199, 72, 2, 2);
//    context.beginPath();
//    context.moveTo(200, 72);
//    context.
//    context.stroke();
    
    
  });
  
  context.restore();
};
