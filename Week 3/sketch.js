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
 
 square(100,100,75)

 square(175,100,75)

 square(250,100,75)
 //eerste rij

 square(100,175,75)

 square(175,175,75)

 square(250,175,75)
 //tweede rij

 square(100,250,75)

 square(175,250,75)

 square(250,250,75)
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