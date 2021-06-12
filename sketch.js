var canvas, backgroundImage;
var gameStart = 0;
var database;

var form, game, player;

function preload() {
  backgroundImage = loadImage("unnamed.jpg");
}

function setup(){
  canvas = createCanvas(400,400);
 
  database = firebase.database(); 

  form = new Form();
}

function draw(){
  background(backgroundImage);
  
  form.display();
  drawSprites();
  
}





