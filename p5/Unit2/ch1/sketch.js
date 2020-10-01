var mic;
var vol;
var c = 'green' ;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {

  fill('blue');
  rect(x, 750, 75, 20) ;
  if (x> width) x = 0;



  background('white');

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .001) { // if the volume is LOUD?
    // do something

x = x + 5;
  }

  rect(x, 10, 10, 10);

  // extra stuff for debugging
  

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
