



let balls = [];
let score = 0;
let aantal_ballen = 10;

//variables
function setup() {
  createCanvas(400, 400);
}

function ballen_maken(){
  for (let i = 0; i < aantal_ballen; i++){
    ball_X = round(random(0,400)) //width and height can be used
    ball_Y = round(random(0,400)) //width means the width of the canvas and height the hieght of the canvas.
    ball_size = round(random(10,50))
    ball_speedX = round(random(-5,5))
    ball_speedY = round(random(-5,5))
    Red = round(random(0,256))
    Gre = round(random(0,256))
    Blu = round(random(0,256))
    balls.push({ //little thing about push you can only use push with arrays
    x:ball_X,
    y:ball_Y,//object states you use the  : as the = sign
    s:ball_size,//aswell as that oject states you use the . dots to call upon wat you want to call
    vx:ball_speedX,
    vy:ball_speedY,//here is the velocity of the balls
    r:Red,
    g:Gre,
    b:Blu,})
  } 
}

function draw() {

    if(balls.length == 0){
    ballen_maken()
  } //this here makes sure that there are always balls

  background(100,200,150);
  for(let i = 0; i < balls.length ; i++){
    fill(balls[i].r,balls[i].g,balls[i].b,)
    circle(
      balls[i].x += balls[i].vx,
      balls[i].y += balls[i].vy,
      balls[i].s, 
    )
    if(balls[i].x < 0 || balls[i].x > width){
      balls[i].vx *= -1
    }if(balls[i].y < 0 || balls[i].y > width){
      balls[i].vy *= -1
    }
  }
  fill(0)
  text(mouseX,20,20)
  text(mouseY,20,40)
  let example = dist(40,40,50,50)
  text(example,20,60)
  text(score,20,80)
}

function mousePressed(){
  for(let i = 0; i < balls.length; i++){
    let space = dist(mouseX,mouseY,balls[i].x,balls[i].y)//check the distance between the mouse and the balls
  if (space < balls[i].s){ //sees if the mouse is withing the balls size
    console.log("it works! " + i)
    score ++ //inreases score by one
    balls.splice(i,1)//then removes the ball that it clicked on
  }
  }
  
}
