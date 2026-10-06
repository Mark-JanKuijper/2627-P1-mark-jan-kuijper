


let round = 0;

let questions1 = 
[["pong","tennis for 2","Super mario bros","Pac-Man"]
,["link","zelda","ganondorf","mario"]]

let questions2 = {
  quest1 : "Link",
  quest2 : "Zelda",
quest3 : "Ganondorf",
quest4 : "Mario"}

let button1;
let button2;
let button3;
let button4;

let answer = true

let X = 0;
let Y = 0;
let size_X = 0;
let size_Y = 0;

//here are the variables of all the buttons


function setup() {

  createCanvas(800, 600);

  button1 = createButton(questions1[0][0])
  button2 = createButton(questions1[0][1])
  button3 = createButton(questions1[0][2])
  button4 = createButton(questions1[0][3])

  size_X = 250
  size_Y = 100

  button1.size(size_X, size_Y)
  button2.size(size_X, size_Y)
  button3.size(size_X, size_Y)
  button4.size(size_X, size_Y)
  
  X = 100
  Y = 100

  button1.position(X, Y)

  button2.position(X, Y*2)

  button3.position(X*3.5, Y)

  button4.position(X*3.5, Y*2)

  button1.mousePressed(buttonPressed)
  button2.mousePressed(buttonPressed)
  button3.mousePressed(buttonPressed)
  button4.mousePressed(buttonPressed)

}

function draw() {
  background(100);
} 

function buttonPressed(){
  if(answer == true){
    console.log("true")
  } else if (answer == false){
    console.log("false")
  }
}
