let cars = [];
let f1;
let fall;
let front;
let trees;
let failure;
let winner;
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;
let song1, song2, song3;


function preload() {
  song1 = loadSound("assets/roller.mp3");
  song2 = loadSound("assets/song.mp3");
  song3 = loadSound("assets/airline.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

}

function setup() {
  createCanvas(600, 600);

  frogPos = createVector(0, 0);
  textAlign(CENTER);
  // rectMode(CENTER);
  // ellipseMode(CENTER);

  fall = loadImage("assets/fallPic.jpg");
  front = loadImage("assets/cover.jpeg");
  trees = loadImage("assets/play.jpeg");
  failure = loadImage("assets/fail.jpeg");
  winner = loadImage("assets/win.JPG");
  f1 = loadFont("assets/cute.ttf");


  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch (state) {

    case 0:
      background(front);
      push();
      translate(100, 0);
      chilling();
      pop();
      textFont(f1);
      fill('white');
      textSize(50);
      text('Welcome to Hawaii!', width / 2, height / 2 + 70);
      textSize(30);
      text('Click to join', width / 2, height / 2 + 110);
      break;

    case 1:
      game();
      textSize(30);
      text('Catch the guitars!', width / 2, height / 2 - 105);
      timer++
      if (timer > 15 * 60) {
        state = 3;
        song1.pause();
        song3.play();

      }
      break;

    case 2:
      background(winner);
      push();
      translate(100, 0);
      luau();
      pop();

      textSize(50);
      text('CONGRATS!!', width / 2, height / 2 + 70);
      textSize(30);
      text('You are ready for the Luau!', width / 2, height / 2 + 110);
      break;

    case 3:
      background(failure);
      push();
      translate(100, 0);
      home();
      pop();

      textSize(50);
      text('YOU LOST', width / 2, height / 2 + 70);
      textSize(30);
      text('Time to head back home..', width / 2, height / 2 + 110);
      break;


  }

}

function game() {

  image(trees, 0, 0, width, height);


  // display and move objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    song1.pause();
    song2.play();
    state = 2;
  }

  //draw the frog

  // fill('green');
  // ellipse(frogPos.x, frogPos.y, 50, 50);

  push();
  translate(frogPos.x - 200, frogPos.y - 150);
  player();
  pop();
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
  song2.pause();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {


  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

    case 2: //winner
      resetTheGame();
      state = 0;
      break;

    case 3: //LOST
      resetTheGame();
      state = 0;
      break;
  }
}

function chilling(){
  //leaf
  stroke(13, 136, 11);
 fill(20, 207, 16);
 triangle(161, 92, 196, 153, 171, 162);
  triangle(186, 117, 198, 149, 182, 149);
  triangle(227, 100, 220, 158, 190, 151);
 quad(148, 107, 165, 107, 191, 154, 172, 163);
  quad(220, 114, 233, 114, 214, 155, 198, 153);
 triangle(200, 101, 210, 153, 188, 153);
  triangle(152, 135, 171, 163, 187, 157);


 //legs
 noStroke();
 fill('black');
 rect(185, 243, 8, 70);
 rect(206, 243, 8, 70);
 rect(165, 312, 28, 16);
 rect(206, 312, 28, 16);


  //pineapple
 stroke(155, 145, 8);
 fill(239, 224, 9);
 ellipse(200, 200, 90, 100);

  //pattern
  noStroke();
 fill(237, 187, 7);
 quad(171, 162, 175, 159, 244, 209, 241, 216);
 quad(235, 232, 230, 235, 159, 180, 162, 174);
 quad(156, 195, 155, 202, 212, 248, 218, 246);
 quad(212, 152, 218, 155, 161, 224, 158, 220);
 quad(227, 161, 231, 165, 173, 240, 169, 237);
  quad(240, 178, 242, 183, 192, 249, 188, 248);

}

