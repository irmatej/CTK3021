var bubbles = [];
var bg;
var imga, imgaa, imgc, imgcc, imgd, imgf, imgh, imghh, imgr, imgs, imgss;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1JqyzmzSZ1vxb1826jdvRthdQVL9YV-M3qNpy_FFsx-Q';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(800, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);


  bg = loadImage("assets/N.JPG");
  imga = loadImage("assets/action.jpg");
  imgaa = loadImage("assets/anime.jpg");
  imgc = loadImage("assets/comedy.jpg");
  imgcc = loadImage("assets/crime.jpg");
  imgd = loadImage("assets/doc.jpg");
  imgf = loadImage("assets/fantasy.jpg");
  imgh = loadImage("assets/history.jpg");
  imghh = loadImage("assets/horror.jpg");
  imgr = loadImage("assets/romance.jpg");
  imgs = loadImage("assets/scifi.jpg");
  imgss = loadImage("assets/sports.jpg");

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].What, data[i].Genre, data[i].Title)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background(bg);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myWhat, myGenre, myTitle) {
    this.name = myName;
    this.what = myWhat;
    this.genre = myGenre;
    this.title = myTitle;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);

  }


  display() {
    if (this.genre == "Action") {
      image(imga, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Anime") {
      image(imgaa, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Comedies") {
      image(imgc, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Crime") {
      image(imgcc, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Documentaries") {
      image(imgd, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Fantasy") {
      image(imgf, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "History") {
      image(imgh, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Horror") {
      image(imghh, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Romance") {
      image(imgr, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Sci-Fi") {
      image(imgs, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.genre == "Sports") {
      image(imgss, this.pos.x, this.pos.y, 50, 50);
    }

    fill("red");
    textSize(15);
    text(this.name, this.pos.x, this.pos.y - 42);
    text(this.what, this.pos.x, this.pos.y - 22);
    text(this.title, this.pos.x, this.pos.y - 5);
  }

  drive() {
    this.pos.x = this.pos.x + this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }

}
