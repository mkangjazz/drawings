var c3 = new Canvas(document.getElementById('c3'));

c3.setDimensions();

c3.getPixelCoordinates();

c3.drawGrid({
  font: '9px sans-serif',
  strokeStyle: '#fff',
});

c3.drawBoxes({
  x: 110,
  y: 25,
  size: 'small',
  fillStyle: 'green',
});
