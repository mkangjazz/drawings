Canvas.prototype.conditionallyApplyOptionsToContext = function(options, arr){
  var canvas = this.canvas;
  var context = this.context;

  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];

    if (key in context) {
      context[key] = options[key];
    }
  }

  if (
    arr.indexOf('strokeStyle') !== -1 &&
    options.hasOwnProperty('strokeStyle') ||
    options.hasOwnProperty('lineWidth') !== -1
  ) {
    context.stroke();
  }
  
  if (
    arr.indexOf('fillStyle') !== -1 &&
    options.hasOwnProperty('fillStyle')  
   ) {
    context.fill();
  }
};
