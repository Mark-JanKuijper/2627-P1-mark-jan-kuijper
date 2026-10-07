
let kleur = ["red","green","blue","orange","purple","yellow"];
let kleurCallback = [buttonRed, buttonGreen, buttonBlue, buttonOrange, buttonPurple, buttonYellow]

let bestanden = ["elephant", "giraffe", "hippo", "monkey",
   "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen = [];

let knop1;

let backGroundColor = 220;

let imagPaths = ["animals/panda.png", "animals/penguin.png", "animals/giraffe.png", "animals/snake.png", "animals/rabbit.png", "animals/monkey.png" ]

let loadedImages = [];

// let kleurset = [ { color: "red", callBack: 'buttonRed' }, { color: "green", callback: 'buttonGreen'  }] 

function preload()
{
  for(let i = 0; i < imagPaths.length; i++){
  loadedImages.push( loadImage(imagPaths[i]) ) ;
  }
}

function setup() {
  createCanvas(800, 400);

  let voorbeeld;
 voorbeeld = createButton('hello'); //make sure the button is set up in the setup otherwise it wont work

 voorbeeld.position(20,20)

  for(let i = 0; i < kleur.length; i++){
    knop1 = createImg(imagPaths[i]);//createButton(kleur[i])//you can put two parameters in a button
    knoppen.push(knop1)
    knoppen[i].position(100+(i*55),100)
    knoppen[i].size(50,50)
    knoppen[i].mouseClicked( kleurCallback[i] )
    //knoppen[i].style("background-image", "url:"+imagPaths[i]);
    
  } 

  
}

function draw() {
  
  background(backGroundColor);
  
  //image(penguin, 100, 100);
}

function buttonRed()
{
  backGroundColor = kleur[0];
}

function buttonGreen()
{
  backGroundColor = kleur[1];
}

function buttonBlue()
{
  backGroundColor = kleur[2];
}

function buttonOrange()
{
  backGroundColor = kleur[3];
}

function buttonPurple()
{
  backGroundColor = kleur[4];
}

function buttonYellow()
{
  backGroundColor = kleur[5];
}