function player() {

  //leaf
  stroke(13, 136, 11);
  fill(20, 207, 16);
  triangle(172, 148, 187, 176, 202, 171);
  triangle(205, 129, 207, 167, 195, 167);
  quad(171, 135, 182, 135, 200, 173, 193, 173);
  quad(220, 128, 229, 128, 205, 172, 199, 172);
  triangle(196, 138, 193, 172, 204, 173);
  triangle(226, 145, 210, 174, 197, 170);

  //pineapple
  stroke(155, 145, 8);
  fill(239, 224, 9);
  ellipse(200, 200, 50, 60);

  //pattern
  noStroke();
  fill(237, 187, 7);
  quad(182, 180, 184, 177, 220, 217, 218, 220);
  quad(177, 188, 176, 193, 208, 228, 212, 226);
  quad(209, 173, 213, 176, 181, 220, 179, 217);
  quad(219, 182, 222, 187, 192, 228, 190, 227);
  quad(191, 172, 194, 171, 224, 198, 223, 202);
}

function flying() {

  //body
  stroke(124, 81, 7);
  fill(177, 116, 11);
  ellipse(100, 250, 80, 70);
  ellipse(100, 200, 65, 55);

  //middle
  noStroke();
  fill(177, 116, 11);
  rect(80, 219, 40, 15);

  //inside, bottom, neck
  fill('black');
  ellipse(100, 225, 25, 25);
  rect(85, 260, 30, 5);
  stroke(91, 59, 5);
  fill(124, 81, 7);
  rect(90, 93, 20, 118);
  rect(86, 88, 28, 30);

  //string
  noStroke();
  fill('grey');
  rect(92, 111, 3, 154);
  rect(99, 94, 3, 171);
  rect(105, 103, 3, 162);
  ellipse(117, 105, 5, 5);
  ellipse(83, 94, 5, 5);
  ellipse(83, 110, 5, 5);

}

function luau() {
  //leaf
  stroke(13, 136, 11);
 fill(20, 207, 16);
 triangle(161, 92, 196, 153, 171, 162);
  triangle(186, 117, 198, 149, 182, 149);
  triangle(227, 100, 220, 158, 190, 151);
 quad(148, 107, 165, 107, 191, 154, 172, 163);
  quad(220, 114, 233, 114, 214, 155, 198, 153);
 triangle(200, 101, 210, 153, 188, 153);
  triangle(152, 135, 171, 163, 187, 157);

 //legs
 noStroke();
 fill('black');
 rect(185, 243, 8, 70);
 rect(206, 243, 8, 70);
 rect(165, 312, 28, 16);
 rect(206, 312, 28, 16);
  //L arm
 quad(160, 182, 158, 188, 106, 154, 107, 143);

  //pineapple
 stroke(155, 145, 8);
 fill(239, 224, 9);
 ellipse(200, 200, 90, 100);

  //pattern
  noStroke();
 fill(237, 187, 7);
 quad(171, 162, 175, 159, 244, 209, 241, 216);
 quad(235, 232, 230, 235, 159, 180, 162, 174);
 quad(156, 195, 155, 202, 212, 248, 218, 246);
 quad(212, 152, 218, 155, 161, 224, 158, 220);
 quad(227, 161, 231, 165, 173, 240, 169, 237);
  quad(240, 178, 242, 183, 192, 249, 188, 248);

  //bra
  stroke(132, 96, 36);
 fill(183, 133, 45);
 rect(153, 202, 95, 8);
 ellipse(181, 206, 30, 25);
 ellipse(217, 206, 30, 25);


  //skirt
  stroke(13, 136, 11);
 fill(20, 207, 16);
 triangle(166, 239, 175, 239, 162, 248);
 triangle(184, 239, 194, 239, 189, 251);
 triangle(174, 239, 185, 239, 176, 249);
 triangle(185, 252, 180, 239, 190, 239);
 triangle(203, 239, 213, 239, 210, 253);
 triangle(234, 237, 230, 240, 239, 250);
 triangle(221, 239, 229, 239, 224, 249);
 triangle(191, 239, 200, 239, 195, 250);
 triangle(170, 239, 178, 239, 172, 248);
 triangle(196, 239, 206, 239, 200, 252);
 triangle(210, 239, 224, 239, 215, 253);
 triangle(225, 239, 233, 239, 230, 250);
 rect(167, 235, 69, 5);

 //body
 stroke(124, 81, 7);
 fill(177, 116, 11);
ellipse(100, 250, 80, 70);
ellipse(100, 200, 65, 55);

 //middle
 noStroke();
 fill(177, 116, 11);
 rect(80, 219, 40, 15);

 //inside, bottom, neck
 fill('black');
 ellipse(100, 225, 25, 25);
 rect(85, 260, 30, 5);
 stroke(91, 59, 5);
 fill(124, 81, 7);
 rect(90, 93, 20, 118);
 rect(86, 88, 28, 30);

 //string
 noStroke();
 fill('grey');
 rect(92, 111, 3, 154);
 rect(99, 94, 3, 171);
 rect(105, 103, 3, 162);
 ellipse(117, 105, 5, 5);
 ellipse(83, 94, 5, 5);
 ellipse(83, 110, 5, 5);

 //hand
  noStroke();
 fill('black');
 rect(86, 139, 30, 30);
}

