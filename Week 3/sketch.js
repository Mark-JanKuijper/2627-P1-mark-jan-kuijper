function setup() {
  createCanvas(500, 500);
}

let state_square = 0;
let player_turn = 0;



//variables

function draw() {
  background(220);

  
 square(100,100,75)

 square(175,100,75)

 square(250,100,75)
 //eerste rij

 square(100,175,75)

 square(175,175,75)

 square(250,175,75)
 //tweede rij

 square(100,250,75)

 square(175,250,75)

 square(250,250,75)
 //derde rij


}

function mouseClicked(){
  if(state_square == 0){
    fill(180)
    state_square = 1
  } else if(state_square == 1){
    fill(255,10,0)
    state_square = 2
  } else if(state_square == 2){
    fill(180)
    state_square = 1
  }

}