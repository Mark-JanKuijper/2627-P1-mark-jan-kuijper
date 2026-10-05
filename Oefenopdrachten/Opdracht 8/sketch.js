function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill(255)

  teken_huis(100,100,150) //you can call functions here aswell

  teken_huis(200,200,150)//functions are like variables that you can put some stuff into them and they can do that.

  teken_huis(350,100,200)//and name them watever

  teken_huis(300,100,10)

  shapes_draw(150,140,40,50)

  kleuren_met_shape(200,10,50)

  math1(20,10)
}

function teken_huis(x, y , grootte){ //functions are things that can do things
  square(x,y,grootte) //house
  let linkerpuntX = x;
  let linkerpuntY = y;

  let rechterpuntX = x + grootte;
  let rechterpuntY = y;

  let middelpuntX = x + (grootte / 2);
  let middelpuntY = y - (grootte / 3);

  triangle(linkerpuntX, linkerpuntY, middelpuntX , middelpuntY , rechterpuntX, rechterpuntY)//roof

  let doorX = x + (grootte / 3);
  let doorY = y + (grootte / 2);
  let doorheight = grootte / 2;
  let doorwidth = grootte / 2.5;

  rect(doorX, doorY,doorwidth , doorheight)//door

  let windowX = x;
  let windowY = y;
  let windowsize = grootte / 4

  square(windowX + grootte / 15,windowY + grootte / 5, windowsize)//window 1

  square(windowX + grootte / 1.5,windowY + grootte / 5, windowsize)//window 2
}

function shapes_draw(x,y,size,size1){
  let circleX = x + 10;
  let circleY = y + 10;

  circle(circleX,circleY,size)

  let rectX = x + 50
  let rectY = y + 100

  rect(rectX,rectY,size,size1)

  line(circleX ,circleY ,rectX + size / 2 ,rectY + size1 / 2 )
}

function kleuren_met_shape(x,y,z,){
  fill(x,y,z)
 rect(550,250,100,100)

 circle(600,300,50)
}
function math1(a,b){

  let total1
  let total2
  let total3
  let total4

  a + b

  total1 = a + b

  text(total1,20,45)

  a / b 

  total2 = a / b

  text(total2,20,65)

  total3 = a * b

  text(total3,20,85)

  total4 = a - b

  text(total4,20,105)

}


