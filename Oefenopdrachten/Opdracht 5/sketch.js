function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 10; i++) {
    //deze code herhaalt zich totdat het is 10
  }
}


function draw() {
  background(220);
  strokeWeight(1)
  fill(0)
  //nummers voor alles
  text("1", 20, 15)
  text("2", 20, 105)
  text("3", 80, 105)
  text("4", 80, 205)
  text("5", 540, 20)
  text("6", 350, 105)
  text("7", 625, 105)

  //1
  fill(255)
  for (let i = 0; i < 10; i++) {
    square(20 + (i * 50), 25, 50)
    if (i == 5) { // you can use if statements in for loops
      fill('#186bbd')
    } else fill(255)
  }

  //2
  for (let i = 0; i < 5; i++) {
    fill(0 + (50 * i))
    square(20, 115 + (i * 50), 50)
  }


  //3
  let x = 90;
  let width = 25;
  for (let i = 0; i < 4; i++) {
    fill(0, 0 + (i * 75), 0)
    rect(x, 115, width, 50);
    x += width;// je kan ook andere berekening doen in een for 
    width += 25;
  }


  fill(180)
  //4
  x = 90;
  width = 25;
  let y = 205;
  let height = 50
  for (let i = 0; i < 4; i++) {
    rect(x, y, width, height)
    x += width
    width += 25
    height += 25
    fill(0, 0, 255 - (i * 125))
  }

  //5

  fill(255)

  for (let i = 0; i < 6; i++) {
    strokeWeight(2 * i)
    circle(550 + (30 * i), 50, 25)
  }

  strokeWeight(1)
  //6
  for (let i = 0; i < 10; i++) {
    if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8) { //er is well een meer schoonere methode met booleans maar ik weet ze niet.
      fill(255, 0, 0)
    } else fill(255)
    circle(490, 250, 280 - (28 * i))
  }

  //7
  
  height = 20
  y = 110 //alle variabelen reseten voor dit
  for (let i = 0; i < 21; i++) { //checkt wanneer i kleiner is dan 21
    rect(635 , y + (i * 10), height, 10) //zat wel vast hier
    if(i >= 10){ // kleine belangerijke punt is dat i het meerdere dingen op een elkaar doet
      height -= 10
    }
    else height += 10
  }

}
