var c1 = new Canvas(document.querySelector('canvas'));

c1.setDimensions();

c1.getPixelCoordinates();

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

c1.drawEllipse({
  x: 204,
  y: 50,
  size: 'large',
  fillStyle: 'purple',
});

c1.drawCross({
  x: 212,
  y: 58,
  strokeStyle: 'white',
  lineWidth: 4,
  width: 20,
  height: 20,
});

c1.drawRoundedRectangle({
  x: 150,
  y: 50,
  fillStyle: 'lightblue',
  lineWidth: 8,
  strokeStyle: 'pink'
});

c1.drawRoundedRectangle({
  x: 161,
  y: 61,
  lineWidth: 4,
  strokeStyle: 'white',
  width: 20,
  height: 20,
  radius: 6,
});

c1.drawAngleBracket({
  x: 300,
  y: 0,
  lineWidth: 5,
  strokeStyle: 'green',
  width: 30,
});

c1.drawAngleBracket({
  x: 300,
  y: 20,
  lineWidth: 1,
  strokeStyle: 'rgba(100, 0, 100, .8)',
  width: 15,
});

c1.drawAngleBracket({
  x: 320,
  y: 20,
  lineWidth: 3,
  strokeStyle: 'rgba(100, 0, 100, .8)',
  width: 15,
});

c1.context.save();
c1.context.translate(280, 0);
c1.context.rotate(90 * Math.PI / 180);
c1.drawAngleBracket({
  x: 0,
  y: 0,
  lineWidth: 4,
  strokeStyle: 'green',
  width: 15,
});
c1.context.restore();

c1.context.save();
c1.context.translate(280, 40);
c1.context.rotate(180 * Math.PI / 180);
c1.drawAngleBracket({
  x: 0,
  y: 0,
  lineWidth: 3,
  strokeStyle: 'green',
  width: 20,
});
c1.context.restore();

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
  y: 0,
  height: 60,
  width: 30,
});

c1.drawEllipse({
  x: 400,
  y: 0,
  height: 30,
  width: 60,
  strokeStyle: 'teal',
  lineWidth: 4,
});

c1.drawRoundedRectangle({
  x: 350,
  y: 75,
  fillStyle: 'purple',
  radius: 10,
  width: 100,
  height: 40,
  lineWidth: 0,
  strokeStyle: 'rgba(0,0,0,0)',
});

c1.drawRoundedRectangle({
  x: 350,
  y: 75,
  fillStyle: (function(){
    var gradient = c1.context.createLinearGradient(350, 0, 450, 0);

    gradient.addColorStop(0, 'rgba(255, 255, 255, .125)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, .85)');

    return gradient;
  })(),
  strokeStyle: 'rgba(0,0,0,0)',
  lineWidth: 0,
  radius: 4,
  width: 100,
  height: 40,
});

c1.drawRoundedRectangle({
  x: 430,
  y: 80,
  fillStyle: 'rgba(0, 0, 0, .25)',
  radius: 5,
  width: 10,
  height: 30,
  lineWidth: 0,
  strokeStyle: 'rgba(0,0,0,0)',
});

c1.drawTriangle({
  x: 0,
  y: 0,
  angle: 90,
  base: 30,
  height: 40,
  fillStyle: 'red',
});

c1.drawTriangle({
  x: 50,
  y: 0,
  angle: 90,
  base: 40,
  height: 40,
  fillStyle: 'red',
});

c1.drawTriangle({
  x: 72,
  y: 50,
  angle: 80,
  base: 70,
  height: 40,
  fillStyle: 'blue',
});

c1.drawTriangle({
  x: 15,
  y: 50,
  angle: 60,
  base: 50,
  height: 40,
  fillStyle: 'blue',
});

c1.drawTriangle({
  base: 60,
  x: 100,
  y: 0,
  angle: 125,
  base: 60,
  height : 40,
  fillStyle: 'green',
});

c1.drawTriangle({
  x: 175,
  y: 0,
  angle: 110,
  base: 60,
  height : 40,
  fillStyle: 'green',
});

for (var i = 0; i < 12; i++) {
  c1.context.save();
  c1.context.translate(60, 160);
  c1.context.rotate(i * 30 * Math.PI / 180);
  c1.drawTriangle({
    x: 0,
    y: 0,
    angle: 60,
    base: 45,
    height: 45,
    fillStyle: 'rgba(100, 0, 100, ' + i/12 + ')',
  });
  c1.context.restore();
}

for (var i = 0; i < 12; i++) {
  c1.context.save();
  c1.context.translate(180, 160);
  c1.context.rotate(i * 30 * Math.PI / 180);
  c1.drawEllipse({
    x: 0,
    y: 0,
    fillStyle: 'rgba(0, 100, 100, ' + i/12 + ')',
  });
  c1.context.restore();
}

