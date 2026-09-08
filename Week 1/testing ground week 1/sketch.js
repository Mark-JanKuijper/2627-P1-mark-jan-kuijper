function setup() {
  //tekent hoe groot het canvas is
  createCanvas(800, 800);
}

function draw() {
  background(220);
  //maakt het achtergrond een kleur van zwart naar wit.

  rect(375, 320, 50, 100);
  //eerste 2 getalen zetten positie.
  //laatse 2 getalen zetten het groote.

  point(100, 50);

  line(375, 320, 350, 400);
  line(475, 320, 450, 500);

  ellipse(400, 300, 50, 50);

  ellipse(390, 300, 15, 25);
  ellipse(410, 300, 15, 25);
}
