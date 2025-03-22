class MarketItem{
    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
        this.supply = 0
        this.demand = 0;
    } // end of constructor

    updateMarket(supply, demand){ // updates the supply and demand of the item
        this.supply = supply;
        this.demand = demand;
        this.calculatePrice();
    } // end of updateMarket function

    calculatePrice(){ // calculates the price of the item based on the supply and demand
        let flux = this.supply - this.demand;
        

        if (flux > 0){ 
            this.multiplier = 1 - (flux / 100); 
        } else if (flux < 0){
            this.multiplier = 1 + Math.abs((flux / 100));
        } else {
            this.multiplier = 1;
        }

        this.currentPrice = this.baseValue * this.multiplier;
        console.log(this.name + " Price:", this.currentPrice);
    } // end of calculatePrice function
} // end of MarketItem class