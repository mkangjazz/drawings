Canvas.prototype.drawRoundedRectangle = function(){
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
};
