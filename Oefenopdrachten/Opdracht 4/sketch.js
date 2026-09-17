function setup() {
  createCanvas(400, 400);
}
let score = 0;
let light_color = 'green';
let movement0 = 0;
let movement1 = 0;
let number0 = random(0,100)
let number1 = random(0,100)
// every variables

function draw() {
  background(220);
  fill(0)
  textSize(10)
  text("Houd B in om een blokje te laten verschijnen.", 20, 20)
  text("Druk op spatie om het getal op 0 te zetten", 20, 120)
  text("Druk op enter om van rood->groen->oranje te gaan.", 20, 240)
  text("beweeg de eightball met wasd of pijltoetsen.", 200, 50)
 
  if (keyIsPressed == true) {
    //keyisPressed is important to ensure that keys work right
    if (keyCode === 66) {
      //small anoyance is that you have to 
      // look up the number of the key that
      //  you want to work with
      fill(120)
      square(20, 30, 60)
    }

    if (keyCode === 32) {

      score = 0
    }

  }
  // up here is the square
  fill(0)
  text(score, 60, 150)
  score += 1
  if (score >= 500) {
    score = 0
  }
    
    fill(180)
    rect(50, 300, 40, 90)
    // little reminder to myself is that it is beter to
    // make smaller lines of code and to take it 1 step at a time
    if(light_color == 'red')
    {
      fill("red")
    }
    else
    {
      fill("grey");
    }
    circle(70,315,20)
   // this ensures that the light becomes red

    
    if(light_color == 'orange')
    {
      fill("orange")
    }
    else
    {
      fill("grey");
    }
    circle(70, 345, 20)
    //here orange
    
    if(light_color == 'green')
     {
       fill("green")
     }
     else
     {
       fill("grey");
     }
  circle(70, 375, 20)
 //here is it green
  
  fill(0)
  circle(movement0+300,movement1+160,50)
  fill(240)
  circle(movement0+300,movement1+160,38)
  fill(0)
  text("8",movement0+297.5,movement1+163)

  if(movement0>=450){
    movement0 =-450
  }
  if(movement0<=-460){
    movement0 = 440
  }
  if(movement1>=450){
    movement1 = -450
  }
  if(movement1<=-470){
    movement1 = 440
  }
  //this here is the rules for the 8ball
  if(keyIsPressed===true){
    //down here is the movement for the 8ball
  if(keyCode === 87 | keyCode == 38){
    movement1 += -10
  }
  // W^
  if(keyCode === 83 | keyCode == 40){
    movement1 += 10
  }
  // S^
  if(keyCode === 65 | keyCode == 37){
    movement0 += -10
  }
  // A^
  if(keyCode === 68 | keyCode == 39){
    movement0 += 10
  }
  // D^
  //keycodeinfo website is where you can find the keycodes


}

}

function keyPressed()
{
  
  
  if (keyCode === 13) {
      if (light_color == 'green') {
        light_color = 'orange'
      } else if (light_color == 'orange') {
        light_color = 'red'
        fill("red")
      } else if (light_color == 'red') {
        light_color = 'green'
        fill("green")
      }

    }

}


