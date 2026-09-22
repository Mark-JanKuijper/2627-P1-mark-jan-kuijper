function setup() {
  createCanvas(500, 500);
}

let state_square = 0;
let player_turn = 0;


//variables

function draw() {
  background(220);
 
  //the code you see underneath here is copied
  //is from the mouse position en hover help page
 if(state_square == 1){
  if(mouseX > 100 && mouseX < 100 + 75 &&
    mouseY > 100 && mouseY < 100 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 100 && mouseX < 100 + 75 &&
    mouseY > 100 && mouseY < 100 + 75
  ){
    fill(255,0,0)
  }
 } 
 square(100,100,75,10)
 

 if(state_square == 1){
  if(mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
    mouseY > 100 && mouseY < 100 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
    mouseY > 100 && mouseY < 100 + 75
  ){
    fill(255,0,0)
  }
 } 
 square(175 + 10,100,75,10)


 if(state_square == 1){
  if(mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
    mouseY > 100 && mouseY < 100 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
    mouseY > 100 && mouseY < 100 + 75
  ){
    fill(255,0,0)
  }
 } 
 square(250 + 20,100,75,10)


 //eerste rij

if(state_square == 1){
  if(mouseX > 100 && mouseX < 100 + 75 &&
    mouseY > 175 + 10 && mouseY < 175 + 10 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 100 && mouseX < 100 + 75 &&
    mouseY > 175 + 10 && mouseY < 175 + 10 + 75
  ){
    fill(255,0,0)
  }
 } 
 square(100,175 + 10,75,10)



 if(state_square == 1){
  if(mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
    mouseY > 175 + 10 && mouseY < 175 + 10 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
    mouseY > 175 + 10 && mouseY < 175 + 10 + 75
  ){
    fill(255,0,0)
  }
 } 

 
 square(175 + 10,175 + 10,75,10)

  if(state_square == 1){
  if(mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
    mouseY > 175 + 10&& mouseY < 175 + 10 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 250 + 20 && mouseX < 250 + 20 +75 &&
    mouseY > 175 + 10 && mouseY < 175 + 10 +75
  ){
    fill(255,0,0)
  }
 } 
 square(250 + 20,175 + 10,75,10)
 //tweede rij

  if(state_square == 1){
  if(mouseX > 100 && mouseX < 100 + 75 &&
    mouseY > 250 + 20 && mouseY < 250 + 20 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 100 && mouseX < 100 + 75 &&
    mouseY > 250 + 20 && mouseY < 250 + 75 + 20
  ){
    fill(255,0,0)
  }
 } 
 square(100,250 + 20,75,10)

  if(state_square == 1){
  if(mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
    mouseY > 250 + 20 && mouseY < 250 + 20 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 175 + 10 && mouseX < 175 + 75 + 10 &&
    mouseY > 250 + 20&& mouseY < 250 + 20 + 75
  ){
    fill(255,0,0)
  }
 } 

 square(175 + 10,250 + 20,75,10)


  if(state_square == 1){
  if(mouseX > 250 && mouseX < 250 + 75 &&
    mouseY > 250 && mouseY < 250 + 75
  ){
    fill(0,255,0)
  }
 } else if(state_square == 2){
  if(mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
    mouseY > 250 + 20 && mouseY < 250 + 20 + 75
  ){
    fill(255,0,0)
  }
 } 
 square(250 + 20,250 + 20,75,10)

 //derde rij


}

function mouseClicked(){
  if(state_square == 0){
    
    state_square = 1
  } else if(state_square == 1){
    
    state_square = 2
  } else if(state_square == 2){
    
    state_square = 1
  }

}