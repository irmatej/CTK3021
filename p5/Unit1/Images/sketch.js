var img1, img2, img3 ;


function setup() {
createCanvas(800, 800);

imageMode(CENTER);

img1 = loadImage("assets/Nigel1.JPG")
img2 = loadImage("assets/Nigel2.jpg")
img3 = loadImage("assets/Nigel3.PNG")

}

function draw() {

background(170);

image(img1, width/2, height/2, 200, 200);
image(img2, width/2, height/2 - 210, 200, 200);
image(img3, width/2, height/2 + 210, 200, 200);

}
