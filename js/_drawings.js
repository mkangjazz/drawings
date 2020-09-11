var c1 = new Canvas(document.querySelector('canvas'));

c1.setDimensions();

c1.drawGrid({
  strokeStyle: '#fff',
  font: '9px sans-serif',
});

c1.drawRoundedRectangle({
  x: 250,
  y: 100,
  fillStyle: 'lightgray',
  width: 80,
  height: 80,
});

c1.drawCheckmark({
  x: 278,
  y: 130,
  lineWidth: 4,
  strokeStyle: 'blue',
  width: 24,
});

c1.drawBoxes({
  x: 200,
  y: 400,
  size: 'medium',
  fillStyle: 'green',
});

c1.drawEllipse({
  x: 100,
  y: 100,
  size: 'large',
  fillStyle: 'purple',
  // how to adjust for ellipse... squish how?
  // according to height and width?
});

c1.drawCross({
  x: 108,
  y: 108,
  strokeStyle: 'white',
  lineWidth: 4,
  width: 20,
  height: 20,
  // rotate: 45 build this into API too
});

c1.drawRoundedRectangle({
  x: 150,
  y: 50,
  fillStyle: 'lightblue',
  lineWidth: 8,
  strokeStyle: 'pink'
});

c1.drawRoundedRectangle({
  x: 162,
  y: 60,
  lineWidth: 4,
  strokeStyle: 'white',
  width: 20,
  height: 20,
  radius: 6,
});

c1.drawAngleBracket({
  x: 100,
  y: 25,
  lineWidth: 5,
  strokeStyle: 'green',
  width: 30,
});

c1.drawRoundedRectangle({
  x: 250,
  y: 50,
  fillStyle: '#eee',
  lineWidth: 1,
  radius: 0,
  strokeStyle: 'transparent',
  width: 80,
});

c1.drawEllipse({
  x: 283 - 20,
  y: 65,
  height: 10,
  width: 10,
});

c1.drawEllipse({
  x: 283,
  y: 65,
  height: 10,
  width: 10,
});

c1.drawEllipse({
  x: 283 + 20,
  y: 65,
  height: 10,
  width: 10,
});

c1.drawEllipse({
  x: 350,
  y: 50,
  height: 60,
  width: 30,
});

c1.drawEllipse({
  x: 400,
  y: 50,
  height: 30,
  width: 60,
  strokeStyle: 'teal',
  lineWidth: 4,
});

