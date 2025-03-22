// this class will handle the ui of the game

class Ui{

    constructor(x, y, slotSize, slotCount){
        this.x = x;
        this.y = y; 
        this.slotSize = slotSize;   
        this.slotCount = slotCount;
        this.selectedSlot = 0;
        this.items = ["hoe", "seeds", "watering can", "harvester"];
        this.seedTypes = [
            new Seed("carrot", 5, 10, [255, 165, 0]),
            new Seed("corn", 10, 20, [255, 215, 0]),
            new Seed("potato", 15, 30, [139, 69, 19]),
            new Seed("tomato", 20, 40, [255, 0, 0])
        ]
        this.currentSeed = 0;
        this.gold = 0;
    }//end of constructor

    addGold(){
        this.gold += amount; // method to add gold to the player
    }//end of addGold function

    draw(){

        // draws the gold on the canvas
        push()
        fill(255,215, 0);
        textSize(20);
        textAlign(RIGHT, TOP);
        text("Gold:" + this.gold, width -10, 10);

        // draws the hotbar on the canvas
        for (let i = 0; i < this.slotCount; i++){
            let x = this.x + i * this.slotSize;

            //highlights the slot
            if (i === this.selectedSlot){
                fill(200, 200, 0);
            } else {
                fill(100);
            }

            rect(x, this.y, this.slotSize, this.slotSize);


            push()
            fill(255);
            textSize(12);
            textAlign(CENTER, CENTER);
            text(this.items[i], x + this.slotSize / 2, this.y + this.slotSize / 2);
            pop()

        }
    }//end of draw function

    selectSlot(index){ 
        if (index >= 0 && index < this.slotCount){
            this.selectedSlot = index; 
        }
    } // end of selectSlot function

    selectSeed(){
        if (this.items[this.selectedSlot] === "seeds"){
            this.currentSeed = (this.currentSeed + 1) % this.seedTypes.length;
            console.log("current seed:", this.seedTypes[this.currentSeed].name); // testing if it works 
        }
    }

    handleKeyPressed(key){

        // cycles through the hotbar with num keys 1 to length of array 
        if (key >= '1' && key <= String(this.slotCount)){
            this.selectSlot(int(key) - 1);
        } 

        // cycles through the seed types with the 'q' key
        if (key === 'q'){
            this.selectSeed();
        }
    }//end of handleKeyPressed function


}// end of ui class