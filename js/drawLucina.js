Canvas.prototype.drawLucina = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var image = new Image(300, 200);

  image.src = './img/lucina.jpg';

  image.addEventListener('load', function(e){
    function drawHair(){
      // create offscreenCanvas to use and mirror on our normal canvas
    }
    
    function hair(){
      context.save();
      
      context.beginPath();
      
      function leftShape(){
        context.moveTo(200, 222);
        context.bezierCurveTo(
          200, 222,
          176, 220,
          176, 217,
        );
        context.lineTo(153, 220);
        context.bezierCurveTo(
          140, 229,
          125, 230,
          117, 227,
        );
        context.bezierCurveTo(
          117, 227,
          140, 210,
          140, 180,
        );
        context.bezierCurveTo(
          139, 140,
          139, 140,
          139, 140,
        );
        context.bezierCurveTo(
          140, 71,
          188, 71,
          188, 71,
        );
        context.lineTo(
          189, 73,
        );
        context.bezierCurveTo(
          200, 72,
          200, 72,
          200, 73,
        );  
      }
      
      leftShape();
    
      context.translate(400, 0);
      context.scale(-1, 1);

      leftShape();
      
      context.closePath();
      
      context.fillStyle = 'rgba(255,0,0,.5)';
      context.fill();
      context.restore();
    }
    
    context.drawImage(image, 50, 50);
    hair();

  });
  
  context.restore();
};
