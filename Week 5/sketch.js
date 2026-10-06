

let questions = [[1,2,3,4],["link","zelda","ganondorf","mario"]]

let button1;
let button2;
let button3;
let button4;

let answer = {};

let X = 0;
let Y = 0;
//here are the variables of all the buttons


function setup() {

  createCanvas(800, 600);

  button1 = createButton(questions[0][0])
  button2 = createButton(questions[0][1])
  button3 = createButton(questions[0][2])
  button4 = createButton(questions[0][3])

  button1.size(250, 100)
  button2.size(250, 100)
  button3.size(250, 100)
  button4.size(250, 100)
  
  button1.position(150, 100)
  button2.position(150, 200)
  button3.position(400, 100)
  button4.position(400, 200)

}

function draw() {
  background(100);
} 

function button_pos_size(x,y,size1,size2){

}
