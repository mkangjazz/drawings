Canvas.prototype.getPixelCoordinates = function(){
  var canvas = this.canvas;
  var context = this.context;
  
  var textBox = (function(){
    var el = document.createElement('small');
    
    el.innerHTML = `x: <span class="x"></span> | y: <span class="y"></span>`;
    
    return el;
  })();
  
  canvas.parentElement.parentElement.parentElement.appendChild(textBox);

  function handleMouseMove(e){
    var rect = canvas.getBoundingClientRect();
    
    textBox.querySelector('.x').textContent = Math.round(e.clientX - rect.left);
    textBox.querySelector('.y').textContent = Math.round(e.clientY - rect.top);
  }

  function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener(
    'mousemove', 
    handleMouseMove,
    false
  );
};