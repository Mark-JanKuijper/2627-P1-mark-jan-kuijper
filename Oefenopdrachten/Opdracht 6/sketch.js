
let colors = []; //hier ervoor zorgt dat als het informatie krijgt houd het dat informatie
let random_number = [];

function setup() {
  createCanvas(380, 350);


  for (let i = 0; i < 5; i++) {
    let r = floor(random(0, 256));//floor rounds it off to the lowest number
    let g = floor(random(0, 256));
    let b = floor(random(0, 256));
    colors.push(color(r, g, b))//doe het met push zodat het niet vervangen woord
  }

  for (let i = 0; i < 12; i++) {//this here is very important
    let mynum = round(random(0, 101));
    random_number.push(mynum);
  }
}



let y = 0;



function draw() {
  background(220);
  fill(0)
  text("1", 20, 15)
  text("2", 20, 100)
  text("3", 20, 190)
  text("4", 20, 250)
  text("5", 120, 15)
  text("6", 120, 100)
  text("7", 120, 190)
  text("8", 120, 280)
  text("9", 240, 15)

  //1
  let words_1 = ['red', 'green', 'blue', 'purple', 'yellow'];
  for (let i = 0; i < words_1.length; i++) { //use length when you use arrays because it reads the thing
    fill(words_1[i])
    text(words_1[i], 20, 25 + (i * 15))
  }

  fill(0)

  //2

  let a = words_1.shift();//shift removes something and then stores it in itself
  words_1.push(a); //wich you can later use it

  for (let i = 0; i < words_1.length; i++) {
    fill(words_1[i])
    text(words_1[i], 20, 110 + (i * 12))
  }

  //3

  words_1.splice(1, 2)//splice removes specifieks dingen
  for (let i = 0; i < words_1.length; i++) {
    fill(words_1[i])
    text(words_1[i], 20, 200 + (i * 10))
  }

  //4

  let number_1 = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];

  let y = 260
  fill(0)
  for (let i = 0; i < number_1.length; i++) {
    if (number_1[i] < 300) {
      text(number_1[i], 20, y)
      y = y + 10 //als we een text hebben neergezet, dan tellen we 10 bij de y pos op
    }
  }


  //5

  let number_2 = [3, 55, 93, 20, 102, 6]
  let number_3 = [14, 22, 80, 5]
  let result = 0;

  for (let i = 0; i < number_2.length; i++) {
    result = result + number_2[i]; // telt the number lenght, dan gaat het plus de resultaat
  }

  for (let i = 0; i < number_3.length; i++) {
    result = result + number_3[i];// dezelfde hier
  }

  text("resultaat: " + result, 120, 25);// laat het eind resultaat hier



  //6

  let word_1 = "Overheidsfinancieringstekort."//it is preferd if you use the "" things

  let amount_e = 0;

  for (let i = 0; i < word_1.length; i++) { //doe met woord lengte hier voor flexibleheid
    if (word_1[i] == 'e') {// 'e' hier telt het e van het woord
      amount_e++;
    }
  }
  text("e: " + amount_e, 120, 110)


  //7

  words_1 = ['red', 'green', 'blue', 'purple', 'yellow'];
  y = 190;

  words_1.sort();//automaticly sorts the woords by alphabet

  for (let i = 0; i < words_1.length; i++) {
    fill(words_1[i])
    text(words_1[i], 140, y)
    y += 10;
  }

  y = 280;
  //8
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i])
    text(colors[i], 140, y)
    y += 10;
  }


  //9
  let answer_numb = 0;
  let gemmiddle = 0;
  y = 30
  for (let i = 0; i < random_number.length; i++) {
    fill(random_number[i])
    text(random_number[i], 240, y)
    y += 10;
    answer_numb += random_number[i] //it makes answer_numb wat all the random_number are combined
  }
  text("totaal" + answer_numb, 240, 160)
  gemmiddle = round(answer_numb / 12)
  text("gemiddle" + gemmiddle, 240, 180)

}
