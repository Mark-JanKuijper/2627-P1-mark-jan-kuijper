
// hier zijn alle variabelen
let food = 100;

let energy = 100;

let clean = 100;

let happenis = 100;

let images = ['week 6 png/Cultist_dirt.png','week 6 png/Cultist_dirt2.png','week 6 png/Cultist_entertain.png','week 6 png/Cultist_entertain2.png',
  'week 6 png/Cultist_happy.png','week 6 png/Cultist_happy2.png','week 6 png/Cultist_hunger.png',
  'week 6 png/Cultist_hunger2.png','week 6 png/Cultist_neut.png','week 6 png/Cultist_neut2.png',
  'week 6 png/Cultist_sleep.png','week 6 png/Cultist_sleep2.png'
]//dit hier zijn voor de afbeeldingen
/*
 0 en 1 zijn voor viezigheid
 2 en 3 zijn voor bored
 4 en 5 zijn voor  blijheid
 6 en 7 zijn voor honger
 8 en 9 zijn voor neutraal
 10 en 11 zijn voor slaperigheid

*/
let image_final = []//dit is for het loading van alle afbeeldingen

let anim_move = 0;

let X = 0

let Y = 0

let size_X = 0

let size_Y = 0


function preload(){
  for(let i = 0; i < images.length; i ++){
    image_final.push(loadImage(images[i]))
  }
}
// hier zijn alle buttons
let button_food
let button_energy
let button_clean
let button_happenis
let button_redo

function setup() {
  createCanvas(500, 500);

  //set up voor all de buttons
  button_food = createButton("feed")
  button_energy = createButton("sleep")
  button_clean = createButton("clean")
  button_happenis = createButton("enjoyment")
  button_redo = createButton("redo")

  button_food.mousePressed(buttonPressed_food)
  button_energy.mousePressed(buttonPressed_energy)
  button_clean.mousePressed(buttonPressed_clean)
  button_happenis.mousePressed(buttonPressed_happines)
  button_redo.mousePressed(buttonPressed_redo)

  X = 100
  Y = 400
  size_X = 70
  size_Y = 70

  button_food.size(size_X,size_Y)
  button_energy.size(size_X,size_Y)
  button_clean.size(size_X,size_Y)
  button_happenis.size(size_X,size_Y)

  button_food.position(X,Y)
  button_energy.position(X+(size_X),Y)
  button_clean.position(X+(size_X*2),Y)
  button_happenis.position(X+(size_X*3),Y)

// hier is waar de waarden van honger schoonheid energy en blijheid minder worden
  setInterval(food_drain,2000) // set interval is sort of like delta time
  setInterval(energy_drain,5000)// this does an action every 1000 miliseconden ( 1 seconden)
  setInterval(clean_drain,2500)
  setInterval(happy_drain,8000)

  setInterval(anim_move_func,1000)//this here is for the 'animation'

  //here reads the information that was stored
 food = getItem("fullnes",food)
 energy = getItem("energy",energy)
 clean = getItem("clean",clean)
 happenis = getItem("happenis",happenis)
}

function draw() {
  background('brown');

  fill(0)// dit hier fill is voor de text

  Y = 20
  X = 20

  text("fullness "+food,X,Y)

  Y += 20

  text("energy "+energy,X,Y)

  Y += 20

  text("cleanliness "+clean,X,Y)

  Y += 20

  text("happy "+happenis,X,Y)

  text("framecount "+ frameCount,20,120)// voorbeeld om het frames to lezen

  text(deltaTime,20,140)

  frameRate(5)

 //this ensures that it cant go into the negatives
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

 //hier stores all the information
 storeItem("fullnes",food)
 storeItem("energy",energy)
 storeItem("clean",clean)
 storeItem("happenis",happenis)

  X = 75
  Y = 100

  size_X = 100
  size_Y = 120

 
 //hier word het images geplaatst

   if(food <= 35){

    image(image_final[6 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(energy <= 35){

    image(image_final[10 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(clean <= 35){

    image(image_final[0 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(happenis <= 35){

    image(image_final[2 + anim_move],X,Y,size_X*2,size_Y*2)

   } else image(image_final[8 + anim_move],X,Y,size_X*2,size_Y*2)
  
}

// hier zijn alle button functies
function buttonPressed_food(){
 
 food += 10
 if(food >= 100){
  food = 100
 }
 clean -= 2
}
function buttonPressed_energy(){
  food -= 10
  energy += 20
  happenis -= 5
  if(energy >= 100){
    energy = 100
  }
}
function buttonPressed_clean(){
  energy -= 5
  clean += 10
    if(clean >= 100){
    clean = 100
  }
}
function buttonPressed_happines(){
  energy -= 10
  food -= 5
  clean -= 5
  happenis += 10
    if(happenis >= 100){
    happenis = 100
  }

}
function buttonPressed_redo(){
  food = 100
  energy = 100
  clean = 100
  happenis = 100
}


// here is where the drain of the variables happen
function food_drain(){
  food -= 5
}
function energy_drain(){
  energy -= 10
}
function clean_drain(){
  clean -= 2
}
function happy_drain(){
 happenis -= 5
}

function anim_move_func(){ //this is for the 'animation'
  anim_move++
  if(anim_move > 1){
    anim_move = 0
  }
}