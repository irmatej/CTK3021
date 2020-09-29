var mic;
var vol;
var c = 'green' ;
let x = 0;

function setup() {
  createCanvas(400, 400);


  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .001) { // if the volume is LOUD?
    // do something
//  c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
x = x + 1;
  }

ellipse(200, 200, 200, vol*500);

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nSpeak for mirroring mouth!\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
