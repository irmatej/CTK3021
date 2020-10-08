var state = 0;
var timer = 0;
var f, ff;
var mic;
var vol;
var x = 0;

function setup() {
  createCanvas(600, 500);

  f = loadFont("assets/DD.ttf");
  ff = loadFont("assets/M.otf");

  mic = new p5.AudioIn();
  mic.start();
 

  textAlign(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background(220);

      textFont(f);

      fill(119, 7, 7);
      rect(width / 2 - 30, height / 2 + 65, 80, 20);
      textSize(40);
      text("The", width / 2, height / 2 - 60);
      textSize(60);
      text("Dragon Quest", width / 2, height / 2);
      break;

      //normal dragon
    case 1:
      background(220);
      vol = (mic.getLevel()).toFixed(2);
      if (vol > .10) {
        state = 3;
      }
      noStroke();
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
      quad(486, 231, 481, 243, 522, 246, 512, 234);

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

      //text box
      fill(119, 7, 7);
      rect(27, 12, 550, 60);

      //text
      textFont(ff);
      textSize(20);
      fill("white");
      text("QUICK!! You must scare the dragon away before it attacks!\n YELL!!", 300, 35);

      timer = timer + 1;
      if (timer > 6 * 60) {
        state = 2;
        timer = 0;
      }
      break;

      //upset dragon
    case 2:
      background(246, 126, 128);

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

      //undertail
      fill(110);
      quad(486, 231, 481, 243, 522, 246, 512, 234);

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

      //jaw
      fill('white');
      triangle(248, 61, 339, 147, 160, 147);

      //bottom jaw
      fill('white');
      triangle(160, 244, 339, 244, 248, 337);

      //inside jaw
      fill('white');
      rect(160, 147, 178, 97);

      //L face spike
      fill('white');
      triangle(160, 147, 124, 187, 164, 174);

      //L face spike 1
      fill('white');
      triangle(160, 243, 124, 225, 164, 224);

      //R face spike
      fill('white');
      triangle(339, 147, 364, 174, 335, 166);

      //R face spike 1
      fill('white');
      triangle(338, 245, 364, 219, 337, 222);

      //throat
      fill('black');
      ellipse(250, 190, 15, 15);

      //L teeth
      fill('black');
      triangle(166, 241, 176, 249, 176, 223);

      //L teeth 1
      fill('black');
      triangle(184, 260, 195, 269, 205, 236);

      //L teeth 2
      fill('black');
      triangle(211, 288, 223, 299, 223, 277);

      //L teeth top
      fill('black');
      triangle(165, 150, 175, 141, 185, 160);

      //L teeth top 1
      fill('black');
      triangle(198, 116, 209, 107, 222, 136);

      //R teeth
      fill('black');
      triangle(281, 287, 290, 280, 281, 257);

      //R teeth 1
      fill('black');
      triangle(307, 258, 316, 251, 304, 232);

      //R teeth top
      fill('black');
      triangle(285, 104, 293, 112, 279, 118);

      //R teeth top 1
      fill('black');
      triangle(302, 121, 310, 129, 287, 140);

      //R teeth top 2
      fill('black');
      triangle(318, 137, 324, 143, 314, 145);

      //toun
      fill(162, 11, 11);
      triangle(243, 193, 256, 193, 249, 270);

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

      //fire
      fill('red');
      triangle(49, 352, 0, 513, 121, 505);

      //fire
      fill('red');
      triangle(139, 395, 83, 505, 194, 504);

      //fire
      fill('red');
      triangle(406, 419, 378, 502, 444, 503);

      //fire
      fill('red');
      triangle(496, 351, 445, 506, 526, 506);

      //fire
      fill('red');
      triangle(577, 370, 632, 503, 476, 503);

      //yellow fire
      fill('yellow');
      triangle(51, 443, 32, 503, 79, 505);

      //yellow fire
      fill('yellow');
      triangle(123, 471, 114, 502, 144, 503);

      //yellow fire
      fill('yellow');
      triangle(92, 479, 69, 501, 127, 501);

      //yellow fire
      fill('yellow');
      triangle(409, 484, 400, 504, 421, 504);

      //yellow fire
      fill('yellow');
      triangle(491, 428, 474, 504, 500, 506);

      //yellow fire
      fill('yellow');
      triangle(533, 462, 498, 504, 567, 503);

      //text box
      fill(119, 7, 7);
      rect(27, 12, 550, 60);

      textFont(ff);
      fill('white');
      textSize(20);
      text("You were too late and he engulfed you in fire, OOPS\n try again", 300, 35);

      timer = timer + 1;
      if (timer > 6 * 60) {
        state = 0;
        timer = 0;
      }
      break;

      //sad dragon
    case 3:
      background(150, 191, 242);

      //body
      fill(200);
      rect(150, 310, 300, 120);

      //L wing color
      fill('red');
      ellipse(133, 375, 34, 90);

      //L wing color 1
      fill('red');
      rect(119, 394, 40, 30);

      //L wing color 2
      fill('red');
      rect(152, 410, 30, 10);

      //L wing color 3
      fill('red');
      triangle(181, 329, 132, 331, 148, 367);

      //R wing color
      fill('red');
      triangle(298, 333, 484, 421, 354, 421);

      //R wing color 1
      fill('red');
      triangle(301, 421, 352, 386, 368, 426);

      //L wing base
      fill('black');
      quad(195, 339, 181, 328, 117, 393, 133, 403);

      //L wing base 1
      fill('black');
      quad(132, 402, 197, 428, 210, 423, 146, 386);


      //L wing base 2
      fill('black');
      quad(191, 429, 190, 418, 117, 418, 117, 429);

      //head
      fill('white');
      rect(190, 360, 80, 70);

      //face
      fill('white');
      triangle(269, 361, 313, 430, 218, 429);

      //eye
      fill('black');
      rect(236, 396, 15, 5);

      //eye 1
      fill('black');
      triangle(256, 390, 256, 401, 241, 401);

      //spike
      fill('white');
      triangle(268, 361, 248, 336, 251, 362);

      //spike
      fill('white');
      triangle(218, 333, 237, 362, 217, 362);

      //spike
      fill('white');
      triangle(168, 338, 206, 361, 191, 376);

      //spike
      fill('white');
      triangle(167, 385, 192, 394, 192, 411);

      //R wing base
      fill('black');
      quad(277, 337, 298, 331, 363, 399, 345, 408);

      //R wing base 1
      fill('black');
      quad(363, 399, 289, 429, 265, 430, 345, 383);

      //R wing base 2
      fill('black');
      quad(304, 418, 266, 430, 486, 430, 486, 420);

      //spike
      fill('red');
      triangle(223, 335, 255, 322, 241, 279);

      //spike 1
      fill('red');
      triangle(274, 316, 306, 314, 309, 268);

      //spike 2
      fill('red');
      triangle(330, 313, 358, 277, 360, 313);

      //spike 3
      fill('red');
      triangle(378, 313, 407, 313, 399, 277);

      //spike 4
      fill('red');
      triangle(429, 313, 448, 328, 461, 291);

      //spike 5
      fill('red');
      triangle(447, 339, 447, 352, 465, 346);

      //spike 6
      fill('red');
      triangle(447, 362, 447, 373, 465, 367);

      //spike 7
      fill('red');
      triangle(447, 383, 447, 393, 465, 389);

      //spike 8
      fill('red');
      triangle(447, 400, 447, 408, 465, 404);

      //text box
      fill(119, 7, 7);
      rect(27, 12, 550, 60);

      textFont(ff);
      fill('white');
      textSize(20);
      text("Awwwww you hurt his feelings...\nleave him alone", 300, 35);

      timer = timer + 1;
      if (timer > 6 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }
}

function mouseReleased() {

  if ((mouseX > 270) && (mouseX < 380) && (mouseY > 315) && (mouseY < 335)) {

    state++;
    if (state > 3) {
      state = 0;
    }
  }
}

function touchStarted() {
  getAudioContext().resume();
}
