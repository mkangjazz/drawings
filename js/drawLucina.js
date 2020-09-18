Canvas.prototype.drawLucina = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var image = new Image(300, 200);

  image.src = './img/lucina.jpg';

  image.addEventListener('load', function(e){
    function silhouetteOutline(strokeOrFill){
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
        context.lineTo(140, 158);
        context.bezierCurveTo(
          131, 158,
          131, 157,
          131, 157,
        );        
        context.bezierCurveTo(
          140, 150,
          140, 150,
          140, 150, 
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
        context.lineTo(
          200, 73
        );
      }
      context.save();

      context.beginPath();
      
      leftShape();
    
      context.translate(400, 0);
      context.scale(-1, 1);

      leftShape();

      if (strokeOrFill === 'stroke'){
        context.strokeStyle = '#000000';
        context.lineWidth = 4;
        context.lineJoin = 'round';
        context.stroke();
        
      } else {
        context.fillStyle = 'rgba(0, 0, 90, 1)';
        context.fill();
      }

      context.restore();
    }
    
    function hairForeground(){
      function leftBangs(){
        context.moveTo(200, 72);
        context.bezierCurveTo(
          128, 88,
          144, 148,
          144, 148,
        );
        context.bezierCurveTo(
          135, 156,
          135, 156,
          135, 156,
        );
        context.bezierCurveTo(
          140, 156,
          150, 149,
          150, 149,
        );
        context.bezierCurveTo(
          149, 160,
          167, 206,
          167, 206,
        );
        context.bezierCurveTo(
          167, 206,
          163, 180,
          163, 139,
        );
        context.bezierCurveTo(
          169, 139,
          177, 119,
          177, 119,
        );
        context.bezierCurveTo(
          177, 135,
          200, 149,
          200, 149,
        );
        
        context.save();

        context.fillStyle = '#2c3a77';
        context.fill();
        
        context.restore();
      }
      
      function bangDetail(){
        context.save();

        context.beginPath();
        context.moveTo(204, 155);
        context.bezierCurveTo(
          177, 150,
          177, 118,
          177, 118,
        );
        context.bezierCurveTo(
          205, 139,
          205, 139,
          205, 139,
        );
        context.bezierCurveTo(
          200, 150,
          204, 155,
          204, 155,
        );

        context.closePath();

        context.fillStyle = '#2c3a77';
        context.fill();
        
        context.restore();
      }
      
      context.save();

      context.beginPath();
      
      leftBangs();

      context.translate(400, 0);
      context.scale(-1, 1);
      
      leftBangs();

      context.closePath();

      context.restore();

      bangDetail();
    }
    
    function faceAndEars(){
      function left(){
        context.moveTo(200, 203);
        context.bezierCurveTo(
          180, 203,
          159, 174,
          159, 174,
        );
        context.lineTo(156, 176);
        context.bezierCurveTo(
          146, 174,
          141, 153,
          141, 153,
        );
        context.bezierCurveTo(
          200, 95,
          200, 95,
          200, 95,
        );
        
        context.save();

        context.fillStyle = '#f0d6bf';
        context.fill();
        
        context.restore();
      }
      
      context.save();
      
      context.beginPath();

      left();
      
      context.translate(400, 0);
      context.scale(-1, 1);

      left();

      context.closePath();
      
      context.restore();
    }
    
    function eyebrows(){
      function left(){
        context.beginPath();
        context.moveTo(200, 143);
        context.arcTo(175, 136, 130, 143, 50);
        context.moveTo(200, 143);
        context.arcTo(165, 135, 140, 143, 60);
        context.strokeStyle = '#1b1433';
        context.stroke();
      }
      
      context.save();
      
      context.beginPath();
      
      left();
      
      context.translate(400, 0);
      context.scale(-1, 1);
      
      left();
      
      context.closePath();
      
      context.restore();
    }
    
    function tiara(){
      function leftShape(){
        context.moveTo(200, 90);
        context.bezierCurveTo(
          160, 90,
          151, 105,
          151, 105,
        );
        context.bezierCurveTo(
          151, 85,
          185, 74,
          185, 74,
        );
        context.bezierCurveTo(
          185, 81,
          200, 81,
          200, 81,
        );
      }

      context.save();
      
      context.beginPath();

      leftShape();
      
      context.translate(400, 0);
      context.scale(-1, 1);
      
      leftShape();
      
      context.fillStyle = '#bab630';
      context.fill();
      
      context.restore();
    }
    
    function hairSides(){      
      function left(){
        context.moveTo(200, 150);
        context.lineTo(142, 150);
        context.bezierCurveTo(
          142, 220,
          122, 225,
          122, 225,
        );
        context.bezierCurveTo(
          158, 220,
          161, 200,
          161, 183,
        );

        context.lineTo(160, 163);
        context.lineTo(200, 163);
        
        context.fillStyle = '#2c3a77';
        context.fill();
      }
      
      context.save();

      context.beginPath();

      left();
      
      context.translate(400, 0);
      context.scale(-1, 1);
      
      left();

      context.closePath();
      
      context.restore();
    }
    
    function necklace(){      
      function leftShape(){
        context.moveTo(200, 214);
        context.bezierCurveTo(
          173, 214,
          169, 204,
          169, 204,
        );
        context.bezierCurveTo(
          169, 218,
          200, 218,
          200, 218,
        );

        context.fillStyle = '#bab630';
        context.fill();
      }
      
      context.save();
      
      context.beginPath();

      leftShape();
      
      context.translate(400, 0);
      context.scale(-1, 1);
      
      leftShape();
      
      context.closePath();
      
      context.restore();
    }
    

    var i = 250;

    setTimeout(function(){
     silhouetteOutline('fill'); 
    }, i * 1);

    setTimeout(hairSides, i * 2);

    setTimeout(faceAndEars, i * 3);

    setTimeout(eyebrows, i * 4);

    setTimeout(necklace, i * 5);

    setTimeout(hairForeground, i * 6);

    setTimeout(tiara, i * 7);

    setTimeout(function(){
     silhouetteOutline('stroke'); 
    }, i * 8);
  });
  
  context.restore();
};
