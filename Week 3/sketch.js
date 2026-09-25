function setup() {
  createCanvas(500, 500);
}

//variables
let state_square = 0;
let player_turn = 0;
let retry = 0;
let win = 0;
let game_state = "playing";

let square1 = 0;
let square2 = 0;
let square3 = 0;
let square4 = 0;
let square5 = 0;
let square6 = 0;
let square7 = 0;
let square8 = 0;
let square9 = 0;

let line1 = "off"
let line2 = "off"
let line3 = "off"
let line4 = "off"
let line5 = "off"
let line6 = "off"
let line7 = "off"
let line8 = "off"

let red = "#ff0000";
let blue = "#0400ff";


function draw() {
  //backround changes color based on who turn it is
  if(player_turn == 0){
    background(255,0,0,20);
  } else if(player_turn == 1){
    background(0,0,255,20)
  }
  
  strokeWeight(5)
  textSize(30)
  fill(0)
  
  

  if (win == 1) {
    text(" player 1 wins", 40, 50)
  } else if (win == 2) {
    text("player 2 wins", 40, 50)
  } else if (win == 3) {
    text("its a tie", 40, 50)
  }

   textSize(20)
  if (retry == 1) {
    text("retry", 300, 400)
  }



  if (player_turn == 0) {
    text("player 1 turn", 20, 20)
  } else if (player_turn == 1) {
    text("player 2 turn", 20, 20)
  }

  // here is one of the squares.
  // if it is 1 it is red
  // if it is 2 it is blue

  //eerste rij

  fill(255)
  if (square1 == 1) {
    fill(red)
  } else if (square1 == 2) {
    fill(blue)
  }

  square(100, 100, 75, 10) //make sure that the square is at the end, so that it changes to the correct color
  fill(255) // this here makes sure that one color change doesnt change everything else

  if (square2 == 1) {
    fill(red)
  } else if (square2 == 2) {
    fill(blue)
  }

  square(175 + 10, 100, 75, 10)
  fill(255)

  if (square3 == 1) {
    fill(red)
  } else if (square3 == 2) {
    fill(blue)
  }

  square(250 + 20, 100, 75, 10)
  fill(255)

 //tweede rij

  if (square4 == 1) {
    fill(red)
  } else if (square4 == 2) {
    fill(blue)
  }

  square(100, 175 + 10, 75, 10)
  fill(255)

  if (square5 == 1) {
    fill(red)
  } else if (square5 == 2) {
    fill(blue)
  }

  square(175 + 10, 175 + 10, 75, 10)
  fill(255)

  if (square6 == 1) {
    fill(red)
  } else if (square6 == 2) {
    fill(blue)
  }


  square(250 + 20, 175 + 10, 75, 10)
  fill(255)
  
 //derde rij
  if (square7 == 1) {
    fill(red)
  } else if (square7 == 2) {
    fill(blue)
  }

  square(100, 250 + 20, 75, 10)
  fill(255)


  if (square8 == 1) {
    fill(red)
  } else if (square8 == 2) {
    fill(blue)
  }


  square(175 + 10, 250 + 20, 75, 10)
  fill(255)


  if (square9 == 1) {
    fill(red)
  } else if (square9 == 2) {
    fill(blue)
  }

  square(250 + 20, 250 + 20, 75, 10)
  fill(255)

 //here are the lines
 //they show up when there is a three in a row.

  if(line1 == "on"){
    line(100+(75/2),90,100+(75/2),360)
  } if(line2 == "on"){
    line(185+(75/2),90,185+(75/2),360) // colums
  }if(line3 == "on"){
    line(270+(75/2),90,270+(75/2),360)


  }if(line4 == "on"){
    line(70,100+(75/2),370,100+(75/2))
  }if(line5 == "on"){
    line(70,185+(75/2),370,185+(75/2)) // rows
  }if(line6 == "on"){
   line(70,270+(75/2),370,270+(75/2))


  }if(line7 == "on"){
    line(90,90,350,350) //diagonaal
  }if(line8 == "on"){
    line(350,95,95,350)
  }

}

