var f;

 function setup() { 
 createCanvas(800, 800);  

  f = loadFont("assets/DD.ttf");   

  textAlign(CENTER); 
 }  

 function draw() { 
 background(170);  

  textFont(f); 
  textSize(60); 
  text("dragon", width / 2, height / 2);   


} 
