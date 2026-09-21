function setup() {
  createCanvas(400, 200);
}

let score = 10
let a = 0;
let b = 0;


function draw() {
  background(120);
  textSize(30)

  if (score >= 90) {
    fill(2, 2, 2)
    text("Uitstekend", 20, 20)
    //if statements are unique.
    // example: if(fakecode=fakenumber) this asks a question wether it is true or false.
    //{activate power} this is wat it does if the question is true
    //another example.
    //if(square>=brick)
    //{do_answer}. another thing you can add is an else statement
    //else(saynothing) this does things if the if statement not true is
    // alt + shift + F makes everything aligned

  } else if (score <= 89 && score >= 70) {
    fill(60, 40, 120)
    //ok important && is voor EN biede waarden moeten waarzijn
    //|| OF minstens 1 waarden moet waar zijn
    //! niet, true is false en false is true
    text("goedgedaan", 20, 40)
  } else if (score <= 69 && score >= 50) {
    //== is gelijk aan
    //!= kijkt voor verschill
    //> groter dan. < kleiner dan
    //>= groter dan of gelijk aan.
    //<= kleiner dan of gelijk aan.
    fill(100, 40, 60)
    text("voldonede", 60, 50)
  } else if (score < 50) {

    fill(255, 0, 0)
    text("onvoldoende", 50, 50)
  }
   //framerate limits the amout of frames per second
   frameRate(10)
   textSize(30)
   //keyIsDown is similiar to keyispressed and keycode
   //but alot more simplified
  if (keyIsDown(32)) {
    //floor rounds of numbers to lower ones
    //round also rounds of numbers
    //ceil also round of numbers but higher
    a = round(random(0,100)) 
    b = round(random(0,100))
    } if(a > b){
      text(a+" is groter dan "+b,50,100)
    } else if(a < b){
      text(a+" is kleiner dan "+b,50,100)
    } else if (a == b){
      text(a+" is gelijk aan "+b,50,100)
    }   
  }





