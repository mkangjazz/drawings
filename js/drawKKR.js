Canvas.prototype.drawKKR = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var image = new Image(300, 200);

  image.src = './img/kkr.jpg';

  image.addEventListener('load', function(e){
    var green = 'green';
    var yellow = 'gold';
    var black = '#000000';
    var white = '#ffffff';
    
    function skin(){
      context.beginPath();
      context.moveTo(381, 116);
      context.lineTo(373, 123);
      context.lineTo(363, 138);
      context.lineTo(338, 145);
      context.lineTo(332, 156);
      context.lineTo(331, 176);
      context.lineTo(346, 198);
      context.lineTo(368, 212);
      context.lineTo(382, 220);
      context.lineTo(390, 232);
      context.lineTo(399, 234);
      
      context.lineTo(412, 233);
      
      context.lineTo(419, 221);
      context.lineTo(445, 207);
      context.lineTo(465, 187);
      context.lineTo(472, 167);
      context.lineTo(469, 151);
      context.lineTo(453, 139);
      context.lineTo(442, 138);
      context.lineTo(443, 117);
      context.lineTo(434, 103);
      context.lineTo(423, 98);
      context.bezierCurveTo(
        413, 102,
        403, 112,
        403, 112,
      );
      context.bezierCurveTo(
        395, 112,
        381, 116,
        381, 116,
      );

      context.closePath();

      context.fillStyle = green;
      context.fill();
    }
    
    function outline(){
      context.beginPath();
      context.moveTo(382, 114);
      context.bezierCurveTo(
        379, 114,
        372, 122,
        372, 122,
      );
      context.bezierCurveTo(
        360, 147,
        348, 140,
        348, 141,
      );
      context.bezierCurveTo(
        331, 141,
        331, 159,
        330, 159,
      );
      context.bezierCurveTo(
        326, 200,
        380, 220,
        380, 220,
      );
      
      context.bezierCurveTo(
        390, 236,
        400, 236,
        400, 236,
      );

      context.bezierCurveTo(
        415, 236,
        420, 220,
        420, 220,
      );
      context.bezierCurveTo(
        441, 215,
        473, 187,
        473, 166,
      );
      context.bezierCurveTo(
        473, 145,
        460, 140,
        441, 137,
      );
      context.bezierCurveTo(
        450, 125,
        440, 95,
        421, 98,
      );
      
      context.lineJoin = 'round';
      context.lineWidth = '4';
      context.strokeStyle = black;
      context.stroke();
    }
    
    function mouth(){
      function left(){
        context.beginPath();
        context.moveTo(400, 224);
        context.bezierCurveTo(
          396, 224,
          392, 219,
          392, 219,
        );
        context.bezierCurveTo(
          380, 195,
          373, 189,
          373, 189,
        );
        context.bezierCurveTo(
          374, 189,
          358, 178,
          358, 178,
        );
        context.bezierCurveTo(
          351, 170,
          354, 170,
          354, 170,
        );
        context.bezierCurveTo(
          358, 178,
          366, 178,
          366, 178,
        );
        context.bezierCurveTo(
          370, 178,
          382, 176,
          382, 176,
        );
        context.bezierCurveTo(
          390, 183,
          400, 183,
          400, 183,
        );
        
        context.fillStyle = black;
        context.fill();
      }
      
      context.save();
      
      left();
      
      context.translate(800, 0);
      context.scale(-1, 1);
      
      left();
      
      context.restore();
    }
    
    function teeth(){
      function tooth() {
        context.beginPath();
        context.moveTo(380, 191);
        context.lineTo(374, 178);
        context.arcTo(380, 175, 385, 178, 13);
        context.closePath();

        context.fillStyle = white;
        context.fill();
      }      

      tooth();
      
      context.save();
      context.translate(802, 0);
      context.scale(-1, 1);
      
      tooth();
      
      context.restore();
    }
    
    function crown(){
      function circle(x, y){
        context.arc(x, y, 5, 0, 2 * Math.PI);
      }

      function crownBody(){
        context.moveTo(384, 117);
        context.lineTo(384, 77);
        context.lineTo(387, 77);
        context.quadraticCurveTo(
          387, 98,
          397, 98,
        );
        context.quadraticCurveTo(
          399, 98,
          400, 77,
        );
        context.lineTo(403, 77);
        context.quadraticCurveTo(
          404, 98,
          410, 98,
        );
        context.quadraticCurveTo(
          416, 98,
          416, 77,
        );
        context.lineTo(420, 77);
        context.lineTo(420, 117);
      }

      context.save();
      
      context.beginPath();

      circle(385, 74);
      circle(401, 74);
      circle(418, 74);

      crownBody();
      
      context.lineWidth = '8';
      context.strokeStyle = black;
      context.stroke();
      context.fillStyle = yellow;
      context.fill();

      context.restore();
    }
    
    context.save();

    setTimeout(function(){
      var i = 250;

      setTimeout(crown, i * 1);
      setTimeout(skin, i * 2);
      setTimeout(mouth, i * 3);
      setTimeout(teeth, i * 4);
      setTimeout(outline, i * 5);      
    }, 750);
    
    context.restore();
  });
};
