Canvas.prototype.updateOptions = function(options){
  function deepCopyOf(obj){
    return JSON.parse(JSON.stringify(obj));
  }

  var o = deepCopyOf(this.defaultOptions);
  
  for (var key in options) {
    if (options.hasOwnProperty(key)){

      Object.defineProperty(o, key, {
        value: options[key],
        enumerable: true,
        writable: true,
      });
    }
  }
  
  return o;
};