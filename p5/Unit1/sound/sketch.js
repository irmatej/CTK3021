var song1;

function preload() {
  song1 = loadSound("assets/Love.mp3");

}

function setup() {
  createCanvas(800, 800);
  song1.loop();

  textAlign(CENTER);


}

function draw() {
  background(100);


  textSize(30);

  text("Can't Help Falling In Love With You - Haley Reinhart Cover", width / 2, height / 2);

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