function home(){
  //leaf
  stroke(13, 136, 11);
 fill(20, 207, 16);
 triangle(161, 92, 196, 153, 171, 162);
  triangle(186, 117, 198, 149, 182, 149);
  triangle(227, 100, 220, 158, 190, 151);
 quad(148, 107, 165, 107, 191, 154, 172, 163);
  quad(220, 114, 233, 114, 214, 155, 198, 153);
 triangle(200, 101, 210, 153, 188, 153);
  triangle(152, 135, 171, 163, 187, 157);

 //suitcase
 noStroke();
 fill("black");
 ellipse(253, 322, 10, 10);
 ellipse(287, 322, 10, 10);
 rect(254, 251, 7, 20);
 rect(279, 251, 7, 20);
 rect(254, 251, 26, 7);
 stroke(98, 25, 137);
 fill(152, 32, 217);
 rect(250, 263, 40, 55);

 //legs
 noStroke();
 fill('black');
 rect(185, 243, 8, 70);
 rect(206, 243, 8, 70);
 rect(165, 312, 28, 16);
 rect(206, 312, 28, 16);
 //R arm
 noStroke();
 fill('black');
 quad(242, 190, 241, 207, 265, 253, 274, 253);
 rect(259, 243, 20, 12);


  //pineapple
 stroke(155, 145, 8);
 fill(239, 224, 9);
 ellipse(200, 200, 90, 100);

  //pattern
  noStroke();
 fill(237, 187, 7);
 quad(171, 162, 175, 159, 244, 209, 241, 216);
 quad(235, 232, 230, 235, 159, 180, 162, 174);
 quad(156, 195, 155, 202, 212, 248, 218, 246);
 quad(212, 152, 218, 155, 161, 224, 158, 220);
 quad(227, 161, 231, 165, 173, 240, 169, 237);
  quad(240, 178, 242, 183, 192, 249, 188, 248);

}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-6, 6), random(-6, 6));
    this.size = random(40, 80);
    this.c = color(random(100, 255), random(50), random(50));
  }

  // methods

  display() {
    //  rect(this.pos.x, this.pos.y, 50, 25);
    // textSize(this.size);
    // fill(this.c);
    // textFont(this.font);
    // text("vote", this.pos.x, this.pos.y);
    push();
    translate(this.pos.x - 100, this.pos.y - 100);
    flying();
    pop();
    //will be img
    //image(name, this.pos.x, this.pos.y)
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function touchStarted() {
  getAudioContext().resume();
}
