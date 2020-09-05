
//    (function(){
//      var canvas = document.querySelector('canvas');
//      var ctx = canvas.getContext('2d');
//
//
//
//      function drawBackground() {
//        ctx.fillStyle = '#ffffff';
//        ctx.fillRect(0,0,canvas.width, canvas.height);
//      }
//
//      function drawGrid() {
//        function drawLine(){
//          ctx.beginPath();
//          ctx.moveTo(0, 0);
//          ctx.lineTo(canvas.width * 2, 0);
//          ctx.stroke();
//        }
//
//        function drawHorizontalLines(){
//          ctx.save();
//          ctx.strokeStyle = '#dddddd';
//          ctx.strokeWidth = 1;
//
//          var horizontalLineCount = Math.ceil(canvas.height / gridSpacer);
//
//          for(var i = 0; i < horizontalLineCount; i++){
//            ctx.translate(0, gridSpacer);
//            drawLine();
//          }
//
//          ctx.restore();
//        }
//
//        function drawVerticalLines(){
//          ctx.save();
//          ctx.strokeStyle = '#dddddd';
//          ctx.strokeWidth = 1;
//          ctx.translate(canvas.width, 0);
//          ctx.rotate(90 * Math.PI/180);
//
//          var verticalLineCount = Math.ceil(canvas.width / gridSpacer);
//
//          for(var i = 0; i < verticalLineCount; i++){
//            ctx.translate(0, gridSpacer);
//            drawLine();
//          }
//
//          ctx.restore();
//        }
//
//        var gridSpacer = 10;
//
//        drawHorizontalLines();
//        drawVerticalLines();
//      }
//
//      function drawCheckmark(x, y, size){
//        ctx.save();
//
//        var unit = size / 4;
//
//        ctx.translate(x, y);
//
//        ctx.beginPath();
//        ctx.moveTo(0, 0);
//        ctx.lineTo(unit, unit);
//        ctx.lineTo(unit + unit + unit, - unit);
//
//        ctx.lineCap = 'round';
//        ctx.lineJoin = 'round';
//        ctx.lineWidth = size / 8;
//        ctx.stroke();
//        ctx.restore();
//      }
//
//      function drawRoundedRectangle(x, y, width, height, radius){
//        var box = {
//          color: 'gray',
//          width: width,
//          height: height,
//          origin: {
//            x: x,
//            y: y,
//          },
//          radius: radius,
//          points: function(){
//            return {
//              a: {
//                x: this.origin.x,
//                y: this.origin.y,
//              },
//              b: {
//                x: this.origin.x + this.getLengthX(),
//                y: this.origin.y,
//              },
//              c: {
//                x: this.origin.x + this.getLengthX() + this.radius,
//                y: this.origin.y + this.radius,
//              },
//              d: {
//                x: this.origin.x + this.getLengthX() + this.radius,
//                y: this.origin.y + this.radius + this.getLengthY(),
//              },
//              e: {
//                x: this.origin.x + this.getLengthX(),
//                y: this.origin.y + this.radius + this.getLengthY() + this.radius,
//              },
//              f: {
//                x: this.origin.x,
//                y: this.origin.y + this.radius + this.getLengthY() + this.radius,
//              },
//              g: {
//                x: this.origin.x - this.radius,
//                y: this.origin.y + this.radius + this.getLengthY(),
//              },
//              h: {
//                x: this.origin.x - this.radius,
//                y: this.origin.y + this.radius,
//              },
//            };
//          },
//          controlPoints: function(){
//            return {
//              topLeft: {
//                x: this.origin.x - this.radius,
//                y: this.origin.y,
//              },
//              topRight: {
//                x: this.origin.x + this.getLengthX() + this.radius,
//                y: this.origin.y,
//              },
//              bottomRight: {
//                x: this.origin.x + this.getLengthX() + this.radius,
//                y: this.origin.y + this.radius + this.getLengthY() + this.radius,
//              },
//              bottomLeft: {
//                x: this.origin.x - this.radius,
//                y: this.origin.y + this.radius + this.getLengthY() + this.radius,
//              },
//            };
//          },
//          getLengthX: function(){
//            return (this.width - this.radius - this.radius);
//          },
//          getLengthY: function(){
//            return (this.height - this.radius - this.radius);
//          },
//        };
//
//        ctx.save();
//        ctx.translate(box.radius, 0);
//
//        ctx.beginPath();
//        ctx.moveTo(box.points().a.x, box.points().a.y);
//        ctx.lineTo(box.points().b.x, box.points().b.y);
//        ctx.quadraticCurveTo(
//          box.controlPoints().topRight.x,
//          box.controlPoints().topRight.y,
//          box.points().c.x,
//          box.points().c.y,
//        );
//        ctx.lineTo(
//          box.points().d.x,
//          box.points().d.y,
//        );
//        ctx.quadraticCurveTo(
//          box.controlPoints().bottomRight.x,
//          box.controlPoints().bottomRight.y,
//          box.points().e.x,
//          box.points().e.y,
//        );
//        ctx.lineTo(
//          box.points().f.x,
//          box.points().f.y,
//        );
//        ctx.quadraticCurveTo(
//          box.controlPoints().bottomLeft.x,
//          box.controlPoints().bottomLeft.y,
//          box.points().g.x,
//          box.points().g.y,
//        );
//        ctx.lineTo(
//          box.points().h.x,
//          box.points().h.y,
//        );
//        ctx.quadraticCurveTo(
//          box.controlPoints().topLeft.x,
//          box.controlPoints().topLeft.y,
//          box.points().a.x,
//          box.points().a.y,
//        );
//
//        ctx.fillStyle = '#f3f3f3';
//        ctx.fill();
//        ctx.restore();
//      }
//
//      function drawCheckbox(x, y, size) {
//        drawRoundedRectangle(x, y, size, size, size/10);
//        drawCheckmark(x + size/3.25, y + size/2, size/2);
//      }
//
//      function drawBoxes(x, y, size){
//        ctx.save();
//
//        ctx.fillStyle = '#333';
//        ctx.fillRect(x, y, 100, 100);
//
//        ctx.fillStyle = '#777777';
//        ctx.beginPath();
//        ctx.moveTo(x, y);
//        ctx.lineTo(x - 25, y + 5);
//        ctx.lineTo(x - 25, y + 100);
//        ctx.lineTo(x, y + 100);
//        ctx.closePath();
//
//        ctx.fill();
//
//
////        ctx.beginPath();
////        ctx.moveTo(x, y);
////
////        ctx.lineTo(x + 40, y);
////        ctx.lineTo(x + 20, y + 40);
////        ctx.lineTo(x - 20, y + 40);
////        ctx.closePath();
////        ctx.stroke();
//
//        ctx.restore();
//      }
//
////      drawBackground();
////      drawGrid();
////      drawCheckbox(90, 90, 100);
////      drawBoxes(200, 500, 100);
//    }());
