var f, f1, f2;

 function setup() { 
 createCanvas(800, 800);  

  f = loadFont("assets/B.otf");   
  f1 = loadFont("assets/G.ttf");   
  f2 = loadFont("assets/RA.otf");   

  textAlign(CENTER); 
 }  

 function draw() { 
 background(170);  

  textFont(f); 
  textSize(60); 
  text("One person's craziness,", width / 2, height / 2);   

  textFont(f1); 
  textSize(30); 
  text("is another person's reality", width / 2, height / 2 + 40);   

fill ('red');
  textFont(f2); 
  textSize(30); 
  text("Tim Burton", width / 2, height / 2 + 80);   

} 
