function setup() {
createCanvas (800, 800);
rectMode(CENTER);
}

function draw() {
rect(mouseX, mouseY, random(20), random(20));
}
