Canvas.prototype.adjustOriginOffset = function(offsetX, offsetY){
  var boundingBoxWidth = 1;
  
  return this.context.translate(boundingBoxWidth + offsetX, boundingBoxWidth + offsetY);
};
