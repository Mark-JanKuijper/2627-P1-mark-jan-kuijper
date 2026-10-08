
let kleur = ["red","green","blue","orange","purple","yellow"];

let kleurCallback = [buttonRed, buttonGreen, buttonBlue, buttonOrange, buttonPurple, buttonYellow];

let dierenCallback = [button_elephant,button_giraffe,button_hippo,button_monkey,button_panda
  ,button_parrot,button_penguin,button_pig,button_rabbit,button_snake,
]

let bestanden = ["elephant", "giraffe", "hippo", "monkey",
   "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
   
let knoppen = [];

let knop1;

let backGroundColor = 220;

let imagPaths = ["animals/panda.png", "animals/penguin.png", "animals/giraffe.png", "animals/snake.png", "animals/rabbit.png", "animals/monkey.png" ]

let loadedImages = [];

let afbeeldingen = [];

let knopdier = [];

let knoppen2 = [];

// let kleurset = [ { color: "red", callBack: 'buttonRed' }, { color: "green", callback: 'buttonGreen'  }] 
/*
function preload()
{
  for(let i = 0; i < imagPaths.length; i++){
  loadedImages.push( loadImage(imagPaths[i]) ) ;
  }
}
 */

let voorbeeld2

let loaded_animals = [];

function preload(){
  for(let i = 0; i < bestanden.length; i++){
    
    afbeeldingen.push("animals/" + (bestanden[i]) + ".png")
    loaded_animals.push(loadImage(afbeeldingen[i]))
  }
  voorbeeld2 = loadImage('animals/snake.png')
}

function setup() {
  createCanvas(800, 400);

  let voorbeeld;
 voorbeeld = createButton('hello'); //make sure the button is set up in the setup otherwise it wont work

 voorbeeld.position(20,20)

  for(let i = 0; i < kleur.length; i++){
    knop1 =createButton(kleur[i]) ;//createImg(imagPaths[i])//you can put two parameters in a button
    knoppen.push(knop1)
    knoppen[i].position(100+(i*55),100)
    knoppen[i].size(50,50)
    knoppen[i].mouseClicked( kleurCallback[i] )
    //knoppen[i].style("background-image", "url:"+imagPaths[i]);
    
  } 

  for(let i = 0; i < afbeeldingen.length; i++){
    knopdier =createButton(afbeeldingen[i])
    knoppen2.push(knopdier)
    knoppen2[i].position(100+(i*55),300)
    knoppen2[i].size(50,50)
    knoppen2[i].mouseClicked(dierenCallback[i])
  }
  
}



function draw() {
  
  background(backGroundColor);
  
  //image(penguin, 100, 100);

  image(voorbeeld2,20,50,20,20,)

  image(loaded_animals[0],200,200,20,20)

 
}



function buttonRed()
{
  
  backGroundColor = kleur[0];
   for(let i = 0; i < kleur.length; i++){
    knoppen[i].show()
  }

 if(backGroundColor == kleur[0]){
    knoppen[0].hide()
  } 
 

}

function buttonGreen()
{
    for(let i = 0; i < kleur.length; i++){
    knoppen[i].show()
  }
  
  backGroundColor = kleur[1];
  if(backGroundColor == kleur[1]){
    knoppen[1].hide()
  }
}

function buttonBlue()
{
    for(let i = 0; i < kleur.length; i++){
    knoppen[i].show()
  }
  
  backGroundColor = kleur[2];
  if(backGroundColor == kleur[2]){
    knoppen[2].hide()
  }
}

function buttonOrange()
{
    for(let i = 0; i < kleur.length; i++){
    knoppen[i].show()
  }
  
  backGroundColor = kleur[3];
  if(backGroundColor == kleur[3]){
    knoppen[3].hide()
  }
}

function buttonPurple()
{
    for(let i = 0; i < kleur.length; i++){
    knoppen[i].show()
  }
  
  backGroundColor = kleur[4];
  if(backGroundColor == kleur[4]){
    knoppen[4].hide()
  }
}

function buttonYellow()
{
    for(let i = 0; i < kleur.length; i++){
    knoppen[i].show()
  }
  
  backGroundColor = kleur[5];
  if(backGroundColor == kleur[5]){
    knoppen[5].hide()
  }
}

// dieren knoppen

function button_elephant(){

    for(let i = 0; i < loaded_animals.length; i++){
    if(loaded_animals[i] != loaded_animals[0]){
      loaded_animals[i] = loaded_animals[0]

    }else loaded_animals[i] = loaded_animals[0]
  } 

}

function button_giraffe(){

  for(let i = 0; i < loaded_animals.length; i++){
    if(loaded_animals[i] != loaded_animals[1]){
      loaded_animals[i] = loaded_animals[1]

    }else loaded_animals[i] = loaded_animals[0]
  }

}
function button_hippo(){

  for(let i = 0; i < loaded_animals.length; i++){
    if(loaded_animals[i] != loaded_animals[2]){
      loaded_animals[i] = loaded_animals[2]

    }else loaded_animals[i] = loaded_animals[0]
  }

}

function button_monkey(){
  
}
function button_panda(){
  
}
function  button_parrot(){
  
}
function  button_penguin(){
  
}
function  button_pig(){
  
}
function  button_rabbit(){
  
}
function  button_snake(){
  
}
