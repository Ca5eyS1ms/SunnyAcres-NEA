let map;
let player;
let ui;
const  tileSize = 16

function setup() {
  createCanvas(400, 400);
  map = new Map(width / tileSize, height / tileSize);
  map.generation();
  player = new Player(16);
  ui = new Ui();
  
}//end of setup function

function draw() {
  background(220);  
  map.draw();  
  player.draw();
  ui.draw();
  player.movement();
  
  // player.mousePosition(tileSize);

}//end of draw function

function mousePressed(){
  player.handleMousePressed();
}


