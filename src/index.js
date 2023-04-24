import p5 from 'p5';

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
  };

  p.draw = function () {
    p.background(220);
  };
};

new p5(sketch);