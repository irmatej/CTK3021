// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humidity = 0;
var name = '';
var img1;
var f1;


function setup() {
  createCanvas(600, 600);

  f1 = loadFont("assets/curl.ttf");
  img1 = loadImage("assets/sky.jpg");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Antioch,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=630b8731fdd809b29b1aa69a69d01bd2'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(img1);
      textFont(f1);
      textSize(30);
      fill('black');
      text("What is the weather in " + weather.name + "?", 40, 35);
      text("windspeed is " + windspeed, 180, 80);
      text("temp is " + temperature, 180, 125);
      text("humidity is " + humidity + "%", 180, 170);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x + 50, 350, 300, 100);
      ellipse(x - 100, 350, 200, 100);
      ellipse(x - 20, 550, 300, 50);
      ellipse(x - 10, 550, 200, 80);
      ellipse(x + 300, 480, 150, 10);
      ellipse(x - 300, 430, 200, 20);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;

  }
}
