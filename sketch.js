let map;
let player;
let ui;
let seed;
 

const  tileSize = 16

function setup() {
  createCanvas(1800, 900);
  noStroke();
  perlin = new PerlinNoise();
  map = new Map(width / tileSize, height / tileSize, perlin);
  map.generation();
  player = new Player(16);
  ui = new Ui(50, 800, 100, 4);
  seed = new MarketItem("seed", 2); // name , baseValue

  
}//end of setup function

function draw() {
  background(220); 
  map.draw();  
  player.draw();
  ui.draw();
  player.movement();
  seed.updateMarket(50,50); // supply, demand
  
  // player.mousePosition(tileSize);

}//end of draw function

function mousePressed(){
  player.handleMousePressed(); 
  player.plantSeed();
  player.waterPlant();
    
  }//end of mousePressed function

function keyPressed(){
  ui.handleKeyPressed(key);
  
} //end of keyPressed function


