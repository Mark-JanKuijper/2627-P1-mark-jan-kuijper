
/* let testing =[
  ['one','two','three','four','5','6']
,['five','six','seven','eight','9','10'], //deze hier was voor een oefeningen
['nine','ten','eleven','twelve','13','14'],
['holy']] */


let amount_vorms = [];

let number_of_vorms = [];


function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(220);
  strokeWeight(10)

  
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
      let color = [random(255), random(255), random(255),random(100,255)]
      let rand_color = color;
      let vormen = ["square","circle"];
      let rand_vormen = random(vormen);
      number_of_vorms.push({
        c: rand_color,
        x: random(0, width),
        y: random(0, height), //michael helpt me here
        s: random(20, 50),
        v: rand_vormen,
      });
    }
    for(let i = 0; i < number_of_vorms.length; i++){
      fill(number_of_vorms[i].c)
      switch (number_of_vorms[i].v){
        case "square":
          square(
            number_of_vorms[i].x,
            number_of_vorms[i].y,
            number_of_vorms[i].s,
          )
          break
        case "circle":
          circle(
            number_of_vorms[i].x,
            number_of_vorms[i].y,
            number_of_vorms[i].s,
          )
          break
    }
  }
}