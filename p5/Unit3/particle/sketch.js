let cars = [];
var img1;

function setup() {
  createCanvas(500, 500);

  //   for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
  imageMode(CENTER);
  img1 = loadImage("assets/Danek.jpg")
  noStroke();
}

function draw() {
  background('grey');
image(img1, width/2, height/2, 300, 500);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1);
    }
  }
}



class Car {

  constructor() {
    //attributes
    this.pos = createVector(120, 200);
    this.vel = createVector(random(10), random(10));
this.r = random(139);
this.g = random(46);
this.b = random(13);
this.a = random(200, 255);
this.s = random(5, 20);
  }

  //methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.s);
  }
  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > width) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = width;
  }


}
