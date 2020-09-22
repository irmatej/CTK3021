let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background('red');
      text("Why do we tell actors\n to break a leg?", 250, 250, 350, 200);
      timer = timer + 1;
      if (timer > 5 * 60) {
        state = 1;
        timer = 0;
      }

      break;

    case 1:
      background('blue');
      text("Because every play has a cast", 250, 250, 350, 200);
      break;

  }

}
