
// hier zijn alle variabelen
let food = 100;

let energy = 100;

let clean = 100;

let happenis = 100;

let minigame1 = false;

let button_hide = true;

let bodys = 0;

let game_state = "on"

let help_page1 = false

//for the victim values

let victim_dead = false;

let victim_speed = 0;

let victim_X = 0;

let victim_Y = 250;

let victim_sizeX = 500;

let victim_sizeY = 500;

//sound effects

let eat_sound1

let sleep_sound1

let clean_sound1

let crossbow_sound1

//victim images
let image_victim = ['week 6 png/victim1_alive.png','week 6 png/victim1_dead.png'];

let image_victim_final = [];

//achtergrond images
let image_backround = ['week 6 png/minigame backround1.png'];

let image_final_backround = [];

//dit hier zijn voor de afbeeldingen voor de cultist
let images_cultist = ['week 6 png/Cultist_dirt.png','week 6 png/Cultist_dirt2.png','week 6 png/Cultist_entertain.png','week 6 png/Cultist_entertain2.png',
  'week 6 png/Cultist_happy.png','week 6 png/Cultist_happy2.png','week 6 png/Cultist_hunger.png',
  'week 6 png/Cultist_hunger2.png','week 6 png/Cultist_neut.png','week 6 png/Cultist_neut2.png',
  'week 6 png/Cultist_sleep.png','week 6 png/Cultist_sleep2.png','week 6 png/Sign off.png'
]
/*
 0 en 1 zijn voor viezigheid
 2 en 3 zijn voor bored
 4 en 5 zijn voor  blijheid
 6 en 7 zijn voor honger
 8 en 9 zijn voor neutraal
 10 en 11 zijn voor slaperigheid
 12 is voor sign off (losing the game)

*/
let image_final_cult = []//dit is for het loading van alle afbeeldingen

let anim_move = 0;

let X = 0

let Y = 0

let size_X = 0

let size_Y = 0


function preload(){//hier worden alle images geloadded in
  for(let i = 0; i < images_cultist.length; i ++){
    image_final_cult.push(loadImage(images_cultist[i]))
  }
  for(let i = 0; i < image_backround.length; i++){
    image_final_backround.push(loadImage(image_backround[i]))
  }
   for(let i = 0; i < image_victim.length; i++){
    image_victim_final.push(loadImage(image_victim[i]))
  }

  //here is sound effects
  crossbow_sound1 = loadSound('sound effect week 6/crossbow_bolt_skewer1.wav') //you put sound effects in the same way as loading in images

  eat_sound1 = loadSound('sound effect week 6/eat.ogg')

  clean_sound1 = loadSound('sound effect week 6/clean_bubble.mp3')

  sleep_sound1 = loadSound('sound effect week 6/sleep.wav')
}
// hier zijn alle buttons
let button_food
let button_energy
let button_clean
let button_happenis
let button_redo
let button_help

function setup() {
  createCanvas(500, 500);

  //set up voor all de buttons
  button_food = createButton("feed")
  button_energy = createButton("sleep")
  button_clean = createButton("clean")
  button_happenis = createButton(" 'enjoyment'")
  button_redo = createButton("redo")
  button_help = createButton("help")

  button_food.mousePressed(buttonPressed_food)
  button_energy.mousePressed(buttonPressed_energy)
  button_clean.mousePressed(buttonPressed_clean)
  button_happenis.mousePressed(buttonPressed_happines)
  button_redo.mousePressed(buttonPressed_redo)
  button_help.mousePressed(buttonPressed_help)

  X = 100
  Y = 438 //dit hier is precies 438 zodat de buttons netjes op de "grond" zitten
  size_X = 70
  size_Y = 70

  button_food.size(size_X,size_Y)
  button_energy.size(size_X,size_Y)
  button_clean.size(size_X,size_Y)
  button_happenis.size(size_X *1.5,size_Y)

  button_food.position(X,Y)
  button_energy.position(X+(size_X),Y)
  button_clean.position(X+(size_X*2),Y)
  button_happenis.position(X+(size_X*3),Y)
  button_help.position(X*4.5,Y/20)

  button_redo.position(X/2,Y*1.05)

  button_redo.hide()

// hier is waar de waarden van honger schoonheid energy en blijheid minder worden
  setInterval(food_drain,2000) // set interval is sort of like delta time
  setInterval(energy_drain,5000)// this does an action every 1000 miliseconden ( 1 seconden)
  setInterval(clean_drain,2500)
  setInterval(happy_drain,8000)

  setInterval(anim_move_func,1000)//this here is for the 'animation'

  setInterval(victim_alive_func,2000)

  //here reads the information that was stored
 food = getItem("fullnes",food)
 energy = getItem("energy",energy)
 clean = getItem("clean",clean)
 happenis = getItem("happenis",happenis)
 bodys = getItem("bodys",bodys)


 //here setting the volume of the effects to ensure they dont blow your ears out
 crossbow_sound1.setVolume(0.2)

 sleep_sound1.setVolume(1)

 eat_sound1.setVolume(0.5)

 clean_sound1.setVolume(0.5)
}



