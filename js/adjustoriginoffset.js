Canvas.prototype.adjustOriginOffset = function(offsetX, offsetY){
  var boundingBoxWidth = 0;
  
  return this.context.translate(boundingBoxWidth + offsetX, boundingBoxWidth + offsetY);
};
