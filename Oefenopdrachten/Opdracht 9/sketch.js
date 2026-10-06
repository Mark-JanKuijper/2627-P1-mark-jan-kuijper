

let balls = {};

let color1 = {
  R : 0,
  G : 0,
  B : 0,
};

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 5; i++){
    ball_X = round(random(0,400)) //width and height can be used
    ball_Y = round(random(0,400)) //width means the width of the canvas and height the hieght of the canvas.
    ball_size = round(random(10,50))
    ball_speedX = round(random(-5,5))
    sball_speedY = round(random(-5,5))
    R = round(random(0,256))
    G = round(random(0,256))
    B = round(random(0,256))
  }
  

}

function draw() {
  background(100,200,150);

  for(let i = 0; i < 5; i++){
    circle(ball_X
      ,ball_Y,
      ball_size)
  }

 circle(ball_X,ball_Y,ball_size)
}
