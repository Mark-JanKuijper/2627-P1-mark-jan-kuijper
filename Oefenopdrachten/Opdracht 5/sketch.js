function setup() {
  createCanvas(800, 400);
  for(let i = 0; i < 10; i++){
  //deze code herhaalt zich totdat het is 10
  }
}


function draw() {
  background(220);
  fill(0)
  //nummers voor alles
  text("1",20,15)
  text("2",20,105)
  text("3",80,105)
  text("4",80,205)
  text("5",540,20)
  text("6",350,105)
  text("7",625,105)

  //1
  fill(255)
  for(let i = 0; i < 10; i++){
    square(20+(i*50),25,50)
    if(i == 5){ // you can use if statements in for loops
      fill('#186bbd')
    } else fill(255)
  }

  //2
 for(let i = 0; i < 5; i++){
  fill(0+(50*i))
  square(20,115+(i*50),50)
 }


 //3
 let x = 90;
 let width = 25;
 for(let i = 0; i < 4; i ++){
  fill(0,0+(i*75),0)
  rect(x,115,width,50);
  x += width;// je kan ook andere berekening doen in een for 
  width += 25;
 }


 fill(180)
 //4
 x = 90;
 width = 25;
 let y = 205;
 let height = 50
 for (let i = 0; i < 4; i++) {
  rect(x,y,width,height)
  x += width
  width += 25
  height += 25
  fill(0,0,255-(i*125))
 }

 //5
 
 let circle_size = 0;
 for (let i = 0; i < 10; i++){

 }
}
