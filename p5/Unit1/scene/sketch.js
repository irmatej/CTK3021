function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}
function draw (){

  background(176, 237, 237);
  noStroke();

  //sun
     fill('yellow');
  ellipse(0, 0, 200, 200);

   // grass
  fill(37, 180, 8);
  rect(0, 355, 720, 95);

  // trail
  fill(123, 133, 121);
  rect(367, 355, 52, 95);

  //roof
   fill(175, 83, 8);
  triangle(389, 128, 276, 204, 521, 204);

  // house
  fill(116, 58, 11);
  rect(288, 201, 230, 160);

   // window frame
  fill(133, 93, 55);
  rect(436, 218, 30, 45);

    // window
  fill(232, 232, 232);
  rect(441, 223, 30, 35);

   // window frame 2
  fill(133, 93, 55);
  rect(319, 218, 35, 45);

   // window 2
  fill(232, 232, 232);
  rect(324, 223, 25, 35);

  // door frame
  fill(133, 93, 55);
  rect(362, 270, 63, 90);

   // door
  fill(122, 69, 19);
  rect(368, 277, 50, 84);

  // handle
  fill(162, 160, 158);
  ellipse(408, 312, 8);

   // tree 3
  fill(59, 27, 1);
  rect(77, 287, 63, 85);

  //leaves 3.55
  fill(13, 72, 4);
  triangle(106, 80, 35, 328, 185, 328);

  //leaves 3
  fill(13, 72, 4);
  triangle(106, 80, 34, 298, 185, 298);

   //leaves 3.5
  fill(13, 72, 4);
  triangle(106, 80, 52, 219, 165, 219);

  // tree 1
  fill(59, 27, 1);
  rect(230, 287, 63, 95);

  //leaves
  fill(11,138,0);
  triangle(256, 45, 171, 287, 355, 287);

   //leaves .5
   fill(11,138,0);
  triangle(256, 45, 211, 112, 307, 112);

   // post
  fill(0);
  rect(328, 293, 9, 100);

   // lamp
  fill(0);
  rect(333, 293, 25, 10);

   // light
  fill(247, 218, 27);
  rect(337, 301, 21, 8);

    // tree 4
  fill(59, 27, 1);
  rect(664, 340, 63, 27);

  //leaves 4
   fill(13, 72, 4);
  triangle(696, 137, 606, 340, 800, 340);

   //leaves 4.5
  fill(13, 72, 4);
  triangle(696, 137, 637, 240, 760, 240);

    // tree 2
  fill(59, 27, 1);
  rect(509, 287, 63, 103);

  //leaves 2
   fill(17, 108, 3);
  triangle(531, 45, 436, 300, 644, 300);

   //leaves 2.5
  fill(17, 108, 3);
  triangle(531, 45, 447, 196, 628, 196);


  fill ('white')
  text(mouseX + ', ' + mouseY, 20,20 );
}
