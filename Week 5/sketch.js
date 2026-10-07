


let round = 0;

let amount_questions = [
  ,questions1 = {
  vraag : "Wat was de eerste videospelletje ooit gemaakt?",
  quest : ["pong","tennis for 2","Super mario bros","Pac-Man"],
  correct : "tennis for 2"
}
  ,questions2 = {
  vraag : "Wie speel je in The Legend of Zelda?",
  quest : ["Link","Zelda","Ganondorf","Mario",], // you can also use arrays in object data
  correct : "Link"
}
 ,question3 = {
  vraag : "Wie of wat groep ging Command and Conquer spelletjes maken na dat Westwood ging 'dood'?"
  ,quest : ["EA","EA Los Angeles","Blizard","Activision"]
  ,correct : "EA Los Angeles"
 }
 ,question4 ={
  vraag: "Wat speel is geïnspireerd of direct met het animatie style 'rubber-hose'?"
  ,quest :["Paper,Please","Team Fortress 2","Doom","Cuphead"]
  ,correct:"Cuphead"
 }
 ,question5 ={
  vraag:"Voordat Bethesda Fallout 3 ging maken, wie ging Fallout 1 en 2 maken? "
  ,quest:["Interplay Entertainment","Micro Forté","Black Isle Studio","14 Degrees East"]
  ,correct:"Black Isle Studio"
 }]



let button1;
let button2;
let button3;
let button4;

let X = 0;
let Y = 0;
let size_X = 0;
let size_Y = 0;

//here are the variables


function setup() {

  createCanvas(800, 600);

  button1 = createButton(questions1.quest[0])
  button2 = createButton(questions1.quest[1])
  button3 = createButton(questions1.quest[2])
  button4 = createButton(questions1.quest[3])

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
  
  if(questions1.quest[1] == questions1.correct){
    console.log("ok")
  }

  /*for(let i = 0 ; i < questions1.quest.length; i++){
     if(questions1.quest[i] == questions1.correct){
    console.log("yes")
  }
  } */
 
}


