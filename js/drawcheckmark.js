Canvas.prototype.drawCheckmark = function(){
  function drawCheckmark(x, y, size){
    ctx.save();

    var unit = size / 4;

    ctx.translate(x, y);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(unit, unit);
    ctx.lineTo(unit + unit + unit, - unit);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = size / 8;
    ctx.stroke();
    ctx.restore();
  }
};
