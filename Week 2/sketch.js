function setup() {
  createCanvas(800, 600);
}

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



 fill(255)
 ellipse(60,40,80,60)
 ellipse(80,65,80,60)
 ellipse(40,60,80,60)
 
  ellipse(90,150,80,60)
 ellipse(100,180,80,60)
 ellipse(60,160,80,60)

  ellipse(200,50,80,60)
 ellipse(210,65,80,60)
 ellipse(185,60,80,60)

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

 rect(250,540,15,65)
 //tree^
}
