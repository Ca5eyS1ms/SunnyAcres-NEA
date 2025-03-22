// holds the player class

class Player{
     
    constructor(diameter){
        this.x = width / 2;  // sets the player in the middle of the canvas
        this.y = height / 2; 
        this.diameter = diameter;
        this.speed = tileSize * 0.2;

    }

    draw(){
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.diameter, this.diameter); // draws the player on the canvas
    }//end of draw function

    movement(){
        if (keyIsDown(65)){
            this.x -= this.speed;
        }
        if (keyIsDown(68)){
            this.x += this.speed;
        }
        if (keyIsDown(87)){
            this.y -= this.speed;
        }
        if (keyIsDown(83)){
            this.y += this.speed;
        }
    }//end of movement function   


    handleMousePressed() {

        // handles changing to farmland
        let selectedItem = ui.items[ui.selectedSlot];
        let tileX = Math.floor(mouseX / tileSize);
        let tileY = Math.floor(mouseY / tileSize);
    
        if (selectedItem === "hoe"){
            if (tileX >= 0 && tileX < map.cols && tileY >= 0 && tileY < map.rows) { //checks if the mouse is within the canvas
                let tile = map.tiles[tileY][tileX];
        
                
                tile.type = 'M';
                tile.hasRock = false;
                tile.hasTree = false;
        
                console.log("Tile converted to farmland at:", tileX, tileY);
            }
        }

        
    } //end of handleMousePressed function

    plantSeed(){
        let selectedItem = ui.items[ui.selectedSlot];

        if (selectedItem === "seeds"){
            let seedType = ui.seedTypes[ui.currentSeed]; 
            map.plantSeed(mouseX, mouseY, seedType);
        }
    }//end of plantSeed function

    waterPlant(){
        let selectedItem = ui.items[ui.selectedSlot];

        if (selectedItem === "watering can"){
            map.waterPlant(mouseX, mouseY);
        }
    } //end of waterPlant function
} //end of player class