function setup() {
  createCanvas(500, 500);
}

let state_square = 0;
let player_turn = 0;

let square1 = 0;
let square2 = 0;
let square3 = 0;
let square4 = 0;
let square5 = 0;
let square6 = 0;
let square7 = 0;
let square8 = 0;
let square9 = 0;

//variables

function draw() {
  background(220);

  //the code you see underneath here is copied
  //is from the mouse position en hover help page

 if(mouseX > 100 && mouseX < 100 + 75 &&
     mouseY > 100 && mouseY < 100 + 75
    ){
      
    }


  square(100, 100, 75, 10)
  fill(255)

  if (square2 == 1) {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      fill(0, 100, 0)
    }
  } else if (square2 == 2) {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      fill(100, 100, 0)
    }
  }

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


  square(175 + 10, 100, 75, 10)
  fill(255)

  if (square3 == 1) {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      fill(0, 255, 0)
    }
  } else if (square3 == 2) {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      fill(255, 0, 0)
    }
  }
  square(250 + 20, 100, 75, 10)
  fill(255)

  //eerste rij

  if (square4 == 1) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 10 + 75
    ) {
      fill(0, 0, 255)
    }
  } else if (square4 == 2) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 10 + 75
    ) {
      fill(50, 255, 0)
    }
  }
  square(100, 175 + 10, 75, 10)
  fill(255)

  if (square5 == 1) {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 10 + 75
    ) {
      fill(0, 255, 100)
    }
  } else if (square5 == 2) {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 10 + 75
    ) {
      fill(120, 0, 120)
    }
  }

  square(175 + 10, 175 + 10, 75, 10)
  fill(255)

  if (square6 == 1) {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 10 + 75
    ) {
      fill(0, 255, 0)
    }
  } else if (square6 == 2) {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 10 + 75
    ) {
      fill(255, 0, 0)
    }
  }

  square(250 + 20, 175 + 10, 75, 10)
  fill(255)
  //tweede rij

  if (square7 == 1) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 250 + 20 && mouseY < 250 + 20 + 75
    ) {
      fill(0, 255, 200)
    }
  } else if (square7 == 2) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 250 + 20 && mouseY < 250 + 75 + 20
    ) {
      fill(255, 200, 0)
    }
  }

  square(100, 250 + 20, 75, 10)
  fill(255)

  if (square8 == 1) {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 250 + 20 && mouseY < 250 + 20 + 75
    ) {
      fill(110, 255, 110)
    }
  } else if (square8 == 2) {
    if (mouseX > 175 + 10 && mouseX < 175 + 75 + 10 &&
      mouseY > 250 + 20 && mouseY < 250 + 20 + 75
    ) {
      fill(100, 110, 110)
    }
  }

  square(175 + 10, 250 + 20, 75, 10)
  fill(255)


  if (square9 == 1) {
    if (mouseX > 250 + 20 && mouseX < 250 + 75 + 20 &&
      mouseY > 250 + 20 && mouseY < 250 + 75 + 20
    ) {
      fill(0, 0, 0)
    }
  } else if (square9 == 2) {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 250 + 20 && mouseY < 250 + 20 + 75
    ) {
      fill(255, 255, 255)
    }
  }

  square(250 + 20, 250 + 20, 75, 10)
  fill(255)

  //derde rij
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
  if(mouseX > 250 + 20 && mouseX < 250 + 75 + 20 &&
    mouseY > 250 + 20 && mouseY < 250 + 75 + 20
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

function mouseClicked() {
  if (state_square == 0) {

    state_square = 1
  } else if (state_square == 1) {

    state_square = 2
  } else if (state_square == 2) {

    state_square = 1
  }

  if (state_square == 0) {
    
    square2 = 1
    square3 = 1
    square4 = 1
    square5 = 1
    square6 = 1
    square7 = 1
    square8 = 1
    square9 = 1
  } else if (state_square == 1) {
    
    square2 = 2
    square3 = 2
    square4 = 2
    square5 = 2
    square6 = 2
    square7 = 2
    square8 = 2
    square9 = 2
  } else if (square1 == 2) {
    
    square2 = 1
    square3 = 1
    square4 = 1
    square5 = 1
    square6 = 1
    square7 = 1
    square8 = 1
    square9 = 1
  if(state_square == 0){

    square1 = 1
  } else if (state_square == 1){

    square1 = 2
  } else if (square1 == 2){

    square1 = 1
}
  }
}