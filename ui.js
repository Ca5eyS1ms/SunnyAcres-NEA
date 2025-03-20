// this class will handle the ui of the game

class Ui{

    constructor(){
        this.gold = 0;
    }//end of constructor

    addGold(){
        this.gold += amount; // method to add gold to the player
    }//end of addGold function

    draw(){
        push()
        fill(255,215, 0);
        textSize(20);
        textAlign(RIGHT, TOP);
        text("Gold:" + this.gold, width -10, 10);
    }//end of draw function


}// end of ui class