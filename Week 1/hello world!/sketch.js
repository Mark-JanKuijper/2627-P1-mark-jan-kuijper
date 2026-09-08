function setup() {
  createCanvas(800, 1000);

}

function draw() {
  background(220);
 textSize(32)
 fill(0)
 text("mark-jan kuijper", 10, 40)
 //first zet the size of the text
 //then you put the text in
 //and the coordinates of it

 fill(255, 0, 0);
 rect(20, 60, 200, 50)
 fill(255,255,255);
 rect(20, 110, 200, 50);
 fill(0, 0, 255)
 rect(20, 160, 200, 50);
 //boven hier is de flag

 fill(0)
 square(20, 250, 50)
 square(120, 250, 50)
 square(20, 350, 50)
 square(120, 350, 50)
 square(70, 300, 50)

 fill(255)
 square(70, 250, 50)
 square(120, 300, 50)
 square(20, 300, 50)
 square(70, 350, 50)
 //boven hier is het schakenbord

 fill(220)
 square(55, 475, 75)
 triangle(25, 480, 90, 440, 150, 480)
 //huis hierboven
 
}

