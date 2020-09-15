var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  noStroke() ;

push ();
translate(x, 0);
avatar ();
x = x + 5;
if (x > width) {
  x = -600 ;
}
pop ();

}
