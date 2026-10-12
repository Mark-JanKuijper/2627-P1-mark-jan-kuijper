
let food = 100;

let energy = 100;

let clean = 100;

let happenis = 100;

let X = 0

let Y = 0

// hier zijn alle buttons
let button_food
let button_energy
let button_clean
let button_happenis

function setup() {
  createCanvas(400, 400);

  button_food = createButton("feed")
  button_energy = createButton("sleep")
  button_clean = createButton("clean")
  button_happines = createButton("enjoyment")

  button_food.mousePressed(buttonPressed_food)
  button_energy.mousePressed(buttonPressed_energy)
  button_clean.mousePressed(buttonPressed_clean)
  button_happines.mousePressed(buttonPressed_happines)


}

function draw() {
  background(220);

  fill(0)

  Y = 20
  X = 20

  text("fullness "+food,X,Y)

  Y += 20

  text("energy "+energy,X,Y)

  Y += 20

  text("cleanliness "+clean,X,Y)

  Y += 20

  text("happy "+happenis,X,Y)

  text(frameCount,20,120)// voorbeeld om het frames to lezen

  frameRate(5)

  fill(255)

 if(food <= 0){
  food = 0
 }

  if(energy <= 0){
  energy = 0
 }

  if(clean <= 0){
  clean = 0
 }

  if(happenis <= 0){
  happenis = 0
 }

  if(food <= 0){
    text("your pet has died of starvation",X,Y + 20)
  }
   if(food <= 25){
    fill("yellow")
   }
   if(energy <= 25){
    fill("blue")
   }
   if(clean <= 25){
    fill("brown")
   }
   if(happenis <= 25){
    fill("orange")
   }
  square(20,200,50) //palce holder replace later
  
  
}

// hier zijn alle button functies
function buttonPressed_food(){
 
 food += 10
 if(food >= 100){
  food = 100
 }
 clean -= 5
 happenis -= 5
}
function buttonPressed_energy(){
  food -= 10
  energy += 20
  if(energy >= 100){
    energy = 100
  }
}
function buttonPressed_clean(){
  energy -= 10
  clean += 10
    if(clean >= 100){
    clean = 100
  }
}
function buttonPressed_happines(){
  energy -= 15
  food -= 10
  clean -= 5
  happenis += 10
    if(happenis >= 100){
    happenis = 100
  }

}
