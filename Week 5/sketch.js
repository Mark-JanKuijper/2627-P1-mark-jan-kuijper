


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
 }
,question6 ={
  vraag:"Welke studio ging Sly Cooper en Ghost of Yotei maken?"
  ,quest:["Sucker Punch","Sony","Naughty Dog","Ubisoft"]
  ,correct:"Sucker Punch",
}
,question7 ={
  vraag:"Je kon een naai machine gebruiken met wat?"
  ,quest:["Playstation 2","Game Boy","Xbox 360","Playstation Vita"]
  ,correct:"Game Boy"
}
,question8 ={
  vraag:"____ does wat Nintendon't, welke bedrijf ging dit slogan gebruiken?"
  ,quest:["Activision","Xbox","Playstation","Sega"]
  ,correct:"Sega"
}
,question9 ={
  vraag:"Waarneer ging het bedrijf Jackbox games zijn eerste spelletje uitbrengen? "
  ,quest:["2015","1999","1995","2018"]
  ,correct:"1995"
}
,question10 ={
  vraag:"Wat ging Nintendo eerst maken?"
  ,quest:["Super Mario","Clothing","Donkey Kong","Hanafuda kaarten"]
  ,correct:"Hanafuda kaarten"
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

  button1.mousePressed(buttonPressed1)
  button2.mousePressed(buttonPressed2)
  button3.mousePressed(buttonPressed3)
  button4.mousePressed(buttonPressed4)


}

function draw() {
  background(100);

} 

function buttonPressed1(){
  
  if(questions1.quest[1] == questions1.correct){
    console.log("ok")
  }
}

function buttonPressed2(){
}

function buttonPressed3(){

}

function buttonPressed4(){

}


