

//here are the variables
let round = 0;

let score = 0; 

let answer = 2;

let imagepath = ['week 5 images/arcade cabinet.jpg','week 5 images/Legend of zelda.avif',
  'week 5 images/Westwood.webp','week 5 images/Rubberhose.jpg','week 5 images/Bethesda.png',
  'week 5 images/sly cooper ghost of tsushima.jpg','week 5 images/naai-machine.webp',
  'week 5 images/SEGA_does_edit.png','week 5 images/Jackbox-Games-Logo.webp',
  'week 5 images/Nintendo.jpg','week 5 images/Thanks.png'
] //hier is waar alle images zijn

let image_quest = []

//hier zijn alle vragen
let amount_questions = [
  questions1 = {
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
  vraag:"Welke studio ging Sly Cooper en Ghost of Tsushima maken?"
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
},ending = {
  vraag: "weldone!"
  ,quest:["the","quiz","has","ended"]
  ,correct:"ended"
}]

let button1;
let button2;
let button3;
let button4;

let X = 0;
let Y = 0;
let size_X = 0;
let size_Y = 0;


//hier for de images
function preload(){
  for (let i = 0; i < imagepath.length; i++){
    image_quest.push(loadImage(imagepath[i]))
  }
}

function setup() {

  createCanvas(800, 600);

  button1 = createButton(amount_questions[round].quest[0])//buttons hier hebben de text van de vragen
  button2 = createButton(amount_questions[round].quest[1])
  button3 = createButton(amount_questions[round].quest[2])
  button4 = createButton(amount_questions[round].quest[3])

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

  X = 250
  Y = 290
  size_X = 180
  size_Y = 180

  if(round >= 10){ //this ensure that the quiz doesnt bug out when you click on the quest after it ends
    round = 10 // or wel it stil does bug out just that you dont see it bug out
  }


  image(image_quest[round],X,Y,size_X,size_Y)

  fill(0)

  textSize(15)

  text(amount_questions[round].vraag,5,500)//vraag hier

  text("score:"+score,20,20)//score

  if(answer == true){//dit hier laat zien of je de correct optie hebt gekozen
    text("true",20,40)
  } else if (answer == false){
    text("false",20,40)
  }



} 

function buttonPressed1(){
  //hier checkt het button of de quest dezelde is als het antwoord 
  if(amount_questions[round].quest[0] == amount_questions[round].correct){
    answer = true
    round ++
    score++
    
  } else round++ ,answer = false

  button1.html(amount_questions[round].quest[0])//hier kan je een '.html' om de buttons text te veranderen
  button2.html(amount_questions[round].quest[1])
  button3.html(amount_questions[round].quest[2])
  button4.html(amount_questions[round].quest[3])
}

function buttonPressed2(){
   if(amount_questions[round].quest[1] == amount_questions[round].correct){
    answer = true
    round++
    score++
  }else round++,answer = false

  button1.html(amount_questions[round].quest[0])
  button2.html(amount_questions[round].quest[1])
  button3.html(amount_questions[round].quest[2])
  button4.html(amount_questions[round].quest[3])
}

function buttonPressed3(){
   if(amount_questions[round].quest[2] == amount_questions[round].correct){
    answer = true
    round++
    score++
  }else round++,answer = false

  button1.html(amount_questions[round].quest[0])
  button2.html(amount_questions[round].quest[1])
  button3.html(amount_questions[round].quest[2])
  button4.html(amount_questions[round].quest[3])
}

function buttonPressed4(){
   if(amount_questions[round].quest[3] == amount_questions[round].correct){
    answer = true
    round++
    score++
  }else round++,answer = false

  button1.html(amount_questions[round].quest[0])
  button2.html(amount_questions[round].quest[1])
  button3.html(amount_questions[round].quest[2])
  button4.html(amount_questions[round].quest[3])
}


