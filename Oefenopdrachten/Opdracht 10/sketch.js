
let kleur = ["red","green","blue","orange","purple","yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey",
   "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let knoppen = [];

let knop1;

function setup() {
  createCanvas(800, 400);

  let voorbeeld;
 voorbeeld = createButton('hello'); //make sure the button is set up in the setup otherwise it wont work

 voorbeeld.position(20,20)

  for(let i = 0; i < kleur.length; i++){
    knop1 = createButton(kleur[i]),(i)//you can put two parameters in a button
    knoppen.push(knop1)
    knoppen[i].position(100+(i*55),100)
    knoppen[i].size(50,50)
  } 
  
}

function draw() {


  background(220);


}

function mousePressed(){
  for(let i = 0; i < kleur.length; i++)
  if(knoppen)
}
