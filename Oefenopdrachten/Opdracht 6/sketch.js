function setup() {
  createCanvas(380, 350);

}

let words_1 = ['red','green','blue','purple','yellow'];
let number_1 = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];

function draw() {
  background(220);
  fill(0)
  text("1",20,15)
  text("2",20,100)
  text("3",20,190)
  text("4",20,250)
  text("5",120,15)
  text("6",120,100)
  text("7",120,190)
  text("8",120,380)
  text("9",240,15)

 //1
 words_1 = ['red','green','blue','purple','yellow'];
 for (let i = 0; i < 5; i++){
  fill(words_1[0 + i])
  text(words_1[0 + i],20,25 + (i*15))
 }

 fill(0)
 //2
 
 words_1.shift();
 words_1.push('red');
 for(let i = 0; i < 5; i++){
  fill(words_1[0+i])
 text(words_1[0+i],20,110+(i*12))
 }

 //3

 words_1.splice(1,2)
 for(let i = 0; i < 3; i++){
  fill(words_1[0+i])
  text(words_1[0+i],20,200+(i*10))
 }

 //4
 for()

}
