
  let x = 100
 // dit betekend dat alle instantses
 // met x is 100
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(210);

  textSize(20)
  text(x,20,20)

  //important about variables
  //they can be anything

  let greeting = "Hello world!"

  text(greeting,20,60)
  //when using variables for text
  //you dont have to use the "" symbols

  let a = 20

  let b = 10

  let optellen = a + b 

  let aftrekken = a - b

  let vermenigvulden = a * b

  let delen = a / b

  let y = 80

  text("optellen: "+optellen,20,y)
// you can use + to add text to text
  y+=20;
//this does constant movement
//the reason that its not moving is that the y = 80 is there to makes it not move
  text("aftrekken: "+aftrekken,20,y)

  y+=20;

  text("vermenigvulden: "+vermenigvulden,20,y)

  y+=20;

  text("delen: "+delen,20,y)
}
