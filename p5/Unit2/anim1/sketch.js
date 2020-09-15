
var x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);

fill("white");
textSize(50, 50);
text("HELLO", x, height/2);
//rect(x, height/2, 50, 50);
x= x + 1;
//x = x + 5 ; faster
if (x > width) {
  x = -100 ;
  }
}
