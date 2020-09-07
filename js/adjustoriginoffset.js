Canvas.prototype.adjustOriginOffset = function(offsetX, offsetY){
  var boundingBoxWidth = 1;
  
  return this.context.translate(1 + offsetX, 1 + offsetY);
};
