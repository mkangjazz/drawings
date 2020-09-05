Canvas.prototype.setDimensions = function(canvas, ctx){
  var canvas = this.canvas;
  var ctx = this.context;

  var devicePixelRatio = window.devicePixelRatio;
  var initialWidth = canvas.clientWidth;
  var initialHeight = canvas.clientHeight;

  canvas.width = Math.floor(initialWidth * devicePixelRatio);
  canvas.height = Math.floor(initialHeight * devicePixelRatio);
  ctx.scale(devicePixelRatio, devicePixelRatio);
};
