let map;
let player;
const  tileSize = 16

function setup() {
  createCanvas(400, 400);
  map = new Map(width / tileSize, height / tileSize);
  map.generation();
  player = new Player(16);
  
}//end of setup function

function draw() {
  background(220);
  map.draw();
  player.draw();
  player.movement();
  // player.mousePosition(tileSize);

}//end of draw function


