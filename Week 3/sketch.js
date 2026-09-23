function setup() {
  createCanvas(500, 500);
}

let player_turn = 1;
let retry = 0;
let winner = 0;

// Array to store the state of all 9 squares (0 = empty, 1 = player 1, 2 = player 2)
let squares = [
  0, 0, 0, 
  0, 0, 0, 
  0, 0, 0];

let redColor = "#ff0000";
let blueColor = "#0400ff";
let gameState = "playing"

function draw() {
  background(220);
  fill(0);
  textSize(20);

  if (retry == 1) {
    text("retry", 200, 400);
  }

  if (player_turn == 1) {
    text("player 1 turn (Red)", 160, 50);
  } else if (player_turn == 2) {
    text("player 2 turn (Blue)", 160, 50);
  }

  // Draw the 3x3 grid using a loop to avoid messy duplicated code
  let index = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = 100 + col * 85;
      let y = 100 + row * 85;

      // Set color based on who owns the square
      if (squares[index] == 1) {
        fill(redColor);
      } else if (squares[index] == 2) {
        fill(blueColor);
      } else {
        fill(255); // White if empty
      }

      square(x, y, 75, 10);
      index++;
    }
  }
}

function mousePressed() {
  // Check retry button
  if (retry === 1 && mouseX > 175 && mouseX < 175 + 75 && mouseY > 380 && mouseY < 400) {
    squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    player_turn = 1;
    gameState = "playing"
    retry = 0;
    return;
  }

  // Helper to switch turns
  function switchTurn() {
    player_turn = (player_turn === 1) ? 2 : 1;
  }

  // Check clicks for all 9 squares cleanly
  let index = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = 100 + col * 85;
      let y = 100 + row * 85;

      if (squares[index] === 0 && gameState === "playing")  {
        if (mouseX > x && mouseX < x + 75 && mouseY > y && mouseY < y + 75) {
          squares[index] = player_turn;
          switchTurn();
        }
      }
      index++;
    }
  }
  checkWinner()
}

function checkWinner(){

  const win = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (let combo of win) {
      let [a,b,c] = combo

      if (squares[a] !== 0 && squares[a] === squares[b] && squares[a] === squares[c]) {
        gameState = "game_over";
        retry = 1;
        winner = squares[a];
        return;
      }
    }

  if (!squares.includes(0)) {
    gameState = "game_over";
    retry = 1;
    winner = 0; // Tie
  }
}
