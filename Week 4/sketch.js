
/* let testing =[
  ['one','two','three','four','5','6']
,['five','six','seven','eight','9','10'], //deze hier was voor een oefeningen
['nine','ten','eleven','twelve','13','14'],
['holy']] */

let random_number = [];

let amount_vorms = [];

let random_pos = [];
let pos_x = 0;
let pos_y = 0;
let size = 0;

let colour = [];
let r = 0;
let g = 0;
let b = 0;
let transparancy = 0;
let enable = "false";

function setup() {
  createCanvas(800, 600);
  strokeWeight(10)

  
  for(let i = 0; i < 10; i++){
    r = round(random(0,256))
    g = round(random(0,256))
    b = round(random(0,256))
    transparancy = round(random(50,100))
    
  }
  colour.push(r,g,b,transparancy)

  for(let i = 0; i < 5; i++){
    pos_x = round(random(width))
    pos_y = round(random(height))
    size = round(random(9,61))
  }random_pos.push(pos_x,pos_y,size)




}




function draw() {
  background(220);

  /* dit hier was voor een oefeningen
  for(let i = 0; i < testing.length; i++){
    for(let j = 0; j < testing[i].length; j++){ // hier doe je het i boven gaat het testing ook naar boven
      fill(255,255,255,120)
      circle(25 + (35*j), 25 + (35 * i), 25)
      fill(0)
      text("n:" + i + "," + j, 20 + (j*35) , 30 + (i*35))
      text(testing[i][j],20 + (j*35), 40 + (i*35)) 
    }
  }
  text(testing[2][0],300,300)
 */

 fill(colour) //hier is een heel rare exeptie, waar normaal moet je aangeven aan een array van welke nummer je wilt nemen. hier hoeft het gewoon niet, waarom? weet ik niet
 
 if(keyIsDown(8)){ //similiar to key is pressed but simpler
 for(let x = 0; x < 50; x++ ){
  for(let y = 0; y < 50; y++ ){
    square(random_pos[0]*x,random_pos[1]*y,random_pos[2])
  }
 }
 }

}