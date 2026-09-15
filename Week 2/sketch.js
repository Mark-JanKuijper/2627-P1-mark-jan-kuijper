function setup() {
  createCanvas(800, 600);
}

let sonX = 0;
let cloudX = 0;
let cloudX1 = 0;
let cloudX2 = 0;
let car1 = 0;
let car2 = 0;
let car3 = 0;

//here is all the variables

function draw() {
  background(0,167,210);

  strokeWeight(0)

  fill(80)
  triangle(150,550,450,550,300,270)

  fill(160)
  triangle(100,550,300,550,200,400)

  triangle(350,550,600,550,500,450)
 //mountain^

 fill("darkgreen")
 rect(0,530,800,100)
 fill('green')
 rect(0,540,800,100)
 //grass^

 sonX = sonX + 1

 if(sonX > 550){
  sonX = -500
 }

 fill("yellow")
 circle(sonX + 300,200,100)

 //sun^

 cloudX=cloudX+2
 cloudX1=cloudX1+1
 cloudX2=cloudX2+3

 if(cloudX > 600){
  cloudX = -450
 }

 if(cloudX1 > 600){
  cloudX1 = -350
 }

 if(cloudX2 > 600){
  cloudX2 = -350
 }


 fill(100)
 ellipse(cloudX1+60,35,80,60)
 ellipse(cloudX1+80,60,80,60)
 ellipse(cloudX1+40,55,80,60)

 ellipse(cloudX2+190,145,80,60)
 ellipse(cloudX2+200,175,80,60)
 ellipse(cloudX2+160,155,80,60)

 ellipse(cloudX+400,45,80,60)
 ellipse(cloudX+310,60,80,60)
 ellipse(cloudX+355,55,80,60)
 //shadow of clouds^

 fill(255)
 ellipse(cloudX1+60,40,80,60)
 ellipse(cloudX1+80,65,80,60)
 ellipse(cloudX1+40,60,80,60)
 
 ellipse(cloudX2+190,150,80,60)
 ellipse(cloudX2+200,180,80,60)
 ellipse(cloudX2+160,160,80,60)

 ellipse(cloudX+400,50,80,60)
 ellipse(cloudX+310,65,80,60)
 ellipse(cloudX+355,60,80,60)

 //cloud^

 fill(60)
 rect(0,545,800,70)

 fill(100)
 rect(0,550,800,70)

 let asphaltX = 10;

 fill(210)
 ellipse(asphaltX,575,50,10)

 asphaltX += 120
 ellipse(asphaltX,575,50,10)

  asphaltX += 120
 ellipse(asphaltX,575,50,10)

 asphaltX += 120
 ellipse(asphaltX,575,50,10)

  asphaltX += 120
 ellipse(asphaltX,575,50,10)

  asphaltX += 120
 ellipse(asphaltX,575,50,10)

  asphaltX += 120
 ellipse(asphaltX,575,50,10)

 //asphalt^

 fill("#523320")
 rect(200,465,15,65)

 rect(80,465,15,65)

 rect(150,465,15,65)

 rect(350,465,15,65)

 
 //tree^
 fill("darkgreen")

 circle(88,470,50)

 circle(207,470,50)

 circle(157,470,50)

 circle(357,470,50)

 //leaves for tree^

 car1 = car1 +2.5
 if(car1>750){
  car1=-300
 }

 car2 = car2+4
 if(car2>760){
  car2=-300
 }
 fill(150)
 
 rect(car1+40,510,50,40,10)
 rect(car1+40,520,60,40,10)
 fill(0)
 circle(car1+50,560,22)
 circle(car1+90,560,22)
 //car 1
 fill(10,40,150)
 
 rect(car2+40,540,50,40,10)
 rect(car2+40,550,60,40,10)
 fill(0)
 circle(car2+50,590,22)
 circle(car2+90,590,22)
 //car 2
 //car^

 fill("#523320")
 rect(250,540,15,65)
 fill("darkgreen")
 circle(257,530,50)
 //tree on the forground^
}
