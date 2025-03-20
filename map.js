

class Map{

    constructor(cols, rows){
        this.cols = cols;
        this.rows = rows;
        this.tiles = [];
    }
    generation(){  // randomly assigns each tile on the canvas and assigns a letter
        for (let y = 0; y < this.rows; y++) {
            let row = []
            for (let x = 0; x < this.cols; x++) {
                let rand = random(1);
                if (rand < 0.1) {
                    row.push('M');
                } else if (rand < 0.3){
                    row.push('S');
                } else if (rand < 0.4){
                    row.push('D');
                } else{
                    row.push('G')
                }
                
            } //end of inner for loop
            this.tiles.push(row); // adds each row of tiles to the array
        }//end of for loop
    }//end of generation function


    draw(){
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let tile = this.tiles[y][x];
                if (tile === 'M'){
                    fill(112,84,62)
                } else if(tile === 'S'){
                    fill(179, 129, 67)
                } else if(tile === 'D'){
                    fill(133, 105, 55)
                } else{
                    fill(56, 128, 4)
                }
                rect(x * tileSize, y * tileSize, tileSize, tileSize); //draws each tile on the canvas
                
            }//end of inner for loop
            
        }//end of outer for loop
    } //end of draw function    
}//end of map class