function setup() {
  createCanvas(800, 600);
}

let sonX = 0;
let cloudX = 0;
let cloudX1 = 0;
let cloudX2 = 0;
let car1 = 0;
let car2 = 0;
let lightstate = 'green'
let carspeed1 = 2.2
let carspeed2 = 5.5
let UFOx = 0;
let UFOspeed = 20;
let leaves1 = 0;
//here is all the variables

function draw() {
  background(0, 167, 210);

  strokeWeight(0)

  fill(80)
  triangle(150, 550, 450, 550, 300, 270)

  fill(160)
  triangle(100, 550, 300, 550, 200, 400)

  triangle(350, 550, 600, 550, 500, 450)
  //mountain^

  UFOx += UFOspeed

  fill("darkgreen")
  circle(UFOx+230,310,20)

  fill(0,130,250,120)
  circle(UFOx+230,320,50)

  fill(160)
  rect(UFOx+200,320,60,30,10)

  if(UFOx >=960){
    UFOx=-1300
  }
  //ufo movement
  //UFO?!?!?^

  fill("darkgreen")
  rect(0, 530, 800, 100)
  fill('green')
  rect(0, 540, 800, 100)
  //grass^

  sonX = sonX + 1

  if (sonX > 550) {
    sonX = -500
  }

  fill("yellow")
  circle(sonX + 300, 200, 100)

  //sun^

  cloudX = cloudX - 2
  cloudX1 = cloudX1 - 1
  cloudX2 = cloudX2 - 3

  if (cloudX < -600) {
    cloudX = 530
  }

  if (cloudX1 < -600) {
    cloudX1 = 850
  }

  if (cloudX2 < -600) {
    cloudX2 = 750
  }
 //allows cloud movement

  fill(100)
  ellipse(cloudX1 + 60, 35, 80, 60)
  ellipse(cloudX1 + 80, 60, 80, 60)
  ellipse(cloudX1 + 40, 55, 80, 60)

  ellipse(cloudX2 + 190, 145, 80, 60)
  ellipse(cloudX2 + 200, 175, 80, 60)
  ellipse(cloudX2 + 160, 155, 80, 60)

  ellipse(cloudX + 400, 45, 80, 60)
  ellipse(cloudX + 310, 60, 80, 60)
  ellipse(cloudX + 355, 55, 80, 60)
  //shadow of clouds^

  fill(255)
  ellipse(cloudX1 + 60, 40, 80, 60)
  ellipse(cloudX1 + 80, 65, 80, 60)
  ellipse(cloudX1 + 40, 60, 80, 60)

  ellipse(cloudX2 + 190, 150, 80, 60)
  ellipse(cloudX2 + 200, 180, 80, 60)
  ellipse(cloudX2 + 160, 160, 80, 60)

  ellipse(cloudX + 400, 50, 80, 60)
  ellipse(cloudX + 310, 65, 80, 60)
  ellipse(cloudX + 355, 60, 80, 60)

  //cloud^


  fill(60)
  rect(0, 545, 800, 70)

  fill(100)
  rect(0, 550, 800, 70)

  let asphaltX = 10;

  fill(210)
  ellipse(asphaltX, 575, 50, 10)

  asphaltX += 120
  ellipse(asphaltX, 575, 50, 10)

  asphaltX += 120
  ellipse(asphaltX, 575, 50, 10)

  asphaltX += 120
  ellipse(asphaltX, 575, 50, 10)

  asphaltX += 120
  ellipse(asphaltX, 575, 50, 10)

  asphaltX += 120
  ellipse(asphaltX, 575, 50, 10)

  asphaltX += 120
  ellipse(asphaltX, 575, 50, 10)

  //asphalt^

  fill("#523320")
  rect(200, 465, 15, 65)

  rect(80, 465, 15, 65)

  rect(150, 465, 15, 65)

  rect(350, 465, 15, 65)


  //tree^
  fill("darkgreen")

  circle(88, 470, 50)

  circle(207, 470, 50)

  circle(157, 470, 50)

  circle(357, 470, 50)

  fill(10,120,0,190)
  circle(leaves1+88, 470, 50)

  circle(leaves1+207, 470, 50)

  circle(leaves1+157, 470, 50)

  circle(leaves1+357, 470, 50)
  leaves1 += 0.5
  if(leaves1>10){
    leaves1 = -10
  }
  // leaves1 is for the movement of the leaves
  //leaves for tree^

  fill(130)
  rect(590,530,40,10)
  rect(600,480,20,50)
  fill("yellow")
  rect(600,460,20,20)
  fill(120)
  triangle(580,460,610,420,640,460)

  fill(130)
  rect(690,530,40,10)
  rect(700,480,20,50)
  fill("yellow")
  rect(700,460,20,20)
  fill(120)
  triangle(680,460,710,420,740,460)
  

  // lantern^

  fill(160)
  rect(302.5, 437.5, 35, 65)
  rect(310, 500, 20, 30)

  strokeWeight(1)
  if (lightstate == 'green') {
    fill("green") //color the circle in
  } else fill("gray") //else make it gray
   circle(320, 450, 17.5) // circle has to be last
  if (lightstate == 'orange') {
    strokeWeight(1)
    fill("orange")
  } else fill("gray")
   circle(320, 470, 17.5)
  if (lightstate == 'red') {
    fill("red")
    
  } else fill("gray")
   circle(320, 490, 17.5)
   
   //stoplight

  strokeWeight(0)
  car1 += carspeed1
  if (car1 > 750) {
    car1 = -300
  }

  car2 += carspeed2
  if (car2 > 760) {
    car2 = -300
  }

  fill(150)

  rect(car1 + 40, 510, 50, 40, 10)
  rect(car1 + 40, 520, 60, 40, 10)
  fill(0)
  circle(car1 + 50, 560, 22)
  circle(car1 + 90, 560, 22)
  //car 1

  fill(10, 40, 150)
  rect(car2 + 40, 540, 50, 40, 10)
  rect(car2 + 40, 550, 60, 40, 10)
  fill(0)
  circle(car2 + 50, 590, 22)
  circle(car2 + 90, 590, 22)
  //car 2

  //car^

  fill("#523320")
  rect(250, 540, 15, 65)
  fill("darkgreen")
  circle(257, 530, 50)
  fill(10,120,0,190)
  circle(leaves1+257, 530, 50)
  
  //tree on the forground^
}

function keyPressed() {
  if (keyCode === ENTER) {

    if (lightstate == 'green') {
      lightstate = 'orange'
      carspeed1 *= 0.5
      carspeed2 *= 0.5
      UFOspeed *= 0.5
    } else if (lightstate == 'orange') {
      lightstate = 'red'
      carspeed2 *= 0
      carspeed1 *= 0
      UFOspeed *= 0
    } else if (lightstate == 'red') {
      lightstate = 'green'
      carspeed1 = 2.2
      carspeed2 = 5.5
      UFOspeed = 20
    }
    // allows the stoplight to change colo(u)rs
    //and effect the cars(and more)
  }
}