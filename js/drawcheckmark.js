Canvas.prototype.drawCheckmark = function(options){
  var canvas = this.canvas;
  var context = this.context;
  var updatedOptions = this.updateOptions(options);

  context.save();

  var size = this.getSizes(updatedOptions.size);
  var unit = size / 4;

  this.context.translate(
    updatedOptions.x,
    updatedOptions.y
  );

  this.context.beginPath();
  this.context.moveTo(0, 0);
  this.context.lineTo(unit, unit);
  this.context.lineTo(unit + unit + unit, - unit);

  this.context.lineCap = updatedOptions.lineCap;
  this.context.lineJoin = updatedOptions.lineJoin;
  this.context.lineWidth = updatedOptions.lineWidth;

  this.context.stroke();

  this.context.restore();
};