c1.drawRoundedRectangle({
  x: 350,
  y: 150,
  fillStyle: 'white',
  height: 30,
  width: 100,
  radius: 15,
});

c1.drawRoundedRectangle({
  x: 359,
  y: 158,
  fillStyle: 'blue',
  height: 12,
  width: 80,
  radius: 6,
});

c1.drawRoundedRectangle({
  x: 350,
  y: 200,
  fillStyle: (function(){
    var gradient = c1.context.createLinearGradient(350, 200, 450, 200);

    gradient.addColorStop(0, 'rgba(255, 255, 255, .95)');
    gradient.addColorStop(1, 'rgba(0, 0, 255, .85)');

    return gradient;
  })(),
  strokeStyle: 'transparent',
  lineWidth: 2,
  height: 30,
  width: 100,
  radius: 15,
});

c1.context.save();
c1.context.beginPath();
c1.context.moveTo(420, 200);
c1.context.lineTo(420, 230);
c1.context.lineTo(375, 230);
c1.context.lineTo(375, 300);
c1.context.lineTo(500, 300);
c1.context.lineTo(500, 200);
c1.context.closePath();
c1.context.clip();
c1.drawRoundedRectangle({
  x: 350,
  y: 200,
  fillStyle: 'transparent',
  strokeStyle: 'magenta',
  lineWidth: 2,
  height: 30,
  width: 100,
  radius: 15,
});
c1.context.restore();

c1.drawRoundedRectangle({
  x: 359,
  y: 209,
  fillStyle: 'blue',
  strokeStyle: 'transparent',
  lineWidth: 2,
  height: 12,
  width: 80,
  radius: 6,
});

c1.context.save();
c1.context.beginPath();
c1.context.moveTo(420, 200);
c1.context.lineTo(420, 214);
c1.context.lineTo(400, 214);
c1.context.lineTo(400, 300);
c1.context.lineTo(500, 300);
c1.context.lineTo(500, 200);
c1.context.closePath();
c1.context.clip();
c1.drawRoundedRectangle({
  x: 359,
  y: 209,
  fillStyle: 'transparent',
  lineWidth: 2,
  strokeStyle: 'magenta',
  height: 12,
  width: 80,
  radius: 6,
});
c1.context.restore();

c1.drawRoundedRectangle({
  x: 0,
  y: 220,
  fillStyle: '#ccc',
  height: 40,
  width: 100,
  radius: 0,
});

c1.context.save();
c1.context.translate(25, 230);
c1.context.rotate(90 * Math.PI / 180);
c1.drawTriangle({
  x: 0,
  y: 0,
  angle: 60,
  base: 20,
  height : 17.3,
  strokeStyle: 'transparent',
  lineWidth: 0,
  fillStyle: 'green',
});

c1.context.restore();

c1.drawRoundedRectangle({
  x: 20,
  y: 239,
  radius: 0,
  height: 2,
  width: 80,
  fillStyle: 'green',
  strokeStyle: 'transparent',
  lineWidth: 0,
});

c1.drawEllipse({
  x: 250,
  y: 200,
  fillStyle: (function(){
    var gradient = c1.context.createLinearGradient(240, 200, 280, 280);

    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(0, 155, 55, .75)');

    return gradient;
  })(),
  strokeStyle: 'transparent',
  lineWidth: 2,
  height: 80,
  width: 80,
});

c1.context.save();
c1.context.translate(292, 242);
for (var i = 0; i < 360; i++) {
  c1.context.fillStyle = 'rgba(255, 0, 0, ' + i/1080 + ')';
  c1.context.fillRect(40, 0, 2, 2);
  c1.context.rotate(1 * Math.PI / 180);
}
c1.context.restore();

c1.drawRoundedRectangle({
  x: 130,
  y: 225,
  height: 60,
  width: 60,
  fillStyle: 'green',
  strokeStyle: 'transparent',
  lineWidth: 0,
});

c1.context.save();
c1.context.translate(139, 260);
c1.context.rotate(-90 * Math.PI / 180);
c1.drawTriangle({
  x: 0,
  y: 0,
  angle: 90,
  base: 20,
  height: 20,
  fillStyle: 'white',
  strokeStyle: 'white',
  lineWidth: 3,
  lineJoin: 'round',
});
c1.context.restore();

c1.context.save();
c1.context.translate(183, 252);
c1.context.rotate(90 * Math.PI / 180);
c1.drawTriangle({
  x: 0,
  y: 0,
  angle: 90,
  base: 20,
  height: 20,
  fillStyle: 'white',
  strokeStyle: 'white',
  lineWidth: 3,
  lineJoin: 'round',
});
c1.context.restore();