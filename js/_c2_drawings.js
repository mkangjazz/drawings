var c2 = new Canvas(document.getElementById('c2'));

c2.setDimensions();

c2.drawGrid({
  font: '9px sans-serif',
  strokeStyle: '#fff',
});

c2.drawBoxes({
  x: 110,
  y: 25,
  size: 'small',
  fillStyle: 'green',
});
