Canvas.prototype.getModifiedColor = function(color, index){
  function getComputedColor(color){
    var div = document.createElement('div');

    div.style.color = color;

    document.body.appendChild(div);

    var computedColor = window.getComputedStyle(div).color;

    div.parentNode.removeChild(div);

    return computedColor;
  }

  function modifyRGB(str){
    function calcByIndex(num){
      if (!index) {
        return num;
      }

      var highestIndex = 1;
      var modifiedIndex = Math.abs(index) > highestIndex ? highestIndex: Math.abs(index);
      
      if (index > 0) {
        return num = 0 ? 0 : Math.floor(num + (255 - num) * modifiedIndex);
      } else {
        return Math.ceil(num * 1 - modifiedIndex);
      }
    }
    
    var rgb = str;

    rgb = str.replace(/\s/g, '');
    rgb = str.replace('rgb', '');
    rgb = rgb.replace(/[\(]|[\)]/g, '');
    
    rgb = rgb.split(',');
    
    for (var i = 0; i < rgb.length; i++) {
      rgb[i] = calcByIndex(rgb[i]) > 255 ? 255 : calcByIndex(rgb[i]);
    }
    
    rgb = 'rgb(' + rgb.join(',') + ')';

    return rgb;
  }
  
  var computedColor = getComputedColor(color);
  var modifiedColor = modifyRGB(computedColor);

  return modifiedColor;
};