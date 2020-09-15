function avatar () {

  if (mouseIsPressed) {
  // //1
  //    fill(200);
  // rect(0, 50, 600, 450);
  //
  //  //2
  //    fill(180);
  // rect(0, 100, 600, 400);
  //
  //    //3
  //    fill(160);
  // rect(0, 150, 600, 350);

  //leg
     fill(190);
  quad(150, 302, 178, 335, 149, 411, 120, 411);

   //leg 2
     fill(206);
  quad(240, 335, 266, 313, 299, 440, 264, 440);

   //leg 3
    fill(206);
  quad(448, 302, 413, 315, 469, 440, 502, 440);

     //leg 4
     fill(190);
  quad(365, 304, 397, 315, 354, 411, 324, 411);

    //underbelly
     fill(110);
  quad(152, 336, 352, 376, 368, 355, 160, 292);

   //undertail
     fill(110);
  quad(486, 231,481, 243, 522, 246, 512, 234);

    //undertail 1
    fill(110);
  quad(504, 242, 507, 235, 546, 253, 544, 264);

    //undertail 2
    fill(110);
  quad(532, 256, 555, 301, 560, 300, 547, 257);

    //undertail 3
    fill(110);
  quad(532, 339, 557, 291, 560, 299, 536, 343);

   //tail
     fill(200);
  quad(520, 233, 449, 219, 449, 250, 500, 240);

    //tail 2
     fill(200);
  quad(518, 233, 500, 239, 541, 258, 551, 250);

   //tail 3
     fill(200);
  quad(550, 250, 540, 258, 558, 298, 566, 297);

  //tail 4
     fill(200);
  quad(565, 296, 558, 298, 537, 336, 537, 347);

   //bottom
     fill(200);
  quad(536, 335, 540, 338, 523, 337, 544, 350);

    //bottom 1
  fill(200);
  triangle(526, 338, 525, 356, 540, 346);

    //bottom 2
  fill(200);
  triangle(523, 337, 520, 343, 530, 342);

    //bottom 3
  fill(200);
  triangle(543, 349, 534, 353, 534, 342);

  //body
     fill(200);
  rect(150, 218, 300, 120);

  //back spike
   fill('red');
  triangle(250, 253, 268, 189, 285, 232);

   //back spike 1
   fill('red');
  triangle(309, 224, 353, 176, 361, 220);

    //back spike 2
   fill('red');
  triangle(429, 220, 471, 227, 482, 187);

   //tail spike
   fill('red');
  triangle(496, 232, 520, 240, 532, 208);

   //tail spike 1
   fill('red');
  triangle(537, 246, 559, 233, 548, 259);

  //tail spike 2
   fill('red');
  triangle(555, 270, 559, 281, 568, 274);

   //tail spike 3
   fill('red');
  triangle(561, 291, 562, 298, 570, 294);

   //tail spike 4
   fill('red');
  triangle(559, 304, 557, 309, 563, 309);

    //BOTTOM R wing
     fill('red');
  quad(306, 273, 461, 196, 406, 48, 398, 166);

  //INSIDE R wing
   fill('red');
  triangle(389, 167, 492, 25, 350, 63);

   //MIDDLE R wing
   fill('red');
  quad(457, 192, 410, 74, 492, 23, 603, 100);

  //OUTSIDE R wing
   fill('red');
  triangle(610, 215, 432, 188, 599, 97);

    //INSIDE L wing
   fill('red');
  triangle(201, 262, 131, 37, 15, 57);

   //OUTSIDE L wing
   fill('red');
  quad(0, 198, 169, 187, 121, 39, 0, 62);

  //TOP L wing
   fill('red');
  quad(76, 26, 219, 54, 163, 165, 0, 66);

  //BOTTOM L wing
   fill('red');
  triangle(197, 261, 99, 191, 144, 160);

   //base R wing
     fill('black');
  quad(290, 266, 307, 274, 406, 168, 388, 156);

  //base R wing 1
     fill('black');
  quad(405, 168, 350, 56, 340, 60, 381, 168);

  //top R wing
     fill('black');
  quad(339, 60, 494, 20, 496, 26, 351, 62);

    //middle R wing
     fill('black');
  quad(350, 59, 349, 64, 489, 77, 491, 70);

  //bottom R wing
     fill('black');
  quad(352, 61, 349, 68, 454, 133, 459, 130);

  //top R wing 1
     fill('black');
  quad(493, 21, 490, 26, 602, 102, 607, 99);

    //middle R wing 1
     fill('black');
  quad(491, 71, 484, 75, 563, 222, 571, 221);

  //bottom R wing 1
     fill('black');
  quad(458, 130, 452, 131, 461, 206, 467, 206);

   //base L wing
     fill('black');
  quad(201, 272, 214, 264, 171, 150, 147, 151);

  //base L wing 1
     fill('black');
  quad(148, 153, 173, 160, 229, 58, 218, 48);

   //top L wing
     fill('black');
  quad(218, 50, 214, 56, 72, 26, 76, 23);

   //top L wing 1
     fill('black');
  quad(76, 23, 0, 60, 0, 67, 77, 27);

   //middle L wing 1
     fill('black');
  quad(214, 54, 215, 59, 84, 89, 83, 83);

  //bottom L wing 1
     fill('black');
  quad(100, 121, 102, 126, 213, 68, 211, 63);

   //middle L wing 2
     fill('black');
  quad(2, 211, 9, 212, 87, 88, 84, 83);

   //bottom L wing 2
     fill('black');
  quad(100, 122, 105, 124, 100, 199, 94, 200);

   //neck 2
     fill(230);
  rect(209, 278, 80, 70);

   //neck
     fill(230);
  rect(252, 310, 130, 50);

  //neck 3
    fill(230);
  rect(306, 356, 130, 14);

   //neck 4
    fill(230);
  rect(276, 292, 50, 30);

   //chin
     fill(230);
  rect(351, 358, 40, 20);

   //head
     fill('white');
  rect(379, 310, 80, 70);

    //face
  fill('white');
  triangle(458, 310, 475, 384, 379, 380);

  //spike 1
   fill('white');
  triangle(379, 323, 389, 311, 359, 292);

  //spike 2
  fill('white');
  triangle(402, 311, 404, 283, 417, 311);

  //spike 3
  fill('white');
  triangle(379, 351, 356, 331, 379, 338);

    //spike 4
  fill('white');
  triangle(440, 311, 438, 286, 456, 310);

  //eye
     fill('black');
  rect(419, 343, 10, 10);

    //eye 1
   fill('black');
  triangle(419, 352, 408, 339, 429, 343);

  //eye 2
   fill('black');
  triangle(428, 342, 436, 353, 429, 353);

  //2 eye
   fill('black');
  triangle(456, 352, 466, 351, 464, 341);

  //gem
   fill(182,0,59);
  quad(439, 319, 436, 327, 444, 334, 448, 326);

    //neck spike
  fill('red');
  triangle(338, 316, 361, 316, 338, 283);

   //neck spike 1
  fill('red');
  triangle(297, 295, 317, 295, 297, 258);

  //neck spike 2
  fill('red');
  triangle(240, 281, 262, 280, 240, 244);

   //foot
     fill(180);
  rect(107, 410, 55, 20);

   //foot 1
     fill(190);
  rect(249, 439, 60, 20);

   //foot 2
     fill(180);
  rect(312, 411, 55, 20);

   //foot 3
     fill(190);
  rect(457, 440, 55, 20);

    //Third toe
  fill('red');
  triangle(313, 422, 323, 430, 303, 438);

    //Third toe 1
  fill('red');
  triangle(329, 440, 333, 430, 348, 430);

   //first toe
  fill('red');
  triangle(96, 439, 108, 423, 116, 430);

   //first toe 1
  fill('red');
  triangle(174, 439, 154, 429, 160, 422);

   //first toe 2
  fill('red');
  triangle(133, 450, 130, 429, 143, 428);

    //second toe
  fill('red');
  triangle(239, 467, 250, 451, 257, 459);

    //second toe 1
  fill('red');
  triangle(318, 467, 307, 451, 299, 459);

    //second toe 2
  fill('red');
  triangle(281, 478, 274, 458, 290, 458);

   //fourth toe
  fill('red');
  triangle(457, 452, 465, 459, 449, 466);

  //fourth toe
  fill('red');
  triangle(473, 466, 476, 459, 492, 459);

   } else {

  //  //1
  //    fill(200);
  // rect(0, 0, 600, 450);
  //
  //   //2
  //    fill(180);
  // rect(0, 0, 600, 400);
  // 
  //     //3
  //    fill(160);
  // rect(0, 0, 600, 350);

   //L leg
     fill(90);
  rect(281, 378, 27, 130);

   //L leg 2
     fill(90);
  triangle(281, 424, 273, 382, 281, 382);

    //R leg 2
     fill(90);
  triangle(342, 424, 348, 382, 341, 382);

    //L leg 1
   fill(255,210,171);
  rect(281, 424, 27, 130);

   //R leg
     fill(90);
  rect(315, 378, 27, 130);

    //R leg 1
     fill(255,210,171);
  rect(315, 424, 27, 130);

    //L shoulder
     fill(255,210,171);
  ellipse(252, 233, 30, 30);

   //R shoulder
     fill(255,210,171);
  ellipse(360, 233, 30, 30);

   //L arm
     fill(90);
  rect(241, 244, 22, 120);

   //R arm
     fill(90);
  rect(350, 244, 22, 120);

  //chest
     fill(0);
  quad(251, 218, 361, 218, 335, 322, 282, 322);

   //1 melon
    fill(0);
  ellipse(281, 260, 50, 50);

   //2 melon
     fill(0);
  ellipse(333, 260, 50, 50);

  //pattern
  fill(90);
  ellipse(296, 293, 20, 20);

   //pattern 1
  fill(90);
  ellipse(277, 230, 10, 10);

   //pattern 2
  fill(90);
  ellipse(331, 248, 15, 15);

   //pattern 3
  fill(90);
  ellipse(331, 293, 5, 5);

   //pattern 4
  fill(90);
  ellipse(278, 261, 6, 6);

   //pattern 5
  fill(90);
  ellipse(318, 311, 6, 6);

   //pattern 6
  fill(90);
  ellipse(313, 268, 5, 5);

   //pattern 7
  fill(90);
  ellipse(293, 245, 6, 6);

   //pattern 8
  fill(90);
  ellipse(349, 228, 6, 6);

  //hair bottom
   fill('black');
  rect(270, 143, 70, 60);

  //chin
     fill(255,210,171);
  quad(294, 198, 279, 189, 329, 189, 316, 198);

   //hair top
     fill('black');
  ellipse(305, 143, 70, 50);

  //neck
     fill(255,210,171);
  rect(300, 198, 10, 30);

   //head
     fill(255,210,171);
  rect(280, 147, 50, 42);

  //gem
  fill(182,0,59);
  quad(306, 146, 299, 154, 306, 163, 312, 154);

    //bangs
     fill('black');
  triangle(313, 146, 274, 146, 275, 169);

    //strand
     fill('black');
  triangle(295, 163, 312, 145, 323, 145);

   //white bangs
     fill('white');
  triangle(279, 154, 279, 150, 314, 130);

      //red bangs
     fill('red');
  triangle(279, 158, 279, 161, 316, 135);

    //hair R
     fill('black');
  triangle(339, 203, 350, 203, 338, 142);

   //hair L
     fill('black');
  triangle(270, 203, 264, 203, 271, 142);

    //v neck
     fill(255,210,171);
  triangle(283, 218, 328, 218, 307, 245);

  //tummy
     fill(255,210,171);
  rect(282, 322, 53, 10);

  //skirt
      fill(88,1,147);
  quad(282, 332, 335, 332, 402, 374, 221, 374);

   //skirt 1
     fill(88,1,147);
  quad(243, 383, 377, 383, 366, 366, 251, 366);
   }

}