function draw() {
  background('brown');

  frameRate(5)

  X = 100

  Y = 100

  size_X = 105

  size_Y = 40

  //dit hier is voor de visuelisatie van de variabelen
  fill(150,150,150,150)
  
  //dit hier zijn perse de 'achtergrond' recthoeken
  rect(X/10,Y/10,size_X,size_Y)

  rect(X/10,Y/1.75,size_X,size_Y)

  rect(X*1.2,Y/10,size_X,size_Y)

  rect(X*1.2,Y/1.75,size_X,size_Y)

  size_X = 0

  //en hier is waar de variabelen worden gevisuieliseert
  fill('#cfcd3f')
  rect(X/10,Y/8.5,size_X+(food),size_Y*0.90)

  fill('#3b3db9')
  rect(X/10,Y/1.7,size_X+(energy),size_Y*0.90)

  fill('#9637bf')
  rect(X*1.2,Y/8.5,size_X+(clean),size_Y*0.90)

  fill('#1add4e')
  rect(X*1.2,Y/1.7,size_X+(happenis),size_Y*0.90)

  fill(0)// hier is de text

  text("fullness "+food,X/10,Y/3)

  text("energy "+energy,X/10,Y/1.25)

  text("cleanliness "+clean,X*1.2,Y/3)

  text("happy "+happenis,X*1.2,Y/1.25)

  textSize(20)

  text("body's : "+bodys,X*2.5,Y/3)

  textSize(10)

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
 storeItem("bodys",bodys)

  X = 75
  Y = 100

  size_X = 100
  size_Y = 120

 //hier word het images geplaatst


   if(food >= 75 && energy >= 75 && happenis >= 75 && clean >= 75){
    image(image_final_cult[4 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(food < 5 && energy < 5 && clean < 5 && happenis < 5){

    image(image_final_cult[12],X,Y,size_X*2,size_Y*2)

    textSize(20)
    text("You lost your pet.",X*1.5,Y*3)
    game_state = "off"

   }  else if(food <= 35){

    image(image_final_cult[6 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(energy <= 35){

    image(image_final_cult[10 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(clean <= 35){

    image(image_final_cult[0 + anim_move],X,Y,size_X*2,size_Y*2)

   } else if(happenis <= 35){

    image(image_final_cult[2 + anim_move],X,Y,size_X*2,size_Y*2)

   } else image(image_final_cult[8 + anim_move],X,Y,size_X*2,size_Y*2)


  
   //here is the minigame section
   X = 0
   Y = 100
   size_X = 500
   size_Y = 340
   if(minigame1 == true){
    image(image_final_backround[0],X,Y,size_X,size_Y)

    victim_speed = 20 //here is the speed of the victim

    victim_X += victim_speed
  
    if(victim_dead == false){
      image(image_victim_final[0],victim_X -150,victim_Y,victim_sizeX/3,victim_sizeY/3)
    } else if (victim_dead == true){
      victim_X += - victim_speed // this makes it so that the victims stop moving
      image(image_victim_final[1],victim_X -150,victim_Y,victim_sizeX/3,victim_sizeY/3)
    }
    

    if(victim_X >= 600){//this makes sure that the victim doesnt disapear of screen
      victim_X = -100
    }
   }

   //this here makes so that the redo button can show itself and hide itself
   if(game_state == "on"){
    button_redo.hide()
   } else if(game_state == "off"){

    button_redo.show()
   } 
   

   //this here is for the help page
   X = 50
   Y = 100
   size_X = 50
   size_Y = 100
   
   if(help_page1 == true){
    fill("#56b35d")
    rect(X,Y,size_X*8.8,size_Y*3)
    
    textSize(20)
    fill(0)
    text("You have reached the help page!",X,Y*1.2)
    text("1. Click on the clean button to clean your pet.",X,Y*1.5)
    text("2. Click on the sleep button so that",X,Y*1.8)
    text("your pet can gain energy.",X,Y*2.1)
    text("3. Click on 'enjoyment', and then click on the",X,Y*2.4) // it would be more efficient if it was a image but i was lazy and didnt want to make another image
    text("victims walking past to gain happiness and bodies.",X,Y*2.7)
    text("4. When you have bodies, click on feed to",X,Y*3)
    text("satiate your pet.",X,Y*3.3)
    text("5. When you fail, click on the redo button",X,Y*3.6)
    text("to begin again.",X,Y*3.9)
   }
   textSize(10)//this here text size to ensure that nothing else is to big

 /*
   text(mouseX,20,120) //this here is to read the mouse x and y position
   text(mouseY,20,140) //for when it is needed of testing
  /*
   fill(120,120,120,100) //this here is more for demonstration of the "clickbox" for the victim
  rect(victim_X - 120,victim_Y,victim_sizeX/4.5,victim_sizeY/3)
  */
}

// hier zijn alle button functies
function buttonPressed_food(){

  if(game_state == "on"){

  if(bodys > 0){
    food += 25
    bodys --
    clean -= 2
    eat_sound1.play()
 if(food >= 100){
  food = 100
 }
  }
  }
}

function buttonPressed_energy(){
  if(game_state == "on"){
  food -= 5
  energy += 20
  happenis -= 5
  sleep_sound1.play()
  if(energy >= 100){
    energy = 100
  }
}
}

function buttonPressed_clean(){

  if(game_state == "on"){
  energy -= 5
  clean += 10
  clean_sound1.play()
    if(clean >= 100){
    clean = 100
  }
}
}

function buttonPressed_happines(){

  if(game_state == "on"){

  if(minigame1 == true){
    minigame1 = false
  } else {minigame1 = true}

    if(button_hide == false){
    button_clean.show()
    button_food.show()
    button_energy.show()
    button_hide = true
    } else if(button_hide == true){
    button_clean.hide()
    button_food.hide()
    button_energy.hide()
    button_hide = false
  }
}
   
}

//here is the redo button
function buttonPressed_redo(){
  food = 100
  energy = 100
  clean = 100
  happenis = 100
  game_state = "on"
  bodys = 0
}

function buttonPressed_help(){
  if(help_page1 == true){
    help_page1 = false
  } else help_page1 = true
  
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
 happenis -= 10
}

function anim_move_func(){ //this is for the 'animation'
  anim_move++
  if(anim_move > 1){
    anim_move = 0
  }
}

function victim_alive_func(){ //dit hier zorgt ervoor dat de victim kan respawnen
  
  if(victim_dead == true){
    victim_X += round(random(-100,500))//hier maakt het dat warneer het victim respawns, is het dan in een andere locatie
  }
  victim_dead = false
}


// here is the mouse pressed funcions
function mousePressed(){
  
if(game_state == "on"){
  if (minigame1 == true){
    if(mouseX >= victim_X -150 && mouseX <= victim_X &&
      mouseY >= victim_Y && mouseY <= victim_Y + 175
     ){if(victim_dead == false){

     crossbow_sound1.play()
      bodys ++
      energy -= 5
      happenis += 25
      clean -= 2
      if(happenis > 100){
        happenis = 100
      }
      victim_dead = true
    }
    }
  }
}
}
// this is for helping rolf with something
/*
 needle = needle + 50

 if last key pressed is right arrows
 then needle -= 50
 else if last key pressed is left arrow
 then needle += 50

 hornet throw anim

 //this here is for pseudo code to making something

if setinterval passes  i++ 
 i = 150

 
 */ 