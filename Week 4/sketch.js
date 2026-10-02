
/* let testing =[
  ['one','two','three','four','5','6']
,['five','six','seven','eight','9','10'], //deze hier was voor een oefeningen
['nine','ten','eleven','twelve','13','14'],
['holy']] */

//here are the variables

let amount_vorms = [];

let number_of_vorms = [];


function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(220);

  strokeWeight(10)//here is how thick the lines are.

  
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

 //fill(colour) //hier is een heel rare exeptie, waar normaal moet je aangeven aan een array van welke nummer je wilt nemen. hier hoeft het gewoon niet, waarom? weet ik niet


 //micheal helpt me here alot
    if(keyIsDown(8)){ //similiar to key is pressed but simpler 
      let color = [random(255), random(255), random(255),random(100,255)]//numbers are red, green, blue and the last one is for transparency
      let rand_color = color;
      let vormen = ["square","circle"];//here are the shapes
      let rand_vormen = random(vormen);
      number_of_vorms.push({ //here is where they push the var into the arrays
        c: rand_color, //here is color
        x: random(0, width), //here is the x position
        y: random(0, height), //here is the y position
        s: random(20, 50), // here is the size
        v: rand_vormen, // and here is the amount of shapes
        
      });
    }
    for(let i = 0; i < number_of_vorms.length; i++){
      fill(number_of_vorms[i].c)
      switch (number_of_vorms[i].v){ //micheal helpt here alot. il try to explain it the best i can.
        case "square": // it reads the array and checks wich shape it is.
          square( //so like if the shape is a square then it will draw a square
            number_of_vorms[i].x,
            number_of_vorms[i].y,
            number_of_vorms[i].s,
          )
          break
        case "circle": // or if the shape is a circle then it will draw a circle
          circle(
            number_of_vorms[i].x,
            number_of_vorms[i].y,
            number_of_vorms[i].s,
          )
          break
    }
  }
}