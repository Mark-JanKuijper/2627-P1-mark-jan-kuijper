function setup() {
  createCanvas(400, 400);
}
let score = 0;
let light_color = 'green';
let movement0 = 0;
let movement1 = 0;

function draw() {
  background(220);
  fill(0)
  textSize(10)
  text("Houd B in om een blokje te laten verschijnen.", 20, 20)
  text("Druk op spatie om het getal op 0 te zetten", 20, 120)
  text("Druk op enter om van rood->groen->oranje te gaan.", 20, 240)
  text("beweeg de eightball met wasd of pijltoetsen.", 200, 50)

  if (keyIsPressed == true) {
    if (keyCode === 66) {
      fill(120)
      square(20, 30, 60)
    }

    if (keyCode === 32) {

      score = 0
    }

  }
  fill(0)
  text(score, 60, 150)
  score += 1
  if (score >= 500) {
    score = 0
  }
    
    fill(180)
    rect(50, 300, 40, 90)
    
    if(light_color == 'red')
    {
      fill("red")
    }
    else
    {
      fill("grey");
    }
    circle(70,315,20)


    
    if(light_color == 'orange')
    {
      fill("orange")
    }
    else
    {
      fill("grey");
    }
    circle(70, 345, 20)
    
    
    if(light_color == 'green')
     {
       fill("green")
     }
     else
     {
       fill("grey");
     }
  circle(70, 375, 20)

  fill(0)
  circle(movement0+300,160,50)
  fill(240)
  circle(movement0+300,160,38)
  fill(0)
  text("8",movement0+297.5,163)
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

  
  if(keycode === 87){
    movement0 += 100
  } else{movement0+2}0
}