function mousePressed() {

  //when the mouse is pressed it
  //checks where the mouse is
  //if its in the right place it colors it
  // checks if the square is 'empty'
  // checks then if the mouse is in the correct position
  // then sees if the player turn is 0 or 1
  // and fills the square accordingly
  // also you can just do 1 if statement and then do the actions

  //1
  if (square1 == 0 && game_state == "playing") {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      if (player_turn == 0) {
        square1 = 1
        player_turn++
      } else if (player_turn == 1) {
        square1 = 2
        player_turn--
      }
    }

    
  }

  //2
  if (square2 == 0 && game_state == "playing") {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      if (player_turn == 0) {
        square2 = 1
        player_turn++
      } else if (player_turn == 1) {
        square2 = 2
        player_turn--
      }

    }
  }
  
  //3
  if (square3 == 0 && game_state == "playing") {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      if (player_turn == 0) {
        square3 = 1
        player_turn++
      } else if (player_turn == 1) {
        square3 = 2
        player_turn--
      }

    }
  }

  //4
  if (square4 == 0 && game_state == "playing") {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 75 + 10
    ) {
      if (player_turn == 0) {
        square4 = 1
        player_turn++
      } else if (player_turn == 1) {
        square4 = 2
        player_turn--
      }
    }
  }

  //5
  if (square5 == 0 && game_state == "playing") {
    if (mouseX > 175 + 10 && mouseX < 175 + 75 + 10 &&
      mouseY > 175 + 10 && mouseY < 175 + 75 + 10
    ) {
      if (player_turn == 0) {
        square5 = 1
        player_turn++
      } else if (player_turn == 1) {
        square5 = 2
        player_turn--
      }
    }
  }

  // 6
  if (square6 == 0 && game_state == "playing") {
    if (mouseX > 250 + 20 && mouseX < 250 + 75 + 20 &&
      mouseY > 175 + 10 && mouseY < 175 + 75 + 10
    ) {
      if (player_turn == 0) {
        square6 = 1
        player_turn++
      } else if (player_turn == 1) {
        square6 = 2
        player_turn--
      }
    }
  }
  
  // 7
  if (square7 == 0 && game_state == "playing") {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 250 + 10 && mouseY < 250 + 75 + 10
    ) {
      if (player_turn == 0) {
        square7 = 1
        player_turn++
      } else if (player_turn == 1) {
        square7 = 2
        player_turn--
      }
    }
  } 

  //8
  if (square8 == 0 && game_state == "playing") {
    if (mouseX > 175 + 10 && mouseX < 175 + 75 + 10 &&
      mouseY > 250 + 20 && mouseY < 250 + 75 + 20
    ) {
      if (player_turn == 0) {
        square8 = 1
        player_turn++
      } else if (player_turn == 1) {
        square8 = 2
        player_turn--
      }
    }
  }
  
  //9
  if (square9 == 0 && game_state == "playing") {
    if (mouseX > 250 + 20 && mouseX < 250 + 75 + 10 &&
      mouseY > 250 + 20 && mouseY < 250 + 75 + 20
    ) {
      if (player_turn == 0) {
        square9 = 1
        player_turn++
      } else if (player_turn == 1) {
        square9 = 2
        player_turn--
      }
    }
  }
  

  //here checks if when the squares are filled
  // if there is a possibility that some one won
  // it does this by checking every combination of wins
  // and who won
  if (square1 == 1 && square2 == 1 && square3 == 1 ||
    square4 == 1 && square5 == 1 && square6 == 1 || // rows
    square7 == 1 && square8 == 1 && square9 == 1 ||

    square1 == 1 && square5 == 1 && square9 == 1 ||
    square3 == 1 && square5 == 1 && square7 == 1 || // diagonal

    square1 == 1 && square4 == 1 && square7 == 1 ||
    square2 == 1 && square5 == 1 && square8 == 1 || // colums
    square3 == 1 && square6 == 1 && square9 == 1
  ) {
    game_state = "over"
    win = 1
    retry = 1
  } else if (square1 == 2 && square2 == 2 && square3 == 2 ||
    square4 == 2 && square5 == 2 && square6 == 2 || // rows
    square7 == 2 && square8 == 2 && square9 == 2 ||

    square1 == 2 && square5 == 2 && square9 == 2 ||
    square3 == 2 && square5 == 2 && square7 == 2 || // diagonal

    square1 == 2 && square4 == 2 && square7 == 2 ||
    square2 == 2 && square5 == 2 && square8 == 2 || // colums
    square3 == 2 && square6 == 2 && square9 == 2) {
    game_state = "over"
    win = 2
    retry = 1
    
    // this code underneath makes the ties possible
    // it essentialy checks if all the squares are NOT 0 or "empty"
  } else if (square1 != 0 && square2 != 0 && square3 != 0
    && square4 != 0 && square5 != 0 && square6 != 0
    && square7 != 0 && square8 != 0 && square9 != 0
  ) {
    win = 3
    retry = 1
  }
    // win

   //this here is for the lines that show of where someone won.
   if(square1 == 1 && square4 == 1 && square7 ==1 || square1 == 2 && square4 == 2 && square7 == 2){
    line1 = "on"
   } if(square2 == 1 && square5 == 1 && square8 ==1 || square2 == 2 && square5 == 2 && square8 == 2){
    line2 = "on"
   } if(square3 == 1 && square6 == 1 && square9 ==1 || square3 == 2 && square6 == 2 && square9 == 2){
    line3 = "on"

  } if(square1 == 1 && square2 == 1 && square3 ==1 || square1 == 2 && square2 == 2 && square3 == 2){
    line4 = "on"
  } if(square4 == 1 && square5 == 1 && square6 ==1 || square4 == 2 && square5 == 2 && square6 == 2){
    line5 = "on"
  } if(square7 == 1 && square8 == 1 && square9 ==1 || square7 == 2 && square8 == 2 && square9 == 2){
    line6 = "on"
  } 
  if(square1 == 1 && square5 == 1 && square9 ==1 || square1 == 2 && square5 == 2 && square9 == 2){
    line7 = "on"
  } if(square3 == 1 && square5 == 1 && square7 ==1 || square3 == 2 && square5 == 2 && square7 == 2){
    line8 = "on"
  }


  //rety button
  if (retry == 1) {
    if (mouseX > 300 && mouseX < 340 &&
      mouseY > 380 && mouseY < 400
    ) {
      retry = 0
      square1 = 0
      square2 = 0
      square3 = 0
      square4 = 0
      square5 = 0
      square6 = 0
      square7 = 0
      square8 = 0
      square9 = 0

      line1 = 0;
      line2 = 0;
      line3 = 0;
      line4 = 0;
      line5 = 0;
      line6 = 0;
      line7 = 0;
      line8 = 0;

      player_turn = 0
      win = 0
      game_state = "playing"
    }
  }

  
    // old notes or important
    // player turns
    // make sure it is at the bottom
    // otherwise it wil do stuff you dont want it to do
    // order of things is incredubly important
}   