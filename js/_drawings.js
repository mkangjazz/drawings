var c1 = new Canvas(document.querySelector('canvas'));

c1.setDimensions();

c1.drawGrid({
  strokeStyle: '#fff',
  font: '9px sans-serif',
});

c1.drawRoundedRectangle({
  x: 250,
  y: 100,
  fillStyle: '#333',
  size: 'large',
});

c1.drawCheckmark({
  x: 260,
  y: 114,
  lineWidth: 4,
  size: 'small',
  strokeStyle: 'white',
});

c1.drawBoxes({
  x: 200,
  y: 400,
  size: 'medium',
  fillStyle: 'green',
});

//        ctx.beginPath();
//        var x = 25 + j * 50; // x coordinate
//        var y = 25 + i * 50; // y coordinate
//        var radius = 20; // Arc radius
//        var startAngle = 0; // Starting point on circle
//        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//        var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
//
//        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

c1.drawCross({
  x: 100,
  y: 100,
  lineWidth: 6,
  width: 30,
  height: 30,
});