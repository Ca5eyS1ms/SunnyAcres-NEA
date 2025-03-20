// holds the player class

class Player{
     
    constructor(diameter){
        this.x = width / 2;  // sets the player in the middle of the canvas
        this.y = height / 2; 
        this.diameter = diameter;
    }

    draw(){
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.diameter, this.diameter); // draws the player on the canvas
    }//end of draw function

    movement(){
        if (keyIsDown(LEFT_ARROW)){
            this.x -= 1;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x += 1;
        }
        if (keyIsDown(UP_ARROW)){
            this.y -= 1;
        }
        if (keyIsDown(DOWN_ARROW)){
            this.y += 1;
        }
    }//end of movement function   


    handleMousePressed(){
        let tileX = Math.floor(mouseX / tileSize);
        let tileY = Math.floor(mouseY / tileSize);

        if (tileX >= 0 && tileX < map.cols && tileY >= 0 && tileY < map.rows){
            map.tiles[tileY][tileX] = 'M';
        }
    }//end of mousePressed function
} //end of player class