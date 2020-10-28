let cars = [];
let f1, f2, f3;
let fonts = [];
let fall;
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(600, 600);

  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  // rectMode(CENTER);
  // ellipseMode(CENTER);

  f1 = loadFont("assets/spaceage.ttf");
  f2 = loadFont("assets/KGChasingCars.ttf");
  f3 = loadFont("assets/rock.ttf");
  fall = loadImage("assets/fallPic.jpg");
  fonts = [f1, f2, f3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch (state) {
    case 0:
      background('grey');
      text('welcome to my game', width / 2, height / 2);
      break;

    case 1:
      game();
      timer++
      if (timer > 10*60) {
        state = 3;
      }
      break;

    case 2:
      background('pink');
      text('YAY you win!!', width / 2, height / 2);
      break;

    case 3:
      background('purple');
      text('YOU LOST!!', width / 2, height / 2);
      break;


  }

}

function game() {

  image(fall, 0, 0, width, height);

  // display and move objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  //draw the frog

  // fill('green');
  // ellipse(frogPos.x, frogPos.y, 50, 50);

  push();
  translate(frogPos.x, frogPos.y);
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

function player(){

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

function flying(){

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

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-6, 6), random(-6, 6));
    this.size = random(40, 80);
    this.c = color(random(100, 255), random(50), random(50));
    this.font = fonts[floor(random(3))];
  }

  // methods

  display() {
    //  rect(this.pos.x, this.pos.y, 50, 25);
    // textSize(this.size);
    // fill(this.c);
    // textFont(this.font);
    // text("vote", this.pos.x, this.pos.y);
    push();
    translate(this.pos.x, this.pos.y);
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
