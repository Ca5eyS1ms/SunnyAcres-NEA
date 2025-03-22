let perlin;


class Map{

    constructor(cols, rows){
        this.cols = cols;
        this.rows = rows;
        this.tiles = [];
        this.perlin = perlin;
        
    }
    generation(){  // randomly assigns each tile on the canvas and assigns a letter

        this.tiles = []; 

        for (let y = 0; y < this.rows; y++) {
            let row = []
            for (let x = 0; x < this.cols; x++) {
                let noiseV = this.perlin.noise(x * 0.08, y * 0.08);   // uses the noise function from perlinNoise.js to generate the noise value
                noiseV = noiseV * noiseV

                let type = ''; 
                if (noiseV < 0.01) {
                    type = 'S';                
                } else if (noiseV < 0.03){
                    type = 'D';
                } else{
                    type = 'G'
                }

                row.push({type:type, hasSeed: false, hasRock: false, hasTree: false, hasWater: false}); // adds the type of tile to the row array
                
            } //end of inner for loop
            this.tiles.push(row); // adds each row of tiles to the array
        }//end of for loop

        this.randObjectPlace(); // randomly places rocks and trees on the canvas
    }//end of generation function


    draw(){
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let tile = this.tiles[y][x];
                if (tile.type === 'M'){
                    fill(112,84,62)
                } else if(tile.type === 'S'){
                    fill(179, 129, 67)
                } else if(tile.type === 'D'){
                    fill(133, 105, 55)
                } else{
                    fill(56, 128, 4)
                }
                rect(x * tileSize, y * tileSize, tileSize, tileSize); //draws each tile on the canvas

                if (tile.hasSeed && tile.seedType){
                    let seed = tile.seedType;
                    fill(seed.color[0], seed.color[1], seed.color[2]);
                    ellipse(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, tileSize / 2, tileSize / 2); //draws the seed on the canvas
                }


                 let centerY = y * tileSize + tileSize / 2;
                let centerX = x * tileSize + tileSize / 2;
                if (tile.hasRock){
                    fill(128, 128, 128);
                    rect(x * tileSize, y * tileSize, tileSize * 0.7, tileSize * 0.7); //draws the rock on the canvas
                } else if (tile.hasTree){
                    fill(170,255,0);
                    ellipse(centerX, centerY, tileSize * 0.7, tileSize * 0.7); //draws the tree on the canvas
                }
            }//end of inner for loop
            
        }//end of outer for loop
    
    } //end of draw function    

    plantSeed(x, y, seedType){
        let col = floor(x / tileSize);
        let row = floor(y / tileSize);

        if (this.tiles[row] && this.tiles[row][col] ){
            let tile = this.tiles[row][col];

            if (tile.type === 'M' && !tile.hasSeed){
                tile.hasSeed = true; //plants the seed on the tile    
                tile.seedType = seedType;          
                console.log("seed planted",seedType.name, col, row);
            }
        }
    }//end of plantSeed function

    waterPlant(x, y){
        let col = floor(x / tileSize);
        let row = floor(y / tileSize);

        if (this.tiles[row] && this.tiles[row][col] ){
            let tile = this.tiles[row][col];

            if (tile.hasSeed === true){
                tile.hasWater = true;               
                console.log("seed watered", col, row);
                }
            }
    }//end of waterPlant function


    randObjectPlace(){
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x ++){
                let tile = this.tiles[y][x];
                
                if (tile.type === 'G' && Math.random() < 0.2){
                    tile.hasRock = true;
                }
                if (tile.type === 'G' && Math.random() < 0.3){
                    tile.hasTree = true;
                }
            }
        }
    } //end of randObjectPlace function
}//end of map class




