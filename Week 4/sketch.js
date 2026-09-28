let kleuren = []

function setup() {
  createCanvas(400, 400);

  for(let i = 5; i > 0; i--){
    console.log(i);
  }


}

function draw() {
  background(220);

  fill(255)
  rect(5,10,50,125)
  for(let i = 0; i < 3; i++){

    if(i == 0){
      fill("red")
    } else if (i == 1){
      fill("orange")
    } else if (i == 2){
      fill("green")
    }
    
    circle(30,30+(i*35),30)
  }

  
}
