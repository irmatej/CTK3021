let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length; //automatically availbe to us
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("HEY! Can you touch the screen?", 5, 22) ;
      break ;

      case 1:
       text("That's not enough...", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("Two is a start", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("YAY, three like a happy family", 5, 22) ;
            // put a picture here
      break ;


  }

}
