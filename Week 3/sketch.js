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

let red = "#ff0000";
let blue = "#0400ff"
//variables

function draw() {
  background(220);

  //the code you see underneath here is copied
  //is from the mouse position en hover help page

  if (square1 == 1) {
    fill(red)
  } else if (square1 == 2) {
    fill(blue)
  }
  // 

  square(100, 100, 75, 10)
  fill(255)

  if (square2 == 1) {
    fill(255, 250, 0)
  } else if (square2 == 2) {
    fill(0, 0, 255)
  }

  square(175 + 10, 100, 75, 10)
  fill(255)

  if (square3 == 1) {
    fill(255, 0, 255)
  } else if (square3 == 2) {
    fill(255, 0, 100)
  }

  square(250 + 20, 100, 75, 10)
  fill(255)

  //eerste rij

  if (square4 == 1) {
    fill(0, 100, 255)
  } else if (square4 == 2) {
    fill(100, 0, 100)
  }

  square(100, 175 + 10, 75, 10)
  fill(255)

   if (square5 == 1) {
    fill(0, 100, 255)
  } else if (square5 == 2) {
    fill(100, 0, 100)
  }

  square(175 + 10, 175 + 10, 75, 10)
  fill(255)

  if (square6 == 1) {
    fill(0, 100, 255)
  } else if (square6 == 2) {
    fill(100, 0, 100)
  }


  square(250 + 20, 175 + 10, 75, 10)
  fill(255)
  //tweede rij

  if (square7 == 1) {
    fill(0, 100, 255)
  } else if (square7 == 2) {
    fill(100, 0, 100)
  }

  square(100, 250 + 20, 75, 10)
  fill(255)


  if (square8 == 1) {
    fill(0, 100, 255)
  } else if (square8 == 2) {
    fill(100, 0, 100)
  }


  square(175 + 10, 250 + 20, 75, 10)
  fill(255)


  if (square9 == 1) {
    fill(0, 100, 255)
  } else if (square9 == 2) {
    fill(100, 0, 100)
  }

  square(250 + 20, 250 + 20, 75, 10)
  fill(255)

  //derde rij


}

function mousePressed() {
  if (player_turn == 0) {

    player_turn = 1
  } else if (player_turn == 1) {

    player_turn = 2
  } else if (player_turn == 2) {

    player_turn = 1
  }


  //when the mouse is pressed it
  //checks where the mouse is
  //if its in the right place it colors it
  //
  if (square1 == 0) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      square1 = 1
    }
    else if (square1 == 1) {
      if (mouseX > 100 && mouseX < 100 + 75 &&
        mouseY > 100 && mouseY < 100 + 75
      ) {
        square1 = 2
      }
    } else if (square1 == 2) {
      square1 = 1
    }
  }
  //1

  if (square2 == 0) {
    if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      square2 = 1
    }
    else if (square2 == 1) {
      if (mouseX > 250 + 10 && mouseX < 250 + 10 + 75 &&
        mouseY > 100 && mouseY < 100 + 75
      ) {
        square2 = 2
      }
    } else if (square2 == 2) {
      square2 = 1
    }
  }
  //2

  if (square3 == 0) {
    if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
      mouseY > 100 && mouseY < 100 + 75
    ) {
      square3 = 1
    }
    else if (square3 == 1) {
      if (mouseX > 250 + 10 && mouseX < 250 + 10 + 75 &&
        mouseY > 100 && mouseY < 100 + 75
      ) {
        square3 = 2
      }
    } else if (square3 == 2) {
      square3 = 1
    }
  }
  //3
  if (square4 == 0) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 175 + 10 && mouseY < 175 + 75 + 10
    ) {
      square4 = 1
    }
    else if (square4 == 1) {
      if (mouseX > 100  && mouseX < 100 + 75 &&
        mouseY > 175 + 10 && mouseY < 100 + 75 + 10
      ) {
        square4 = 2
      }
    } else if (square4 == 2) {
      square4 = 1
    }
  }
    //4
    if (square5 == 0) {
    if (mouseX > 175 + 10 && mouseX < 175 + 75 + 10 &&
      mouseY > 175 + 10 && mouseY < 175 + 75 + 10
    ) {
      square5 = 1
    }
    else if (square5 == 1) {
      if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
        mouseY > 175 + 10 && mouseY < 175 + 75 + 10
      ) {
        square5 = 2
      }
    } else if (square5 == 2) {
      square5 = 1
    }
  }
  //5
 if (square6 == 0) {
    if (mouseX > 250 + 20  && mouseX < 250 + 75 + 20 &&
      mouseY > 175 + 10 && mouseY < 175 + 75 + 10
    ) {
      square6 = 1
    }
    else if (square6 == 1) {
      if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
        mouseY > 175 + 10 && mouseY < 175 + 75 + 10
      ) {
        square6 = 2
      }
    } else if (square6 == 2) {
      square6 = 1
    }
  }
 // square 6

  if (square7 == 0) {
    if (mouseX > 100 && mouseX < 100 + 75 &&
      mouseY > 250 + 10 && mouseY < 250 + 75 + 10
    ) {
      square7 = 1
    }
    else if (square7 == 1) {
      if (mouseX > 100 + 20 && mouseX < 250  + 75 &&
        mouseY > 250 + 20 && mouseY < 250 + 75 + 20
      ) {
        square7 = 2
      }
    } else if (square7 == 2) {
      square7 = 1
    }
  } // 7

    if (square8 == 0) {
    if (mouseX > 175 + 10 && mouseX < 175 + 75 + 10&&
      mouseY > 250 + 20 && mouseY < 250 + 75 + 20
    ) {
      square8 = 1
    }
    else if (square8 == 1) {
      if (mouseX > 175 + 10 && mouseX < 175 + 10 + 75 &&
        mouseY > 250 + 20 && mouseY < 250 + 75 + 20
      ) {
        square8 = 2
      }
    } else if (square8 == 2) {
      square8 = 1
    }
  }
  //8

    if (square9 == 0) {
    if (mouseX > 250 + 20 && mouseX < 250 + 75 + 10&&
      mouseY > 250 + 20 && mouseY < 250 + 75 + 20
    ) {
      square9 = 1
    }
    else if (square9 == 1) {
      if (mouseX > 250 + 20 && mouseX < 250 + 20 + 75 &&
        mouseY > 250 + 20 && mouseY < 250 + 75 + 20
      ) {
        square9 = 2
      }
    } else if (square9 == 2) {
      square9 = 1
    }
  }
 //9
}